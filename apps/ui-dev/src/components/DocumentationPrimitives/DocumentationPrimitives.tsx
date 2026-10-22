import { Button } from "@monorepo/ui";
import { useCallback, useId, useState, type JSX, type ReactNode } from "react";
import styles from "./DocumentationPrimitives.module.css";

export interface DocumentationTableOfContentsItem {
  id: string;
  title: string;
}

export interface DocumentationApiProperty {
  name: string;
  type: string;
  description: string;
  defaultValue?: string;
}

export type DocumentationGuidanceKind =
  "accessibility" | "best-practice" | "limitation";

interface DocumentationPageHeaderProps {
  eyebrow: string;
  title: string;
  summary: string;
}

interface DocumentationTableOfContentsProps {
  items: readonly DocumentationTableOfContentsItem[];
  title?: string;
}

interface DocumentationPreviewProps {
  title: string;
  children: ReactNode;
}

interface DocumentationCodeBlockProps {
  code: string;
  label: string;
}

interface DocumentationApiTableProps {
  properties: readonly DocumentationApiProperty[];
}

interface DocumentationGuidanceProps {
  kind: DocumentationGuidanceKind;
  title: string;
  children: ReactNode;
}

interface DocumentationPlaygroundProps {
  controls: ReactNode;
  preview: ReactNode;
  code: string;
  codeLabel: string;
}

type CopyResult = "idle" | "success" | "error";

const copyMessages: Record<Exclude<CopyResult, "idle">, string> = {
  success: "Código copiado al portapapeles.",
  error: "No se pudo copiar el código. Selecciónalo y cópialo manualmente.",
};

export const DocumentationPageHeader = ({
  eyebrow,
  title,
  summary,
}: DocumentationPageHeaderProps): JSX.Element => (
  <header className={styles.pageHeader}>
    <p className={styles.eyebrow}>{eyebrow}</p>
    <h1>{title}</h1>
    <p className={styles.introduction}>{summary}</p>
  </header>
);

export const DocumentationTableOfContents = ({
  items,
  title = "En esta página",
}: DocumentationTableOfContentsProps): JSX.Element => (
  <nav aria-label={title}>
    <h2 className={styles.tableOfContentsTitle}>{title}</h2>
    <ol className={styles.tableOfContentsList}>
      {items.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`}>{item.title}</a>
        </li>
      ))}
    </ol>
  </nav>
);

export const DocumentationPreview = ({
  title,
  children,
}: DocumentationPreviewProps): JSX.Element => (
  <section className={styles.preview} aria-labelledby={`${title}-preview`}>
    <h2 id={`${title}-preview`} className={styles.previewTitle}>
      {title}
    </h2>
    <div className={styles.previewContent}>{children}</div>
  </section>
);

export const DocumentationCodeBlock = ({
  code,
  label,
}: DocumentationCodeBlockProps): JSX.Element => {
  const [copyResult, setCopyResult] = useState<CopyResult>("idle");
  const statusId = useId();

  const handleCopy = useCallback(async (): Promise<void> => {
    if (
      typeof navigator === "undefined" ||
      !("clipboard" in navigator) ||
      !navigator.clipboard
    ) {
      setCopyResult("error");
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      setCopyResult("success");
    } catch {
      setCopyResult("error");
    }
  }, [code]);

  const copyLabel =
    copyResult === "success" ? "Código copiado" : `Copiar ${label}`;

  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeBlockToolbar}>
        <span className={styles.codeBlockLabel}>{label}</span>
        <Button
          aria-describedby={statusId}
          colorStyle="neutral"
          onPress={handleCopy}
          size="small"
          variant="outline"
        >
          {copyLabel}
        </Button>
      </div>
      <pre className={styles.code}>
        <code>{code}</code>
      </pre>
      <p
        aria-atomic="true"
        aria-live="polite"
        className={styles.copyStatus}
        id={statusId}
        role="status"
      >
        {copyResult === "idle" ? null : copyMessages[copyResult]}
      </p>
    </div>
  );
};

export const DocumentationApiTable = ({
  properties,
}: DocumentationApiTableProps): JSX.Element => (
  <div className={styles.apiTableWrapper}>
    <table className={styles.apiTable}>
      <thead>
        <tr>
          <th scope="col">Prop</th>
          <th scope="col">Tipo</th>
          <th scope="col">Predeterminado</th>
          <th scope="col">Descripción</th>
        </tr>
      </thead>
      <tbody>
        {properties.map((property) => (
          <tr key={property.name}>
            <th scope="row">
              <code>{property.name}</code>
            </th>
            <td>
              <code>{property.type}</code>
            </td>
            <td>
              {property.defaultValue ? (
                <code>{property.defaultValue}</code>
              ) : (
                "—"
              )}
            </td>
            <td>{property.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const DocumentationGuidance = ({
  kind,
  title,
  children,
}: DocumentationGuidanceProps): JSX.Element => (
  <aside className={styles.guidance} data-kind={kind}>
    <h2>{title}</h2>
    <div>{children}</div>
  </aside>
);

export const DocumentationPlayground = ({
  controls,
  preview,
  code,
  codeLabel,
}: DocumentationPlaygroundProps): JSX.Element => (
  <section className={styles.playground} aria-label="Playground interactivo">
    <div className={styles.playgroundControls}>{controls}</div>
    <div className={styles.playgroundExample}>
      <DocumentationPreview title="Vista previa">
        {preview}
      </DocumentationPreview>
      <DocumentationCodeBlock code={code} label={codeLabel} />
    </div>
  </section>
);
