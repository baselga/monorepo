import { Button, SelectInput, type ButtonProps } from "@monorepo/ui";
import { useCallback, useState, type ChangeEvent, type JSX } from "react";
import {
  DocumentationApiTable,
  DocumentationCodeBlock,
  DocumentationGuidance,
  DocumentationPlayground,
  DocumentationPreview,
  DocumentationTableOfContents,
  type DocumentationApiProperty,
} from "../DocumentationPrimitives/DocumentationPrimitives";
import styles from "./ButtonReferencePage.module.css";

type PlaygroundButtonProps = Required<
  Pick<
    ButtonProps,
    "colorStyle" | "variant" | "size" | "isDisabled" | "loading"
  >
> & {
  children: string;
};

const tableOfContents = [
  { id: "button-import", title: "Importación" },
  { id: "button-gallery", title: "Variantes" },
  { id: "button-states", title: "Estados" },
  { id: "button-playground", title: "Playground" },
  { id: "button-api", title: "API" },
  { id: "button-guidance", title: "Accesibilidad y uso" },
] as const;

const apiProperties: readonly DocumentationApiProperty[] = [
  {
    name: "colorStyle",
    type: '"neutral" | "primary" | "secondary"',
    defaultValue: '"primary"',
    description: "Define el énfasis cromático de la acción.",
  },
  {
    name: "variant",
    type: '"solid" | "outline" | "text"',
    defaultValue: '"solid"',
    description: "Define el tratamiento visual del botón.",
  },
  {
    name: "size",
    type: '"small" | "medium" | "large"',
    defaultValue: '"medium"',
    description: "Define el tamaño del control.",
  },
  {
    name: "loading",
    type: "boolean",
    defaultValue: "false",
    description:
      "Marca la acción como pendiente y deshabilita el botón para impedir activaciones repetidas.",
  },
  {
    name: "children",
    type: "ReactNode",
    defaultValue: '"Botón"',
    description: "Contenido visible del botón.",
  },
  {
    name: "className",
    type: "string",
    description: "Añade clases CSS al elemento raíz.",
  },
];

const defaultPlaygroundProps: PlaygroundButtonProps = {
  children: "Guardar cambios",
  colorStyle: "primary",
  variant: "solid",
  size: "medium",
  isDisabled: false,
  loading: false,
};

const importCode = 'import { Button } from "@monorepo/ui";';

const getPlaygroundCode = ({
  children,
  colorStyle,
  variant,
  size,
  isDisabled,
  loading,
}: PlaygroundButtonProps): string => {
  const props = [
    `colorStyle="${colorStyle}"`,
    `variant="${variant}"`,
    `size="${size}"`,
    isDisabled ? "isDisabled" : null,
    loading ? "loading" : null,
  ].filter((prop): prop is string => prop !== null);

  return `
<Button
  ${props.join("\n  ")}
>
  {${JSON.stringify(children)}}
</Button>`;
};

const formatActivationStatus = (count: number): string =>
  count === 0
    ? "El botón está listo para activarse."
    : `El botón se ha activado ${count} ${count === 1 ? "vez" : "veces"}.`;

interface SelectControlProps<Option extends string> {
  id: string;
  label: string;
  options: readonly Option[];
  value: Option;
  onChange: (value: Option) => void;
}

const SelectControl = <Option extends string>({
  id,
  label,
  options,
  value,
  onChange,
}: SelectControlProps<Option>): JSX.Element => (
  <div className={styles.control}>
    <span id={id}>{label}</span>
    <SelectInput
      aria-labelledby={id}
      selectedKey={value}
      onSelectionChange={(key) => onChange(key as Option)}
    >
      {options.map((option) => (
        <SelectInput.Option id={option} key={option}>
          {option}
        </SelectInput.Option>
      ))}
    </SelectInput>
  </div>
);

interface CheckboxControlProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxControl = ({
  id,
  label,
  checked,
  onChange,
}: CheckboxControlProps): JSX.Element => (
  <label className={styles.checkboxControl} htmlFor={id}>
    <input checked={checked} id={id} type="checkbox" onChange={onChange} />
    {label}
  </label>
);

