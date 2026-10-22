import { documentationCategories } from "./categories";
import { buttonDocumentation } from "./components/button";
import { selectInputDocumentation } from "./components/select-input";
import { textInputDocumentation } from "./components/text-input";
import { tokensDocumentation } from "./foundations/tokens";
import { utilitiesDocumentation } from "./foundations/utilities";
import type { DocumentationNavigationItem, DocumentationPage } from "./schema";

export { documentationCategories } from "./categories";
export type {
  ComponentDocumentationPage,
  ComponentPlayground,
  DocumentationCategory,
  DocumentationCategoryId,
  DocumentationExample,
  DocumentationNavigationGroup,
  DocumentationNavigationItem,
  DocumentationNavigationLink,
  DocumentationPage,
  DocumentationRoute,
  DocumentationSearchResult,
  PlaygroundControl,
} from "./schema";

export const componentDocumentation = [
  buttonDocumentation,
  textInputDocumentation,
  selectInputDocumentation,
] as const;

export const documentationPages = [
  tokensDocumentation,
  utilitiesDocumentation,
  ...componentDocumentation,
] as const satisfies readonly DocumentationPage[];

export const documentationNavigationItems: readonly DocumentationNavigationItem[] =
  [...documentationCategories, ...documentationPages];
