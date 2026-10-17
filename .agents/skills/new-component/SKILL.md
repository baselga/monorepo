---
name: new-component
description: Añade un componente público reutilizable a packages/ui siguiendo sus convenciones de código, estilos, tests, exportación y demo. Úsala cuando se solicite crear un componente de la biblioteca; no para cambios limitados a una demo existente.
---

# Crear un componente UI

1. Lee `packages/ui/AGENTS.md` y `docs/ui-components.md`. Usa Button como referencia, no como API para copiar.
2. Confirma el nombre, propósito, estados e interacciones requeridos; reutiliza componentes y patrones existentes cuando encajen.
3. Crea `packages/ui/src/components/<Nombre>/<Nombre>.tsx` y su CSS Module. Tipifica las props, usa React Aria desde su subpath correspondiente, variantes `data-*` y tokens semánticos.
4. Añade pruebas en `packages/ui/tests/components/<Nombre>.test.tsx` para renderizado, interacciones y estados relevantes.
5. Exporta el componente desde `packages/ui/src/index.ts`.
6. Añade una demo enfocada en `apps/ui-dev/src/` cuando ayude a mostrar variantes o interacciones.
7. Ejecuta las verificaciones apropiadas según `.agents/skills/verify/SKILL.md` e informa de cualquier limitación.

## Checklist final

- [ ] Archivos del componente y estilos en su carpeta, sin CSS global ni valores visuales crudos.
- [ ] Pruebas cubren el comportamiento solicitado.
- [ ] Exportación pública y demo, si procede.
- [ ] Verificaciones completadas y resultado comunicado.
