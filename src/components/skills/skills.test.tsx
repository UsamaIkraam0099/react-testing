import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemElement = screen.getAllByRole("list-item");
    expect(listItemElement).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("start learning button is not rendered", () => {
    render(<Skills skills={skills} />);

    const startLearningBtn = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningBtn).not.toBeInTheDocument();
  });

  test("start learning button eventually displayed", async () => {
    render(<Skills skills={skills} />);

    const startLearningBtn = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      { timeout: 3000 } // default timeout 1000ms
    );

    expect(startLearningBtn).toBeInTheDocument();
  });
});
