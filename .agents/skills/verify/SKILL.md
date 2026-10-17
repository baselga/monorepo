---
name: verify
description: Selecciona y ejecuta la secuencia mínima de lint, formato, tests, typecheck y build según los ficheros y workspaces afectados. Úsala al terminar cambios de código o cuando se solicite verificar una tarea; no ejecutes builds globales innecesarios.
---

# Verificar cambios

1. Inspecciona `git status --short` y el diff para identificar los ficheros afectados; no alteres cambios preexistentes.
2. Para cada fichero cambiado, ejecuta `npx eslint <ficheros-de-código>` cuando aplique y `npx prettier --check <ficheros-afectados>` incluyendo documentación/configuración.
3. Si cambia código o pruebas de `packages/ui`, ejecuta `npm run test:run -w @monorepo/ui`.
4. Si cambia TypeScript, exports, tipos o configuración de compilación, ejecuta `npm run typecheck`.
5. Si el cambio afecta la salida de producción de la biblioteca (por ejemplo, exports o CSS empaquetado), ejecuta `npm run build -w @monorepo/ui`. Si afecta la app, ejecuta el build de su workspace solo cuando el cambio lo requiera.
6. Amplía a otros workspaces solo si tienen código afectado. No uses el build completo del monorepo ni inventes un comando `check` que aún no exista.
7. Informa de los comandos ejecutados, su resultado y cualquier verificación omitida con motivo. No afirmes que una validación pasó si no se ejecutó.
