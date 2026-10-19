import type { DocumentationCategory } from "./schema";

export const documentationCategories = [
  {
    id: "introduction",
    title: "Introducción",
    route: "/",
  },
  {
    id: "foundations",
    title: "Fundamentos",
    route: "/fundamentos",
  },
  {
    id: "components",
    title: "Componentes",
    route: "/componentes",
  },
  {
    id: "guides",
    title: "Guías",
    route: "/guias",
  },
] as const satisfies readonly DocumentationCategory[];
