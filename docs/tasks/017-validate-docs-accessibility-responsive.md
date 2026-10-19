# Tarea: validar accesibilidad y diseño responsive

## Objetivo

Verificar que la documentación sea operable por teclado, tenga foco visible y
conserve una estructura clara en escritorio y móvil.

## Alcance

- Recorrer cabecera, búsqueda, selector de tema, navegación, contenido,
  playgrounds y acciones de copiado solo con teclado.
- Comprobar nombres accesibles, landmarks, orden de foco y retorno de foco en
  superficies superpuestas.
- Revisar navegación lateral y tablas/bloques de código en pantallas estrechas.
- Confirmar que los previews usan interacciones reales de los componentes.

## Criterios de aceptación

1. No hay trampas de foco ni controles sin nombre.
2. Los estados de foco se distinguen visualmente mediante tokens existentes.
3. El contenido técnico sigue siendo legible y utilizable en móvil.
4. Las limitaciones de infraestructura se documentan en vez de simularse.

## Dependencias

- `006-add-docs-navigation.md`.
- `007-add-theme-control.md`.
- `008-add-component-search.md`.
- `009-create-foundations-pages.md`.
- `011-build-button-reference-page.md`.
- `014-build-text-input-page.md`.
- `015-build-select-input-page.md`.
