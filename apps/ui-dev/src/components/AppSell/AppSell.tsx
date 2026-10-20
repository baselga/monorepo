import type { JSX } from "react";
import styles from "./AppSell.module.css";
import { DocumentationHeader } from "../DocumentationHeader/DocumentationHeader";
import { DocumentationSidebar } from "../DocumentationSidebar/DocumentationSidebar";
import { DocumentationContent } from "../DocumentationContent/DocumentationContent";
import { DocumentationLocalIndex } from "../DocumentationLocalIndex/DocumentationLocalIndex";

export const AppSell = (): JSX.Element => {
  return (
    <div className={styles.appShell}>
      <a className={styles.skipLink} href="#main-content">
        Saltar al contenido principal
      </a>

      <DocumentationHeader />

      <div className={styles.layout}>
        <DocumentationSidebar />
        <DocumentationContent />
        <DocumentationLocalIndex />
      </div>
    </div>
  );
};
