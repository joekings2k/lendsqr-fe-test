
import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";

jest.mock("@/assets/svgs", () => ({
  Breifcase: () => <svg data-testid="breifcase-icon" />,
  DropdownIcon: () => <svg data-testid="dropdown-icon" />,
  HomeIcon: () => <svg data-testid="home-icon" />,
}));

jest.mock("@/constants", () => ({
  sidebarItems: [
    {
      groupLabel: "Group 1",
      items: [
        { label: "Users", href: "/users", icon: () => <svg data-testid="users-icon" /> },
        { label: "Settings", href: "/settings", icon: () => <svg data-testid="settings-icon" /> },
      ],
    },
  ],
  }));


jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Sidebar", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/users");
  });

  it("renders Switch Organization button", () => {
    render(<Sidebar />);
    expect(screen.getByText("Switch Organization")).toBeInTheDocument();
    expect(screen.getByTestId("breifcase-icon")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown-icon")).toBeInTheDocument();
  });

  it("renders Dashboard link and highlights it when active", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    render(<Sidebar />);
    const dashboardLink = screen.getByText("Dashboard");
    expect(dashboardLink).toBeInTheDocument();
    expect(dashboardLink.closest("a")).toHaveClass("active"); // Make sure your classNames are correctly scoped in the style file
  });

  it("renders sidebar groups and items", () => {
    render(<Sidebar />);
    expect(screen.getByText("Group 1")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("applies active class to the current pathname item", () => {
    render(<Sidebar />);
    const usersLink = screen.getByText("Users").closest("a");
    expect(usersLink).toHaveClass("active");
    const settingsLink = screen.getByText("Settings").closest("a");
    expect(settingsLink).not.toHaveClass("active");
  });
});