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
} as const satisfies DocumentationPage;
