import { UtilitiesDocumentationContent } from "../../components/FoundationPages/FoundationPages";
import type { DocumentationPage } from "../schema";

export const utilitiesDocumentation = {
  id: "utilities",
  kind: "page",
  category: "foundations",
  title: "Utilidades CSS",
  summary:
    "Clases ds- para componer layout y presentación básica con los tokens publicados.",
  tags: ["utilidades", "CSS", "ds-", "layout"],
  route: "/fundamentos/utilidades",
  Content: UtilitiesDocumentationContent,
  tableOfContents: [
    { id: "utilities-import-title", title: "Carga de estilos" },
    { id: "utilities-families-title", title: "Familias disponibles" },
    { id: "utilities-example-title", title: "Ejemplo con APIs reales" },
    { id: "utilities-restrictions-title", title: "Restricciones" },
  ],
} as const satisfies DocumentationPage;
