# Tarea: construir la página de referencia de Button - completada

## Objetivo

Crear la primera página completa de componente usando `Button` real como
referencia que definirá el patrón para las páginas posteriores.

## Alcance

- Descripción, importación y preview de `Button`.
- Galería de `colorStyle` (`neutral`, `primary`, `secondary`), `variant`
  (`solid`, `outline`, `text`) y `size` (`small`, `medium`, `large`).
- Estados reales `isDisabled` y `loading`.
- Playground con controles para esas props y texto de hijos.
- Código TSX generado desde el estado del playground y acción de copiado.
- Tabla de props específicas, valores predeterminados y enlace a las props
  heredadas de React Aria.
- Notas de accesibilidad y buenas prácticas basadas en la implementación.

## Restricciones

- No presentar una interacción de carga que no deshabilite realmente el botón.
- No documentar propiedades heredadas como si fueran específicas de la
  biblioteca.

## Criterios de aceptación

1. Preview y código cambian conjuntamente al modificar controles.
2. El estado `loading` evita la activación, como el componente real.
3. La página no inventa props y usa `ButtonProps` público.

## Dependencias

- `003-export-public-prop-types.md`.
- `010-create-docs-primitives.md`.
