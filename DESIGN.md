# DESIGN.md — Diario UNO 2026

> Sistema de diseño extraído del prototipo mobile existente.
> Consumidores previstos: **Google Stitch**, agentes de IA, diseñadores.

> [!IMPORTANT]
> La base de este documento corresponde a mobile (viewport ~414px). Las
> decisiones desktop ya aprobadas se registran explícitamente y prevalecen desde
> 1024 px sin reemplazar la especificación mobile.
>
> Desde el 2026-10-17, `/desktop` no es fuente de verdad, referencia ni criterio
> de aceptación de la home integrada. Su tarea alternativa ya comenzó: parte de
> una réplica HTML visual y congelada de `/` desde 1024 px, sin hidratación ni
> handlers React, y puede divergir de forma independiente. La etapa 5 se cerró
> el 2026-10-19 tras el cotejo con la publicación y el MCP oficiales de Stitch;
> su resultado aprobado queda registrado en este documento.
>
> **Excepción cerrada:** por instrucción explícita, Ovación adoptó una línea
> visual propia basada únicamente en su variante aprobada de `/desktop`. Está
> implementada en mobile y desktop de la home real, no será adaptada a Stitch y
> queda fuera del alcance de la etapa 5. Esta excepción no se extiende a ninguna
> otra sección de `/`. Para `/opcion-2`, la autorización posterior permite usar
> el tramo superior de `/desktop` con las reglas específicas que siguen.

### Segunda home funcional `/opcion-2` — aprobada el 2026-10-19

- Comparte con `/` la home mobile completa, Live/Muy Destacada y todos los
  módulos desde MAM, incluido, hasta el footer. Solo cambia el tramo superior
  desktop desde 1024 px; usa componentes React funcionales y wrappers, sin HTML
  capturado. `/desktop` y `/desktop2` conservan sus diseños independientes.
- Mantiene la grilla 8/4 y gap de 24 px en todos los anchos desktop. Apertura
  apila foto 16:9 de alta resolución, título, bajada y meta; oculta cabezal
  interno, volanta y claves. Principales conserva seis cards completas en 2×3.
- El lateral es un panel `#111827` con padding de 24 px y radio de 8 px. Reúne
  AHORA, anuncio Pepsi 300×600 escalado proporcionalmente, encuesta adicional y
  AVANCES DE LA IA. Los cabezales de noticias son blancos; AHORA tiene punto
  rojo y reloj real, mientras IA usa el símbolo azul de tres nodos.
- Siempre se ven **seis titulares de AHORA y cuatro de IA**, desde 1024 px.
  El lateral crece según su contenido, sin ocultar noticias ni recortar filas
  para igualar la altura izquierda. MAM comienza debajo de la columna más alta;
  se acepta espacio libre bajo la izquierda. Esta decisión reemplaza únicamente
  en `/opcion-2` el conteo variable y la altura forzada de la referencia estática.
- AHORA conserva la apariencia de Agencia con pastillas y abre el resumen
  superpuesto. IA no lleva pastillas y despliega el resumen en flujo. Ambos se
  leen en home sin cambiar el tamaño exterior del módulo al abrir/cerrar y
  conservan cierre, Escape y foco. Si un resumen superpuesto es demasiado alto,
  solo su panel permite desplazamiento interno para dejar visible el titular.
- La encuesta lateral comparte pregunta, total y cuatro resultados con la
  principal, que sigue en su ubicación. Su título puede envolver a otra línea
  para no truncarse; `SONDEO EXCLUSIVO` se oculta entre 1024 y 1100 px. No se
  incorpora votación ni historial funcional.
- El header alternativo conserva servicios en el flujo y mantiene sticky la
  fila principal de 57 px al hacer scroll. Hasta 1023 px conserva el header
  mobile; el header de `/` mantiene su comportamiento anterior.
- El usuario aprobó visualmente la implementación después de las validaciones
  técnicas y funcionales. No quedan ajustes visuales pendientes de este tramo.

### Diseño alternativo vigente de `/desktop`

- Desde 1024 px, la fila de servicios del header se desplaza con la página y
  solo la fila principal de 57 px permanece sticky. Al volver al inicio se ven
  nuevamente ambas franjas.
- La composición usa una grilla de doce columnas con gap de 24 px. Apertura y
  Principales ocupan las ocho izquierdas; Agencia abarca las cuatro derechas
  desde el inicio de Apertura hasta el final de Principales.
- Apertura apila foto 16:9, título, bajada y meta. Oculta el cabezal interno,
  volanta y claves, usa 16 px entre foto y título, conserva firma e `INFORME
  ESPECIAL` y emplea una imagen de alta resolución para evitar pixelado.
- Principales presenta sus seis cards estáticas en dos columnas y tres filas,
  con gaps de 24 px y alturas uniformes.
- Agencia reutiliza el HTML estático capturado sobre un panel negro con radio
  exterior de 8 px, igual al contenedor de Apertura. Tras 24 px de espacio
  superior, el cabezal blanco de 26 px deja 24 px a cada lado, usa radio de 6 px
  y presenta en negro el punto rojo, `AHORA` y el reloj decorativo. El listado
  oscuro muestra seis titulares y respeta los mismos márgenes laterales.
- Debajo de Agencia, una tarjeta blanca inset 24 px lleva un separador
  `PUBLICIDAD` y la pieza Pepsi 300×600; en 1024 px se reduce manteniendo ratio
  1:2. Otro separador, `PARTICIPACIÓN`, antecede una copia visual de la encuesta
  con su cabezal original; `SONDEO EXCLUSIVO` se oculta hasta 1100 px. La
  encuesta real conserva su ubicación.
- El lateral cierra con `AVANCES DE LA IA`, que repite el cabezal blanco y el
  listado oscuro de Agencia. Reemplaza el punto rojo por tres nodos conectados
  en `#1c69a8`; las filas conservan volanta, título y fuentes, pero no usan
  pastillas. Para evitar recortes muestra 1, 2, 3 o 4 titulares completos en los
  rangos 1024–1199, 1200–1279, 1280–1365 y desde 1366 px, respectivamente.
  Todo el lateral es estático, sin scroll ni resúmenes interactivos; Timeline
  permanece oculto.
- Ovación usa un único panel `#111827` con padding de 24 px, radio de 8 px y
  texto blanco. El cabezal alinea un logo de 135 px con una cinta deportiva de
  11 px: volantas y puntos rojos avanzan en un loop lineal de 34 segundos, se
  detienen con hover y respetan `prefers-reduced-motion`. Una línea blanca recta
  separa el cabezal del contenido.
- La agenda de Ovación usa el centro deportivo general de DataFactory y oculta
  el rótulo del fixture. El iframe de 90 px queda en un marco gris 200 con 10 px
  de padding y radio de 8 px. La zona editorial conserva principal 4:3 con
  título uppercase 28/34 px y firma, sin bajada; las cuatro filas secundarias
  usan fotos 3:2 y títulos uppercase 16/22 px, o 14/19 px entre 1024–1100 px.
  Todos los títulos llevan volantas rojas y ambas columnas igualan su altura.
- Estas reglas describen el experimento `/desktop`; no son decisiones generales
  de `/` ni de la etapa 5. Ovación conserva su excepción propia y `/opcion-2`
  adapta únicamente el tramo superior según su especificación precedente.

### Ovación integrado — diseño propio fuera de la etapa 5

- La implementación real conserva `OvacionWrapper`, `fetchDeportes()` y los
  componentes existentes. `/desktop` fue una referencia visual excepcional
  solo para este módulo; no se copió su HTML.
- En ambos anchos, todo Ovación vive dentro de un único panel `#111827`, con
  radio de 8 px y textos blancos. El cabezal alinea logo y ticker deportivo CSS
  de 34 segundos, con pausa por hover y respeto de `prefers-reduced-motion`, y
  termina en una línea blanca recta.
- En mobile el panel usa 8 px de padding, el logo mide 96 px y quedan 16 px entre
  la línea del cabezal y DataFactory. Desde 1024 px usa 24 px de padding y logo
  de 135 px.
- La agenda general de DataFactory se muestra en un iframe de 90 px dentro de su
  marco gris. `FIXTURE - PRIMERA A` permanece oculto en ambos anchos.
