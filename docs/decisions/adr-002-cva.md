# ADR 002: Variantes tipadas

- Estado: aceptada.
- Contexto: los componentes pueden ofrecer combinaciones de variantes y tamaños.
- Decisión: mantener las variantes en props tipadas y reflejarlas como atributos `data-*`; CVA está disponible para componer clases cuando sea útil.
- Consecuencia: el CSS Module selecciona las variantes declaradas sin clases globales ni valores de variante sin tipar.
