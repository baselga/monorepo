---
name: add-token
description: Añade o modifica un token de diseño en la capa correcta de packages/ui, actualizando el índice y la documentación relacionada sin duplicar tokens. Úsala cuando se solicite un nuevo token o cambiar su definición; no para consumir tokens desde un componente.
---

# Añadir un token de diseño

1. Lee `docs/tokens.md` y `packages/ui/src/tokens/README.md`; inspecciona los ficheros fuente para identificar las capas y convenciones actuales.
2. Busca tokens con el mismo significado antes de añadir uno. Reutiliza el existente si cubre el caso; no crees alias o duplicados por conveniencia local.
3. Coloca la definición en el fichero de su familia y capa. Mantén los valores primitivos en las paletas y expón a los componentes los nombres semánticos apropiados.
4. Si se crea un fichero de tokens, impórtalo desde `packages/ui/src/tokens/index.css` siguiendo el orden de capas existente.
5. Actualiza `packages/ui/src/tokens/README.md` para registrar la definición, sus relaciones y usos; actualiza `docs/tokens.md` si cambia la lista resumida de nombres o familias.
6. Revisa consumidores y temas claro/oscuro cuando corresponda. Evita valores visuales crudos en componentes y no cambies tokens ajenos al pedido.
7. Verifica los ficheros afectados con ESLint/Prettier; ejecuta el typecheck y las pruebas aplicables si el cambio afecta código o comportamiento.

## Checklist final

- [ ] No existe ya un token equivalente.
- [ ] Definición en la capa correcta e índice actualizado si hace falta.
- [ ] README de tokens y resumen en `docs/` coherentes.
- [ ] Consumidores y temas relevantes revisados; validaciones comunicadas.