- La noticia principal conserva foto 4:3 y firma, pero no muestra bajada. Todos
  los títulos son uppercase, blancos y llevan volanta roja; las cuatro noticias
  secundarias y los datos reales se conservan.
- Desde 1024 px rigen además el título principal 28/34 px, las filas secundarias
  iguales con fotos 3:2 y títulos 16/22 px —14/19 px entre 1024 y 1100 px—, y la
  igualdad exacta de altura entre principal y listado.
- Este diseño es la referencia definitiva de Ovación en `/`. El módulo no entra
  en el inventario pendiente, el cotejo ni los criterios de cierre de la etapa
  5 y no debe compararse con Stitch cuando esa etapa se retome.

### Transmisiones y anuncio en la home integrada

- En mobile se apilan Canal 7, Radio Nihuil y el anuncio 300×250, en ese orden,
  con los cabezales y las alturas mobile existentes.
- Desde 1024 px comparten una fila: el anuncio reserva 332 px y los streams
  dividen por igual el ancho restante, con gaps de 24 px. Los tres contenedores
  blancos se estiran a la misma altura, determinada por el contenido más alto,
  sin fijar una altura rígida ni deformar los videos 16:9 o la pieza 300×250.
- Los streams usan padding de 16 px y cabezales oscuros con borde superior azul,
  radio de 6 px, texto uppercase de 12/16 px y punto rojo pulsante:
  `CANAL 7 EN VIVO` y `RADIO NIHUIL EN VIVO`. El punto no anima con
  `prefers-reduced-motion`. Los reproductores se centran en el espacio restante.
- Este ajuste no modifica `/desktop` ni cierra la revisión funcional de la
  etapa 7. La presentación visual vigente quedó aceptada con la etapa 5.

### Decisiones desktop aprobadas durante la etapa 5

> **Estado:** las etapas 5 y 6 quedaron cerradas y aprobadas. La presentación
> actual de la home es la línea base visual final de la etapa 5. Los módulos que
> no tuvieron una adaptación específica —incluidos los skeletons desktop— se
> aceptan en su estado vigente y ya no son pendientes visuales. Los modales de
> video recibieron después una variante desktop aprobada, documentada debajo,
> sin reabrir la etapa 5. La revisión funcional de widgets/anuncios permanece en
> la etapa 7 y la validación integral y el cierre, en la etapa 8.

- **Marco desktop de la home:** `max-width: 1360px` y padding horizontal de
  32 px desde 1024 px, equivalente al token `px-margin` de Stitch. A 1440 px el
  ancho útil de los módulos es 1296 px. Mobile conserva 8 px de padding.
- **Muy Destacada:** panel de cobertura con cabezal oscuro y cuerpo 8/4 desde
  1024 px. La columna principal usa el video fijo de Pexels en 16:9, el contenido
  editorial mobile y `EDICIÓN ESPECIAL`; la secundaria contiene dos cards de
  `FOCO DE COBERTURA`. Mobile conserva contenido y orden, pero el video también
  pasa a 16:9.
- **Principales:** seis cards 3×2 desde 1024 px, gap de 24 px y tratamiento
  visual documentado en `PROJECT_CONTEXT.md`.
- **MAM:** panel negro con 24 px de padding; 15 previews 9:16 en grilla estática
  5×3 y gap de 16 px desde 1024 px. No hay carrusel ni autoplay inline en
  desktop; mobile conserva el Swiper y el catálogo completo.
- **Shorts:** desde 1024 px elimina el panel blanco y usa un cabezal oscuro con
  acento rojo, badge `SHORTS`, `CANAL OFICIAL DE YOUTUBE @DIARIOUNO` y flechas
  conectadas al único Swiper. Conserva los 12 ítems y muestra seis cards 9:16
  por vista con gap de 16 px. Los títulos Geist 14/17,5 se superponen en blanco
  sobre degradado, limitados a dos líneas; el badge individual se oculta y el
  thumbnail amplía en hover. Mobile y 1023 px permanecen intactos. No se agrega
  suscripción; el modal usa desde 1024 px la variante desktop compartida.
- **`# A COMER!`/Branded:** desde 1024 px elimina el título y panel blanco
  exteriores y usa un cabezal oscuro con acento azul, logo `# A COMER!`,
  `BRANDED CONTENT • EXPERIENCIAS DE CUYO` y flechas conectadas al único Swiper.
  Conserva los diez videos gastronómicos y muestra seis cards 9:16 por vista con
  gap de 16 px. Los títulos Geist 14/17,5 se superponen en blanco sobre degradado,
  limitados a dos líneas; el video amplía en hover y se mantiene un único autoplay
  muteado. Mobile y 1023 px conservan título, panel, sponsor, densidad 1.2 y
  títulos inferiores. El rótulo del cabezal usa Geist 12/16 px, peso 700 y
  tracking `0.06em`. El modal usa desde 1024 px la variante desktop compartida.
- **Header:** dos franjas con Geist y 94 px totales desde 1024 px cuando la
  página está al inicio. Al hacer scroll se oculta la franja de servicios y solo
  permanece fija la fila principal de 57 px; los 94 px reaparecen exclusivamente
  en `scrollY = 0`. Solo logo, `PORTADA` y transmisiones en vivo son interactivos.
  La transmisión no tiene fondo rojo y conserva el punto rojo pulsante;
  `Suscribite` usa fondo rojo y texto blanco. Home, detalle y su banner fijo
  compensan 94/57 px; mobile y `/desktop` permanecen intactos.
- **Política:** panel blanco con padding de 24 px, cabezal
  `POLÍTICA & GOBIERNO` y cuerpo 7/5 con gap de 32 px desde 1024 px. Conserva
  una principal y cuatro secundarias locales; las columnas tienen igual altura,
  la principal usa foto 3:2 y las secundarias miniaturas 112×112. Mobile
  permanece intacto.
- **Crimen:** reutiliza desde 1024 px el mismo panel y cuerpo 7/5, con cabezal
  `CRIMEN & POLICIALES`, meta `INVESTIGACIÓN Y JUSTICIA` y acento rojo.
  Conserva una principal enlazada y cuatro secundarias locales; ambas columnas
  tienen igual altura y mobile permanece intacto.
- **Sociedad:** reutiliza desde 1024 px el panel y cuerpo 7/5, con cabezal
  `SOCIEDAD & COMUNIDAD` y meta `EDUCACIÓN, SALUD Y CIUDAD`. Distribuye cinco
  noticias locales como una principal y cuatro secundarias con miniaturas
  96×96; ambas columnas tienen igual altura. Mobile también presenta una
  principal y cuatro filas, igual que Política.
- **Gente:** panel blanco con 24 px de padding, cabezal
  `GENTE & CULTURA CUYANA` y meta `PERSONAJES & RETRATOS` desde 1024 px. Las seis
  piezas se distribuyen 3×2 con gap de 24 px; cada retrato 3:4 usa radio de 8 px,
  degradado negro y título completo superpuesto en Playfair Display 700 de
  18/22,5 px. Mobile conserva la grilla 2×3 y los títulos debajo de las fotos.
- **ULTIMATEM:** panel blanco con 24 px de padding, cabezal
  `ULTIMATEM • MÁS NOTICIAS DE CUYO Y EL PAÍS` y meta `ACTUALIZACIÓN CONTINUA`
  desde 1024 px. Las diez noticias se distribuyen en dos columnas de cinco, con
  gap horizontal de 32 px y vertical de 16 px; las cards tonales usan padding de
  8 px, radio de 8 px e imágenes 128×96. Cada título se muestra completo en
  Playfair Display 500 de 18/24 px. Incluye categorías latinas de dos palabras,
  conserva las cuatro firmas locales y presenta un botón de carga estrictamente
  visual, sin paginación ni contenido adicional. Mobile permanece intacto.
- **Gráfico interactivo + Chat Vox Dei:** desde 1024 px forman una fila
  `minmax(0, 1fr) 448px` con gap de 24 px y paneles blancos de igual altura. La
  izquierda conserva el wrapper de Legionarius pero reemplaza sus notas por
  `video_nepal.mp4` en 16:9, autoplay muteado, loop continuo, `playsInline` y
  sin controles; el video solo se monta en desktop. Su cabezal oscuro usa ícono
  de gráfico, `GRÁFICO INTERACTIVO` y el meta aprobado `EDICIÓN ESPCIAL`. El chat
  usa el mismo cabezal con ícono de conversación y `CHAT VOX DEI`; su historial
  hace scroll interno sin cambiar la altura. Mobile conserva las cinco notas,
  el chat de 60vh y Sudoku inmediatamente debajo. Sudoku se oculta desde
  1024 px sin reservar espacio.
