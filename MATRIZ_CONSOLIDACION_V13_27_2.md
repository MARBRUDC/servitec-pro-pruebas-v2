# MATRIZ CONSOLIDACIÓN SERVITEC PRO V13.27.2

## Bloque corregido
- Versionado real sincronizado: README, src, dist, index y cache-buster en V13.27.2.
- Almacenamiento unificado con migración desde:
  - servitec_pro_state_v1327
  - servitec_pro_state_v1317
  - servitec_v139
- Persistencia redundante en las tres claves para que las versiones no aparezcan vacías.
- Correlativo por empresa como siguiente número a emitir: 206 => COT-2026-0206.
- PDF toma empresa activa/empresa de la cotización, no empresas[0].
- PDF compacto con logo, firma y marca de agua.
- Exportar e importar respaldo JSON desde Configuración.

## Pruebas obligatorias antes de datos reales
1. Abrir app y verificar encabezado V13.27.2.
2. Dashboard debe mostrar empresa activa recuperada si existe respaldo.
3. Configuración: colocar correlativo cotización 206.
4. Crear cotización nueva y confirmar COT-2026-0206.
5. Editar la cotización y confirmar que NO cambia el correlativo.
6. Generar PDF.
7. Exportar respaldo JSON.
