import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Theme from "../../styles/theme";
import EducationInfo from "../../pages/home/EducationInfo";

describe("Education Info", () => {
  test("renders correctly", () => {
    render(
      <Theme>
        <EducationInfo />
      </Theme>
    );

    const educationInfoTitle = screen.getByRole("heading", {
      level: 2,
    });
    expect(educationInfoTitle).toBeInTheDocument();

    const educationInfoUniversityName =
      screen.getByLabelText("University Name");
    expect(educationInfoUniversityName).toBeInTheDocument();

    const educationInfoCity = screen.getByLabelText("City");
    expect(educationInfoCity).toBeInTheDocument();

    const educationInfoDegree = screen.getByLabelText("Degree");
    expect(educationInfoDegree).toBeInTheDocument();

    const educationInfoSubject = screen.getByLabelText("Subject");
    expect(educationInfoSubject).toBeInTheDocument();

    const educationInfoEducationFrom = screen.getByLabelText("From");
    expect(educationInfoEducationFrom).toBeInTheDocument();

    const educationInfoEducationTo = screen.getByLabelText("To");
    expect(educationInfoEducationTo).toBeInTheDocument();

    const educationInfoAddButton = screen.getByRole("button");
    expect(educationInfoAddButton).toBeInTheDocument();
  });
});
