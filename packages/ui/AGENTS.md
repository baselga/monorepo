# Guía de `packages/ui`

## Reglas obligatorias

- Usa tokens semánticos existentes para valores visuales; nunca escribas valores crudos de color, espacio, tipografía, borde o elevación.
- Los estilos de componentes van en CSS Modules (`*.module.css`), no en hojas globales.
- Representa variantes de componentes con atributos `data-*` y selecciona esos atributos desde el CSS Module.
- Exporta componentes públicos desde `packages/ui/src/index.ts`.
- Importa componentes de React Aria desde su subpath, por ejemplo `react-aria-components/Button`.

## Componentes

- Todo componente debe tener un test en `tests/components/<Nombre>.test.tsx`; crea cada componente en `src/components/<Nombre>/` con `<Nombre>.tsx`, `<Nombre>.module.css` y su test.
- Usa React Aria para interacciones accesibles; importa cada componente desde su subpath, por ejemplo `react-aria-components/Button`.
- Define las variantes con props tipadas y refléjalas en atributos `data-*`; selecciónalas desde el CSS Module.
- Usa tokens CSS semánticos para todos los valores visuales. No introduzcas valores crudos ni estilos globales de componente.
- Exporta los componentes públicos desde `src/index.ts`.

## Tests

- Usa Vitest, Testing Library y `tests/setup.ts`; añade tests para renderizado, interacción y estados relevantes.
- Ejecuta `npm run check` para validar los cambios localmente.
- Consulta la [receta de componentes](../../docs/ui-components.md), la guía de [tokens](../../docs/tokens.md) y la guía de [testing](../../docs/testing.md).
