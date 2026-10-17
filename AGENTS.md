# Guía para agentes

## Mapa del repositorio

- `packages/ui` (`@monorepo/ui`): biblioteca React/TypeScript; React Aria, CVA, CSS Modules, tokens CSS y Vitest.
- `apps/ui-dev` (`@monorepo/ui-dev`): playground Vite/React para desarrollar y mostrar componentes de `@monorepo/ui`.

## Comandos de verificación

- Tests de la biblioteca: `npm run test:run -w @monorepo/ui`.
- Typecheck del monorepo: `npm run typecheck`.
- Lint de los ficheros modificados: `npx eslint <ficheros>`.
- No ejecutes el build completo si no es necesario: compila todos los workspaces. No dejes `dev` en primer plano; si hace falta, usa `npm run dev` para levantar biblioteca y app conjuntamente.

## Reglas obligatorias

- Usa tokens semánticos existentes para valores visuales; nunca escribas valores crudos de color, espacio, tipografía, borde o elevación.
- Los estilos de componentes van en CSS Modules (`*.module.css`), no en hojas globales.
- No edites `dist/`, `node_modules/`, ficheros `*.tsbuildinfo` ni `package-lock.json`.

## Definición de hecho

La tarea está terminada cuando los tests, el typecheck y el lint de los ficheros afectados pasan.

## Guías por workspace

- Para componentes, estilos y tests de `packages/ui`, consulta [packages/ui/AGENTS.md](packages/ui/AGENTS.md).
- Para demos de `apps/ui-dev`, consulta [apps/ui-dev/AGENTS.md](apps/ui-dev/AGENTS.md).
