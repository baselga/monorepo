# Tarea: definir el catálogo tipado de documentación

## Objetivo

Crear una fuente de datos tipada dentro de `apps/ui-dev` que describa los
elementos documentables existentes, sus rutas, categorías y capacidades reales
de demostración. Debe ser el punto de extensión al añadir componentes.

## Alcance

- Registrar exclusivamente `Button`, `TextInput` y `SelectInput`.
- Definir categorías para introducción, fundamentos, componentes y guías.
- Asociar a cada componente título, resumen, ruta, ejemplos, notas de
  accesibilidad y controles de playground realmente soportados.
- Definir tipos reutilizables para las páginas y resultados de búsqueda.

## Restricciones

- No inventar props, variantes, estados ni comportamientos.
- Reutilizar los tipos públicos de `@monorepo/ui` donde corresponda.
- Mantener la prosa editorial separada de datos que puedan derivarse de tipos.

## Criterios de aceptación

1. La navegación y la búsqueda pueden obtener sus entradas del catálogo.
2. Añadir un componente requiere una entrada tipada y una página, sin editar
   condicionales dispersos.
3. Cada capacidad de playground corresponde a una prop real de la biblioteca.

## Dependencias

- `003-export-public-prop-types.md`.
