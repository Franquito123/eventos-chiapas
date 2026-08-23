# Registro de Conflictos (CONFLICT-LOG.md)

## Descripción del Conflicto
- **Archivo involucrado:** `index.html` (Línea del título H1)
- **Ramas en conflicto:** `rama-titulo-a` y `rama-titulo-b`
- **Causa:** Modificación simultánea de la misma línea de código HTML en dos ramas distintas antes de fusionar.

## Solución Aplicada
Se revisaron ambas propuestas en el editor y se definió un título unificado directamente en el archivo.
- **Resultado final:** `<h1>Eventos Chiapas - El Mejor Portal Cultural y Social</h1>`
- **Comando de resolución:** `git add index.html && git commit -m "fix: resolucion de conflicto en titulo de index.html"`