import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserDetailsHeader from "@/app/(dashboard)/(user)/[id]/_components/UserDetailsHeader";
import { useRouter } from "next/navigation";

// Mock router and useRouter hook
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/components/buttons/Buttons", () => ({
  Button: ({ children, className, ...props }: any) => (
    <button className={className} {...props}>
      {children}
    </button>
  ),
}));

jest.mock("@/assets/svgs", () => ({
  BackIcon: ({ width, height }: { width: number; height: number }) => (
    <svg data-testid="back-icon" width={width} height={height} />
  ),
}));

// Mock styles
jest.mock("@/styles/userdetails.module.scss", () => ({
  userdetailsHeader: "userdetailsHeader",
  backButton: "backButton",
  userdetailsHeaderBottom: "userdetailsHeaderBottom",
  userdetailsHeaderBottomButtons: "userdetailsHeaderBottomButtons",
  blacklistButton: "blacklistButton",
  activateButton: "activateButton",
}));

describe("UserDetailsHeader", () => {
  const mockPush = jest.fn();
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    render(<UserDetailsHeader />);
  });

  it("renders the header with expected fields", () => {
    expect(screen.getByText(/User Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Back to Users/i)).toBeInTheDocument();
    expect(screen.getByText(/Blacklist User/i)).toBeInTheDocument();
    
    expect(screen.getByText(/Activate User/i)).toBeInTheDocument();
  });

  it("renders the back button", () => {
    const backButton = screen.getByText(/Back to Users/i);
    fireEvent.click(backButton);

    // You can assert effects here when back button has a handler (like mocked function).
    // Example:
    // expect(onBack).toHaveBeenCalled();
  });
});
