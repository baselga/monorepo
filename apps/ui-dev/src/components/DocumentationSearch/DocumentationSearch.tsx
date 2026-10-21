import { Button, TextInput } from "@monorepo/ui";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type JSX,
  type KeyboardEvent,
} from "react";
import { searchDocumentation } from "../../docs/search";
import type { DocumentationRoute } from "../../docs/schema";
import styles from "./DocumentationSearch.module.css";

const searchInputId = "documentation-search";
const searchResultsId = "documentation-search-results";

interface DocumentationSearchProps {
  onNavigate: (route: DocumentationRoute) => void;
}

export const DocumentationSearch = ({
  onNavigate,
}: DocumentationSearchProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const focusBeforeOpenRef = useRef<HTMLElement | null>(null);
  const results = searchDocumentation(query);

  const focusInput = useCallback((): void => {
    requestAnimationFrame(() =>
      document.getElementById(searchInputId)?.focus(),
    );
  }, []);

  const openSearch = useCallback((): void => {
    focusBeforeOpenRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setIsOpen(true);
    setSelectedIndex(0);
    focusInput();
  }, [focusInput]);

  const closeSearch = useCallback((returnFocus: boolean): void => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);

    if (returnFocus) {
      requestAnimationFrame(() => focusBeforeOpenRef.current?.focus());
    }
  }, []);

  const selectResult = useCallback(
    (route: DocumentationRoute): void => {
      onNavigate(route);
      closeSearch(false);
    },
    [closeSearch, onNavigate],
  );

  useEffect(() => {
    const handleGlobalKeyDown = (event: globalThis.KeyboardEvent): void => {
      if (
        event.key.toLocaleLowerCase() === "k" &&
        (event.metaKey || event.ctrlKey) &&
        !event.altKey
      ) {
        event.preventDefault();
        openSearch();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [openSearch]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setQuery(event.target.value);
      setSelectedIndex(0);
      setIsOpen(true);
    },
    [],
  );

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement>): void => {
      if (!isOpen) {
        focusBeforeOpenRef.current = event.currentTarget;
      }

      setIsOpen(true);
    },
    [isOpen],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>): void => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSearch(true);
        return;
      }

      if (!isOpen || results.length === 0) {
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedIndex((index) => (index + 1) % results.length);
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedIndex(
          (index) => (index - 1 + results.length) % results.length,
        );
        return;
      }

      if (event.key === "Enter") {
        event.preventDefault();
        selectResult(results[selectedIndex].route);
      }
    },
    [closeSearch, isOpen, results, selectResult, selectedIndex],
  );

  return (
    <div className={styles.search} role="search">
      <Button
        type="button"
        size="small"
        aria-controls={searchResultsId}
        aria-expanded={isOpen}
        onPress={isOpen ? () => closeSearch(true) : openSearch}
      >
        Buscar
      </Button>
      <div className={styles.field}>
        <label className={styles.visuallyHidden} htmlFor={searchInputId}>
          Buscar en la documentación
        </label>
        <TextInput
          size="small"
          id={searchInputId}
          placeholder="Buscar componentes"
          value={query}
          role="combobox"
          aria-autocomplete="list"
          aria-controls={searchResultsId}
          aria-expanded={isOpen}
          aria-activedescendant={
            isOpen && results.length > 0
              ? `${searchResultsId}-${results[selectedIndex].id}`
              : undefined
          }
          onChange={handleChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
        />
        {isOpen ? (
          <div className={styles.results}>
            {results.length > 0 ? (
              <ul
                id={searchResultsId}
                className={styles.resultsList}
                role="listbox"
                aria-label="Resultados de búsqueda"
              >
                {results.map((result, index) => (
                  <li key={result.id} role="presentation">
                    <button
                      id={`${searchResultsId}-${result.id}`}
                      className={styles.result}
                      data-selected={index === selectedIndex || undefined}
                      type="button"
                      role="option"
                      aria-selected={index === selectedIndex}
                      onMouseMove={() => setSelectedIndex(index)}
                      onClick={() => selectResult(result.route)}
                    >
                      <span className={styles.resultTitle}>{result.title}</span>
                      <span className={styles.resultCategory}>
                        {result.categoryTitle}
                      </span>
                      <span className={styles.resultSummary}>
                        {result.summary}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.emptyState} role="status">
                No se han encontrado componentes para &quot;{query}&quot;.
              </p>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};
