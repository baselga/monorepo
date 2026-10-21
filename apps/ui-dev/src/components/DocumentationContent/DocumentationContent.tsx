import type { JSX } from "react";
import { resolveDocumentationRoute } from "../../docs/navigation";
import type { DocumentationRoute } from "../../docs/catalog";
import styles from "./DocumentationContent.module.css";

interface DocumentationContentProps {
  currentRoute: DocumentationRoute;
}

export const DocumentationContent = ({
  currentRoute,
}: DocumentationContentProps): JSX.Element => {
  const currentPage = resolveDocumentationRoute(currentRoute);

  if (!currentPage) {
    throw new Error(`No documentation page is registered for ${currentRoute}.`);
  }

  const isIntroduction = currentPage.route === "/";

  return (
    <main id="main-content" className={styles.mainContent}>
      <article className={styles.article}>
        <p className={styles.eyebrow}>Sistema de diseño</p>
        <h1>
          {isIntroduction ? "Documentación de Monorepo UI" : currentPage.title}
        </h1>
        <p className={styles.introduction}>
          {isIntroduction
            ? "Referencia práctica para construir interfaces coherentes, accesibles y mantenibles con la biblioteca de componentes."
            : currentPage.kind === "page"
              ? "Resumen de la documentación del componente seleccionado."
              : `Información sobre ${currentPage.title.toLocaleLowerCase()} de Monorepo UI.`}
        </p>

        <section
          className={styles.contentPlaceholder}
          aria-labelledby="content-mount-title"
        >
          <h2 id="content-mount-title">{currentPage.title}</h2>
          <p>
            Esta ruta está preparada para mostrar el contenido, los ejemplos y
            los playgrounds correspondientes.
          </p>
        </section>
      </article>
    </main>
  );
};
