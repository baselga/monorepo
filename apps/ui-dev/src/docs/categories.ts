import { DocumentationPlaceholder } from "../components/DocumentationPlaceholder/DocumentationPlaceholder";
import type { DocumentationCategory } from "./schema";

export const documentationCategories = [
  {
    id: "introduction",
    kind: "category",
    title: "Introducción",
    summary:
      "Referencia práctica para construir interfaces coherentes, accesibles y mantenibles con la biblioteca de componentes.",
    route: "/",
    Content: DocumentationPlaceholder,
  },
  {
    id: "foundations",
    kind: "category",
    title: "Fundamentos",
    summary: "Información sobre fundamentos de Monorepo UI.",
    route: "/fundamentos",
    Content: DocumentationPlaceholder,
  },
  {
    id: "components",
    kind: "category",
    title: "Componentes",
    summary: "Información sobre componentes de Monorepo UI.",
    route: "/componentes",
    Content: DocumentationPlaceholder,
  },
  {
    id: "guides",
    kind: "category",
    title: "Guías",
    summary: "Información sobre guías de Monorepo UI.",
    route: "/guias",
    Content: DocumentationPlaceholder,
  },
] as const satisfies readonly DocumentationCategory[];
