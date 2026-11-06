# Portada de Ovación — propuesta por revisar

La ruta [`/deportes`](<./app/(sitio)/deportes/page.tsx>) extiende la identidad
deportiva de Ovación a una portada propia. La composición desktop se está
calibrando; mobile conserva una versión previa y todavía requiere una revisión
específica. Ninguna de las dos está aprobada como diseño final.

## Desktop desde 1024 px

- El lienzo `#f1f5f9` rodea un panel editorial `#111827`. El logo de Ovación
  aparece centrado; debajo se muestra la agenda externa de DataFactory, sin
  rótulo visible.
- En la primera página, la apertura ocupa ocho de doce columnas. Tiene foto
  4:3, categoría, título y firma, sin bajada visible. Debajo se distribuyen
  ocho notas en dos columnas, con fotos 4:3 arriba y títulos debajo.
- Las cuatro columnas derechas muestran «Más leídas», una lista visual de cinco
  notas numeradas con foto; después, un anuncio de muestra y una tabla de
  posiciones. Una línea separa este lateral de la apertura.
- La tabla de posiciones es una maqueta local con dos grupos de quince equipos.
  Usa `#d1222a` en los puestos y los puntos, y se desplaza dentro de su área.
  Los equipos y puntos son fijos: **no representan posiciones actuales**.
- Al pie de la primera página aparecen diez notas en dos columnas, con texto
  a la izquierda y foto 4:3 a la derecha. La segunda página conserva el logo y
  muestra doce notas en tres columnas. Estas reutilizan las cards con foto 4:3
  arriba del listado situado bajo la apertura. La paginación enlaza ambas
  páginas; la segunda abre desde el inicio para mostrar el logo.

## Mobile hasta 1023 px

La composición vigente mantiene logo, cinta de disciplinas, agenda, principal
y tres destacadas. La cinta se detiene cuando el usuario prefiere movimiento
reducido. El listado inferior y la paginación de desktop no se muestran. La
segunda página conserva por ahora esa misma composición mobile; su adaptación
se abordará después de cerrar las pruebas desktop.

## Contenido e interacción

- Los titulares y las bajadas de prueba salen de
  [`typography-calibration.ts`](./app/content/typography-calibration.ts).
  Noticias, fotografías, firmas y anuncio son muestras. Las cards editoriales
  aún no enlazan a detalles de nota.
- La agenda sí inserta el widget de DataFactory y conserva la interacción que
  provee ese servicio. «Más leídas» no usa métricas reales. La tabla de
  posiciones usa datos fijos y escudos externos de muestra.
- La selección editorial de prueba se prepara en
  [`deportes-wrapper.tsx`](./app/components/deportes/deportes-wrapper.tsx).
  Esta propuesta no define el CMS futuro ni una fuente de datos de producción.
