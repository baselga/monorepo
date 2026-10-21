import type { SelectInputProps } from "@monorepo/ui";
import { defineComponentDocumentation } from "../schema";

type SelectInputPlaygroundProps = Pick<
  SelectInputProps<object>,
  "size" | "variant" | "isDisabled" | "loading"
>;

export const selectInputDocumentation =
  defineComponentDocumentation<SelectInputPlaygroundProps>({
    id: "select-input",
    category: "components",
    title: "SelectInput",
    summary: "Permite seleccionar una opción de una lista.",
    tags: ["campo", "formulario", "selección", "lista"],
    route: "/componentes/select-input",
    examples: [
      {
        title: "Selección de idioma",
        description:
          "Presenta una lista de opciones con una opción inicial seleccionada.",
      },
      {
        title: "Opciones no disponibles",
        description:
          "Permite marcar opciones individuales que no se pueden seleccionar.",
      },
    ],
    accessibilityNotes: [
      "Proporciona una etiqueta visible o un nombre accesible para el selector.",
      "Marca las opciones no disponibles con isDisabled en SelectInput.Option.",
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
          prop: "isDisabled",
          label: "Deshabilitado",
        },
        {
          kind: "boolean",
          prop: "loading",
          label: "Cargando",
        },
      ],
    },
  });
