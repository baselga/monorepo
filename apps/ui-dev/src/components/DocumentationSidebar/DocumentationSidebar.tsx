import type { JSX } from "react";
import styles from "./DocumentationSidebar.module.css";

export const DocumentationSidebar = (): JSX.Element => {
  return (
    <aside className={styles.sidebar}>
      <nav aria-labelledby="documentation-navigation-title">
        <h2 id="documentation-navigation-title" className={styles.title}>
          Documentación
        </h2>
        <p className={styles.placeholder}>
          La navegación del catálogo se mostrará en esta sección.
        </p>
      </nav>
    </aside>
  );
};