- **Reserva para juegos:** solo desde 1024 px, inmediatamente después de Crimen
  y antes de Últimas noticias, se muestra un contenedor blanco
  de ancho completo y 400 px de alto. Centra en ambos ejes, a 24 px, el texto
  `Espacio reservado para juegos. Proyecto en fase de evaluación`. No incluye
  controles ni funcionalidad y no existe visualmente en mobile.
- **Orden central y segundo anuncio:** en mobile y desktop, Encuesta/Senatus,
  Ovación, el segundo anuncio y Sociedad aparecen consecutivamente en ese orden.
  El anuncio conserva el rectángulo animado
  300×250 en mobile. Desde 1024 px adopta el leaderboard premium de Stitch a
  todo el ancho: gradiente horizontal `#1c69a8` / `#0f3d61`, rótulo IAB, título
  Playfair Display de 22/28 px `VENDIMIA CONNECT 2026`, bajada y CTA blanco
  `Reservar Experiencia →`. El CTA es exclusivamente visual.
- **Cursor de acción:** desde 1024 px y solo con puntero fino, las superficies
  visuales aprobadas de Muy Destacada, Principales, MAM, Política, Crimen,
  Sociedad, Gente y ULTIMATEM, junto con el botón visual de carga y los controles
  de presentación del header, usan `cursor: pointer`. No se agregan handlers,
  enlaces ni navegación; las funciones reales preexistentes se preservan.
---

## 🎯 Identidad y filosofía

**Diario UNO** es un medio periodístico digital de Mendoza, Argentina.
El rediseño 2026 busca un tono **premium, creíble y moderno**, con fuerte
presencia de **video vertical** y consumo de contenido directo en la home
(paradigma "Zero-Click", estilo TikTok/Reels).

**Valores de diseño:** Credibilidad · Seriedad · Modernidad.
**Estilo:** Premium, limpio, animaciones suaves.

---

## 🎨 Paleta de colores

### Brand

| Token              | Hex       | Uso                                                |
| ------------------ | --------- | -------------------------------------------------- |
| `brand-blue`       | `#1c69a8` | Color institucional. Logo, acentos, links, encuesta, opinión, sudoku, focus rings. (16 usos en el codebase) |
| `brand-blue-dark`  | `#195f8e` | Sombras del logo SVG.                              |
| `brand-blue-deep`  | `#0f3d61` | Endpoint de degradados en banners publicitarios.   |
| `brand-blue-sky`   | `#3391dd` | Tono evaluado en prototipos previos (comentado).   |

### Fondos

| Contexto            | Clase Tailwind        | Hex       |
| ------------------- | --------------------- | --------- |
| Mobile general      | `bg-black`            | `#000000` |
| Tarjetas y contenedores | `bg-white`        | `#ffffff` |
| Footer              | `bg-gray-800`         | `#1f2937` |
| Contenedores de video | `bg-black`          | `#000000` |
| Celdas sudoku (alt) | `bg-gray-50`          | `#f9fafb` |
| Agenda Ovación      | `bg-gray-50`          | `#f9fafb` |
| Track encuesta      | `bg-gray-100`         | `#f3f4f6` |
| Burbujas bot        | `bg-gray-200`         | `#e5e7eb` |
| Grilla sudoku       | `bg-gray-800`         | `#1f2937` |

### Texto

| Contexto                   | Clase Tailwind        | Hex       |
| -------------------------- | --------------------- | --------- |
| Títulos de noticias        | `text-gray-900`       | `#111827` |
| Cuerpo / copetes           | `text-gray-700`       | `#374151` |
| Datos secundarios          | `text-gray-600`       | `#4b5563` |
| Firmas, metadatos          | `text-gray-500`       | `#6b7280` |
| Etiquetas publicitarias    | `text-gray-400`       | `#9ca3af` |
| Texto sobre fondo negro    | `text-white`          | `#ffffff` |
| Badge LIVE                 | `text-red-600`        | `#dc2626` |
| Dólar / moneda             | `text-emerald-800`    | `#065f46` |
| Flechas financieras        | `text-green-600`      | `#16a34a` |
| Alerta / advertencia       | `text-yellow-500`     | `#eab308` |
| Autor en Opinión           | `text-[#1c69a8]`      | `#1c69a8` |
| Números usuario sudoku     | `text-[#1c69a8]`      | `#1c69a8` |
| Títulos Shorts             | `text-black`          | `#000000` |

### Bordes y separadores

| Contexto                | Clase / Valor              |
| ----------------------- | -------------------------- |
| Separadores de sección  | `border-t-2` + `#ffffff`   |
| Borde tarjeta estándar  | `border-gray-300`          |
| Divisores internos      | `border-b border-gray-200` |
| Cards video MAM/Branded | `border-gray-900`          |
| Cards Shorts            | `border-gray-200`          |
| Cards Opinión           | `border-gray-200`          |
| Live containers         | `border-gray-100`          |
| Avatar Opinión          | `border-2 border-gray-100` |
| Grilla sudoku (frame)   | `border-2 border-gray-800` |
| Textarea chat           | `border-gray-500`          |
| Acento rojo Ovación     | `border-l-4 border-red-600`|

### Rojos (LIVE, badges, deportes)

| Clase              | Hex       | Uso                                 |
| ------------------ | --------- | ----------------------------------- |
| `bg-red-400`       | `#f87171` | Ping animado LIVE (transparente).   |
| `bg-red-500`       | `#ef4444` | Dot LIVE en cabezales, punto sólido.|
| `bg-red-600`       | `#dc2626` | Badge YouTube, play Radio Nihuil, badge EN VIVO, acento Ovación. |
| `text-red-600`     | `#dc2626` | Etiqueta "LIVE" en MuyDestacada.    |

### Translúcidos (Glass / Overlay)

| Clase Tailwind                                          | Uso                              |
| ------------------------------------------------------- | -------------------------------- |
| `bg-black/50 border-white/40 backdrop-blur-sm`          | Botones mute/play sobre video.   |
| `bg-black/60 backdrop-blur-sm`                          | Badge duración, botón cerrar modal.|
| `bg-white/30 border-white/50 backdrop-blur-sm`          | Botón play central Shorts.       |
| `bg-gradient-to-t from-black/80 to-transparent`         | Degradado inferior del modal.    |
| `bg-gradient-to-b from-transparent via-transparent to-black/20` | Sombra inferior en cards.  |
| `bg-gradient-to-t from-black/60 to-transparent`         | Overlay en detalle-nota.         |
| `bg-gradient-to-br from-[#1c69a8] to-[#0f3d61]`        | Banner publicitario.             |
| `bg-gradient-to-r from-transparent via-white/10 to-transparent` | Shimmer del banner.       |

---

## 🔤 Tipografía

### Familias

| Token         | Fuente           | Variable CSS                | Uso                              |
| ------------- | ---------------- | --------------------------- | -------------------------------- |
| `font-serif`  | Playfair Display | `--font-playfair-display`   | Títulos editoriales, h1/h2.      |
| `font-sans`   | Geist            | `--font-geist-sans`         | Cuerpo, badges, UI, bajadas, deportes. |
| `font-mono`   | Geist Mono       | `--font-geist-mono`         | Reservado (código/widgets).      |

**Pesos cargados de Playfair Display:** 400, 500, 700.

### Escala tipográfica completa

