import type { JSX } from "react";
import styles from "./DocumentationContent.module.css";

export const DocumentationContent = (): JSX.Element => {
  return (
    <main id="main-content" className={styles.mainContent}>
      <article className={styles.article}>
        <p className={styles.eyebrow}>Sistema de diseño</p>
        <h1>Documentación de Monorepo UI</h1>
        <p className={styles.introduction}>
          Referencia práctica para construir interfaces coherentes, accesibles y
          mantenibles con la biblioteca de componentes.
        </p>

        <section
          className={styles.contentPlaceholder}
          aria-labelledby="content-mount-title"
        >
          <h2 id="content-mount-title">Contenido de la documentación</h2>
          <p>
            Las páginas, ejemplos y playgrounds se montarán aquí al seleccionar
            una entrada del catálogo.
          </p>
        </section>
      </article>
    </main>
  );
};
