# Testing

La biblioteca usa Vitest, jsdom y Testing Library. Los tests viven en `packages/ui/tests/`; `tests/setup.ts` registra `jest-dom` y limpia el DOM después de cada prueba.

## Patrones

- Consulta elementos por rol y nombre accesible con `screen.getByRole`; evita selectores ligados a la estructura interna.
- Usa `userEvent.setup()` y `await user.click`, `user.keyboard` o `user.tab` para probar interacciones como una persona usuaria.
- Comprueba salidas observables: contenido, atributos accesibles/de estado, foco y callbacks.
- Cubre el renderizado predeterminado, las variantes relevantes, interacciones de puntero/teclado y estados como disabled o loading.
- Usa `vi.fn()` para callbacks y verifica número de invocaciones y que no se invoquen en estados no interactivos.
- Mantén las pruebas enfocadas en comportamiento; no fijes detalles internos de CSS ni uses snapshots para sustituir assertions.

## Comandos

- Tests: `npm run test:run -w @monorepo/ui`
- Tipos: `npm run typecheck`
- Lint de cambios: `npx eslint <ficheros>`

Consulta [Button.test.tsx](../packages/ui/tests/components/Button.test.tsx) como ejemplo ejecutable.
