import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterTwo } from "./counter-two";

describe("Counter Two", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);

    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    userEvent.setup();

    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    );

    const incBtn = screen.getByRole("button", { name: "Increment" });
    const decBtn = screen.getByRole("button", { name: "Decrement" });

    await userEvent.click(incBtn);
    await userEvent.click(decBtn);

    expect(handleIncrement).toHaveBeenCalledTimes(1);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
});
