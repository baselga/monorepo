import type { TextInputProps } from "@monorepo/ui";
import { defineComponentDocumentation } from "../schema";

type TextInputPlaygroundProps = Pick<
  TextInputProps,
  "size" | "variant" | "disabled"
>;

export const textInputDocumentation =
  defineComponentDocumentation<TextInputPlaygroundProps>({
    id: "text-input",
    category: "components",
    title: "TextInput",
    summary: "Permite introducir una única línea de texto.",
    route: "/componentes/text-input",
    examples: [
      {
        title: "Campo de búsqueda",
        description:
          "Recoge un término de búsqueda mediante una etiqueta asociada.",
      },
      {
        title: "Campo con iconos",
        description:
          "Incluye iconos al inicio o al final sin sustituir su etiqueta.",
      },
    ],
    accessibilityNotes: [
      "Asocia siempre una etiqueta visible mediante htmlFor e id.",
      "No uses el placeholder como sustituto de una etiqueta.",
    ],
    playground: {
      controls: [
        {
          kind: "select",
          prop: "variant",
          label: "Variante",
          options: ["solid", "underline"],
        },
        {
          kind: "select",
          prop: "size",
          label: "Tamaño",
          options: ["small", "medium", "large"],
        },
        {
          kind: "boolean",
          prop: "disabled",
          label: "Deshabilitado",
        },
      ],
    },
  });
