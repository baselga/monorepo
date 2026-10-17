---
name: verify
description: Ejecuta la validación local unificada del monorepo tras cambios de código o cuando se solicite verificar una tarea.
---

# Verificar cambios

1. Inspecciona `git status --short` y el diff para identificar los ficheros afectados; no alteres cambios preexistentes.
2. Para validar cambios locales, ejecuta únicamente `npm run check`; incluye lint, formato, typecheck, tests y build de todos los workspaces.
3. Para cambios exclusivamente documentales, basta con `npx prettier --check <ficheros-afectados>`.
4. Informa de los comandos ejecutados, su resultado y cualquier verificación omitida con motivo. No afirmes que una validación pasó si no se ejecutó.
