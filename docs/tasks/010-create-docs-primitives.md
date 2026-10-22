# Tarea: crear primitivas reutilizables de documentación - completada

## Objetivo

Crear componentes internos de `apps/ui-dev` que mantengan consistentes las
páginas de documentación sin pasar a formar parte de `@monorepo/ui`.

## Alcance

- Encabezado de página y tabla de contenidos local.
- Superficie de preview para ejemplos reales.
- Bloque de código con acción de copiado y confirmación accesible.
- Tabla de API para props específicas de cada componente.
- Bloques para accesibilidad, buenas prácticas y limitaciones.
- Base para un playground sincronizado con un ejemplo TSX.

## Restricciones

- Estos componentes son privados de `ui-dev`; no exportarlos desde la librería.
- Los bloques de código deben ser texto legible aunque el copiado no esté
  disponible.
- No añadir un resaltador de sintaxis sin aprobación previa.

## Criterios de aceptación

1. Las páginas de componentes no duplican estructura ni lógica de copiado.
2. El copiado usa la API Clipboard cuando esté disponible y comunica éxito o
   error de forma explícita.
3. Los componentes tienen estilos responsive y foco visible.

## Dependencias

- `005-build-docs-app-shell.md`.
