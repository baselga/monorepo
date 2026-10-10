import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "../../src/components/Button/Button";

describe("Button", () => {
  it("renders with its default label and appearance", () => {
    render(<Button />);

    const button = screen.getByRole("button", { name: "Botón" });

    expect(button).toHaveAttribute("data-color-style", "primary");
    expect(button).toHaveAttribute("data-variant", "solid");
    expect(button).toHaveAttribute("data-size", "medium");
  });

  it("renders custom content and appearance props", () => {
    render(
      <Button
        aria-label="Guardar"
        className="custom-button"
        colorStyle="neutral"
        size="large"
        variant="outline"
      >
        Guardar
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Guardar" });

    expect(button).toHaveClass("custom-button");
    expect(button).toHaveAttribute("data-color-style", "neutral");
    expect(button).toHaveAttribute("data-variant", "outline");
    expect(button).toHaveAttribute("data-size", "large");
  });

  it("activates on click", async () => {
    const user = userEvent.setup();
    const onPress = vi.fn();
    render(<Button onPress={onPress}>Enviar</Button>);

    const button = screen.getByRole("button", { name: "Enviar" });

    await user.click(button);

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("activates on keyboard interactions", async () => {
    const user = userEvent.setup();
    const onPress = vi.fn();
    render(<Button onPress={onPress}>Enviar</Button>);

    const button = screen.getByRole("button", { name: "Enviar" });

    await user.tab();
    expect(button).toHaveFocus();

    await user.keyboard("{Enter}");
    await user.keyboard(" ");

    expect(onPress).toHaveBeenCalledTimes(2);
  });

  it("does not activate when disabled", async () => {
    const user = userEvent.setup();
    const onPress = vi.fn();
    render(
      <Button isDisabled onPress={onPress}>
        Deshabilitado
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Deshabilitado" });

    expect(button).toBeDisabled();
    await user.click(button);
    expect(onPress).not.toHaveBeenCalled();
  });

  it("exposes its loading state and prevents activation", async () => {
    const user = userEvent.setup();
    const onPress = vi.fn();
    render(
      <Button loading onPress={onPress}>
        Guardando
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Guardando" });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("data-pending");
    await user.click(button);
    expect(onPress).not.toHaveBeenCalled();
  });
});
