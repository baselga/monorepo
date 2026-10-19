# Tarea: añadir navegación de documentación

## Objetivo

Implementar navegación interna accesible para las secciones de la aplicación
sin añadir una dependencia de routing.

## Alcance

- Resolver rutas de introducción, fundamentos, catálogo, guías y componentes.
- Crear navegación lateral agrupada por categorías desde el catálogo tipado.
- Marcar la página actual de forma accesible.
- En móvil, ofrecer un mecanismo accesible para abrir y cerrar la navegación.
- Manejar cambios de historial del navegador y enlaces directos.

## Restricciones

- Usar APIs del navegador (`history`, `location` y eventos) o una abstracción
  local mínima.
- No instalar un router sin aprobación previa.

## Criterios de aceptación

1. Cada ruta documental se puede abrir, volver a cargar y compartir.
2. La navegación se puede completar con teclado.
3. La navegación móvil no bloquea el foco ni oculta el contenido actual.

## Dependencias

- `005-build-docs-app-shell.md`.
