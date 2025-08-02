import React from "react";
import { render, screen } from "@testing-library/react";
; // Adjust path as needed
import { useUserDetails } from "@/hooks/useUserDetails";
import UserDetailsOverview from "@/app/(dashboard)/(user)/[id]/_components/UserDetailsOverview";
import { User, UserProfile } from "@/constants/types";

// Mock components
jest.mock("@/app/(dashboard)/(user)/[id]/_components/UserDetailsTopBar", () => () => <div>Mocked Top Bar</div>);
jest.mock("@/app/(dashboard)/(user)/[id]/_components/UserGeneralDetails", () => () => (
  <div>Mocked General Details</div>
));

// Mock hook
jest.mock("@/hooks/useUserDetails", () => ({
  useUserDetails: jest.fn(),
}));
const partialProfile :Partial<UserProfile> ={
  firstName: "John",
  lastName: "Doe",
}
describe("UserDetailsOverview", () => {
  const mockUser:Partial<User> = {
    id: "123",
    profile: partialProfile as UserProfile,
  };

  it("renders loading state", () => {
    (useUserDetails as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });

    render(<UserDetailsOverview id="123" />);
    expect(screen.getByText(/loading user details/i)).toBeInTheDocument();
  });

  it("renders error state when user is not found", () => {
    (useUserDetails as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    render(<UserDetailsOverview id="123" />);
    expect(screen.getByText(/user not found/i)).toBeInTheDocument();
  });

  it("renders user details when data is available", () => {
    (useUserDetails as jest.Mock).mockReturnValue({
      data: mockUser,
      isLoading: false,
      isError: false,
    });

    render(<UserDetailsOverview id="123" />);
    expect(screen.getByText(/mocked top bar/i)).toBeInTheDocument();
    expect(screen.getByText(/mocked general details/i)).toBeInTheDocument();
  });
});
