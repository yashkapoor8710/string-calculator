import { render, screen, fireEvent } from "@testing-library/react";
import { StringCalculator } from "./StringCalculator";

describe("String Calculator UI", () => {
  it("calculates result from input string", () => {
    render(<StringCalculator />);

    // Get the input element and the button
    const input = screen.getByPlaceholderText("Enter numbers");
    const button = screen.getByText("Calculate");

    // Simulate user input
    fireEvent.change(input, { target: { value: "1,2,3" } });
    fireEvent.click(button);

    // Assert that the result is displayed correctly
    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });

  it("displays error message for negative numbers", () => {
    render(<StringCalculator />);

    const input = screen.getByPlaceholderText("Enter numbers");
    const button = screen.getByText("Calculate");

    fireEvent.change(input, { target: { value: "1,-2,3" } });
    fireEvent.click(button);

    expect(
      screen.getByText("Negative numbers not allowed: -2")
    ).toBeInTheDocument();
  });
});
