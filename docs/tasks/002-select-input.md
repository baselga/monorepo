# Tarea: `SelectInput` accesible — Completada

## Objetivo

Crear el componente público `SelectInput` en
`packages/ui/src/components/inputs/SelectInput/`. Proporciona exclusivamente
el control de selección: el texto de etiqueta, la ayuda y los mensajes de error
pertenecerán a un componente de formulario compuesto posterior.

> Aunque la petición inicial escribe `SelecInput` para la carpeta, se usará
> `SelectInput` en rutas, archivos, tipos y exportaciones para mantener un
> nombre público consistente.

## API propuesta

La API debe extender las props relevantes de `react-aria-components/Select`,
sin exponer `className` interno, y añadir:

```ts
interface SelectInputProps<T extends object> extends Omit<
  RACSelectProps<T>,
  "className"
> {
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "solid" | "underline";
  loading?: boolean;
  children: ReactNode;
}
```

- `size` tiene como valor predeterminado `"medium"`.
- `variant` tiene como valor predeterminado `"solid"`.
- `loading` tiene como valor predeterminado `false`. Cuando esté activo,
  deshabilita la apertura y la selección, expone el estado ocupado a tecnología
  asistiva y muestra un indicador visual no interactivo.
- No se añade una prop `label`, `description`, `errorMessage`, ni wrappers que
  las rendericen. Quien use el componente debe suministrar un nombre accesible
  mediante `aria-label` o `aria-labelledby`.

## Comportamiento y accesibilidad

- Construir la interacción con los subpaths de React Aria: el disparador,
  valor seleccionado, lista emergente y opciones deben preservar los patrones
  de `Select`, `ListBox` y `Option` de la librería.
- Debe poder abrirse, recorrerse, seleccionar una opción y cerrarse tanto con
  puntero como con teclado. Al cerrarse, el foco vuelve al disparador.
- Debe comunicar correctamente su rol, nombre accesible, valor actual, estado
  expandido, estado deshabilitado y estado ocupado durante la carga.
- No bloquear el foco ni ocultar información relevante con el indicador de
  carga. El indicador decorativo debe quedar fuera del árbol accesible si el
  estado ocupado ya está anunciado por el control.
- Respetar `isDisabled` de React Aria. `loading` e `isDisabled` impiden toda
  interacción sin sustituir ni alterar el valor seleccionado.

## Diseño

- Reflejar `size`, `variant`, `loading` y los estados de React Aria con
  atributos `data-*` y estilarlos únicamente desde un CSS Module.
- Los tamaños deben usar exactamente las alturas mínimas ya establecidas por
  `TextInput` y `Button` para `small`, `medium` y `large`. Así, un
  `SelectInput` y un `Button` del mismo tamaño se alinean en altura.
- `solid`: fondo `--bg-surface` y borde completo con los tokens de borde
  existentes.
- `underline`: fondo transparente, sin bordes laterales ni superior y solo
  `border-bottom`; sin radio.
- Usar exclusivamente tokens semánticos existentes para color, espaciado,
  tipografía, radio, transiciones y foco. Incluir estados hover y foco visible
  equivalentes a `TextInput`.

## Entregables

1. `packages/ui/src/components/inputs/SelectInput/SelectInput.tsx`.
2. `packages/ui/src/components/inputs/SelectInput/SelectInput.module.css`.
3. Exportación desde `packages/ui/src/index.ts`.
4. Demo del componente en `apps/ui-dev` si el playground mantiene una sección
   de controles de entrada.
5. `packages/ui/tests/components/SelectInput.test.tsx`.

## Criterios de aceptación

- El control se renderiza con un nombre accesible y expone las variantes
  predeterminadas `data-size="medium"` y `data-variant="solid"`.
- Los tres tamaños tienen la misma altura computada que `Button` con el mismo
  `size`.
- Las variantes `solid` y `underline` aplican su estructura de fondo y borde
  indicada, sin valores visuales crudos.
- Una persona usuaria puede seleccionar una opción mediante clic y mediante
  teclado; el valor y los callbacks de selección se actualizan correctamente.
- El control deshabilitado y el que está cargando no abren la lista ni cambian
  su valor, y sus estados se anuncian de forma accesible.
- No existe API ni marcado de etiqueta, descripción o error dentro de
  `SelectInput`.
- `npm run check` finaliza correctamente.
