# Guía de `apps/ui-dev`

- Usa esta app como playground para ejemplos interactivos de `@monorepo/ui`; importa componentes desde `@monorepo/ui` y sus estilos con `@monorepo/ui/styles`.
- Añade o actualiza las demos en `src/` y mantenlas enfocadas en mostrar variantes, estados e interacciones de los componentes.
- Prefiere los componentes y tokens de la biblioteca a recrear su UI en la app.
- Verifica los cambios con `npm run typecheck` y `npx eslint <ficheros>`. Para trabajar localmente, usa `npm run dev` desde la raíz para levantar biblioteca y app.
