# Tokens

## Tipografía

Los tokens `--font-*` definen familias, tamaños y pesos; `--line-height-*` define las alturas de línea. Los tamaños usan `rem` con una raíz de 16 px:

| Token             | Valor      | Equivalencia |
| ----------------- | ---------- | ------------ |
| `--font-size-xs`  | `0.75rem`  | 12 px        |
| `--font-size-sm`  | `0.875rem` | 14 px        |
| `--font-size-md`  | `1rem`     | 16 px        |
| `--font-size-lg`  | `1.125rem` | 18 px        |
| `--font-size-xl`  | `1.25rem`  | 20 px        |
| `--font-size-2xl` | `1.5rem`   | 24 px        |
| `--font-size-3xl` | `1.875rem` | 30 px        |
| `--font-size-4xl` | `2.25rem`  | 36 px        |
| `--font-size-5xl` | `3rem`     | 48 px        |

Las familias sans y mono usan stacks del sistema. Los pesos disponibles son `regular` (400), `medium` (500), `semibold` (600) y `bold` (700). Las alturas de línea son `tight` (1.2), `snug` (1.35), `normal` (1.5) y `relaxed` (1.65).

Los tokens `--type-*` son shorthands CSS para roles comunes:

| Token               | Composición          | Uso sugerido                 |
| ------------------- | -------------------- | ---------------------------- |
| `--type-caption`    | regular, xs, normal  | Metadatos y ayudas           |
| `--type-body`       | regular, md, normal  | Párrafos y contenido general |
| `--type-label`      | medium, sm, snug     | Labels y controles           |
| `--type-heading-sm` | semibold, xl, snug   | Encabezados de sección       |
| `--type-heading-md` | semibold, 2xl, tight | Encabezados de página        |
| `--type-heading-lg` | bold, 3xl, tight     | Títulos principales          |

Aplicar los roles con la propiedad `font`, por ejemplo `font: var(--type-body)`. Para necesidades específicas, combinar los tokens base en vez de añadir variantes por componente.

## Espaciado

Los tokens `--space-*` definen una escala de base 4 px (asumiendo una raíz de 16 px):

| Token        | Valor     | Equivalencia |
| ------------ | --------- | ------------ |
| `--space-0`  | `0`       | 0 px         |
| `--space-1`  | `0.25rem` | 4 px         |
| `--space-2`  | `0.5rem`  | 8 px         |
| `--space-3`  | `0.75rem` | 12 px        |
| `--space-4`  | `1rem`    | 16 px        |
| `--space-6`  | `1.5rem`  | 24 px        |
| `--space-8`  | `2rem`    | 32 px        |
| `--space-12` | `3rem`    | 48 px        |
| `--space-16` | `4rem`    | 64 px        |

Usar estos tokens para márgenes, padding, gaps y dimensiones de separación. Los saltos en la numeración evitan proliferar variantes y dejan espacio para ampliar la escala si hace falta.

## Radios

Los tokens `--radius-*` definen la escala de redondeo de esquinas:

| Token           | Valor     | Equivalencia | Uso sugerido                    |
| --------------- | --------- | ------------ | ------------------------------- |
| `--radius-none` | `0`       | 0 px         | Esquinas rectas                 |
| `--radius-sm`   | `0.25rem` | 4 px         | Controles compactos             |
| `--radius-md`   | `0.5rem`  | 8 px         | Componentes estándar            |
| `--radius-lg`   | `0.75rem` | 12 px        | Superficies con más presencia   |
| `--radius-full` | `9999px`  | —            | Píldoras y elementos circulares |

Usar estos tokens para `border-radius` en componentes y superficies.

## Elevación

Los tokens `--shadow-*` definen una escala de sombras con un color adaptado al tema:

| Token         | Uso sugerido                                |
| ------------- | ------------------------------------------- |
| `--shadow-sm` | Controles y superficies con elevación sutil |
| `--shadow-md` | Menús y popovers                            |
| `--shadow-lg` | Diálogos y superficies de mayor elevación   |

## Movimiento

Los tokens `--duration-*` definen duraciones y `--ease-*` curvas para transiciones y animaciones. Usar `fast` para estados de controles, `standard` para cambios habituales y `slow` para movimientos más visibles. Con `prefers-reduced-motion: reduce`, las duraciones pasan a `0ms`.

