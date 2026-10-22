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
} as const satisfies DocumentationPage;
