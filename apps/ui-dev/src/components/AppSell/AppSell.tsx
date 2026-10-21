import { useCallback, useState, type JSX, type MouseEvent } from "react";
import type { DocumentationRoute } from "../../docs/catalog";
import { useDocumentationNavigation } from "../../docs/useDocumentationNavigation";
import { useTheme } from "../../theme/useTheme";
import styles from "./AppSell.module.css";
import { DocumentationHeader } from "../DocumentationHeader/DocumentationHeader";
import { DocumentationSidebar } from "../DocumentationSidebar/DocumentationSidebar";
import { DocumentationContent } from "../DocumentationContent/DocumentationContent";
import { DocumentationLocalIndex } from "../DocumentationLocalIndex/DocumentationLocalIndex";

export const AppSell = (): JSX.Element => {
  const { currentRoute, navigate } = useDocumentationNavigation();
  const { theme, toggleTheme } = useTheme();
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const handleNavigation = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, route: DocumentationRoute): void => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey
      ) {
        return;
      }

      event.preventDefault();
      navigate(route);
      setIsNavigationOpen(false);
    },
    [navigate],
  );

  const toggleNavigation = useCallback((): void => {
    setIsNavigationOpen((isOpen) => !isOpen);
  }, []);

  const handleSearchNavigation = useCallback(
    (route: DocumentationRoute): void => {
      navigate(route);
      setIsNavigationOpen(false);
    },
    [navigate],
  );

  return (
    <div className={styles.appShell}>
      <a className={styles.skipLink} href="#main-content">
        Saltar al contenido principal
      </a>

      <DocumentationHeader
        isNavigationOpen={isNavigationOpen}
        onNavigate={handleNavigation}
        onSearchNavigate={handleSearchNavigation}
        onToggleNavigation={toggleNavigation}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <div className={styles.layout}>
        <DocumentationSidebar
          currentRoute={currentRoute}
          isNavigationOpen={isNavigationOpen}
          onNavigate={handleNavigation}
        />
        <DocumentationContent currentRoute={currentRoute} />
        <DocumentationLocalIndex />
      </div>
    </div>
  );
};
