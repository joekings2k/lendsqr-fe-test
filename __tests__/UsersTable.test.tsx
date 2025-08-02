import UsersTable from "@/app/(dashboard)/(user)/_components/UsersTable";
import { User } from "@/constants/types";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";

// Mock router
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

// Mock userStorage
jest.mock("@/utils/userStorage", () => ({
  userStorage: {
    saveUser: jest.fn(),
  },
}));

// Mock the SVG icons
jest.mock("@/assets/svgs", () => ({
  VerticalDotsIcons: ({ width, height }: { width: number; height: number }) => (
    <div data-testid="vertical-dots-icon" style={{ width, height }}>⋮</div>
  ),
  ViewIcon: ({ width, height }: { width: number; height: number }) => (
    <div data-testid="view-icon" style={{ width, height }}>👁</div>
  ),
  FilterIcon: ({ width, height }: { width: number; height: number }) => (
    <div data-testid="filter-icon" style={{ width, height }}>🔍</div>
  ),
  BlacklistIcon: ({ width, height }: { width: number; height: number }) => (
    <div data-testid="blacklist-icon" style={{ width, height }}>🚫</div>
  ),
  ActivateIcon: ({ width, height }: { width: number; height: number }) => (
    <div data-testid="activate-icon" style={{ width, height }}>✅</div>
  ),
}));

// Mock the DropdownPortal
jest.mock("@/components/portal/DropdownPortal", () => {
  return function MockDropdownPortal({ children }: { children: React.ReactNode }) {
    return <div data-testid="dropdown-portal">{children}</div>;
  };
});

const mockPush = jest.fn();

beforeEach(() => {
  (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  mockPush.mockClear();
});

const mockData: Partial<User>[] = [
  {
    id: "1",
    organization: "Test Org",
    username: "testuser",
    email: "test@example.com",
    phoneNumber: "1234567890",
    createdAt: "2024-01-01",
    status: "Active",
  },
];

describe("UsersTable", () => {
  it("renders empty table if no data", () => {
    render(<UsersTable data={[]} currentPage={1} itemsPerPage={10} />);
    expect(screen.queryByText(/testuser/i)).not.toBeInTheDocument();
  });

  it("renders provided user data", () => {
    render(<UsersTable data={mockData} currentPage={1} itemsPerPage={10} />);
    expect(screen.getByText("Test Org")).toBeInTheDocument();
    expect(screen.getByText("testuser")).toBeInTheDocument();
  });

  it("shows dropdown when icon is clicked", () => {
    render(<UsersTable data={mockData} currentPage={1} itemsPerPage={10} />);
    
    // Click the more button (with vertical dots)
    const moreButton = screen.getByTestId("vertical-dots-icon").closest("button");
    fireEvent.click(moreButton!);

    // Check if dropdown appears
    expect(screen.getByTestId("dropdown-portal")).toBeInTheDocument();
    expect(screen.getByText(/view details/i)).toBeInTheDocument();
  });

  it("navigates to user detail on view click", () => {
    render(<UsersTable data={mockData} currentPage={1} itemsPerPage={10} />);
    
    // Open dropdown
    const moreButton = screen.getByTestId("vertical-dots-icon").closest("button");
    fireEvent.click(moreButton!);
    
    // Click view details
    const viewButton = screen.getByText(/view details/i);
    fireEvent.click(viewButton);
    
    expect(mockPush).toHaveBeenCalledWith("/1");
  });
});