| Nombre           | Clase / Regla                                      | Tamaño   | Uso                                           |
| ---------------- | -------------------------------------------------- | -------- | --------------------------------------------- |
| `display`        | `text-4xl font-bold`                               | 36px     | Emoji en banner publicitario.                 |
| `headline-xl`    | `text-2xl font-sans font-bold`                     | 24px     | Texto principal en banner publicitario.        |
| `headline-lg`    | `font-serif font-bold text-[1.5rem]/[1.8rem]`      | 24px     | MuyDestacada (h1), Apertura (h2).             |
| `headline-poll`  | `font-sans text-xl font-bold leading-tight`        | 20px     | Pregunta de encuesta, título sudoku.           |
| `headline-md`    | `font-serif text-lg leading-snug`                   | 18px     | Principal en Política, Crimen, Senatus.       |
| `headline-sport` | `font-sans font-bold text-lg leading-snug`          | 18px     | Principal en Ovación (**sans**, no serif).     |
| `headline-sm`    | `font-serif text-base leading-snug`                 | 16px     | Listado sin fotos, Más noticias.              |
| `headline-opinion`| `font-serif italic text-base leading-tight`        | 16px     | Títulos Opinión (itálica).                    |
| `card-title`     | `font-sans text-sm font-medium leading-snug`        | 14px     | Títulos cards video (MAM, Branded).           |
| `card-title-short`| `font-sans text-sm leading-tight`                  | 14px     | Títulos Shorts (sin font-medium).             |
| `list-title`     | `font-serif text-sm font-medium leading-snug`       | 14px     | Listados editoriales (Política, Crimen, etc.).|
| `list-title-sport`| `font-sans text-sm leading-snug`                   | 14px     | Listado Ovación (**sans**, sin medium).       |
| `bajada`         | `.bajada` → `0.9rem / 1.5`                          | ~14.4px  | Copetes / bajadas.                            |
| `body`           | `text-sm`                                            | 14px     | Cuerpo general, mensajes chat.                |
| `cabezal`        | `.text-cabezal` → `0.75rem`                          | 12px     | Cabezales de sección (uppercase, blanco).     |
| `meta-label`     | `text-xs`                                            | 12px     | Meta-info, clima, badge EN VIVO, encuesta.    |
| `badge`          | `font-sans text-[11px]`                              | 11px     | Badge duración video MAM.                     |
| `byline`         | `font-sans font-bold uppercase text-[10px]`          | 10px     | Firmas de autor en MuyDestacada.              |
| `byline-data`    | `text-[10px]`                                        | 10px     | Datos en widgets (dólar venta/compra), banner.|
| `micro`          | `font-sans font-bold uppercase text-[8px]`           | 8px      | Firmas de autor en listados, categorías.      |

### Reglas tipográficas por sección

| Sección          | Fuente titulares | Notas                                       |
| ---------------- | ---------------- | ------------------------------------------- |
| Noticias generales | `font-serif`   | Política, Crimen, Sociedad, Gente, Senatus, Apertura, Listado sin fotos, Más noticias. |
| Deportes (Ovación) | `font-sans`    | Deliberado: rompe con el tono editorial para dar dinamismo. |
| Video cards      | `font-sans`      | MAM, Shorts, Branded.                      |
| Opinión          | `font-serif italic` | Cursiva para diferenciar del resto.      |

### Forma de titulación aprobada (etapa 6 — 2026-10-15)

La calibración contempla el recorrido editorial de una noticia por la home:
Live/Muy Destacada o Apertura → Principales → principal de sección → listado de
sección → Últimas noticias. Un mismo título debe poder ocupar cualquiera de esas
posiciones sin perder contenido.

- El dataset de maqueta usa diez títulos de 89–91 caracteres y diez bajadas de
  155–165 caracteres, aplicados de forma determinista desde
  `app/content/typography-calibration.ts`.
- Títulos y bajadas se presentan sin punto final.
- Dentro del alcance no se truncan por cantidad de líneas: no usan
  `line-clamp` y deben mostrarse completos. Esta regla reemplaza los límites de
  dos, tres o cuatro líneas aprobados previamente para esos módulos.
- El alcance mobile comprende Muy Destacada, Apertura, Principales, Política,
  Senatus Romano, Sociedad, Listado sin fotos, Ovación, Gente, Crimen y Últimas
  noticias, incluidas sus bajadas cuando existen.
- Desde 1024 px la misma forma de titulación se aplica a todos los módulos
  anteriores que comparten esos datos, aunque su adaptación visual desktop no
  haya sido cerrada en la etapa 5.
- En Principales/`LEGIONARIUS • NOTICIAS DESTACADAS`, las seis cards desktop
  igualan su altura en la grilla 3×2 según la pieza de mayor contenido, sin
  recortar títulos ni bajadas.
- Quedan fuera MAM, Shorts, `# a comer!`/Branded, Opinión, Servicios,
  transmisiones, Chat, Encuesta, Sudoku y el reader de detalle.
- Esta aprobación fija la longitud de prueba, la puntuación terminal y la
  ausencia de truncado. No modifica por sí misma tamaños, familias, pesos,
  estructura, cantidades, comportamiento ni breakpoints; los tamaños se
  calibran por separado durante la etapa 6.

---

## 📐 Espaciado y layout

### Contenedor principal

```
pt-16 flex flex-col p-2 gap-2 min-h-screen mb-7
```

- `pt-16` compensa el header fijo de ~64px.

### Sección estándar (patrón repetido en ~20 secciones)

```
Outer:   mb-4 border-t-2 separadores pb-2 pt-1
Título:  text-cabezal font-sans font-bold uppercase color-cabezal pb-2
Inner:   p-2 pb-4 bg-white rounded-lg shadow-md
```

Variantes:
- Ovación usa `pt-2` (en vez de `pt-1`) y logo SVG en vez de texto.
- Encuesta y Sudoku usan `pb-4` sin `p-2` en el inner (padding propio del card).
- Banner publicitario no tiene separador ni cabezal.

### Gaps recurrentes (por frecuencia)

| Medida         | Ocurrencias | Uso principal                          |
| -------------- | ----------- | -------------------------------------- |
| `gap-1` (4px)  | 18          | Bylines, badges, íconos + texto.      |
| `gap-2` (8px)  | 10          | Wrappers internos, controles modal.    |
| `gap-3` (12px) | 10          | Filas de listado, controles modal.     |
| `gap-4` (16px) | 9           | Grids (Opinión y Servicios).            |
| `gap-px` (1px) | 1           | Grilla del Sudoku (líneas internas).   |
| `16px`         | —           | `spaceBetween` de Swiper en carruseles.|

---

## 🔲 Jerarquía de border-radius

| Nivel           | Clase           | px  | Aplicación                              |
| --------------- | --------------- | --- | --------------------------------------- |
| Extra-large     | `rounded-xl`    | 12  | Live containers (Canal 7, Radio Nihuil).|
| Contenedor      | `rounded-lg`    | 8   | Secciones blancas, cards encuesta/sudoku, chat, widgets. |
| Elemento        | `rounded-md`    | 6   | Tarjetas, imágenes, thumbnails, badges. |
| Mínimo          | `rounded`       | 4   | Badge duración, pills sponsor.          |
| Circular        | `rounded-full`  | 50% | Botones de acción, avatares, dots, LIVE, progress bar. |

---

## 🌑 Sistema de sombras

| Clase            | Ocurrencias | Uso                                     |
| ---------------- | ----------- | --------------------------------------- |
| `shadow-md`      | 42          | Estándar en todas las tarjetas y contenedores. |
| `shadow-lg`      | 10          | Hover en tarjetas (`hover:shadow-lg`), play button, live cards. |
| `shadow-sm`      | 4           | Cards Shorts, badge YouTube, badge EN VIVO. |
| `shadow-inner`   | 1           | Banner publicitario (profundidad interna). |
| `shadow-lg/30`   | 1           | Panel del chat (sombra al 30% opacidad). |

---

## 📚 Capas de z-index

| Valor  | Uso                                               |
| ------ | ------------------------------------------------- |
| `z-50` | Header fijo, modal fullscreen de video.            |
| `z-20` | Badges de alta prioridad (duración MAM, YouTube, mute). |
| `z-10` | Overlays interactivos, botones play, controles modal, barra fija detalle-nota, focus sudoku. |

---

## 📏 Aspect ratios del sistema

### Fotos

| Ratio | Clase            | Componentes                                                      |
| ----- | ---------------- | ---------------------------------------------------------------- |
| 4:3   | `aspect-4/3`     | Apertura, Principales (foto dentro de card), Ovación principal, Más noticias. |
| 3:2   | `aspect-[3/2]`   | Política, Crimen y Sociedad principales; Senatus; Ovación listado (thumbnail `w-30`). |
| 3:4   | `aspect-[3/4]`   | Gente mobile y desktop.    |
| 1:1   | `aspect-square`  | Card contenedor mobile de Apertura y Principales (la foto interna es 4:3; Principales pasa a altura automática desde 1024 px). |

