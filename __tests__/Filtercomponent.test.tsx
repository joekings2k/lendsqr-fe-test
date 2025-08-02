import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filtercomponent from "@/app/(dashboard)/(user)/_components/Filtercomponet";

// Mock the custom components
jest.mock("@/components/inputs/DatePicker", () => {
  return function MockCustomDatePicker() {
    return <input data-testid="date-picker" type="date" />;
  };
});

jest.mock("@/components/inputs/SelectFeild", () => ({
  CustomSelect: ({ label, items }: { label: string; items: string[] }) => (
    <div>
      <label htmlFor={label}>{label}</label>
      <select id={label} role="combobox">
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  ),
}));

jest.mock("@/components/inputs/TextFeild", () => {
  return function MockTextFeild({ label, placeholder }: { label: string; placeholder: string }) {
    return (
      <div>
        <label htmlFor={label}>{label}</label>
        <input id={label} placeholder={placeholder} />
      </div>
    );
  };
});

jest.mock("@/components/buttons/Buttons", () => ({
  Button: ({ children, className, ...props }: any) => (
    <button className={className} {...props}>
      {children}
    </button>
  ),
}));

// Mock CSS modules
jest.mock("@/styles/users.module.scss", () => ({
  filterDropdownContainer: "filterDropdownContainer",
  filterButtonContainer: "filterButtonContainer",
  resetButton: "resetButton",
}));

describe("Filtercomponent", () => {
  beforeEach(() => {
    render(<Filtercomponent />);
  });

  it("renders the filter container with expected fields", () => {
    expect(screen.getByText(/Filtercomponent/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/organization/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
  });

  it("renders select fields with correct options", () => {
    const selects = screen.getAllByRole("combobox");
    expect(selects.length).toBe(2); // organization & status

    fireEvent.change(selects[0], { target: { value: "Irorun" } });
    expect((selects[0] as HTMLSelectElement).value).toBe("Irorun");
  });

  it("renders reset and filter buttons", () => {
    expect(screen.getByText("Reset")).toBeInTheDocument();
    expect(screen.getByText("Filter")).toBeInTheDocument();
  });

  it("allows typing in text fields", () => {
    const usernameInput = screen.getByPlaceholderText("user") as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText("email") as HTMLInputElement;
    const phoneInput = screen.getByPlaceholderText("Phone Number") as HTMLInputElement;

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(phoneInput, { target: { value: "08012345678" } });

    expect(usernameInput.value).toBe("testuser");
    expect(emailInput.value).toBe("test@example.com");
    expect(phoneInput.value).toBe("08012345678");
  });

  it("responds to button clicks", () => {
    const resetBtn = screen.getByText("Reset");
    const filterBtn = screen.getByText("Filter");

    // These buttons don't have onClick handlers in the component yet
    // So we just test that they can be clicked without errors
    fireEvent.click(resetBtn);
    fireEvent.click(filterBtn);
    
    // Add expectations based on what the buttons should do
    expect(resetBtn).toBeInTheDocument();
    expect(filterBtn).toBeInTheDocument();
  });

  it("renders date picker", () => {
    expect(screen.getByTestId("date-picker")).toBeInTheDocument();
  });
});
