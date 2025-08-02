import React from "react";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUserDetails } from "@/hooks/useUserDetails";
import { userStorage } from "@/utils/userStorage";
import { mockUser } from "@/constants";

// Mock the userStorage utility
jest.mock("@/utils/userStorage", () => ({
  userStorage: {
    getUserById: jest.fn(),
    saveUser: jest.fn(),
  },
}));


global.fetch = jest.fn();

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return React.createElement(
      QueryClientProvider,
      { client: queryClient },
      children
    );
  };

  return Wrapper;
};

describe("useUserDetails", () => {
  beforeAll(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return user data from cache if available", async () => {
    (userStorage.getUserById as jest.Mock).mockReturnValue(mockUser);

    const wrapper = createWrapper();
    const { result } = renderHook(() => useUserDetails(mockUser.id), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(userStorage.getUserById).toHaveBeenCalledWith(mockUser.id);
    expect(result.current.data).toEqual(mockUser);
  });

  it("should fetch user data from API if not in cache", async () => {
    (userStorage.getUserById as jest.Mock).mockReturnValue(null);
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockUser,
    });

    const wrapper = createWrapper();
    const { result } = renderHook(() => useUserDetails(mockUser.id), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(userStorage.getUserById).toHaveBeenCalledWith(mockUser.id);
    expect(fetch).toHaveBeenCalledWith("/mock/users.json");
    expect(userStorage.saveUser).toHaveBeenCalledWith(mockUser);
    expect(result.current.data).toEqual(mockUser);
  });

  it("should return null if user is not in cache and API fetch fails", async () => {
    (userStorage.getUserById as jest.Mock).mockReturnValue(null);
    (fetch as jest.Mock).mockRejectedValue(new Error("API error"));

    const wrapper = createWrapper();
    const { result } = renderHook(() => useUserDetails("non-existent-id"), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeNull();
    expect(userStorage.saveUser).not.toHaveBeenCalled();
  });
});
