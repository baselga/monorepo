# Tarea: revisar el modelo de documentación de API

## Objetivo

Determinar cómo minimizar la duplicación de datos entre las props públicas y
las tablas de API sin introducir automatización que produzca documentación
incompleta o incorrecta.

## Alcance

- Evaluar un extractor local basado en el compilador TypeScript ya presente
  para nombres, opcionalidad y uniones literales.
- Identificar información que no puede derivarse hoy: descripciones,
  defaults de parámetros y semántica de props heredadas.
- Proponer JSDoc o metadatos tipados mínimos para esa información editorial.
- Solicitar aprobación antes de añadir una herramienta como TypeDoc.

## Restricciones

- No afirmar que un tipo heredado de React Aria tiene semántica propia.
- No generar tablas con defaults inferidos si el código no los expone de forma
  segura.

## Criterios de aceptación

1. La decisión diferencia hechos derivados, metadatos mantenidos y enlaces a
   documentación externa.
2. La propuesta no requiere dependencias nuevas sin aprobación.
3. El modelo elegido mantiene una fuente de verdad por dato.

## Dependencias

- `003-export-public-prop-types.md`.