### Videos

| Ratio | Clase            | Componentes                                     |
| ----- | ---------------- | ----------------------------------------------- |
| 9:16  | `aspect-9/16`    | MAM, Shorts y Branded (todos los videos verticales). |
| 16:9  | `aspect-video`   | Muy Destacada, Canal 7 Live y Radio Nihuil Live. |

### Thumbnails en listados

| Dimensión        | Componentes                                      |
| ---------------- | ------------------------------------------------ |
| `w-24 h-24` (96px cuadrado) | Política y Crimen mobile; Sociedad mobile y desktop. |
| `112×112` (cuadrado) | Política y Crimen desktop.                  |
| `w-30 aspect-[3/2]` (~120px) | Ovación listado (más ancho, rectangular). |
| `flex-1 aspect-[4/3]` (50%) | Más noticias (ocupa mitad del ancho). |
| `128×96` (4:3) | ULTIMATEM desktop. |
| `w-20 h-20` (80px circular) | Opinión (avatar `rounded-full`).       |

---

## 🔘 Escala de botones e íconos

| Tamaño ícono | Tamaño botón   | Uso                                   |
| ------------ | -------------- | ------------------------------------- |
| `w-3 h-3`   | —              | Lápiz byline, badge YouTube.          |
| `w-4 h-4`   | `h-8 w-8`     | Mute en tarjeta video.                |
| `w-4 h-4`   | `h-9 w-9`     | Play/pause y mute en modal.           |
| `w-5 h-5`   | `h-10 w-10`   | Cerrar modal.                         |
| `w-6 h-6`   | `h-12 w-12`   | Play central Shorts, hamburguesa, flechas financieras. |
| `w-8 h-8`   | `w-16 h-16`   | Play Radio Nihuil (grande, rojo).     |
| `w-14 h-12` | —              | Ícono clima (`/clima.png`).           |

---

## 🔄 Animaciones y transiciones

| Nombre              | Regla                                               | Duración | Uso                             |
| ------------------- | --------------------------------------------------- | -------- | ------------------------------- |
| `shadow-lift`       | `transition-shadow duration-300 hover:shadow-lg`     | 300ms    | Hover en tarjetas (6 usos).    |
| `play-scale`        | `transition-transform duration-300 scale-110`        | 300ms    | Hover en botón play.            |
| `thumb-fade`        | `transition-opacity duration-300`                    | 300ms    | Fade del thumbnail Shorts, poster Radio. |
| `color-shift`       | `transition-colors`                                  | default  | Hover en encuesta, links.       |
| `bar-fill`          | `transition-all duration-500`                        | 500ms    | Fill de barra de encuesta.      |
| `shimmer`           | `translateX(-100% → 100%)` infinito                  | 2s       | Brillo en banners publicitarios.|
| `pulse`             | `animate-pulse`                                      | default  | Skeleton loaders (9 usos).     |
| `ping`              | `animate-ping`                                       | default  | Indicador LIVE en MuyDestacada. |
| Swiper bullets      | `transition: all 0.3s ease` (CSS)                    | 300ms    | Paginación de carruseles.       |

---

## 📦 Catálogo de componentes

### Última hora — Agencia mobile

Agencia es la única variante mobile en `/` y `/opcion-2`, por decisión del
usuario del 2026-10-20. Aparece después de Apertura y antes de Principales con
cinco noticias. **El bloque se oculta desde 1024 px (`lg:hidden`) sin reservar
espacio.** Su listado usa fondo `#111827` y marco blanco redondeado; el cabezal
`AHORA` conserva punto rojo pulsante y reloj local real. El pulso respeta
movimiento reducido.
El contenedor exterior usa `data-home-module`, `pt-1 pb-2` (4 px arriba y 8 px
abajo) y `lg:hidden`, separado del recuadro visual.
No lleva `my-2`: este padding exterior se combina con el `gap-2` (8 px) de
la home, sin márgenes verticales adicionales. Es el criterio de espaciado
contrastado con Apertura, Principales y Política y aprobado visualmente.
El padding interior de cada recuadro y cabezal se conserva independientemente.

- **Cabezal:** fondo negro y texto blanco, sin franja clara; padding
  horizontal de 8 px en el cabezal y vertical de 8 px en el módulo. Reloj Geist
  Mono de 16 px, peso 200, junto a `AHORA`, con horas, minutos y segundos del
  mismo tamaño. Una línea blanca continua de 1 px abarca el grupo completo
  (punto rojo, `AHORA` y reloj), no todo el ancho del módulo. Se implementa como
  borde inferior del grupo con `pb-2` (8 px de aire bajo el contenido) y `mb-2`
  (8 px adicionales antes del listado, además del padding de su primera fila).
- **Listado:** titulares de 14 px, separadores tenues y
  pastillas discretas de fondo rojo/verde al 10%, texto de 9 px y peso 500.
  El resumen se superpone con sombra, debajo o arriba del título según el
  espacio disponible. Si no cabe entero en ninguno de los lados, el panel
  limita su altura y permite desplazarse dentro de él sin tapar el título.
- **Volantas:** Geist 10/16 px, peso 600, mayúsculas, tracking `0.025em`,
  `text-gray-400`. Separación inferior de 2 px con el titular y horizontal de
  6 px con la pastilla.
- **Fuentes bajo cada titular:** prefijo `Fuentes:` sin mayúsculas sostenidas,
  Geist 10/16 px, peso normal, `text-gray-400`, separación superior de 4 px.
  De dos a cuatro medios únicos, separados por `·`, con wrap y sin truncado.
- **Titulares interactivos:** sin iconos `+`/`−`, superficie de ancho completo,
  foco visible y tono `text-gray-300` al abrir. Se conserva el cierre explícito
  del resumen; el cambio de color no es la única señal de estado accesible.
- **Resumen:** blanco, texto negro, borde gris, radio de 6 px y padding de
  12 px. Incluye el titular de 14 px semibold y un párrafo por fuente a
  12/19,5 px, seguido de su atribución a 10/16 px en gris. Los bloques se
  separan 12 px. Los textos y atribuciones son de muestra, no citas reales.

**Condición de interacción:** el ancho y alto exterior del recuadro no cambian
al abrir/cambiar/cerrar una noticia ni se mueven los módulos siguientes. Se mide
el listado cerrado y se mantiene ese alto durante la interacción, sin fijarlo
arbitrariamente; se adapta al cambiar el viewport. Mantener una noticia abierta
por módulo, cierre visible, Escape y retorno del foco al titular. Los controles
tapados o recortados no deben recibir foco.

### Header

```
fixed top-0 left-0 right-0 z-50 w-full bg-black
Logo SVG centrado (w-30), hamburguesa izquierda (w-6 h-6 text-white)
Borde inferior: border-b-2 separadores mx-2
```

Desktop aprobado desde 1024 px:

```
Inicio: 94px (franja de datos 37px + barra principal 57px), posición fixed
Scroll: franja de datos colapsada; barra principal fija de 57px
Retorno: la franja de datos reaparece únicamente en scrollY = 0
Tipografía: Geist
Interacción: logo + PORTADA + Canal 7/Radio Nihuil; el resto es solo visual
Live: fondo transparente, texto blanco y punto rojo pulsante
Suscribite: fondo rojo, texto blanco
Homes funcionales: sin sello visual MENDOZA junto al logo; logo centrado entre
hamburguesa y PORTADA, con 40px libres a cada lado; nav desplazado a la derecha;
padding horizontal de 32px alineado con el main y su borde derecho
Anchos intermedios: fecha oculta; overflow interno sin scrollbar visible
Offset: home y detalle compensan 94/57px; el banner de detalle acompaña el cambio
Accesibilidad: servicios ocultos con inert + aria-hidden; sin transición con reduced-motion
/desktop queda aislada
```

### Footer

```
bg-gray-800 text-white p-4 text-center
"© 2026 Diario UNO. All rights reserved."
```

---

### Nota muy destacada (MuyDestacada)

