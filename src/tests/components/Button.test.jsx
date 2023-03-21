import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import Theme from "../../styles/theme";
import Button from "../../components/Button";

describe("Button", () => {
  test("renders correctly", () => {
    render(
      <Theme>
        <Button
          type="button"
          color="red"
          handleClick={() => {}}
          text="Button"
        />
      </Theme>
    );

    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeInTheDocument();
  });

  test("should call onClick when clicked", async () => {
    user.setup();
    const mockHandleChange = vi.fn();

    render(
      <Theme>
        <Button handleClick={mockHandleChange} text="Button" />
      </Theme>
    );
    const button = screen.getByRole("button");
    await user.click(button);

    expect(mockHandleChange).toHaveBeenCalled();
  });
});
