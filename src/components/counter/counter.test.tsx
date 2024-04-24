import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("count-element");
    expect(countElement).toBeInTheDocument();

    const incBtn = screen.getByRole("button", { name: "Increment" });
    expect(incBtn).toBeInTheDocument();
  });

  test("renders a count with initial value 0", () => {
    render(<Counter />);

    const countElement = screen.getByRole("count-element");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking increment button", async () => {
    userEvent.setup();
    render(<Counter />);

    const incBtn = screen.getByRole("button", { name: "Increment" });
    await userEvent.click(incBtn);

    const countElement = screen.getByRole("count-element");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking increment button twice", async () => {
    userEvent.setup();
    render(<Counter />);

    const incBtn = screen.getByRole("button", { name: "Increment" });
    await userEvent.dblClick(incBtn);

    const countElement = screen.getByRole("count-element");
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    userEvent.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    await userEvent.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setBtn = screen.getByRole("button", { name: "Set" });
    await userEvent.click(setBtn);

    const countElement = screen.getByRole("count-element");
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    userEvent.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    const setBtn = screen.getByRole("button", { name: "Set" });
    const incBtn = screen.getByRole("button", { name: "Increment" });

    await userEvent.tab();
    expect(incBtn).toHaveFocus();

    await userEvent.tab();
    expect(amountInput).toHaveFocus();

    await userEvent.tab();
    expect(setBtn).toHaveFocus();
  });
});
