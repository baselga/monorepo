# Arquitectura

## Workspaces

- `packages/ui` (`@monorepo/ui`) contiene la biblioteca React: componentes, CSS Modules y tokens.
- `apps/ui-dev` (`@monorepo/ui-dev`) es el playground Vite que consume la biblioteca.
- npm workspaces conecta ambos paquetes; la app importa la biblioteca como `@monorepo/ui`.

## Exportaciones y estilos

- La entrada pública es `packages/ui/src/index.ts`; exporta los componentes y carga los tokens.
- El export `.` de `@monorepo/ui` usa la condición `development` para resolver `src/index.ts` durante el desarrollo. En producción, `import` y `default` resuelven `dist/index.js`; `types` resuelve las declaraciones generadas.
- `@monorepo/ui/styles` resuelve `dist/index.css`. La app debe importar `@monorepo/ui/styles` explícitamente.
- Vite empaqueta la biblioteca como módulo ES; React y React DOM son dependencias externas.

## Desarrollo y build

- `npm run dev` en la raíz inicia en paralelo `packages/ui` con `vite build --watch` y `apps/ui-dev` con Vite. La condición `development` permite a la app consumir directamente el código fuente de la biblioteca.
- `npm run build` en la raíz ejecuta el build de los workspaces: TypeScript genera tipos y Vite genera los artefactos de la biblioteca; la app compila después.
- Para comprobar tipos sin generar artefactos, usa `npm run typecheck`.
