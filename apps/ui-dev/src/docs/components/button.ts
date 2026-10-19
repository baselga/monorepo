import type { ButtonProps } from "@monorepo/ui";
import { defineComponentDocumentation } from "../schema";

type ButtonPlaygroundProps = Pick<
  ButtonProps,
  "colorStyle" | "variant" | "size" | "isDisabled" | "loading"
>;

export const buttonDocumentation =
  defineComponentDocumentation<ButtonPlaygroundProps>({
    id: "button",
    category: "components",
    title: "Button",
    summary: "Activa una acción desde una interfaz.",
    route: "/componentes/button",
    examples: [
      {
        title: "Acción principal",
        description: "Destaca la acción principal disponible en un contexto.",
      },
      {
        title: "Acción en progreso",
        description:
          "Muestra que la acción está procesándose y evita activarla de nuevo.",
      },
    ],
    accessibilityNotes: [
      "Usa texto visible que describa la acción o proporciona un nombre accesible.",
      "Los estados deshabilitado y de carga impiden activar el botón.",
    ],
    playground: {
      controls: [
        {
          kind: "select",
          prop: "colorStyle",
          label: "Estilo de color",
          options: ["neutral", "primary", "secondary"],
        },
        {
          kind: "select",
          prop: "variant",
          label: "Variante",
          options: ["solid", "outline", "text"],
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
