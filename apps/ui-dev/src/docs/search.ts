import { documentationCategories } from "./categories";
import { documentationPages } from "./catalog";
import type { DocumentationSearchResult } from "./schema";

const categoryTitles = new Map(
  documentationCategories.map(({ id, title }) => [id, title]),
);

export const documentationSearchResults: readonly DocumentationSearchResult[] =
  documentationPages.map(({ category, id, route, summary, title }) => ({
    id,
    title,
    summary,
    route,
    category,
    categoryTitle: categoryTitles.get(category) ?? category,
  }));

export const searchDocumentation = (
  query: string,
): readonly DocumentationSearchResult[] => {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  if (!normalizedQuery) {
    return documentationSearchResults;
  }

  return documentationSearchResults.filter(
    ({ categoryTitle, summary, title }) =>
      [categoryTitle, summary, title].some((value) =>
        value.toLocaleLowerCase().includes(normalizedQuery),
      ),
  );
};
