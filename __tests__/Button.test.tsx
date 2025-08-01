import { Button } from "@/components/buttons/Buttons";
import { render, screen, fireEvent } from "@testing-library/react";


describe("Button", () => {
  test("renders with children", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("respects disabled prop", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Don't Click
      </Button>
    );
    fireEvent.click(screen.getByText("Don't Click"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
