export type DocumentationRoute = `/${string}`;

export type DocumentationCategoryId =
  "introduction" | "foundations" | "components" | "guides";

export interface DocumentationCategory {
  id: DocumentationCategoryId;
  title: string;
  route: DocumentationRoute;
}

export interface DocumentationExample {
  title: string;
  description: string;
}

export interface DocumentationPage {
  id: string;
  category: DocumentationCategoryId;
  title: string;
  summary: string;
  tags: readonly string[];
  route: DocumentationRoute;
}

type BooleanPropertyName<Props> = {
  [Property in keyof Props]-?: NonNullable<Props[Property]> extends boolean
    ? Property
    : never;
}[keyof Props];

type StringPropertyName<Props> = {
  [Property in keyof Props]-?: NonNullable<Props[Property]> extends string
    ? Property
    : never;
}[keyof Props];

interface BooleanPlaygroundControl<
  Props,
  Property extends BooleanPropertyName<Props>,
> {
  kind: "boolean";
  prop: Property;
  label: string;
}

interface SelectPlaygroundControl<
  Props,
  Property extends StringPropertyName<Props>,
> {
  kind: "select";
  prop: Property;
  label: string;
  options: readonly NonNullable<Props[Property]>[];
}

export type PlaygroundControl<Props> =
  | BooleanPlaygroundControl<Props, BooleanPropertyName<Props>>
  | SelectPlaygroundControl<Props, StringPropertyName<Props>>;

export interface ComponentPlayground<Props> {
  controls: readonly PlaygroundControl<Props>[];
}

export interface ComponentDocumentationPage<Props> extends DocumentationPage {
  category: "components";
  examples: readonly DocumentationExample[];
  accessibilityNotes: readonly string[];
  playground: ComponentPlayground<Props>;
}

export interface DocumentationNavigationItem {
  id: string;
  title: string;
  route: DocumentationRoute;
  kind: "category" | "page";
}

export interface DocumentationNavigationGroup {
  category: DocumentationCategory;
  pages: readonly DocumentationNavigationItem[];
}

export interface DocumentationSearchResult {
  id: string;
  title: string;
  summary: string;
  tags: readonly string[];
  route: DocumentationRoute;
  category: DocumentationCategoryId;
  categoryTitle: string;
}

export const defineComponentDocumentation = <Props>(
  page: ComponentDocumentationPage<Props>,
) => page;
