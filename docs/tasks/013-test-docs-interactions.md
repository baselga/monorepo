# Tarea: probar interacciones de documentación

## Objetivo

Cubrir con pruebas enfocadas los flujos interactivos relevantes de la
aplicación de documentación.

## Alcance

- Persistencia y aplicación del tema.
- Búsqueda global, navegación de resultados y comportamiento de teclado.
- Copiado de código, incluyendo fallo de la API Clipboard.
- Sincronización entre controles, preview y código en el playground de Button.

## Restricciones

- Probar salidas observables y accesibilidad, no detalles internos de estilos.
- Simular las APIs de navegador de forma explícita y restaurarlas por prueba.

## Criterios de aceptación

1. Las pruebas usan queries por rol y nombre accesible.
2. Cubren éxito y error para acciones que pueden fallar.
3. Los flujos principales se ejecutan mediante interacción de usuario.

## Dependencias

- `011-build-button-reference-page.md`.
- `012-decide-docs-test-tooling.md`.
