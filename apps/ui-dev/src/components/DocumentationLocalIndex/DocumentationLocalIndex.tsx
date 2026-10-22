import type { JSX } from "react";
import { resolveDocumentationRoute } from "../../docs/navigation";
import type { DocumentationRoute } from "../../docs/catalog";
import { DocumentationTableOfContents } from "../DocumentationPrimitives/DocumentationPrimitives";
import styles from "./DocumentationLocalIndex.module.css";

interface DocumentationLocalIndexProps {
  currentRoute: DocumentationRoute;
}

export const DocumentationLocalIndex = ({
  currentRoute,
}: DocumentationLocalIndexProps): JSX.Element | null => {
  const page = resolveDocumentationRoute(currentRoute);
  const items = page?.kind === "page" ? page.tableOfContents : undefined;

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <aside className={styles.localIndex}>
      <DocumentationTableOfContents items={items} />
    </aside>
  );
};
