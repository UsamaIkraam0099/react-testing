import { render, screen } from "@testing-library/react";
import { Greet } from "../../components";

test("greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("greet renders with a name", () => {
  render(<Greet name="Usama" />);
  const textElement = screen.getByText(/hello usama/i);
  expect(textElement).toBeInTheDocument();
});
