import { Button, TextInput } from "@monorepo/ui";
import type { JSX } from "react";
import styles from "./DocumentationHeader.module.css";

export const DocumentationHeader = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="/" aria-label="Inicio de Monorepo UI">
        Monorepo UI
      </a>

      <div className={styles.actions}>
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