```
Mobile (<1024):
  Card:    rounded-md bg-white border border-gray-300 shadow-md hover:shadow-lg
  Video:   aspect-video, controls autoPlay muted loop playsInline
  LIVE:    animate-ping bg-red-400 + bg-red-500 sólido + text-red-600 "LIVE"
  Título:  font-serif font-bold text-[1.5rem]/[1.8rem], sin truncado
  Bajada:  bajada font-sans
  Byline:  PencilIcon w-4 h-4 + font-sans font-bold uppercase text-[10px]
  Relacionadas: border-t border-gray-300; conserva categorías, títulos y firma
               mobile, sin las bajadas de Stitch

Desktop (>=1024):
  Marco:    panel blanco redondeado con sombra
  Cabezal:  fondo oscuro, punto pulsante, EN VIVO, texto de cobertura y aviso
            de transmisión simultánea
  Cuerpo:   grid 8/4, gap 24px, padding 24px
  Principal: video 16:9 + título/bajada/firma mobile + EDICIÓN ESPECIAL
  Lateral:  panel gris claro FOCO DE COBERTURA con dos cards blancas
            (títulos 2 y 3 de mobile, categorías y bajadas de Stitch;
            primera sin firma y segunda con Facundo García)

Fuente de video:
  Pexels ID 34634812; prioriza MP4 1280x720 y omite la sección si la fuente falla
```

---

### Secciones editoriales — Arquetipos de layout

#### Arquetipo A: "Principal + Listado" (Política, Crimen, Sociedad)

```
Mobile (<1024):
Layout:  1 card principal grande arriba + 4 filas horizontales de listado
Divider: border-t border-gray-200 my-1  (entre principal y listado)
         border-b border-gray-200       (entre filas, excepto última)

Principal:
  Foto:    aspect-[3/2] w-full rounded-md
  Título:  font-serif text-lg leading-snug text-gray-900
  Bajada:  font-sans bajada, sin truncado
  Byline:  PencilIcon w-3 h-3 + text-[8px] uppercase

Listado:
  Layout:  flex gap-3 py-3
  Thumb:   w-24 h-24 rounded-md object-cover (96px cuadrado)
  Título:  font-serif text-sm font-medium, sin truncado
  Byline:  Condicional en filas alternas (índices 1 y 3)

Política desktop aprobado (>=1024):
  Marco:      panel blanco, padding 24px, radio 8px y sombra
  Cabezal:    26px, marcador azul, POLÍTICA & GOBIERNO y
              LEGISLATURA Y PODER EJECUTIVO
  Grilla:     7/5, gap 32px; principal y listado con igual altura
  Principal:  foto 3:2; título Playfair Display 28/35 700;
              bajada Geist 15/22; firma Analía Doña
  Listado:    4 cards #f9fafb, padding 8px, radio 8px, fotos 112×112;
              categorías Coparticipación, Congreso Nacional,
              Poder Judicial y Municipios; firmas solo en filas 2 y 4
  Omitir:     POLÍTICA CENTRAL y metas temáticas inferiores
  Hover:      zoom de imagen, titular azul y fondo tonal; sin interacción

Crimen desktop aprobado (>=1024):
  Marco:      comparte panel, grilla 7/5, gap 32px y alturas iguales
  Cabezal:    26px, marcador/borde rojos, CRIMEN & POLICIALES e
              INVESTIGACIÓN Y JUSTICIA
  Principal:  foto 3:2; título Playfair Display 28/35 700;
              bajada Geist 15/22; conserva firma y enlace a /detalle-nota
  Listado:    4 cards #f9fafb, padding 8px, radio 8px, fotos 112×112;
              categorías Polo Judicial, Operativo Regional, Peritajes
              Forenses y Poder Judicial; firmas solo en filas 2 y 4
  Omitir:     meta principal y metas temáticas inferiores
  Hover:      zoom de imagen, titular azul y fondo tonal; sin acción nueva

Sociedad desktop aprobado (>=1024):
  Marco:      comparte panel, grilla 7/5, gap 32px y alturas iguales
  Cabezal:    26px, marcador azul, SOCIEDAD & COMUNIDAD y
              EDUCACIÓN, SALUD Y CIUDAD
  Principal:  foto 3:2; título Playfair Display 28/35 700;
              bajada compartida con Crimen y firma Soledad Segade
  Listado:    4 cards #f9fafb, padding 8px, radio 8px, fotos 96×96;
              categorías Salud Pública, Biodiversidad, Educación y Patrimonio;
              firmas en filas 1 y 3
  Mobile:     conserva el mismo esquema de 1 principal + 4 filas; título,
              bajada y firma en la principal
  Omitir:     metas temáticas inferiores
  Hover:      zoom de imagen, titular azul y fondo tonal; sin interacción
```

#### Arquetipo B: "Grid retrato" (Gente)

```
Mobile (<1024):
  Layout:  grid grid-cols-2 gap-4 (Gente, 6 items, 2×3)
  Foto:    aspect-[3/4] border border-gray-300 rounded-md
  Título:  font-serif text-sm font-medium debajo de la foto, sin truncado
  Sin bajada ni byline

Gente desktop aprobado (>=1024):
  Marco:    panel blanco, padding 24px, radio 8px y sombra
  Cabezal:  26px, marcador azul, GENTE & CULTURA CUYANA y
            PERSONAJES & RETRATOS
  Grilla:   3×2, gap 24px; seis retratos aspect-ratio 3/4 y radio 8px
  Título:   completo sobre degradado negro, Playfair Display 18/22,5 700;
            usa directamente --font-playfair-display
  Hover:    zoom suave y cursor pointer solo con puntero fino; sin acción
```

#### Arquetipo C: "Grid columnistas" (Opinión)

```
Layout:  grid grid-cols-2 gap-4
Card:    flex-col items-center text-center p-4 rounded-md
         border border-gray-200 shadow-sm hover:shadow-md h-full
Avatar:  w-20 h-20 rounded-full border-2 border-gray-100
Autor:   font-sans font-bold text-xs text-[#1c69a8] tracking-wider
Título:  font-serif italic text-base leading-tight line-clamp-4
```

#### Arquetipo D: "Cards apiladas" (Senatus Romano)

```
Layout:  2 cards grandes apiladas (video + imagen), separador entre ellas
Media:   aspect-[3/2] rounded-md (video con IntersectionObserver autoplay)
         bg-gray-100 como placeholder de carga
Título:  font-serif text-lg leading-snug
Bajada:  font-sans bajada, sin truncado
```

#### Arquetipo E: "Hero card" (Apertura)

```
Layout:  1 sola card grande
Card:    aspect-square rounded-md border border-gray-300 shadow-md hover:shadow-lg
Foto:    aspect-4/3 rounded-t-md object-cover (dentro del card cuadrado)
Orden:   Byline ENCIMA del título (único caso)
Título:  font-serif font-bold text-[1.5rem]/[1.8rem], sin truncado
Bajada:  bajada font-sans
```

#### Arquetipo F: "Deportes" (Ovación)

```
Panel:       #111827, radio 8px, texto blanco; padding 8px mobile / 24px desktop
Header:      logo SVG 96px mobile / 135px desktop + ticker CSS 34s
Separador:   línea blanca recta; 16px hasta la agenda en mobile
Agenda:      iframe general DataFactory de 90px; rótulo de fixture oculto
Principal:   foto 4:3, font-sans bold, firma, sin bajada, título uppercase
Listado:     4 noticias, fotos 3:2, font-sans, títulos uppercase
Desktop:     principal y listado terminan a igual altura desde 1024px
Alcance:     diseño propio; fuera del cotejo y adaptación de Stitch de etapa 5
```

#### Arquetipo G: "Solo texto" (Listado sin fotos)

```
Alcance: mobile y hasta 1023px; en desktop lo reemplaza Gráfico interactivo
Layout:  flex flex-col, artículos separados por border-b border-gray-200
Título:  font-serif text-base leading-snug, sin truncado
Sin foto, sin bajada, sin byline.
```

#### Arquetipo H: "50/50 con foto" (Más noticias)

