import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
  it("cambia el tema desde el encabezado", async () => {
    const user = userEvent.setup();

    render(<App />);

    const themeToggle = screen.getByRole("button", {
      name: "Tema actual: light. Cambiar a tema dark.",
    });

    await user.click(themeToggle);

    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(themeToggle).toHaveAccessibleName(
      "Tema actual: dark. Cambiar a tema light.",
    );
    expect(window.localStorage.getItem("monorepo-ui-theme")).toBe("dark");
  });
});
