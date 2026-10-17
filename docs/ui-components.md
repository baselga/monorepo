# Receta de componentes UI

Para añadir un componente público a `packages/ui`:

1. Crea `src/components/<Nombre>/<Nombre>.tsx` y `<Nombre>.module.css`.
2. Añade `tests/components/<Nombre>.test.tsx`.
3. Importa las interacciones de React Aria desde su subpath. Tipa las props y representa variantes con atributos `data-*`.
4. Usa tokens semánticos en el CSS Module; no añadas estilos de componente a hojas globales.
5. Exporta el componente desde `src/index.ts`.
6. Añade una demo enfocada en `apps/ui-dev/src/` si hace falta mostrar variantes o interacciones.
7. Ejecuta las pruebas, el typecheck y ESLint para los ficheros modificados.

## Plantilla

[Button.tsx](../packages/ui/src/components/Button/Button.tsx) y [Button.module.css](../packages/ui/src/components/Button/Button.module.css) muestran la composición con React Aria, props tipadas, atributos de variante y tokens. [Button.test.tsx](../packages/ui/tests/components/Button.test.tsx) muestra pruebas de renderizado, interacción y estado deshabilitado/cargando.

No copies la API de Button sin necesidad: conserva las convenciones, pero define solo las props y estados relevantes para el nuevo componente.
