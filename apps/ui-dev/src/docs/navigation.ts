import {
  documentationCategories,
  documentationNavigationItems,
  documentationPages,
} from "./catalog";
import type {
  DocumentationNavigationGroup,
  DocumentationNavigationItem,
  DocumentationRoute,
} from "./schema";

export const documentationNavigationGroups: readonly DocumentationNavigationGroup[] =
  documentationCategories.map((category) => ({
    category,
    pages: documentationPages
      .filter((page) => page.category === category.id)
      .map(({ id, route, title }) => ({
        id,
        title,
        route,
        kind: "page" as const,
      })),
  }));

const navigationItemByRoute = new Map(
  documentationNavigationItems.map((item) => [item.route, item]),
);

export const resolveDocumentationRoute = (
  pathname: string,
): DocumentationNavigationItem | undefined =>
  navigationItemByRoute.get(pathname as DocumentationRoute);

export const normalizeDocumentationRoute = (
  pathname: string,
): DocumentationRoute => {
  const normalizedPathname =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  return resolveDocumentationRoute(normalizedPathname)?.route ?? "/";
};
