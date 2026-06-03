# SERVITEC PRO V13.26.4 - Ejecución por actividad y documentos diferenciados

Arquitectura corregida:

- Código fuente frontend en `src/`.
- Producción en `dist/`.
- Vercel publica únicamente `dist/`.
- No existe `main.js` ni `server.js` en raíz para evitar que Vercel lo ejecute como función Node.
- `local-server.cjs` es solo para pruebas locales.

## Deploy recomendado en Vercel

- Framework Preset: Other / Node detectado está bien.
- Build Command: `npm run build`
- Output Directory: `dist`
- Variables opcionales: `VITE_SUPABASE_URL`, `VITE_SUPABASE_KEY`

## QA mínimo antes de usar datos reales

1. Abrir app sin error 500.
2. Crear 1 cliente demo.
3. Crear cotización: 1 equipo + 1 actividad + 1 repuesto.
4. Editar cotización y confirmar que no se duplica.
5. Ejecutar con OS/OC y SIAF.
6. Verificar acta con actividad y repuesto.
7. Verificar informe técnico.
