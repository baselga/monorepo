# Mantenimiento del harness

## Mejoras durante el trabajo

- Si el mismo error de un agente se repite en dos tareas independientes, añade una regla breve al `AGENTS.md` o a la skill más específica. Antes, comprueba que no exista ya una instrucción equivalente; después, valida que la nueva regla sea concreta y aplicable.
- Tras sesiones relevantes (error repetido, retrabajo notable, falta de una instrucción o un control que no detectó un fallo), revisa la sesión con la skill `retro`. Prioriza por impacto y frecuencia; aplica solo mejoras de severidad alta, y no añadas reglas especulativas por un incidente aislado.
- Para cambios en instrucciones, skills o verificaciones, comprueba los enlaces y comandos afectados y ejecuta la validación correspondiente. No conviertas preferencias puntuales en reglas generales.

Se considera alta severidad un problema que causó un resultado incorrecto, una verificación fallida o retrabajo sustancial, y cuya mejora está respaldada por evidencia de la sesión. Los ajustes de estilo y las optimizaciones menores se pueden informar, pero no se aplican como parte de la retrospectiva.

## Revisión periódica

Cada tres meses y antes de cambios importantes del harness:

1. Comprueba que las rutas, comandos, herramientas y convenciones mencionados siguen vigentes.
2. Elimina o corrige instrucciones obsoletas, duplicadas o que no cambian el comportamiento.
3. Conserva las guías de contexto frecuente breves; deja el detalle en documentación enlazada bajo demanda.

## Medición de tokens

La medición compara el repositorio justo antes del harness (`7592e31`) con el commit que se quiera evaluar. Para cada versión, usa una sesión nueva y los mismos prompts congelados para tres tareas: crear un componente, añadir un token y corregir un bug. Mantén iguales el modelo, sus ajustes y el criterio de aceptación; registra la revisión evaluada, fecha, prompt (o su identificador y hash), tokens de entrada y salida reportados, resultado y número de turnos. Haz tres repeticiones por tarea y compara las medianas. No estimes tokens ni mezcles métricas de proveedores distintos.

Guarda las filas en [agent-token-measurements.csv](metrics/agent-token-measurements.csv). Usa una fila por repetición; `total_tokens` debe ser la suma reportada de entrada y salida. Si la herramienta no ofrece esos contadores, deja la medición pendiente y anota esa limitación, sin rellenar valores supuestos.
