# Clases de utilidad

## Objetivo

`@monorepo/ui` proporcionará un conjunto reducido de clases CSS para componer
layout y presentación básica en los consumidores del monorepo. No pretende
replicar Tailwind CSS: cada clase debe resolver una necesidad frecuente y usar
únicamente los tokens existentes de la biblioteca.

Las utilidades se distribuirán junto a los estilos de la biblioteca:

```ts
import "@monorepo/ui/styles";
```

No habrá una exportación JavaScript ni una ruta de importación adicional. Así,
los consumidores que ya cargan los estilos de `@monorepo/ui` tendrán las
utilidades disponibles sin configuración extra.

## Contrato

- Todas las clases empiezan por `ds-` para evitar colisiones con estilos de la
  aplicación o de terceros.
- Una clase establece una propiedad o un grupo CSS inseparable. Las clases se
  pueden combinar; la última regla del stylesheet gana cuando dos clases
  configuran la misma propiedad.
- Las utilidades visuales referencian tokens con `var(--...)`. No se añadirán
  colores, espacios, tamaños tipográficos, radios, bordes ni sombras con
  valores literales.
- Se permiten valores CSS no visuales y semánticos cuando no existe un token,
  como `flex`, `grid`, `auto`, `none`, `hidden`, `min-content` y
  `max-content`.
- La primera versión no incluye variantes responsive, pseudoestados
  (`hover`, `focus` o `disabled`), valores arbitrarios ni la sintaxis con
  modificadores de Tailwind.
- Las clases no reemplazan los estilos de componentes: los componentes públicos
  siguen siendo responsables de sus estados, accesibilidad y apariencia.

## Inventario de la primera versión

### Layout

| Grupo                      | Clases                                                                                                                                                                                                                                                                  |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Display                    | `ds-block`, `ds-inline`, `ds-inline-block`, `ds-flex`, `ds-inline-flex`, `ds-grid`, `ds-hidden`                                                                                                                                                                         |
| Dirección flex             | `ds-flex-row`, `ds-flex-row-reverse`, `ds-flex-col`, `ds-flex-col-reverse`                                                                                                                                                                                              |
| Ajuste y crecimiento flex  | `ds-flex-wrap`, `ds-flex-nowrap`, `ds-flex-1`, `ds-flex-auto`, `ds-flex-none`, `ds-grow`, `ds-grow-0`, `ds-shrink`, `ds-shrink-0`                                                                                                                                       |
| Alineación flex/grid       | `ds-items-start`, `ds-items-center`, `ds-items-end`, `ds-items-stretch`, `ds-justify-start`, `ds-justify-center`, `ds-justify-end`, `ds-justify-between`, `ds-justify-around`, `ds-justify-evenly`, `ds-self-start`, `ds-self-center`, `ds-self-end`, `ds-self-stretch` |
| Columnas grid              | `ds-grid-cols-1`, `ds-grid-cols-2`, `ds-grid-cols-3`, `ds-grid-cols-4`, `ds-grid-cols-none`                                                                                                                                                                             |
| Posicionamiento y overflow | `ds-relative`, `ds-absolute`, `ds-fixed`, `ds-sticky`, `ds-static`, `ds-overflow-auto`, `ds-overflow-hidden`, `ds-overflow-scroll`, `ds-overflow-x-auto`, `ds-overflow-y-auto`                                                                                          |

No se incluirán utilidades de desplazamiento (`top`, `right`, `bottom` o
`left`) en v1 porque el sistema no define una escala de inset.

### Espaciado

La escala permitida es `0`, `1`, `2`, `3`, `4`, `6`, `8`, `12` y `16`, y cada
sufijo referencia `--space-<escala>`.

| Propiedad | Patrón de clase                                                                                                             |
| --------- | --------------------------------------------------------------------------------------------------------------------------- |
| Margin    | `ds-m-<escala>`, `ds-mx-<escala>`, `ds-my-<escala>`, `ds-mt-<escala>`, `ds-mr-<escala>`, `ds-mb-<escala>`, `ds-ml-<escala>` |
| Padding   | `ds-p-<escala>`, `ds-px-<escala>`, `ds-py-<escala>`, `ds-pt-<escala>`, `ds-pr-<escala>`, `ds-pb-<escala>`, `ds-pl-<escala>` |
| Gap       | `ds-gap-<escala>`, `ds-gap-x-<escala>`, `ds-gap-y-<escala>`                                                                 |

No habrá márgenes negativos ni valores arbitrarios. Las utilidades de tamaño
que usan la escala siguen el patrón `ds-w-<escala>`, `ds-h-<escala>`,
`ds-min-w-<escala>`, `ds-min-h-<escala>`, `ds-max-w-<escala>` y
`ds-max-h-<escala>`.

### Dimensiones

Además de las clases de escala, se incluirán:

- `ds-w-auto`, `ds-w-full`, `ds-w-min`, `ds-w-max`, `ds-w-fit`
- `ds-h-auto`, `ds-h-full`, `ds-h-min`, `ds-h-max`, `ds-h-fit`
- `ds-min-w-0`, `ds-min-w-full`, `ds-min-h-0`, `ds-min-h-full`
- `ds-max-w-none`, `ds-max-w-full`, `ds-max-h-none`, `ds-max-h-full`

