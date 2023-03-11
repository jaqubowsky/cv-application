import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Header from "../../components/Header";
import Theme from "../../styles/theme";

describe("Header", () => {
  test("correctly renders the header", () => {
    render(
      <Theme>
        <Header />
      </Theme>
    );

    const headerElement = screen.getByRole("heading", {
      level: 1,
      name: /cv creator/i
    });

    expect(headerElement).toBeInTheDocument();
  });
});
