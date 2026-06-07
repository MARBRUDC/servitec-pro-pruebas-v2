# SERVITEC PRO V13.25.6 FIX BUCLE EJECUCIÓN

Corrección crítica sobre V13.25.5:

- Corrige "Maximum call stack size exceeded".
- Elimina bucle de recálculo en Cotizaciones/Ejecución.
- Recalcula totales sin llamar qtotal dentro de qtotal.
- Sanea cotizaciones sin activar funciones recursivas.
- Ejecución vuelve a abrir.
- Si un registro sigue incompleto, muestra lista básica recuperable.

Mantiene:
- Usuarios y roles.
- Cotizaciones.
- Ejecutar.
- Documentos por estado.
- Venta con OS/OC y SIAF.
- Correlativos.

Archivos incluidos:
- build.js
- index.html
- main.js
- package.json
- README.md
- server.js
- styles.css
- supabase-schema.sql
