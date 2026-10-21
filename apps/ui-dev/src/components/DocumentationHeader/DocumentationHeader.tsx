import { Button, TextInput } from "@monorepo/ui";
import { Moon, Sun } from "lucide-react";
import type { JSX, MouseEvent } from "react";
import type { DocumentationRoute } from "../../docs/catalog";
import type { Theme } from "../../theme/useTheme";
import styles from "./DocumentationHeader.module.css";

interface DocumentationHeaderProps {
  isNavigationOpen: boolean;
  onNavigate: (
    event: MouseEvent<HTMLAnchorElement>,
    route: DocumentationRoute,
  ) => void;
  onToggleNavigation: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}

export const DocumentationHeader = ({
  isNavigationOpen,
  onNavigate,
  onToggleNavigation,
  theme,
  onToggleTheme,
}: DocumentationHeaderProps): JSX.Element => {
  const nextTheme = theme === "light" ? "dark" : "light";
  const ThemeIcon = theme === "light" ? Sun : Moon;

  return (
    <header className={styles.header}>
      <a
        className={styles.brand}
        href="/"
        aria-label="Inicio de Monorepo UI"
        onClick={(event) => onNavigate(event, "/")}
      >
        Monorepo UI
      </a>

      <div className={styles.actions}>
        <Button
          type="button"
          aria-controls="documentation-navigation"
          aria-expanded={isNavigationOpen}
          onPress={onToggleNavigation}
          className={styles.navigationToggle}
        >
          Navegación
        </Button>
        <div className={styles.search} role="search">
          <label
            className={styles.visuallyHidden}
            htmlFor="documentation-search"
          >
            Buscar en la documentación
          </label>
          <TextInput
            size="small"
            id="documentation-search"
            placeholder="Buscar documentación"
          />
          <Button type="button" size="small">
            Buscar
          </Button>
        </div>
        <Button
          size="small"
          type="button"
          colorStyle="neutral"
          variant="outline"
          aria-label={`Tema actual: ${theme}. Cambiar a tema ${nextTheme}.`}
          aria-pressed={theme === "dark"}
          onPress={onToggleTheme}
        >
          <ThemeIcon aria-hidden="true" />
        </Button>
      </div>
    </header>
  );
};
