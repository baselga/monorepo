# Tarea: exportar tipos públicos de props

## Objetivo

Hacer explícitos y estables los tipos de props que ya forman parte de la API
pública de `@monorepo/ui`. Esto permite que consumidores y la futura aplicación
de documentación compongan componentes sin importar rutas internas.

## Alcance

- Exportar `ButtonProps` desde el módulo de `Button` y desde
  `packages/ui/src/index.ts`.
- Exportar `SelectInputOptionProps<T>` desde su módulo y desde el índice.
- Mantener las exportaciones existentes de `TextInputProps` y
  `SelectInputProps<T>`.
- No cambiar comportamiento, estilos, defaults ni nombres de las props.

## Restricciones

- No exportar tipos puramente internos de CSS o implementación.
- Mantener los límites actuales de las props heredadas de React Aria.
- No añadir dependencias.

## Criterios de aceptación

1. Un consumidor puede importar los cuatro tipos desde `@monorepo/ui`.
2. `Button`, `TextInput`, `SelectInput` y `SelectInput.Option` mantienen su
   API y comportamiento actuales.
3. `npm run check` finaliza correctamente.

## Dependencias

Ninguna. Esta tarea habilita el catálogo tipado y las páginas de componente.