## Capas

Los tokens `--z-*` ordenan elementos superpuestos. Los valores dejan intervalos para ampliar la escala si aparecen nuevas capas:

| Token          | Valor | Uso sugerido       |
| -------------- | ----- | ------------------ |
| `--z-base`     | 0     | Contenido normal   |
| `--z-sticky`   | 10    | Elementos sticky   |
| `--z-dropdown` | 20    | Menús y dropdowns  |
| `--z-overlay`  | 30    | Fondos de overlays |
| `--z-modal`    | 40    | Diálogos y modales |
| `--z-toast`    | 50    | Notificaciones     |
| `--z-tooltip`  | 60    | Tooltips           |

Los niveles no escapan de un _stacking context_ ancestro; mantener relacionados los elementos que necesitan compartir orden.

## Colores

Dos capas:

- **Primitivas** ([colors.css](colors.css)): escalas `--color-mist-*`, `--color-teal-*`, `--color-amber-*`.
- **Semánticas** ([palette.css](palette.css)): `--bg-*`, `--text-*`, `--border-*`. Soportan modo claro y oscuro con `light-dark()`.

Los componentes usan solo tokens semánticos, nunca `--color-*` directamente.

## Fondos

| Token                 | Uso                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------- |
| `--bg-canvas`         | Fondo de la página (`body`, raíz de la app).                                                |
| `--bg-surface`        | Superficies sobre el canvas: cards, paneles, inputs, sidebars.                              |
| `--bg-surface-raised` | Superficies elevadas: modales, popovers, dropdowns, tooltips.                               |
| `--bg-subtle`         | Zonas secundarias: cabeceras de tabla, hover de filas o items, bloques de código.           |
| `--bg-muted`          | Elementos desactivados, skeletons, pistas de scroll o sliders, badges neutros.              |
| `--bg-inverse`        | Elementos de alto contraste: tooltips oscuros, snackbars. Lleva `--text-inverse`.           |
| `--bg-brand`          | Acción principal: Button primary, switch activo, checkbox marcado. Lleva `--text-on-brand`. |
| `--bg-brand-hover`    | Hover o active de lo que usa `--bg-brand`.                                                  |
| `--bg-brand-subtle`   | Marca suave: item seleccionado, badge informativo, banner destacado. Lleva `--text-brand`.  |
| `--bg-accent`         | Llamadas de atención puntuales: badge "nuevo", destacados. Lleva `--text-on-accent`.        |
| `--bg-accent-subtle`  | Avisos suaves: alertas o banners de aviso. Lleva `--text-accent`.                           |

## Texto

| Token              | Uso                                                                         |
| ------------------ | --------------------------------------------------------------------------- |
| `--text-primary`   | Contenido principal: títulos, párrafos, valores de inputs.                  |
| `--text-secondary` | Descripciones, labels, subtítulos.                                          |
| `--text-muted`     | Placeholders, metadatos, texto deshabilitado, ayudas.                       |
| `--text-inverse`   | Texto sobre `--bg-inverse`.                                                 |
| `--text-on-brand`  | Texto o iconos sobre `--bg-brand`.                                          |
| `--text-on-accent` | Texto o iconos sobre `--bg-accent`.                                         |
| `--text-brand`     | Links, tabs activos, botones ghost o text, texto sobre `--bg-brand-subtle`. |
| `--text-accent`    | Texto sobre `--bg-accent-subtle`.                                           |

## Bordes

| Token              | Uso                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------- |
| `--border-default` | Divisores y bordes de cards e inputs en reposo.                                         |
| `--border-strong`  | Bordes de inputs en hover, separadores con más énfasis, outline de botones secundarios. |
| `--border-focus`   | Anillo de foco (`:focus-visible`).                                                      |

## Reglas

- Combinar siempre el fondo con su texto: `brand` con `on-brand`, `accent` con `on-accent`, `inverse` con `text-inverse`. Los `*-subtle` van con `text-brand` o `text-accent`.
- Para jerarquía de texto sobre neutros, usar `primary`, `secondary` y `muted`.
- Los nombres indican el rol, no el color: cambiar de paleta no requiere tocar componentes.
