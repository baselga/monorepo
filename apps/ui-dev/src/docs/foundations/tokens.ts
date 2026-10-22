import { TokensDocumentationContent } from "../../components/FoundationPages/FoundationPages";
import type { DocumentationPage } from "../schema";

export const tokensDocumentation = {
  id: "tokens",
  kind: "page",
  category: "foundations",
  title: "Tokens y variables CSS",
  summary:
    "Referencia de tokens semánticos para color, tipografía, espaciado y composición.",
  tags: ["tokens", "variables CSS", "tema", "accesibilidad"],
  route: "/fundamentos/tokens",
  Content: TokensDocumentationContent,
  tableOfContents: [
    { id: "tokens-import-title", title: "Carga de estilos" },
    { id: "tokens-families-title", title: "Familias disponibles" },
    { id: "tokens-colors-title", title: "Combinaciones de color" },
    { id: "tokens-guidance-title", title: "Uso recomendado" },
  ],
} as const satisfies DocumentationPage;
