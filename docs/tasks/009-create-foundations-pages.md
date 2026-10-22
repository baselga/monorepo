# Tarea: crear páginas de fundamentos — Completada

## Objetivo

Documentar los fundamentos disponibles de `@monorepo/ui` para que se usen
correctamente desde aplicaciones consumidoras.

## Alcance

- Página de tokens y variables CSS: categorías semánticas, propósito y
  combinaciones válidas de fondo y texto.
- Página de utilidades CSS: prefijo `ds-`, familias disponibles, restricciones
  y ejemplos con APIs reales.
- Enlazar a las fuentes documentales existentes cuando haya detalle adicional.

## Restricciones

- No reproducir valores o utilidades que no estén disponibles en el CSS
  publicado.
- No recomendar el consumo directo de colores primitivos en componentes.

## Criterios de aceptación

1. El contenido coincide con `packages/ui/src/tokens/` y
   `packages/ui/src/utilities/`.
2. Los ejemplos importan `@monorepo/ui/styles` cuando corresponde.
3. Las páginas son legibles y navegables en móvil y escritorio.

## Dependencias

- `005-build-docs-app-shell.md`.
