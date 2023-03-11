import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import PersonalInfo from "../../pages/home/PersonalInfo";

describe("Personal Info", () => {
  test("renders correctly", () => {
    render(<PersonalInfo />);

    const personalInfoTitle = screen.getByRole("heading", {
      level: 2,
    });
    expect(personalInfoTitle).toBeInTheDocument();

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
