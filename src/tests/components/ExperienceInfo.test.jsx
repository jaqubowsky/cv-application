import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import Theme from "../../styles/theme";
import ExperienceInfo from "../../pages/home/ExperienceInfo";

describe("Experience Info", () => {
  const mockHandleChange = vi.fn();
  const mockHandleDeleteCategory = vi.fn();
  const mockCvData = {
    position: "Dev",
    company: "Acme Inc",
    city: "New York ",
    employedFrom: "2018",
    employedTo: "2021",
  };
  const mockId = "1";

  test("renders correctly", () => {
    render(
      <Theme>
        <ExperienceInfo
          cvData={mockCvData}
          handleChange={mockHandleChange}
          handleDeleteCategory={mockHandleDeleteCategory}
          id={mockId}
        />
      </Theme>
    );

    const experienceInfoPosition = screen.getByLabelText("Position");
    expect(experienceInfoPosition).toBeInTheDocument();

    const experienceInfoCompany = screen.getByLabelText("Company");
    expect(experienceInfoCompany).toBeInTheDocument();

    const experienceInfoCity = screen.getByLabelText("City");
    expect(experienceInfoCity).toBeInTheDocument();

    const experienceInfoEmployedFrom = screen.getByLabelText("From");
    expect(experienceInfoEmployedFrom).toBeInTheDocument();

    const experienceInfoEmployedTo = screen.getByLabelText("To");
    expect(experienceInfoEmployedTo).toBeInTheDocument();

    const experienceInfoAddButton = screen.getByRole("button", {
      name: /delete/i,
    });
    expect(experienceInfoAddButton).toBeInTheDocument();
  });
});
