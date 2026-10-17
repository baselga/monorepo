# Plan: harness de IA para el monorepo

Objetivo: que un agente entienda el repo con el mínimo de lecturas, siga las convenciones y verifique su trabajo solo, consumiendo menos tokens por tarea.

## Decisiones tomadas

- **Herramientas:** Copilot ahora; Claude y Codex en el futuro. Se usa `AGENTS.md` como fuente única (estándar abierto) y `CLAUDE.md` solo lo referencia (`@AGENTS.md`).
- **Idioma:** `AGENTS.md` y docs en español; identificadores de código en inglés.
- **CI:** sin GitHub Actions por ahora. La verificación se concentra en un script `check` local y en el hook `pre-push`.
- **Skills de terceros:** [mattpocock/skills](https://github.com/mattpocock/skills), solo un subconjunto (ver Fase 3).

## Estado actual

- npm workspaces: `apps/ui-dev` (Vite, playground) y `packages/ui` (`@monorepo/ui`: React 19, react-aria-components, CVA, CSS Modules, tokens CSS, Vitest).
- Calidad: ESLint strict, Prettier, `tsc -b`, husky (pre-commit con lint-staged; pre-push con `npm run check`).
- Las fases 1, 2, 3, 4 y 5 están completadas: hay guías `AGENTS.md` en raíz y workspaces, instrucciones para agentes, ajustes de VS Code, documentación técnica compacta, skills propias/de terceros versionadas, scripts de verificación concisos, hooks de agente y un comando local único de validación. CI sigue fuera del alcance actual.
- Solo existe un componente (Button) con un test: buen momento para fijar patrones.

## Fase 1 – Contexto base (impacto alto, esfuerzo bajo) — Completada

1. `AGENTS.md` en la raíz (menos de 80 líneas):
   - Mapa del repo y stack (2 líneas por workspace).
   - Comandos de desarrollo por workspace y uso de `npm run check` para validar localmente; no dejar `dev` en primer plano.
   - Reglas duras: usar tokens (nunca valores crudos), CSS Modules, variantes vía `data-*`, exportar desde `src/index.ts`, imports de react-aria por subpath, no tocar `dist/`, `node_modules`, `*.tsbuildinfo` ni `package-lock.json`.
   - Definición de "hecho": tests, typecheck y lint pasan.
2. `AGENTS.md` anidados cortos: `packages/ui/AGENTS.md` (anatomía de componente, estilos, tests) y `apps/ui-dev/AGENTS.md` (cómo añadir una demo).
3. `CLAUDE.md` con `@AGENTS.md` y, si hace falta, `.github/copilot-instructions.md` apuntando a `AGENTS.md`.
4. `.vscode/settings.json`: activar `chat.useAgentsMdFile` y `chat.useNestedAgentsMdFiles`, y `search.exclude` para `package-lock.json`, `dist` y `*.tsbuildinfo`.

## Fase 2 – Documentación compacta (`docs/`) — Completada

Cada documento con menos de 100 líneas, enlazado desde `AGENTS.md` y cargado bajo demanda:

- `docs/architecture.md`: workspaces, export condition `development`, flujo de `dev` (lib en watch + app) y build.
- `docs/ui-components.md`: receta de componente (carpeta, `.tsx`, `.module.css`, test, export, demo) con Button como plantilla.
- `docs/tokens.md`: resumen con solo nombres y usos de los tokens (sin repetir valores).
- `docs/testing.md`: Vitest + Testing Library, `tests/setup.ts`, queries preferidas y qué testear.
- `docs/decisions/`: ADRs de 5-10 líneas (por qué react-aria, CVA, CSS Modules, tokens por capas). Los generará en parte `grill-with-docs`.

## Fase 3 – Skills — Completada

### Propias del repo (`.agents/skills/`)

Cada una con `SKILL.md` y una `description` precisa para que se active solo cuando toca:

- `new-component`: crea carpeta, CSS, test, export y demo siguiendo la plantilla, con checklist final.
- `add-token`: añade el token en el fichero correcto, actualiza índice y docs, evita duplicados.
- `verify`: secuencia mínima de validación por alcance (ficheros tocados, workspace, global).
- `commit`: conventional commits (`feat(ui): ...`) y formato del historial.

### De terceros (mattpocock/skills; `.agents/skills/`)

Instalar con `npx skills@latest add mattpocock/skills -a <agente>` eligiendo solo las siguientes, para que queden versionadas y editables en el repo. No usar la vía de plugin a la vez (duplica las skills) ni instalar todas (cada skill añade su descripción al contexto).

| Skill                      | Tipo    | Motivo                                                               |
| -------------------------- | ------- | -------------------------------------------------------------------- |
| `setup-matt-pocock-skills` | usuario | Configuración inicial por repo (sin issue tracker, docs en `docs/`). |
| `grill-with-docs`          | usuario | Construye `GLOSSARY.md` y ADRs; reduce verbosidad y relecturas.      |
| `tdd`                      | modelo  | Bucle red-green-refactor sobre Vitest.                               |
| `diagnosing-bugs`          | modelo  | Depuración disciplinada.                                             |
| `handoff`                  | usuario | Compacta una sesión para continuarla en otra herramienta o sesión.   |
| `retro`                    | usuario | Propone mejoras al harness tras cada sesión (alimenta la Fase 6).    |

Para más adelante: `code-review` (lanza subagentes, cuesta tokens), `improve-codebase-architecture`, `codebase-design`, `domain-modeling`, `pr`.

Descartadas por ahora (asumen issue tracker y flujo de specs): `triage`, `to-spec`, `to-tickets`, `implement`, `implement-spec`, `wayfinder`, además de `prototype`, `research`, `wizard`, `teach`, `to-questionnaire` y `ask-matt`.

## Fase 4 – Ahorro de tokens en la ejecución — Completada

- Scripts en la raíz con salida mínima: `check` (lint + formato + typecheck + test + build), `test:ui` y `lint:changed` (eslint solo sobre ficheros modificados).
- Reporters silenciosos: Vitest con reporter `dot`, `tsc --pretty false`, builds sin logs verbosos.
- Hooks de agente que bloqueen la lectura de ficheros de ruido y ejecuten prettier y eslint tras editar.
- Estructura y nombres predecibles (barrel `index.ts`, una carpeta por componente) para localizar sin buscar, establecida en las guías de los workspaces.

## Fase 5 – Verificación y feedback loop (sin CI)

- Completada: `pre-push` ejecuta `npm run check`, que incluye lint, formato, typecheck, tests y build.
- Completada: `npm run check` es el comando único de validación local, referenciado en `AGENTS.md` y en la skill `verify`.
- Completada: todo componente lleva test, según las guías de componentes y testing.
- Opcional y pendiente: una página por componente en `apps/ui-dev` y un smoke test con Playwright para validar la UI visualmente.
- Si más adelante se decide usar CI, reutilizar `check` tal cual.

## Fase 6 – Mantenimiento

- Si un agente se equivoca dos veces en lo mismo, añadir una línea a `AGENTS.md` o a una skill.
- Ejecutar `retro` tras sesiones relevantes y aplicar solo las mejoras de mayor severidad.
- Revisión periódica para recortar lo obsoleto: el contexto sobrante cuesta tokens.
- Medir tokens por tarea antes y después en tres tareas tipo: nuevo componente, nuevo token y corrección de bug.

## Orden de ejecución

1. Fase 1: `AGENTS.md` raíz y de `packages/ui`.
2. Fase 4: script `check` y excludes.
3. Fase 2: `docs/ui-components.md` y Fase 3: skill `new-component`.
4. Resto de skills propias y docs.
5. Skills de terceros y `setup-matt-pocock-skills`.
6. Fase 5: validación unificada con tests en `pre-push`.
7. Hooks de agente y medición.
