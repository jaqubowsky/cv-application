import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Theme from "../../styles/theme";
import ExperienceInfo from "../../pages/home/ExperienceInfo";

describe("Experience Info", () => {
  test("renders correctly", () => {
    render(
      <Theme>
        <ExperienceInfo />
      </Theme>
    );

    const experienceInfoTitle = screen.getByRole("heading", {
      level: 2,
    });
    expect(experienceInfoTitle).toBeInTheDocument();

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

    const experienceInfoAddButton = screen.getByRole("button");
    expect(experienceInfoAddButton).toBeInTheDocument();
  });
});