```
Mobile (<1024):
  Layout:  flex gap-3, texto izq (flex-1) + foto der
           (flex-1 aspect-[4/3])
  Título:  font-serif text-base leading-snug, sin truncado
  Byline:  condicional en índices [2, 4, 7, 9]
  Lista:   10 artículos, border-b border-gray-200 excepto el último

ULTIMATEM desktop aprobado (>=1024):
  Marco:      panel blanco, padding 24px, radio 8px y sombra
  Cabezal:    26px, marcador azul,
              ULTIMATEM • MÁS NOTICIAS DE CUYO Y EL PAÍS y
              ACTUALIZACIÓN CONTINUA
  Grilla:     dos columnas de cinco; gap 32px horizontal y 16px vertical
  Cards:      fondo #f9fafb, padding 8px, radio 8px; imágenes 128×96
  Categoría:  dos palabras latinas, Geist 11/14 700 y azul
  Título:     completo, Playfair Display 18/24 500, sin line-clamp
  Firmas:     conserva los índices [2, 4, 7, 9]
  Botón:      Cargar más noticias de la edición de hoy; solo visual,
              sin handler, paginación ni noticias adicionales
  Hover:      fondo tonal, titular azul, zoom y cursor pointer solo con
              puntero fino; sin acción al click
```

---

### Tarjetas de video

| Propiedad          | MAM                        | Shorts                     | Branded                    |
| ------------------ | -------------------------- | -------------------------- | -------------------------- |
| Aspect ratio       | `aspect-9/16`              | `aspect-9/16`              | `aspect-9/16`              |
| Max width          | `max-w-sm`                 | `max-w-sm`                 | `max-w-sm`                 |
| Borde              | `border-gray-900`          | `border-gray-200`          | `border-gray-900`          |
| Sombra             | `shadow-md hover:shadow-lg`| `shadow-sm`                | `shadow-md hover:shadow-lg`|
| Reproducción       | `<video>` autoplay muted   | Solo thumbnail (sin iframe)| `<video>` autoplay muted   |
| Badge              | Duración (`bg-black/60`)   | YouTube (`bg-red-600`)     | —                          |
| Botón mute inline  | ✅ Sí (`h-8 w-8`)          | —                          | —                          |
| Botón play central | —                          | ✅ Sí (`h-12 w-12`)        | —                          |
| Título font        | `font-sans text-sm medium` | `font-sans text-sm`        | `font-sans text-sm medium` |
| Line clamp         | 3                          | 2 (`min-h-[2.5em]`)        | 3                          |
| Título color       | `text-gray-900`            | `text-black`               | `text-gray-900`            |
| Sonido en modal    | ✅ Sí                      | ✅ Sí                      | ❌ No (material mudo)      |

### Carruseles (Swiper)

```
spaceBetween: 16
slidesPerView: 1.2  (mobile — muestra peek del siguiente)
Breakpoints (Shorts):
  640:  slidesPerView 2.5
  768:  slidesPerView 3.5
  1024: slidesPerView 6, spaceBetween 24 (home responsive integrada)
Pagination: bullets circulares #9ca3af (10×10px), activo en píldora (16×10px rounded-full)
```

### Modal inmersivo (fullscreen vertical)

```
Portal:    createPortal sobre document.body (obligatorio por transform de Swiper)
Swiper:    direction="vertical", slidesPerView=1, mousewheel, keyboard
Gradient:  bg-gradient-to-t from-black/80 to-transparent pt-16
Controls:  flex items-end gap-3 px-4 pb-3
  Play/Pause: h-9 w-9 rounded-full bg-black/50 border-white/40
  Mute:       h-9 w-9 (solo si allowSound=true)
  Progress:   h-[3px] bg-white/25, fill bg-white (requestAnimationFrame 60fps)
              margin-bottom: env(safe-area-inset-bottom)
Metadata:
  MAM:     font-sans text-sm text-white/80 underline (link a nota)
  Branded: font-sans text-xs uppercase tracking-wider text-white/70 (marca · categoría)
```

Hasta 1023 px:

```
Shell:     fixed inset-0 z-50 bg-black  |  h-dvh w-full
Player:    h-full w-full object-cover, a sangre completa
Close:     absolute right-4 top-4  |  h-10 w-10 rounded-full bg-black/60
Laterales: ocultos
```

Desde 1024 px:

```
Shell:     fixed inset-0 z-50 bg-black/75 backdrop-blur-sm
Player:    h-dvh w-auto aspect-9/16, centrado (video nativo o iframe activo)
Laterales: anterior/siguiente, h-12 w-12, blancos, a ambos lados del player
           deshabilitados en el primer/último video
Close:     right-6 top-6  |  h-12 w-12 bg-white/90 text-gray-900
Fondo:     la home permanece visible detrás del velo
```

---

### Widgets y componentes interactivos

#### Servicios (clima, dólar, tránsito, claves del día)

```
Layout:    grid grid-cols-2 gap-4 (2 filas de 2) + 1 card full-width
Sub-cards: bg-white rounded-lg shadow-md (cards anidadas dentro del contenedor)
Clima:     /clima.png (w-14 h-12) + text-lg font-bold (temperatura)
Dólar:     text-xl font-bold text-emerald-800 + ArrowDownIcon text-green-600
Riesgo:    text-lg + ArrowDownIcon
Claves:    WarningIcon text-yellow-500 + ol list-decimal text-sm text-gray-700
Tránsito:  TrafficLightRedIcon + text-xs text-gray-800
```

#### Live (Canal 7, Radio Nihuil)

```
Container: max-w-md mx-auto rounded-xl shadow-lg border border-gray-100
Video:     aspect-video w-full bg-black
Header:    span w-2 h-2 bg-red-500 rounded-full inline-block mr-2 (dot LIVE)
Radio:     Patrón click-to-load (poster + play button, iframe al click)
Play btn:  w-16 h-16 bg-red-600 rounded-full shadow-lg
Badge:     bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md
Hover:     group-hover:scale-110 transition-transform, opacity-80→100
```

#### Encuesta

```
Card:      bg-white rounded-lg shadow-md p-6 border border-gray-200
Pregunta:  font-sans text-xl font-bold leading-tight
Votos:     text-xs text-gray-500 uppercase tracking-wider
Opciones:  space-y-4, cada una con label + % + progress bar
Track:     bg-gray-100 rounded-full h-2.5
Fill:      rounded-full opacity-80 group-hover:opacity-100 transition-all duration-500
Brand:     bg-[#1c69a8] / text-[#1c69a8] en fill y hover
Link:      text-xs font-bold text-[#1c69a8] uppercase tracking-wider hover:underline
```

#### Chat Bot ("Chat Vox Dei")

```
Mobile:    h-[60vh] border border-gray-300 rounded-lg shadow-lg/30
Desktop:   panel blanco p-6; cabezal oscuro con ícono + CHAT VOX DEI
           altura igual al panel de video; historial con scroll interno
Messages:  grow p-4 space-y-4 overflow-y-auto
User msg:  w-3/4 bg-black text-white rounded-lg justify-end
Bot msg:   w-3/4 bg-gray-200 text-gray-800 rounded-lg justify-start
Input:     rounded-xl border-gray-500 resize-none max-h-24
Send btn:  bg-black rounded-full hover:bg-gray-800 focus:ring-2 focus:ring-black
Icon:      SendIcon w-6 h-6 (paper airplane)
```

#### Sudoku

```
Alcance:   visible debajo del chat hasta 1023px; oculto en desktop
Card:      max-w-md mx-auto rounded-lg shadow-md p-4 border border-gray-200
Grid:      grid grid-cols-9 border-2 border-gray-800 bg-gray-800 gap-px
Cells:     w-8 h-8 sm:w-10 sm:h-10 text-lg font-semibold text-center
           Alternating: bg-white / bg-gray-50 por subgrupo 3×3
Focus:     focus:ring-2 focus:ring-[#1c69a8] focus:z-10
Initial:   text-gray-900 (disabled)
Player:    text-[#1c69a8]
Subgrid:   mr-0.5 / mb-0.5 cada 3 columnas/filas
```

#### Banner publicitario

```
Mobile:    mb-4 p-4 bg-white rounded-lg shadow-md flex flex-col items-center
Label:     text-[10px] text-gray-400 uppercase tracking-wider mb-2 "Publicidad"
Ad slot:   w-[300px] h-[250px] (IAB Medium Rectangle); ambas inserciones
           rounded-md bg-gradient-to-br from-[#1c69a8] to-[#0f3d61] shadow-inner
Shimmer:   animate-shimmer (brillo continuo via-white/10)
Desktop:   ad-listado conserva el rectángulo; ad-ovacion usa leaderboard de
           ancho completo con gradiente azul, contenido max-w-4xl y CTA visual
```

---

