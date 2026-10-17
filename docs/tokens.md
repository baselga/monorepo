# Tokens

Los tokens se cargan desde `packages/ui/src/tokens/index.css`. Los componentes deben usar los tokens semánticos en vez de valores visuales crudos. Esta guía resume nombres y usos; las definiciones están en los ficheros fuente enlazados.

| Familia         | Nombres                                                                                                                                        | Uso                                                             |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Color primitivo | `--color-neutral-*`, `--color-primary-*`, `--color-secondary-*`                                                                                | Paletas base; no consumir directamente desde componentes.       |
| Fondo           | `--bg-canvas`, `--bg-surface`, `--bg-surface-raised`, `--bg-subtle`, `--bg-muted`, `--bg-inverse`, `--bg-brand*`, `--bg-accent*`               | Canvas, superficies, estados sutiles y fondos de marca/acento.  |
| Texto           | `--text-primary`, `--text-secondary`, `--text-muted`, `--text-inverse`, `--text-on-brand`, `--text-on-accent`, `--text-brand`, `--text-accent` | Texto según jerarquía y fondo.                                  |
| Borde           | `--border-default`, `--border-strong`, `--border-focus`                                                                                        | Separadores, contornos y foco.                                  |
| Espaciado       | `--space-*`                                                                                                                                    | Gaps, padding y separación.                                     |
| Tipografía      | `--font-*`, `--line-height-*`, `--type-*`                                                                                                      | Familias, pesos, alturas de línea y roles tipográficos.         |
| Radio           | `--radius-*`                                                                                                                                   | Redondeo de superficies y controles.                            |
| Elevación       | `--shadow-*`                                                                                                                                   | Sombras de superficies elevadas.                                |
| Movimiento      | `--duration-*`, `--ease-*`                                                                                                                     | Duración y curvas de transiciones; respeta movimiento reducido. |
| Capas           | `--z-*`                                                                                                                                        | Orden de overlays, menús, modales y elementos flotantes.        |

Los colores semánticos se adaptan al tema claro/oscuro. Para consultar el detalle existente, revisa [tokens/README.md](../packages/ui/src/tokens/README.md) y sus ficheros enlazados allí.
