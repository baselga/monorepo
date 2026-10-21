import { useCallback, useEffect, useState } from "react";
import {
  normalizeDocumentationRoute,
  resolveDocumentationRoute,
} from "./navigation";
import type { DocumentationRoute } from "./schema";

const getCurrentRoute = (): DocumentationRoute =>
  normalizeDocumentationRoute(window.location.pathname);

export const useDocumentationNavigation = (): {
  currentRoute: DocumentationRoute;
  navigate: (route: DocumentationRoute) => void;
} => {
  const [currentRoute, setCurrentRoute] =
    useState<DocumentationRoute>(getCurrentRoute);

  useEffect(() => {
    const handlePopState = (): void => {
      setCurrentRoute(getCurrentRoute());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = useCallback((route: DocumentationRoute): void => {
    if (!resolveDocumentationRoute(route) || route === getCurrentRoute()) {
      return;
    }

    window.history.pushState(null, "", route);
    setCurrentRoute(route);
  }, []);

  return { currentRoute, navigate };
};
