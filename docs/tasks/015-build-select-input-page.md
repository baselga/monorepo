# Tarea: construir la página de SelectInput

## Objetivo

Aplicar el patrón documental a `SelectInput` y su subcomponente
`SelectInput.Option`, demostrando la interacción real de selección.

## Alcance

- Documentar `size`, `variant`, `loading`, `isDisabled`, selección inicial y
  opciones deshabilitadas.
- Demostrar las variantes `solid` y `underline` y los tres tamaños.
- Incluir un playground con opciones concretas reales y código TSX
  sincronizado.
- Explicar el requisito de nombre accesible y el retorno de foco al disparador.

## Restricciones

- No simular carga asíncrona ni datos remotos: `loading` solo representa el
  estado actual del componente.
- No presentar etiquetas, descripción o error como props del componente.

## Criterios de aceptación

1. El preview permite seleccionar una opción mediante los mecanismos reales de
   React Aria.
2. Los estados `loading` e `isDisabled` impiden abrir el selector.
3. Las opciones deshabilitadas no se pueden seleccionar y el ejemplo lo
   refleja correctamente.

## Dependencias

- `003-export-public-prop-types.md`.
- `010-create-docs-primitives.md`.
