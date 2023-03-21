import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import Theme from "../../styles/theme";
import Input from "../../components/Input";

describe("Input", () => {
  test("renders correctly", () => {
    render(
      <Theme>
        <label htmlFor="sampleInput">
          sampleInput
          <Input
            type="text"
            name="sampleInput"
            id="sampleInput"
            placeholder="sampleInput"
            value="sampleInput"
          />
        </label>
      </Theme>
    );

    const input = screen.getByRole("textbox", { name: "sampleInput" });
    expect(input).toBeInTheDocument();
  });

  test("should call onChange when input changes", async () => {
    user.setup();
    const mockFunction = vi.fn();

    render(
      <Theme>
        <label htmlFor="sampleInput">
          sampleInput
          <Input
            type="text"
            name="sampleInput"
            id="sampleInput"
            placeholder="sampleInput"
            value=""
            handleChange={mockFunction}
          />
        </label>
      </Theme>
    );

    const input = screen.getByRole("textbox", { name: "sampleInput" });
    await user.type(input, "sampleInput");
    expect(mockFunction).toHaveBeenCalled();
  });
});
