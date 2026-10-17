# ADR 003: CSS Modules

- Estado: aceptada.
- Contexto: los estilos de componentes deben mantenerse aislados entre workspaces y componentes.
- Decisión: definirlos en `*.module.css` junto al componente.
- Consecuencia: los nombres de clase se encapsulan; los estados y variantes se seleccionan con atributos `data-*`.