### Skeletons (Suspense fallbacks)

```
Patrón base: animate-pulse + misma estructura que el componente real
Placeholders: bg-gray-300 rounded (texto), bg-gray-200 (bloques)
Aspect ratios bloqueados para prevenir CLS:
  aspect-[1/1], aspect-4/3, aspect-[3/2], aspect-9/16
Thumbnails: w-24 h-24 rounded-md (o w-24 aspect-[4/3])
```

`MuyDestacadaSkeleton` conserva su placeholder 1:1. La presentación desktop
vigente de los skeletons quedó aceptada al cerrar la etapa 5.

9 skeletons: MuyDestacada, SeccionListado (reutilizado ×7), MAM, Shorts, Ovación,
Más noticias, Apertura, Listado sin fotos, Branded.

---

## 🔢 Truncado de texto (`line-clamp`)

Los títulos y bajadas editoriales incluidos en la etapa 6 se muestran completos
y no usan `line-clamp`. El truncado se conserva únicamente donde el módulo quedó
fuera de este ajuste: cards y presentaciones de MAM, Shorts y Branded, Opinión y
el reader de detalle. No extender esos clamps a los módulos calibrados.

---

## 🗂 Estructura de secciones en la Home (orden)

La lista refleja el orden mobile vigente. Servicios permanece implementado pero
está oculto en `/`. Desde 1024 px, Listado sin fotos se reemplaza por Gráfico
interactivo junto al chat, Sudoku se oculta sin reservar espacio y la reserva
para juegos se inserta debajo de Crimen.

1. MuyDestacada — nota principal con video 16:9 + LIVE
2. Apertura — hero card con foto 4:3
3. Última hora — Agencia, cinco noticias, solo en mobile
4. Principales — carrusel Swiper de **6 cards** de noticias
5. **Carrusel MAM** — videos de producción (mp4)
6. Política — principal + 4 listado
7. **YouTube Shorts** — Shorts del canal
8. Opinión — grid 2×2 columnistas
9. **Branded Content** — videos por vertical comercial
10. Encuesta — poll interactivo
11. Senatus Romano — 2 cards apiladas (video + imagen; conservar el video en la home integrada desktop)
12. Ovación — deportes (widget + principal + listado)
13. Banner Publicitario — segundo 300×250 mobile; leaderboard desktop
14. Sociedad — **5 noticias**: 1 principal + 4 secundarias en mobile y desktop
15. Canal 7 Live — stream 16:9
16. Radio Nihuil Live — click-to-load stream
17. Banner Publicitario — primer anuncio 300×250 animado
18. Listado sin fotos — feed solo texto; Gráfico interactivo en desktop
19. ChatBot — "Chat Vox Dei"
20. Sudoku — juego interactivo solo hasta 1023px
21. Gente — 6 retratos: grid 2×3 mobile y 3×2 desktop
22. Crimen — principal + 4 listado
23. Más noticias — feed 50/50 texto + foto
24. Footer

---

## ⚠️ Restricciones

- **Paridad acordada (2026-10-13, actualizada para Sociedad el 2026-10-19):**
  Principales conserva 6 cards; Sociedad muestra 5 noticias en ambos anchos
  como 1 principal + 4 secundarias y omite la última noticia anterior. Senatus
  mantiene sus dos medios mobile, incluido el video, también en la home desktop
  integrada. La encuesta desktop comparte exactamente la pregunta, total,
  textos de opciones y porcentajes definidos por mobile; no agrega votación ni
  persistencia. `/desktop` permanece como copia estática fiel de Stitch y no se
  modifica para reflejar estos acuerdos.
- **Principales aprobado (2026-10-14; titulación actualizada 2026-10-15):**
  desde 1024 px adopta el cabezal
  `LEGIONARIUS • NOTICIAS DESTACADAS` con `AL MINUTO`, seis cards en 3×2, altura
  automática y uniforme entre las seis piezas, separación de 24 px, radio de
  8 px, sombra y hover con elevación/zoom. El título usa Playfair Display 700
  como compensación visual de la fuente local; no se agregan categorías ni se
  modifica `/desktop`.
  La grilla requiere `swiper/css/grid`; sin esa hoja, los seis slides quedan en
  una sola fila horizontal. La regla posterior de etapa 6 elimina el límite de
  dos líneas y muestra completos título y bajada en ambos anchos.
- **Muy Destacada aprobada (2026-10-14):** mobile conserva contenido y orden,
  pero usa video 16:9. Desde 1024 px adopta cabezal oscuro y cuerpo 8/4 con el
  contenido principal mobile y `EDICIÓN ESPECIAL`; el lateral usa los títulos
  segundo y tercero de mobile con categorías y bajadas de Stitch. El video se
  obtiene por el ID fijo de Pexels `34634812`, hay una sola instancia y solo usa
  controles nativos. No se agregan los metadatos inferiores de Stitch ni se
  modifica `/desktop`; el skeleton conserva la presentación aceptada al cierre.
- **Política aprobada (2026-10-15):** desde 1024 px usa panel con cabezal
  `POLÍTICA & GOBIERNO`, cuerpo 7/5 y cuatro secundarias; principal y listado
  ocupan el mismo alto. Conserva contenido y firmas locales, miniaturas 112×112
  y hover exclusivamente visual. Mobile y `/desktop` permanecen intactos.
- **Crimen aprobado (2026-10-15):** desde 1024 px reutiliza el arquetipo 7/5
  con cabezal `CRIMEN & POLICIALES`, meta editorial y acento rojo. Conserva
  contenido, firmas y enlace principal locales; usa cuatro secundarias 112×112,
  columnas de igual altura y hover visual. Mobile y `/desktop` permanecen
  intactos.
- **Sociedad actualizada (2026-10-19):** en ambos anchos reutiliza el arquetipo
  principal + listado con una principal y cuatro secundarias. Se omite la última
  noticia anterior; se conservan el cabezal `SOCIEDAD & COMUNIDAD`, la meta
  editorial, la bajada y las firmas acordadas. Las cuatro secundarias usan
  miniaturas 96×96; desktop conserva columnas de igual altura y hover visual.
  `/desktop` permanece intacta.
- **Gente aprobada (2026-10-15):** desde 1024 px usa panel con cabezal
  `GENTE & CULTURA CUYANA`, meta editorial y seis retratos 3×2. Los títulos
  completos se superponen sobre degradado en Playfair Display; el hover es
  visual y mobile conserva su grilla 2×3. El marco general de la home adopta
  32 px de padding horizontal desktop para igualar `px-margin`; `/desktop`
  permanece intacto.
- **ULTIMATEM aprobado (2026-10-15):** desde 1024 px usa panel con cabezal
  `ULTIMATEM • MÁS NOTICIAS DE CUYO Y EL PAÍS`, meta de actualización y diez
  noticias en dos columnas de cinco. Conserva títulos largos completos, firmas
  y diez fotos; suma categorías latinas de dos palabras y un botón de carga solo
  visual. Las cards usan imágenes 128×96 y hover sin acción. Mobile y `/desktop`
  permanecen intactos.
- **Cursor de acción aprobado (2026-10-15):** desde 1024 px y solo en
  dispositivos con `hover` y puntero fino, Muy Destacada, Principales, MAM,
  Política, Crimen, Sociedad, Gente, ULTIMATEM y los controles visuales del
  header muestran `cursor: pointer`. Las superficies estáticas y el botón de
  carga no ejecutan acciones al click; se preservan el modal y los enlaces que
  ya eran funcionales.
- **Mobile como base.** Las reglas mobile siguen definiendo el inventario; las
  adaptaciones desktop aprobadas se aplican desde 1024 px.
- **Ovación fuera de la etapa 5.** Su panel oscuro integrado es la referencia
  definitiva en mobile y desktop. No será adaptado ni cotejado con Stitch; la
  excepción que permitió usar `/desktop` no aplica a ninguna otra sección.
- **No usar JW Player.** No hay contrato vigente con el proveedor.
- **Contenido ficticio.** Textos e imágenes son de muestra (excepto MAM y Shorts, que son reales).
- **El stack es fijo:** Next.js 16, React 19, Tailwind CSS 4, Swiper 12, @heroicons/react.
- **Patrón wrapper obligatorio.** `page.tsx` solo importa wrappers (`-wrapper.tsx`).
