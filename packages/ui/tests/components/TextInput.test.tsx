import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { TextInput } from "../../src/components/inputs/TextInput/TextInput";

describe("TextInput", () => {
  it("renders a text input with its default appearance", () => {
    render(<TextInput aria-label="Nombre" />);

    const input = screen.getByRole("textbox", { name: "Nombre" });

    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("data-size", "medium");
    expect(input).toHaveAttribute("data-variant", "solid");
  });

  it("applies its custom appearance props", () => {
    render(
      <TextInput
        aria-label="Búsqueda"
        className="custom-input"
        size="large"
        variant="underline"
      />,
    );

    const input = screen.getByRole("textbox", { name: "Búsqueda" });

    expect(input).toHaveClass("custom-input");
    expect(input).toHaveAttribute("data-size", "large");
    expect(input).toHaveAttribute("data-variant", "underline");
  });

  it("accepts text input", async () => {
    const user = userEvent.setup();
    render(<TextInput aria-label="Nombre" />);

    const input = screen.getByRole("textbox", { name: "Nombre" });

    await user.type(input, "Ada Lovelace");

    expect(input).toHaveValue("Ada Lovelace");
  });

  it("is unavailable when disabled", async () => {
    const user = userEvent.setup();
    render(<TextInput aria-label="Nombre" disabled />);

    const input = screen.getByRole("textbox", { name: "Nombre" });

    expect(input).toBeDisabled();
    await user.click(input);
    await user.type(input, "Ada Lovelace");
    expect(input).toHaveValue("");
  });
});
