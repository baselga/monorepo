# Tarea: añadir el control de tema

## Objetivo

Ofrecer un control claro/oscuro que utilice el soporte existente de tokens
semánticos mediante `data-theme` en el elemento raíz del documento.

## Alcance

- Leer la preferencia almacenada y, cuando no exista, respetar el esquema del
  sistema.
- Aplicar `data-theme="light"` o `data-theme="dark"` en `document.documentElement`.
- Persistir los cambios en `localStorage`.
- Exponer un control con nombre accesible, operación por teclado y estado
  comprensible.

## Restricciones

- No duplicar paletas ni introducir un sistema alternativo de tema.
- No simular un tema que no sea compatible con los tokens actuales.

## Criterios de aceptación

1. El cambio actualiza la apariencia de tokens sin recargar la página.
2. La preferencia se conserva al recargar.
3. El control mantiene foco visible y comunica su acción o estado.

## Dependencias

- `005-build-docs-app-shell.md`.
