import { documentationCategories } from "./categories";
import { buttonDocumentation } from "./components/button";
import { selectInputDocumentation } from "./components/select-input";
import { textInputDocumentation } from "./components/text-input";
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

export const documentationPages =
  componentDocumentation satisfies readonly DocumentationPage[];

export const documentationNavigationItems: readonly DocumentationNavigationItem[] =
  [
    ...documentationCategories.map(({ id, route, title }) => ({
      id,
      title,
      route,
      kind: "category" as const,
    })),
    ...documentationPages.map(({ id, route, title }) => ({
      id,
      title,
      route,
      kind: "page" as const,
    })),
  ];
