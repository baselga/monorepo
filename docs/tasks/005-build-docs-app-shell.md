# Tarea: construir el shell de la aplicación de documentación — Completada

## Objetivo

Sustituir la demo actual de `apps/ui-dev` por la estructura base de una
aplicación de documentación profesional y responsive que consuma
`@monorepo/ui` y `@monorepo/ui/styles`.

## Alcance

- Crear el layout semántico principal con cabecera, navegación lateral, área de
  contenido y zona reservada para índice local.
- Establecer estilos propios de la app en CSS Modules y consumir los tokens y
  utilidades existentes.
- Preparar puntos de montaje para navegación, búsqueda, tema y contenido.
- Eliminar la demo actual que no forme parte del producto documental.

## Restricciones

- No recrear los componentes de `@monorepo/ui`.
- No introducir valores visuales crudos cuando haya un token aplicable.
- No añadir dependencias.

## Criterios de aceptación

1. La aplicación carga los estilos públicos de la biblioteca explícitamente.
2. El layout es legible en escritorio y se adapta a pantallas estrechas.
3. La estructura usa landmarks semánticos y tiene un orden de foco lógico.

## Dependencias

- `004-define-docs-catalog.md`.
