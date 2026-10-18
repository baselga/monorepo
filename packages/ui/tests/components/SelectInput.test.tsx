import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SelectInput } from "../../src/components/inputs/SelectInput/SelectInput";

const options = (
  <>
    <SelectInput.Option id="es">Español</SelectInput.Option>
    <SelectInput.Option id="en">Inglés</SelectInput.Option>
  </>
);

const selectInputStyles = readFileSync(
  resolve(
    process.cwd(),
    "src/components/inputs/SelectInput/SelectInput.module.css",
  ),
  "utf8",
);

describe("SelectInput", () => {
  it("renders with its default appearance and accessible name", () => {
    render(<SelectInput aria-label="Idioma">{options}</SelectInput>);

    const select = screen.getByRole("button", { name: /Idioma/ });

    expect(select).toHaveAttribute("data-size", "medium");
    expect(select).toHaveAttribute("data-variant", "solid");
    expect(select).toHaveAttribute("aria-expanded", "false");
  });

  it("applies custom appearance props", () => {
    render(
      <SelectInput
        aria-label="Idioma"
        className="custom-select"
        size="large"
        variant="underline"
      >
        {options}
      </SelectInput>,
    );

    const select = screen.getByRole("button", { name: /Idioma/ });

    expect(select).toHaveAttribute("data-size", "large");
    expect(select).toHaveAttribute("data-variant", "underline");
    expect(select.parentElement).toHaveClass("custom-select");
  });

  it("selects an option with the pointer", async () => {
    const user = userEvent.setup();
    const onSelectionChange = vi.fn();
    render(
      <SelectInput aria-label="Idioma" onSelectionChange={onSelectionChange}>
        {options}
      </SelectInput>,
    );

    const select = screen.getByRole("button", { name: /Idioma/ });
    await user.click(select);
    await user.click(screen.getByRole("option", { name: "Inglés" }));

    expect(onSelectionChange).toHaveBeenCalledWith("en");
    expect(select).toHaveTextContent("Inglés");
    expect(select).toHaveFocus();
    expect(select).toHaveAttribute("aria-expanded", "false");
  });

  it("selects an option with the keyboard", async () => {
    const user = userEvent.setup();
    render(
      <SelectInput aria-label="Idioma" defaultSelectedKey="es">
        {options}
      </SelectInput>,
    );

    const select = screen.getByRole("button", { name: /Idioma/ });
    await user.tab();
    await user.keyboard("{ArrowDown}");
    await user.keyboard("{ArrowDown}");
    await user.keyboard("{Enter}");

    expect(select).toHaveTextContent("Inglés");
    expect(select).toHaveFocus();
  });

  it("uses control typography and visually distinguishes disabled options", async () => {
    const user = userEvent.setup();
    render(
      <SelectInput aria-label="Idioma">
        <SelectInput.Option id="es">Español</SelectInput.Option>
        <SelectInput.Option id="en" isDisabled>
          Inglés
        </SelectInput.Option>
      </SelectInput>,
    );

    await user.click(screen.getByRole("button", { name: /Idioma/ }));

    const disabledOption = screen.getByRole("option", { name: "Inglés" });

    expect(selectInputStyles).toMatch(
      /\.option\s*\{[^}]*font: var\(--type-label\)/s,
    );
    expect(selectInputStyles).toMatch(
      /\[data-disabled\]\s*\{[^}]*color: var\(--text-muted\)[^}]*opacity: 0\.6/s,
    );
    expect(disabledOption).toHaveAttribute("aria-disabled", "true");
    expect(disabledOption).toHaveAttribute("data-disabled");
  });

  it.each([
    ["disabled", { isDisabled: true }],
    ["loading", { loading: true }],
  ] as const)("does not open when %s", async (_state, props) => {
    const user = userEvent.setup();
    const onSelectionChange = vi.fn();
    render(
      <SelectInput
        aria-label="Idioma"
        defaultSelectedKey="es"
        onSelectionChange={onSelectionChange}
        {...props}
      >
        {options}
      </SelectInput>,
    );

    const select = screen.getByRole("button", { name: /Idioma/ });

    expect(select).toBeDisabled();
    await user.click(select);
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    expect(onSelectionChange).not.toHaveBeenCalled();
    expect(select).toHaveTextContent("Español");
  });

  it("announces its loading state without exposing the indicator", () => {
    render(
      <SelectInput aria-label="Idioma" loading>
        {options}
      </SelectInput>,
    );

    const select = screen.getByRole("button", { name: /Idioma/ });

    expect(select.closest("[aria-busy]")).toHaveAttribute("aria-busy", "true");
    expect(screen.queryByText("Cargando")).not.toBeInTheDocument();
  });
});
