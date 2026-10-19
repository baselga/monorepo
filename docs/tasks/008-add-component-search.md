# Tarea: añadir búsqueda global de componentes

## Objetivo

Permitir descubrir componentes existentes mediante una búsqueda global basada
en el catálogo documental.

## Alcance

- Buscar por nombre, categoría, resumen y etiquetas declaradas en el catálogo.
- Mostrar resultados navegables a páginas existentes.
- Soportar teclado para abrir, recorrer, seleccionar y cerrar resultados.
- Manejar consulta vacía, falta de resultados y retorno de foco.

## Restricciones

- No indexar ni presentar componentes no exportados públicamente.
- No añadir un motor de búsqueda externo sin aprobación.

## Criterios de aceptación

1. `Button`, `TextInput` y `SelectInput` se localizan por nombre.
2. Seleccionar un resultado navega a su ruta y cierra correctamente la UI.
3. El control y los resultados tienen roles, nombres y foco accesibles.

## Dependencias

- `004-define-docs-catalog.md`.
- `006-add-docs-navigation.md`.
