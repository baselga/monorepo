# Tarea: ejecutar la validación completa del monorepo

## Objetivo

Comprobar de forma final que la aplicación documental y los cambios de API
pública preservan el contrato de calidad del repositorio.

## Alcance

- Ejecutar `npm run check`.
- Resolver errores de lint, formato, tipos, pruebas o build causados por estas
  tareas.
- Comprobar que no se hayan modificado artefactos prohibidos como `dist/`,
  `node_modules/`, `package-lock.json` o `*.tsbuildinfo`.

## Criterios de aceptación

1. `npm run check` termina con código cero.
2. Los workspaces `@monorepo/ui` y `@monorepo/ui-dev` compilan.
3. Las pruebas de biblioteca y, si se aprobó su infraestructura, las de la
   aplicación, pasan correctamente.

## Dependencias

- `013-test-docs-interactions.md`.
- `017-validate-docs-accessibility-responsive.md`.
- `018-update-docs-guidance.md`.
