import type { JSX } from "react";
import styles from "./DocumentationLocalIndex.module.css";

export const DocumentationLocalIndex = (): JSX.Element => {
  return (
    <aside className={styles.localIndex}>
      <nav aria-labelledby="local-index-title">
        <h2 id="local-index-title" className={styles.title}>
          En esta página
        </h2>
        <p className={styles.placeholder}>
          El índice local aparecerá cuando la página tenga secciones.
        </p>
      </nav>
    </aside>
  );
};
