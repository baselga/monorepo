import type { JSX } from "react";
import styles from "./FoundationPages.module.css";

const tokenFamilies = [
  ["Fondo", "--bg-*", "Canvas, superficies, estados y fondos de marca."],
  [
    "Texto",
    "--text-*",
    "Jerarquía de contenido y texto sobre fondos con contraste.",
  ],
  ["Borde", "--border-*", "Divisores, contornos y foco visible."],
  ["Espaciado", "--space-*", "Separación, padding, margin y gaps."],
  ["Tipografía", "--font-*", "--line-height-* y --type-* para roles de texto."],
  [
    "Forma y elevación",
    "--radius-*",
    "--shadow-* para superficies y controles.",
  ],
  [
    "Movimiento y capas",
    "--duration-*",
    "--ease-* y --z-* para transiciones y superposición.",
  ],
] as const;

const utilityFamilies = [
  ["Layout", "ds-flex, ds-grid, ds-items-*, ds-justify-*, ds-overflow-*"],
  ["Espaciado y tamaño", "ds-m-*, ds-p-*, ds-gap-*, ds-w-*, ds-h-*"],
  ["Tipografía", "ds-type-*, ds-font-*, ds-text-*, ds-leading-*"],
  ["Color semántico", "ds-bg-*, ds-text-*, ds-border-*"],
  ["Bordes y elevación", "ds-border*, ds-radius-*, ds-shadow-*"],
] as const;

const stylesImport = 'import "@monorepo/ui/styles";';

export const TokensDocumentationContent = (): JSX.Element => (
  <>
    <p className={styles.lead}>
      Las variables CSS de <code>@monorepo/ui</code> expresan roles de diseño,
      no valores visuales. Usa tokens semánticos en componentes para que el tema
      pueda adaptarse sin cambiar su implementación.
    </p>

    <section aria-labelledby="tokens-import-title">
      <h2 id="tokens-import-title">Carga de estilos</h2>
      <p>
        Importa los estilos públicos una vez en el punto de entrada de la
        aplicación. Incluyen los tokens y las utilidades publicadas.
      </p>
      <pre className={styles.codeBlock}>
        <code>{stylesImport}</code>
      </pre>
    </section>

    <section aria-labelledby="tokens-families-title">
      <h2 id="tokens-families-title">Familias disponibles</h2>
      <dl className={styles.definitionList}>
        {tokenFamilies.map(([name, tokens, description]) => (
          <div key={name}>
            <dt>{name}</dt>
            <dd>
              <code>{tokens}</code>
              <span>{description}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>

    <section aria-labelledby="tokens-colors-title">
      <h2 id="tokens-colors-title">Combinaciones de color</h2>
      <p>
        Los tokens de color semánticos cubren las combinaciones con contraste
        previsto. No consumas <code>--color-*</code> directamente en
        componentes: son paletas internas.
      </p>
      <div className={styles.colorExamples}>
        <div className={`${styles.colorExample} ds-bg-brand ds-text-on-brand`}>
          <code>--bg-brand</code> con <code>--text-on-brand</code>
        </div>
        <div
          className={`${styles.colorExample} ds-bg-brand-subtle ds-text-brand`}
        >
          <code>--bg-brand-subtle</code> con <code>--text-brand</code>
        </div>
        <div
          className={`${styles.colorExample} ds-bg-accent-subtle ds-text-accent`}
        >
          <code>--bg-accent-subtle</code> con <code>--text-accent</code>
        </div>
        <div className={`${styles.colorExample} ds-bg-inverse ds-text-inverse`}>
          <code>--bg-inverse</code> con <code>--text-inverse</code>
        </div>
      </div>
    </section>

    <section aria-labelledby="tokens-guidance-title">
      <h2 id="tokens-guidance-title">Uso recomendado</h2>
      <ul className={styles.guidanceList}>
        <li>
          Sobre fondos neutros, usa <code>--text-primary</code>,{" "}
          <code>--text-secondary</code> o <code>--text-muted</code> según la
          jerarquía.
        </li>
        <li>
          Usa <code>--type-*</code> para roles de texto y <code>--space-*</code>{" "}
          para la separación.
        </li>
        <li>
          Consulta la documentación técnica para el inventario y las
          definiciones de cada token.
        </li>
      </ul>
      <a
        href="https://github.com/baselga/monorepo/blob/master/docs/tokens.md"
        target="_blank"
        rel="noreferrer"
      >
        Documentación técnica de tokens
      </a>
    </section>
  </>
);

export const UtilitiesDocumentationContent = (): JSX.Element => (
  <>
    <p className={styles.lead}>
      Las utilidades CSS permiten componer layout y presentación básica con las
      APIs publicadas. Todas llevan el prefijo <code>ds-</code> para evitar
      colisiones con estilos de la aplicación.
    </p>

    <section aria-labelledby="utilities-import-title">
      <h2 id="utilities-import-title">Carga de estilos</h2>
      <p>
        Las utilidades se incluyen en la misma entrada de estilos pública; no
        existe una importación adicional.
      </p>
      <pre className={styles.codeBlock}>
        <code>{stylesImport}</code>
      </pre>
    </section>

    <section aria-labelledby="utilities-families-title">
      <h2 id="utilities-families-title">Familias disponibles</h2>
      <dl className={styles.definitionList}>
        {utilityFamilies.map(([name, classes]) => (
          <div key={name}>
            <dt>{name}</dt>
            <dd>
              <code>{classes}</code>
            </dd>
          </div>
        ))}
      </dl>
    </section>

    <section aria-labelledby="utilities-example-title">
      <h2 id="utilities-example-title">Ejemplo con APIs reales</h2>
      <p>
        Las utilidades se combinan para una composición simple; los componentes
        públicos siguen siendo responsables de sus estados y accesibilidad.
      </p>
      <pre className={styles.codeBlock}>
        <code>{`<section className="ds-flex ds-flex-col ds-gap-4 ds-p-6 ds-bg-surface ds-radius-lg ds-shadow-sm">
  <h2 className="ds-type-heading-sm ds-text-primary">Resumen</h2>
  <p className="ds-type-body ds-text-secondary">
    Contenido compuesto con tokens del sistema de diseño.
  </p>
</section>`}</code>
      </pre>
      <section
        className="ds-flex ds-flex-col ds-gap-4 ds-p-6 ds-bg-surface ds-radius-lg ds-shadow-sm"
        aria-label="Vista previa de utilidades CSS"
      >
        <h3 className="ds-type-heading-sm ds-text-primary">Resumen</h3>
        <p className="ds-type-body ds-text-secondary">
          Contenido compuesto con tokens del sistema de diseño.
        </p>
      </section>
    </section>

    <section aria-labelledby="utilities-restrictions-title">
      <h2 id="utilities-restrictions-title">Restricciones</h2>
      <ul className={styles.guidanceList}>
        <li>
          No hay variantes responsive, pseudoestados, valores arbitrarios ni
          modificadores de Tailwind.
        </li>
        <li>
          Las clases visuales usan tokens publicados; no añadas valores crudos
          de color, espaciado, tipografía, radio o elevación.
        </li>
        <li>
          Cuando dos clases configuran la misma propiedad, prevalece la última
          regla del stylesheet.
        </li>
      </ul>
      <a
        href="https://github.com/baselga/monorepo/blob/main/docs/utility-classes.md"
        target="_blank"
        rel="noreferrer"
      >
        Inventario y contrato de utilidades CSS
      </a>
    </section>
  </>
);
