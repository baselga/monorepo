import type { JSX, MouseEvent } from "react";
import type { DocumentationRoute } from "../../docs/catalog";
import { documentationNavigationGroups } from "../../docs/navigation";
import styles from "./DocumentationSidebar.module.css";

interface DocumentationSidebarProps {
  currentRoute: DocumentationRoute;
  isNavigationOpen: boolean;
  onNavigate: (
    event: MouseEvent<HTMLAnchorElement>,
    route: DocumentationRoute,
  ) => void;
}

export const DocumentationSidebar = ({
  currentRoute,
  isNavigationOpen,
  onNavigate,
}: DocumentationSidebarProps): JSX.Element => {
  return (
    <aside
      className={styles.sidebar}
      data-open={isNavigationOpen}
      id="documentation-navigation"
    >
      <nav aria-labelledby="documentation-navigation-title">
        <h2 id="documentation-navigation-title" className={styles.title}>
          Documentación
        </h2>
        <ul className={styles.groups}>
          {documentationNavigationGroups.map(({ category, pages }) => (
            <li key={category.id} className={styles.group}>
              <a
                className={styles.categoryLink}
                href={category.route}
                aria-current={
                  currentRoute === category.route ? "page" : undefined
                }
                onClick={(event) => onNavigate(event, category.route)}
              >
                {category.title}
              </a>
              {pages.length > 0 ? (
                <ul className={styles.pages}>
                  {pages.map((page) => (
                    <li key={page.id}>
                      <a
                        className={styles.pageLink}
                        href={page.route}
                        aria-current={
                          currentRoute === page.route ? "page" : undefined
                        }
                        onClick={(event) => onNavigate(event, page.route)}
                      >
                        {page.title}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