`full`, `min`, `max`, `fit`, `auto` y `none` representan palabras clave CSS,
no valores de diseño. No se incluirán tamaños viewport o fracciones de
porcentaje hasta que el sistema defina el contrato de layout correspondiente.

### Tipografía

| Grupo              | Clases y tokens                                                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Roles              | `ds-type-caption`, `ds-type-body`, `ds-type-label`, `ds-type-heading-sm`, `ds-type-heading-md`, `ds-type-heading-lg`; aplican `font: var(--type-*)` |
| Familia            | `ds-font-sans`, `ds-font-mono`                                                                                                                      |
| Tamaño             | `ds-text-xs`, `ds-text-sm`, `ds-text-md`, `ds-text-lg`, `ds-text-xl`, `ds-text-2xl`, `ds-text-3xl`, `ds-text-4xl`, `ds-text-5xl`                    |
| Peso               | `ds-font-regular`, `ds-font-medium`, `ds-font-semibold`, `ds-font-bold`                                                                             |
| Altura de línea    | `ds-leading-tight`, `ds-leading-snug`, `ds-leading-normal`, `ds-leading-relaxed`                                                                    |
| Alineación y flujo | `ds-text-left`, `ds-text-center`, `ds-text-right`, `ds-text-justify`, `ds-text-nowrap`, `ds-text-wrap`, `ds-truncate`                               |

`ds-truncate` aplica el grupo inseparable necesario para truncar una línea:
`overflow: hidden`, `text-overflow: ellipsis` y `white-space: nowrap`.

### Color semántico

| Propiedad | Clases                                                                                                                                                                                                   |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fondo     | `ds-bg-canvas`, `ds-bg-surface`, `ds-bg-surface-raised`, `ds-bg-subtle`, `ds-bg-muted`, `ds-bg-inverse`, `ds-bg-brand`, `ds-bg-brand-hover`, `ds-bg-brand-subtle`, `ds-bg-accent`, `ds-bg-accent-subtle` |
| Texto     | `ds-text-primary`, `ds-text-secondary`, `ds-text-muted`, `ds-text-inverse`, `ds-text-on-brand`, `ds-text-on-accent`, `ds-text-brand`, `ds-text-accent`                                                   |
| Borde     | `ds-border-default`, `ds-border-strong`, `ds-border-focus`                                                                                                                                               |

Las clases de color consumen solo tokens semánticos; las paletas primitivas
`--color-*` permanecen internas. Las combinaciones de fondo y texto siguen la
guía de uso de cada token; por ejemplo, `ds-bg-brand` requiere
`ds-text-on-brand`.

### Bordes, radio y elevación

| Grupo                   | Clases                                                                                 |
| ----------------------- | -------------------------------------------------------------------------------------- |
| Ancho y estilo de borde | `ds-border`, `ds-border-0`, `ds-border-t`, `ds-border-r`, `ds-border-b`, `ds-border-l` |
| Radio                   | `ds-radius-none`, `ds-radius-sm`, `ds-radius-md`, `ds-radius-lg`, `ds-radius-full`     |
| Elevación               | `ds-shadow-none`, `ds-shadow-sm`, `ds-shadow-md`, `ds-shadow-lg`                       |

Las clases direccionales de borde establecen `border-*-width: 1px`, igual que
la clase `ds-border`. Este ancho es una constante estructural, no un valor de
presentación configurable; el color se elige explícitamente con una clase
`ds-border-*`.

## Ejemplo

```tsx
<section className="ds-flex ds-flex-col ds-gap-4 ds-p-6 ds-bg-surface ds-radius-lg ds-shadow-sm">
  <h2 className="ds-type-heading-sm ds-text-primary">Resumen</h2>
  <p className="ds-type-body ds-text-secondary">
    Contenido compuesto con tokens del sistema de diseño.
  </p>
</section>
```

## Organización e integración previstas

La implementación creará `packages/ui/src/utilities/` con un fichero por
familia (`layout.css`, `spacing.css`, `sizing.css`, `typography.css`,
`colors.css` y `borders.css`) y un `index.css` que los importe. El entrypoint
de `packages/ui/src/index.ts` importará ese índice después de
`tokens/index.css`; por tanto, el artefacto existente `@monorepo/ui/styles`
seguirá siendo la única entrada de estilos pública.

Cada regla debe declarar el token que consume directamente. El orden de
importación se mantendrá estable y se comprobará que las clases del inventario
se incluyan en el CSS generado. La documentación de `@monorepo/ui/styles`
deberá enlazar a esta guía cuando se implemente la librería.

## Criterios de aceptación

1. Un workspace consumidor puede importar solo `@monorepo/ui/styles` y usar
   todas las clases documentadas.
2. Cada utilidad visual generada usa un token existente; no añade valores
   crudos de color, espaciado, tipografía, radio, borde o elevación.
3. No se generan selectores responsive ni de estado en v1.
4. El CSS de producción contiene el prefijo `ds-` en todas las nuevas clases y
   no modifica las APIs existentes de componentes.
5. La batería de validación del monorepo pasa tras añadir las utilidades.
