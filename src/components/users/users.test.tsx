import { act, findByText, render, screen } from "@testing-library/react";
import { Users } from "./users";
import { server } from "../../mocks/server";
import { http, HttpResponse } from "msw";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);

    const headingElement = screen.getByRole("user-heading");
    expect(headingElement).toBeInTheDocument();
  });

  test.skip("renders a list of users", () => {
    render(<Users />);
    act(async () => {
      const users = await screen.findAllByRole("user-item");
      expect(users).toHaveLength(3);
    });
  });

  test("renders error", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return HttpResponse.error();
      })
    );

    render(<Users />);

    const errorElement = await screen.findByText("Error fetching users");
    expect(errorElement).toBeInTheDocument();
  });
});
