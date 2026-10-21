# Tarea: añadir estado de UI con Zustand

## Objetivo

Incorporar Zustand en `@monorepo/ui-dev` para gestionar el estado cliente
transversal del shell documental, sin introducir estado de aplicación en la
biblioteca `@monorepo/ui`.

## Alcance

- Añadir `zustand` como dependencia de `@monorepo/ui-dev`.
- Crear un store de UI tipado en `apps/ui-dev/src/stores/ui/` con:
  - La preferencia de tema, con las acciones `setTheme` y `toggleTheme`.
  - El estado del menú de navegación, con las acciones `openNavigation`,
    `closeNavigation` y `toggleNavigation`.
- Persistir exclusivamente la preferencia de tema en `localStorage`.
- Resolver el tema inicial mediante `prefers-color-scheme` cuando no exista una
  preferencia persistida.
- Aplicar el tema seleccionado como `data-theme` en
  `document.documentElement` desde un efecto dedicado.
- Migrar `AppSell` y el control de tema para consumir selectores atómicos del
  store.
- Cerrar el menú de navegación al completar una navegación interna.
- Habilitar Redux DevTools solo durante el desarrollo.
- Documentar en `docs/architecture.md` el límite entre estado global de cliente,
  estado local y estado basado en URL.

## Arquitectura

```text
apps/ui-dev/src/
  stores/
    ui/
      types.ts
      useUiStore.ts
      selectors.ts
      useApplyTheme.ts
```

El store agrupa solo estado de interfaz que sea transversal al shell. Sus
acciones representan transiciones de UI y no deben realizar efectos sobre el
DOM. `useApplyTheme` consume el tema y se encarga de sincronizar el atributo
`data-theme`.

Cada consumidor debe seleccionar el fragmento mínimo que necesite. Para
selecciones compuestas se debe usar `useShallow`; no se debe consumir el estado
completo del store.

## Estado que no pertenece al store

- La ruta actual continúa en `useDocumentationNavigation`: la URL y la History
  API son la fuente de verdad para preservar enlaces, recargas y navegación
  atrás/adelante.
- La consulta y los resultados de búsqueda permanecen locales hasta que se
  implemente una vista de resultados. Si deben compartirse o sobrevivir a una
  recarga, se representan en parámetros de URL.
- Los controles de cada playground permanecen locales a su demo.
- El catálogo, la navegación y los resultados derivados de documentación siguen
  siendo módulos inmutables en `apps/ui-dev/src/docs/`.

## Restricciones

- No añadir Zustand a `packages/ui` ni exponer el store como parte de la API
  pública de la biblioteca.
- No persistir el estado de apertura del menú.
- No duplicar `currentRoute` entre la URL y Zustand.
- No usar Context, stores vanillas, `immer` ni slices adicionales mientras el
  estado siga siendo plano.
- No cambiar el comportamiento accesible existente de la navegación ni del
  control de tema.

## Criterios de aceptación

1. El tema se actualiza mediante Zustand y cambia `data-theme` sin recargar.
2. Una preferencia de tema se conserva tras recargar; sin preferencia guardada,
   se respeta el esquema del sistema.
3. El estado del menú se comparte entre cabecera y barra lateral, pero se
   reinicia tras recargar.
4. Navegar con un enlace interno cierra el menú y mantiene la URL como fuente
   de verdad de la ruta.
5. Los componentes consumen selectores específicos, sin suscribirse al store
   completo.
6. La biblioteca `@monorepo/ui` no añade Zustand como dependencia ni código de
   estado de aplicación.
7. Se cubren las transiciones del store y la sincronización del tema con las
   herramientas de prueba disponibles para la aplicación.
8. `npm run check` termina con código cero.

## Dependencias

- `007-add-theme-control.md`.
- `006-add-docs-navigation.md`.
- `012-decide-docs-test-tooling.md`.
