import { render, screen } from "@testing-library/react";
import { Application } from "../../components";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    // getByRole
    // const pageHeading = screen.getByRole("heading", {
    //   level: 1,
    // });
    // expect(pageHeading).toBeInTheDocument();

    // const sectionHeading = screen.getByRole("heading", {
    //   level: 2,
    // });
    // expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    // const bioElement = screen.getByRole("textbox", { name: "Bio" });
    // expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();

    // getByLabelText
    // {selector:"input"} in case two components have same label
    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    // getByPlaceholderText
    const nameElement3 = screen.getByPlaceholderText("Full Name");
    expect(nameElement3).toBeInTheDocument();

    // getByText
    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    // with function argument...
    const paragraphElement1 = screen.getByText((content: any) =>
      content.includes("fields")
    );
    expect(paragraphElement1).toBeInTheDocument();

    // getByDisplayValue
    const nameElement4 = screen.getByDisplayValue("Usama");
    expect(nameElement4).toBeInTheDocument();

    // getByAltText
    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    // getByTitle
    const titleElement = screen.getByTitle("miss");
    expect(titleElement).toBeInTheDocument();

    // getByTestId
    const customeElement = screen.getByTestId("custom-element");
    expect(customeElement).toBeInTheDocument();
  });
});
