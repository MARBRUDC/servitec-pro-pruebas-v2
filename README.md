# SERVITEC PRO V13.28.4 FIRMAS EN ACTA Y EJECUCIÓN

Base limpia estable para Vercel con módulo real de usuarios, roles y permisos por módulo.

## Incluye
- Arquitectura estática compatible con Vercel: `src/` + `dist/`.
- Cotizaciones con tipo de servicio separado de configuración.
- Correlativos reales por empresa: si colocas 206, genera COT-2026-0206.
- PDF de cotización con empresa activa, logo, firma y marca de agua.
- Ejecución por actividad con estado, comentario, recomendación y evidencias antes/durante/después.
- Acta e informe separados.
- Usuarios con empresa asignada, rol, estado y permisos por módulo.
- Roles base: ADMIN, GERENTE, OPERADOR, TECNICO, LECTURA.
- Auditoría básica de acciones.
- Exportar/importar respaldo JSON.

## QA mínimo antes de usar datos reales
1. Confirmar header V13.28.4.
2. Crear empresa y configurar correlativo 206.
3. Crear cliente, establecimiento y área.
4. Crear cotización y verificar COT-2026-0206.
5. Probar PDF.
6. Crear usuario TECNICO y verificar que no vea costos/configuración/usuarios.


## V13.28.4
- Firmas manuscritas en ejecución para responsable de área usuaria y técnico.
- Acta imprime firma del área usuaria, firma del técnico y firma institucional de empresa contratista.
