# Tarea: decidir la infraestructura de pruebas de ui-dev — Completada

## Objetivo

Obtener aprobación explícita antes de añadir dependencias de prueba y, una vez
aprobada, configurar el mínimo necesario para probar las interacciones de la
aplicación documental.

## Decisión requerida

Proponer `vitest`, `jsdom`, `@testing-library/react`,
`@testing-library/user-event` y `@testing-library/jest-dom` como dependencias
de desarrollo de `@monorepo/ui-dev`, o una centralización equivalente en la
raíz.

## Alcance posterior a la aprobación

- Configurar Vitest con entorno DOM y setup.
- Añadir scripts coherentes con los del monorepo.
- Integrar la ejecución en la validación única del repositorio.

## Criterios de aceptación

1. No se modifica `package.json` ni se instala nada antes de la aprobación.
2. Una prueba de ejemplo de la app puede ejecutarse en CI local.
3. La configuración no altera las pruebas existentes de `packages/ui`.

## Dependencias

Ninguna, pero bloquea las pruebas automatizadas de la app.
