import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import PersonalInfo from "../../pages/home/PersonalInfo";
import Theme from "../../styles/theme";

describe("Personal Info", () => {
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
        <PersonalInfo
          handleChange={mockHandleChange}
          handleDeleteCategory={mockHandleDeleteCategory}
          cvData={mockCvData}
          id={mockId}
        />
      </Theme>
    );

    const personalInfoName = screen.getByLabelText("First Name");
    expect(personalInfoName).toBeInTheDocument();

    const personalInfoLastName = screen.getByLabelText("Last Name");
    expect(personalInfoLastName).toBeInTheDocument();

    const personalInfoAddress = screen.getByLabelText("Address");
    expect(personalInfoAddress).toBeInTheDocument();

    const personalInfoPhoneNumber = screen.getByLabelText("Number");
    expect(personalInfoPhoneNumber).toBeInTheDocument();

    const personalInfoEmail = screen.getByLabelText("Email");
    expect(personalInfoEmail).toBeInTheDocument();

    const personalInfoDescription = screen.getByLabelText("Description");
    expect(personalInfoDescription).toBeInTheDocument();
  });
});
