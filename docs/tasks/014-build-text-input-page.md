# Tarea: construir la página de TextInput

## Objetivo

Aplicar el patrón de documentación establecido a `TextInput`, limitando el
contenido y el playground a sus capacidades públicas reales.

## Alcance

- Documentar `size`, `variant`, `disabled`, `placeholder`, valor de texto,
  `startIcon` y `endIcon`.
- Demostrar variantes `solid` y `underline` y tamaños disponibles.
- Mostrar cómo aportar nombre accesible mediante etiqueta externa, `aria-label`
  o `aria-labelledby`.
- Generar TSX coherente con los controles, incluidos iconos únicamente cuando
  haya un ejemplo real importable.

## Restricciones

- No documentar tipos de entrada distintos de texto: el componente fuerza
  `type="text"`.
- No presentar etiquetas, mensajes de error o ayuda como API de `TextInput`.

## Criterios de aceptación

1. El preview acepta texto y respeta el estado deshabilitado.
2. La documentación explica que los iconos son `ReactNode` decorativos.
3. El código copiado usa exclusivamente la API pública.

## Dependencias

- `003-export-public-prop-types.md`.
- `010-create-docs-primitives.md`.
