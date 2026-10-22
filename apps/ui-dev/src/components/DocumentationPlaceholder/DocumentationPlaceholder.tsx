import type { JSX } from "react";
import styles from "./DocumentationPlaceholder.module.css";

export const DocumentationPlaceholder = (): JSX.Element => (
  <section className={styles.placeholder} aria-labelledby="content-mount-title">
    <h2 id="content-mount-title">Contenido en preparación</h2>
    <p>
      Esta ruta está preparada para mostrar el contenido, los ejemplos y los
      playgrounds correspondientes.
    </p>
  </section>
);
