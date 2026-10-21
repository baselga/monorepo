import { Button, TextInput } from "@monorepo/ui";
import type { JSX, MouseEvent } from "react";
import type { DocumentationRoute } from "../../docs/catalog";
import styles from "./DocumentationHeader.module.css";

interface DocumentationHeaderProps {
  isNavigationOpen: boolean;
  onNavigate: (
    event: MouseEvent<HTMLAnchorElement>,
    route: DocumentationRoute,
  ) => void;
  onToggleNavigation: () => void;
}

export const DocumentationHeader = ({
  isNavigationOpen,
  onNavigate,
  onToggleNavigation,
}: DocumentationHeaderProps): JSX.Element => {
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
            id="documentation-search"
            placeholder="Buscar documentación"
          />
          <Button type="button">Buscar</Button>
        </div>
        <Button type="button">Tema</Button>
      </div>
    </header>
  );
};
