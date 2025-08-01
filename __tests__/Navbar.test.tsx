import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Navbar from "@/components/layout/Navbar";

// Mock Next.js image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} alt={props.alt || "image"} />;
  },
}));

// Mock SVG Components
jest.mock("@/assets/svgs", () => ({
  ArrowDownIcon: () => <svg data-testid="arrow-down-icon" />,
  Logo: () => <svg data-testid="logo-icon" />,
  NotificationIcon: () => <svg data-testid="notification-icon" />,
  SearchIcon: () => <svg data-testid="search-icon" />,
}));

// Mock profile image
jest.mock("@/public/images/profilepic.png", () => "mock-profile-pic");

describe("Navbar", () => {
  test("renders logo, search, docs link, notification and user section", () => {
    render(<Navbar />);

    // Logo and icons
    expect(screen.getByTestId("logo-icon")).toBeInTheDocument();
    expect(screen.getByTestId("notification-icon")).toBeInTheDocument();
    expect(screen.getByTestId("arrow-down-icon")).toBeInTheDocument();

    // Docs link
    expect(screen.getByText("Docs")).toBeInTheDocument();

    // User avatar and name
    const avatar = screen.getByAltText("User Avatar");
    expect(avatar).toBeInTheDocument();
    expect(screen.getByText("Adedeji")).toBeInTheDocument();

    // Optional: check search input if it's visible
    const searchInput = screen.getByRole("textbox");
    expect(searchInput).toBeInTheDocument();
  });
});
