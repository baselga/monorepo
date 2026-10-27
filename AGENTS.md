# Guía para agentes

## Mapa del repositorio

- `packages/ui` (`@monorepo/ui`): biblioteca React/TypeScript; React Aria, CVA, CSS Modules, tokens CSS y Vitest.
- `apps/ui-dev` (`@monorepo/ui-dev`): playground Vite/React para desarrollar y mostrar componentes de `@monorepo/ui`.

## Comandos de verificación

- Verificación local única: `npm run check` (lint, formato, typecheck, tests y build).
- Usa `npm run lint:changed` solo para comprobar rápidamente el lint de los ficheros modificados.
- `npm run check` incluye el build de todos los workspaces; no ejecutes el build completo por separado si no es necesario. No dejes `dev` en primer plano; si hace falta, usa `npm run dev` para levantar biblioteca y app conjuntamente.

## Reglas obligatorias

- Comunícate con el usuario en español; el código, los comentarios y los mensajes de commit van en inglés.
- Usa tokens semánticos existentes para valores visuales; nunca escribas valores crudos de color, espacio, tipografía, borde o elevación.
- Los estilos de componentes van en CSS Modules (`*.module.css`), no en hojas globales.
- Todo componente de `packages/ui` debe incluir un test en `tests/components/`.
- No edites `dist/`, `node_modules/`, ficheros `*.tsbuildinfo` ni `package-lock.json`.

## Definición de hecho

La tarea está terminada cuando `npm run check` pasa.

## Skills del repositorio

- Todas las skills viven en [.agents/skills/README.md](.agents/skills/README.md), que distingue las propias del repo de las importadas.
- Para mantenimiento del harness, retrospectivas y medición, sigue [docs/harness-maintenance.md](docs/harness-maintenance.md).

## Guías por workspace

- Para componentes, estilos y tests de `packages/ui`, consulta [packages/ui/AGENTS.md](packages/ui/AGENTS.md).
- Para demos de `apps/ui-dev`, consulta [apps/ui-dev/AGENTS.md](apps/ui-dev/AGENTS.md).

## Documentación técnica

- [Arquitectura y desarrollo](docs/architecture.md): workspaces, exports y flujo de build/dev.
- [Receta de componentes UI](docs/ui-components.md): estructura, Button como plantilla y demo.
- [Tokens](docs/tokens.md): familias de tokens y usos; no repite sus valores.
- [Testing](docs/testing.md): patrones de Vitest y Testing Library.
- [Decisiones de arquitectura](docs/decisions/): ADRs breves sobre las convenciones de UI.