export const ButtonReferencePage = (): JSX.Element => {
  const [playgroundProps, setPlaygroundProps] = useState<PlaygroundButtonProps>(
    defaultPlaygroundProps,
  );
  const [activationCount, setActivationCount] = useState(0);

  const updatePlaygroundProp = useCallback(
    <Property extends keyof PlaygroundButtonProps>(
      property: Property,
      value: PlaygroundButtonProps[Property],
    ): void => {
      setPlaygroundProps((currentProps) => ({
        ...currentProps,
        [property]: value,
      }));
      setActivationCount(0);
    },
    [],
  );

  const handleChildrenChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      updatePlaygroundProp("children", event.target.value);
    },
    [updatePlaygroundProp],
  );

  const handleColorStyleChange = useCallback(
    (value: NonNullable<ButtonProps["colorStyle"]>): void => {
      updatePlaygroundProp("colorStyle", value);
    },
    [updatePlaygroundProp],
  );

  const handleVariantChange = useCallback(
    (value: NonNullable<ButtonProps["variant"]>): void => {
      updatePlaygroundProp("variant", value);
    },
    [updatePlaygroundProp],
  );

  const handleSizeChange = useCallback(
    (value: NonNullable<ButtonProps["size"]>): void => {
      updatePlaygroundProp("size", value);
    },
    [updatePlaygroundProp],
  );

  const handleIsDisabledChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      updatePlaygroundProp("isDisabled", event.target.checked);
    },
    [updatePlaygroundProp],
  );

  const handleLoadingChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      updatePlaygroundProp("loading", event.target.checked);
    },
    [updatePlaygroundProp],
  );

  const handlePress = useCallback((): void => {
    setActivationCount((count) => count + 1);
  }, []);

  const playgroundCode = getPlaygroundCode(playgroundProps);

  return (
    <>
      <DocumentationTableOfContents items={tableOfContents} />

      <section className={styles.section} id="button-import">
        <h2>Importación</h2>
        <p>
          Importa <code>Button</code> desde la entrada pública de la biblioteca.
        </p>
        <DocumentationCodeBlock code={importCode} label="TypeScript" />
        <DocumentationPreview title="Ejemplo básico">
          <Button>Guardar cambios</Button>
        </DocumentationPreview>
      </section>

      <section className={styles.section} id="button-gallery">
        <h2>Variantes</h2>
        <p>
          Combina el estilo de color, la variante y el tamaño para expresar la
          prioridad de una acción sin cambiar su comportamiento.
        </p>
        <div className={styles.gallery}>
          <div className={styles.galleryGroup}>
            <h3>Estilo de color</h3>
            <DocumentationPreview title="colorStyle">
              <div className={styles.galleryButtons}>
                <Button colorStyle="neutral">Neutral</Button>
                <Button colorStyle="primary">Principal</Button>
                <Button colorStyle="secondary">Secundario</Button>
              </div>
            </DocumentationPreview>
          </div>
          <div className={styles.galleryGroup}>
            <h3>Variante</h3>
            <DocumentationPreview title="variant">
              <div className={styles.galleryButtons}>
                <Button variant="solid">Solid</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="text">Text</Button>
              </div>
            </DocumentationPreview>
          </div>
          <div className={styles.galleryGroup}>
            <h3>Tamaño</h3>
            <DocumentationPreview title="size">
              <div className={styles.galleryButtons}>
                <Button size="small">Pequeño</Button>
                <Button size="medium">Mediano</Button>
                <Button size="large">Grande</Button>
              </div>
            </DocumentationPreview>
          </div>
        </div>
      </section>

      <section className={styles.section} id="button-states">
        <h2>Estados</h2>
        <p>
          Usa <code>isDisabled</code> cuando la acción no esté disponible y{" "}
          <code>loading</code> mientras se procesa. Ambos estados impiden la
          activación del botón; <code>loading</code> también expone el estado
          pendiente de React Aria.
        </p>
        <DocumentationPreview title="Estados no interactivos">
          <Button isDisabled>Acción no disponible</Button>
          <Button loading>Guardando cambios</Button>
        </DocumentationPreview>
      </section>

      <section className={styles.section} id="button-playground">
        <h2>Playground</h2>
        <p>
          Modifica las props para actualizar simultáneamente el botón y el
          código que puedes copiar.
        </p>
        <DocumentationPlayground
          code={playgroundCode}
          codeLabel="TSX"
          controls={
            <div className={styles.controls}>
              <label className={styles.control} htmlFor="button-children">
                Texto
                <input
                  id="button-children"
                  value={playgroundProps.children}
                  onChange={handleChildrenChange}
                />
              </label>
              <SelectControl
                id="button-color-style"
                label="Estilo de color"
                options={["neutral", "primary", "secondary"]}
                value={playgroundProps.colorStyle}
                onChange={handleColorStyleChange}
              />
              <SelectControl
                id="button-variant"
                label="Variante"
                options={["solid", "outline", "text"]}
                value={playgroundProps.variant}
                onChange={handleVariantChange}
              />
              <SelectControl
                id="button-size"
                label="Tamaño"
                options={["small", "medium", "large"]}
                value={playgroundProps.size}
                onChange={handleSizeChange}
              />
              <CheckboxControl
                checked={playgroundProps.isDisabled}
                id="button-disabled"
                label="Deshabilitado"
                onChange={handleIsDisabledChange}
              />
              <CheckboxControl
                checked={playgroundProps.loading}
                id="button-loading"
                label="Cargando"
                onChange={handleLoadingChange}
              />
            </div>
          }
          preview={
            <>
              <Button {...playgroundProps} onPress={handlePress}>
                {playgroundProps.children}
              </Button>
              <p aria-live="polite" className={styles.activationStatus}>
                {formatActivationStatus(activationCount)}
              </p>
            </>
          }
        />
      </section>

      <section className={styles.section} id="button-api">
        <h2>API</h2>
        <p>
          Estas son las extensiones específicas de <code>Button</code>. Para las
          props heredadas, como <code>isDisabled</code>, eventos y atributos
          ARIA, consulta la API de React Aria.
        </p>
        <DocumentationApiTable properties={apiProperties} />
        <a
          className={styles.reactAriaLink}
          href="https://react-spectrum.adobe.com/react-aria/Button.html#button"
          rel="noreferrer"
          target="_blank"
        >
          Props heredadas de React Aria Button
        </a>
      </section>

      <section className={styles.section} id="button-guidance">
        <h2>Accesibilidad y uso</h2>
        <DocumentationGuidance kind="accessibility" title="Nombre accesible">
          <p>
            Usa texto visible que describa la acción. Si el contenido no aporta
            un nombre suficiente, proporciona <code>aria-label</code>.
          </p>
        </DocumentationGuidance>
        <DocumentationGuidance kind="best-practice" title="Acciones en curso">
          <p>
            Activa <code>loading</code> durante una operación asíncrona para
            comunicar el estado pendiente y bloquear nuevas activaciones. No
            simules una carga sin pasar esta prop al botón real.
          </p>
        </DocumentationGuidance>
      </section>
    </>
  );
};
