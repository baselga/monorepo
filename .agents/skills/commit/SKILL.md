---
name: commit
description: Prepara un commit solicitado por el usuario con Conventional Commits y alcance claro. Úsala cuando se pida crear o preparar un commit; no hagas commits como parte implícita de otra tarea.
---

# Preparar un commit

1. Crea un commit solo si el usuario lo solicita explícitamente.
2. Revisa `git status --short`, `git diff` y `git diff --cached`. Identifica cambios preexistentes y no los incluyas ni alteres.
3. Confirma que el diff del commit contiene únicamente los cambios autorizados y que las verificaciones apropiadas se han ejecutado. Si el estado staged mezcla cambios ajenos o no está claro qué incluir, detente y consulta al usuario.
4. Usa el formato Conventional Commits `tipo(alcance): resumen`, por ejemplo `feat(ui): añade componente Badge`. Elige el tipo y alcance que describan el cambio; mantén el resumen breve y específico.
5. Prepara únicamente los ficheros autorizados; nunca uses `git add -A` ni incluyas cambios ajenos. Muestra o inspecciona el diff staged antes de confirmar.
6. Crea el commit sin modificar commits anteriores y comunica el hash y el resumen resultantes.
