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

  const { Content } = currentPage;

  return (
    <main id="main-content" className={styles.mainContent}>
      <article className={styles.article}>
        <p className={styles.eyebrow}>Sistema de diseño</p>
        <h1>{currentPage.title}</h1>
        <p className={styles.introduction}>{currentPage.summary}</p>
        <Content />
      </article>
    </main>
  );
};
