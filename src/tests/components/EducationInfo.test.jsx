import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import Theme from "../../styles/theme";
import EducationInfo from "../../pages/home/EducationInfo";

describe("Education Info", () => {
  const mockHandleChange = vi.fn();
  const mockHandleDeleteCategory = vi.fn();
  const mockCvData = {
    universityName: "SGGW",
    city: "New York",
    degree: "BSc",
    subject: "Computer Science",
    educationFrom: "2021",
    educationTo: "2022",
  };
  const mockId = "1";

  test("renders correctly", () => {
    render(
      <Theme>
        <EducationInfo
          cvData={mockCvData}
          handleChange={mockHandleChange}
          handleDeleteCategory={mockHandleDeleteCategory}
          id={mockId}
        />
      </Theme>
    );

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

    const educationInfoAddButton = screen.getByRole("button", {
      name: /delete/i,
    });
    expect(educationInfoAddButton).toBeInTheDocument();
  });
});
