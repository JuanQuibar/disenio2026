# Portada de sección genérica — diseño aprobado

La ruta [`/portada-seccion`](<./app/(sitio)/portada-seccion/page.tsx>) muestra la
plantilla visual aprobada para portadas de Política, Sociedad, Economía y otras
secciones generales. La aprobación comprende **desktop y mobile**, con cambio
de composición en 1024 px. «Nombre sección» es un rótulo de muestra: la maqueta
no permite elegir todavía una sección real.

**Capturas de la implementación aprobada (2026-10-26):**
[mobile, 412 px](./docs/portada-seccion/mobile.webp) ·
[desktop, 1440 px](./docs/portada-seccion/desktop.webp).

## Composición compartida

- Un cabezal identifica la sección; la nota principal aparece primero y el
  listado paginado continúa debajo, sin un segundo cabezal «Principales».
- Desktop y mobile muestran la **misma selección editorial**: una nota principal
  y diez notas por página. Cambia la presentación, no el contenido. La muestra
  contiene dos páginas y la paginación funciona mediante `?pagina=2`.
- Titulares y bajadas usan las variantes largas de
  [`typography-calibration.ts`](./app/content/typography-calibration.ts) para
  comprobar la lectura en ambos anchos. Los textos, firmas, fotos y anuncios
  son muestras, no contenido final.

## Desktop · desde 1024 px

- Lienzo de hasta 1360 px, con una grilla de **8 columnas editoriales y 4 de
  lateral**, separadas por 24 px en el ancho de referencia. El cabezal ocupa
  solo las ocho columnas editoriales; los anuncios quedan fuera de él.
- Cabezal «Nombre sección» en Geist, mayúsculas, peso 800 y 36 px, en azul
  `#1c69a8`, con una línea horizontal de 2 px del mismo color.
- La nota principal toma el formato de Apertura de la home: foto horizontal
  16:9, titular Playfair Display, bajada y firma con ícono. No tiene volanta.
- El listado forma **dos columnas por cinco filas**. Cada tarjeta incluye foto
  4:3, titular, bajada y firma; no muestra volanta ni título de módulo. La
  paginación aparece después de las diez tarjetas.
- El lateral reserva **dos anuncios de 300 × 250 px** en un bloque sticky. Son
  espacios publicitarios de muestra, sin carga de anuncios reales.

## Mobile · hasta 1023 px

- El contenedor blanco que une cabezal y notas comienza **16 px debajo** de la
  línea blanca del header, como la tarjeta LIVE de la home. Mantiene 8 px de
  margen lateral.
- El cabezal tiene 8 px de padding, sin altura mínima sobrante. El nombre usa
  Geist en mayúsculas, peso 800 y **20 px**, en `#1c69a8`, sobre blanco; una
  línea azul de 2 px cierra el cabezal.
- La nota principal sigue el formato mobile de la nota principal de Política
  en la home: foto primero, titular Playfair Display, bajada y firma. No lleva
  volanta.
- El listado se apila en diez filas. **Títulos y firmas a la izquierda;
  fotos a la derecha**, recortadas a 4:3 (96 × 72 px). No muestra volantas ni
  bajadas. Cada fila tiene 16 px de espacio vertical por lado y una división
  fina respecto de la siguiente. La paginación aparece al final.
- El lateral publicitario desktop no se muestra en mobile.

## Alcance funcional del prototipo

Las tarjetas presentan pistas visuales de interacción, pero **no enlazan aún a
notas de detalle**. La paginación sí cambia entre las dos selecciones de muestra.
La fuente de contenido está en
[`portada-seccion-wrapper.tsx`](./app/components/portada-seccion/portada-seccion-wrapper.tsx);
la vista está en
[`portada-seccion.tsx`](./app/components/portada-seccion/portada-seccion.tsx)
y sus estilos en
[`portada-seccion.css`](./app/components/portada-seccion/portada-seccion.css).
Esta ficha describe la página pública aprobada y no define tecnología ni
pantallas del CMS futuro.
