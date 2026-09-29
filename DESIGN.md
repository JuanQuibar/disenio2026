# DESIGN.md — Diario UNO 2026

> Sistema de diseño extraído del prototipo mobile existente.
> Consumidores previstos: **Google Stitch**, agentes de IA, diseñadores.

> [!IMPORTANT]
> **Todo lo documentado acá corresponde exclusivamente a la versión mobile
> (viewport ~414px).** La versión desktop no existe todavía — es lo que se va a
> diseñar a partir de estas especificaciones.

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
| `gap-4` (16px) | 9           | Grids (Opinión, Servicios, Sociedad).  |
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
| 3:2   | `aspect-[3/2]`   | Política principal, Crimen principal, Senatus, Ovación listado (thumbnail `w-30`). |
| 3:4   | `aspect-[3/4]`   | Gente, Sociedad (retrato vertical, grid 2 columnas).            |
| 1:1   | `aspect-square`  | Card contenedor de Apertura y Principales (la card es cuadrada; la foto interna es 4:3). |

### Videos

| Ratio | Clase            | Componentes                                     |
| ----- | ---------------- | ----------------------------------------------- |
| 9:16  | `aspect-9/16`    | MAM, Shorts y Branded (todos los videos verticales). |
| 1:1   | `aspect-[1/1]`   | Video de nota muy destacada (cuadrado).         |
| 16:9  | `aspect-video`   | Canal 7 Live, Radio Nihuil Live (streams).      |

### Thumbnails en listados

| Dimensión        | Componentes                                      |
| ---------------- | ------------------------------------------------ |
| `w-24 h-24` (96px cuadrado) | Política, Crimen (listados estándar).  |
| `w-30 aspect-[3/2]` (~120px) | Ovación listado (más ancho, rectangular). |
| `flex-1 aspect-[4/3]` (50%) | Más noticias (ocupa mitad del ancho). |
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
| `gradient-xy`       | `background-position` infinito                       | 3s       | Degradados animados.            |
| `pulse`             | `animate-pulse`                                      | default  | Skeleton loaders (9 usos).     |
| `ping`              | `animate-ping`                                       | default  | Indicador LIVE en MuyDestacada. |
| Swiper bullets      | `transition: all 0.3s ease` (CSS)                    | 300ms    | Paginación de carruseles.       |

---

## 📦 Catálogo de componentes

### Header

```
fixed top-0 left-0 right-0 z-50 w-full bg-black
Logo SVG centrado (w-30), hamburguesa izquierda (w-6 h-6 text-white)
Borde inferior: border-b-2 separadores mx-2
```

### Footer

```
bg-gray-800 text-white p-4 text-center
"© 2026 Diario UNO. All rights reserved."
```

---

### Nota muy destacada (MuyDestacada)

```
Card:    rounded-md bg-white border border-gray-300 shadow-md hover:shadow-lg
Video:   aspect-[1/1] (cuadrado), controls autoPlay muted loop playsInline
LIVE:    animate-ping bg-red-400 + bg-red-500 sólido + text-red-600 "LIVE"
Título:  font-serif font-bold text-[1.5rem]/[1.8rem] line-clamp-3
Bajada:  bajada font-sans
Byline:  PencilIcon w-4 h-4 + font-sans font-bold uppercase text-[10px]
Sub-artículos: border-t border-gray-300, font-serif, h2 (segundo sub: italic)
```

---

### Secciones editoriales — Arquetipos de layout

#### Arquetipo A: "Principal + Listado" (Política, Crimen)

```
Layout:  1 card principal grande arriba + 4 filas horizontales de listado
Divider: border-t border-gray-200 my-1  (entre principal y listado)
         border-b border-gray-200       (entre filas, excepto última)

Principal:
  Foto:    aspect-[3/2] w-full rounded-md
  Título:  font-serif text-lg leading-snug text-gray-900
  Bajada:  font-sans bajada line-clamp-2
  Byline:  PencilIcon w-3 h-3 + text-[8px] uppercase

Listado:
  Layout:  flex gap-3 py-3
  Thumb:   w-24 h-24 rounded-md object-cover (96px cuadrado)
  Título:  font-serif text-sm font-medium line-clamp-3
  Byline:  Condicional en filas alternas (índices 1 y 3)
```

#### Arquetipo B: "Grid retrato" (Sociedad, Gente)

```
Layout:  grid grid-cols-2 gap-4 (6 items, 2 columnas)
Foto:    aspect-[3/4] border border-gray-300 rounded-md (retrato vertical)
Título:  font-serif text-sm font-medium line-clamp-3
Sin bajada ni byline.
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
Bajada:  font-sans bajada line-clamp-2
```

#### Arquetipo E: "Hero card" (Apertura)

```
Layout:  1 sola card grande
Card:    aspect-square rounded-md border border-gray-300 shadow-md hover:shadow-lg
Foto:    aspect-4/3 rounded-t-md object-cover (dentro del card cuadrado)
Orden:   Byline ENCIMA del título (único caso)
Título:  font-serif font-bold text-[1.5rem]/[1.8rem] line-clamp-3
Bajada:  bajada font-sans
```

#### Arquetipo F: "Deportes" (Ovación)

```
Igual que Arquetipo A PERO:
  - Header con logo SVG (LOGO-OVACION.svg) en vez de texto
  - Widget iframe DataFactory arriba (bg-gray-50, border-l-4 border-red-600)
  - Principal usa aspect-[4/3] (no 3/2) y font-sans font-bold (no serif)
  - Listado usa w-30 aspect-[3/2] (no w-24 h-24) y font-sans (no serif)
  - pt-2 en vez de pt-1, my-2 en vez de my-1 para dividers
```

#### Arquetipo G: "Solo texto" (Listado sin fotos)

```
Layout:  flex flex-col, artículos separados por border-b border-gray-200
Título:  font-serif text-base line-clamp-4 leading-snug
Sin foto, sin bajada, sin byline.
```

#### Arquetipo H: "50/50 con foto" (Más noticias)

```
Layout:  flex gap-3, texto izq (flex-1) + foto der (flex-1 aspect-[4/3])
Título:  font-serif text-base line-clamp-4 leading-snug
Byline:  Condicional en índices [2, 4, 7, 9]
10 artículos, border-b border-gray-200 excepto el último.
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
  1024: slidesPerView 4.5
Pagination: bullets circulares #9ca3af (10×10px), activo en píldora (16×10px rounded-full)
```

### Modal inmersivo (fullscreen vertical)

```
Shell:     fixed inset-0 z-50 bg-black  |  h-dvh w-full
Portal:    createPortal sobre document.body (obligatorio por transform de Swiper)
Swiper:    direction="vertical", slidesPerView=1, mousewheel, keyboard
Close:     absolute right-4 top-4  |  h-10 w-10 rounded-full bg-black/60
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
Container: h-[60vh] border border-gray-300 rounded-lg shadow-lg/30
Messages:  grow p-4 space-y-4 overflow-y-auto
User msg:  w-3/4 bg-black text-white rounded-lg justify-end
Bot msg:   w-3/4 bg-gray-200 text-gray-800 rounded-lg justify-start
Input:     rounded-xl border-gray-500 resize-none max-h-24
Send btn:  bg-black rounded-full hover:bg-gray-800 focus:ring-2 focus:ring-black
Icon:      SendIcon w-6 h-6 (paper airplane)
```

#### Sudoku

```
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
Outer:     mb-4 p-4 bg-white rounded-lg shadow-md flex flex-col items-center
Label:     text-[10px] text-gray-400 uppercase tracking-wider mb-2 "Publicidad"
Ad slot:   w-[300px] h-[250px] (IAB Medium Rectangle)
           rounded-md bg-gradient-to-br from-[#1c69a8] to-[#0f3d61] shadow-inner
Shimmer:   animate-shimmer (brillo continuo via-white/10)
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

9 skeletons: MuyDestacada, SeccionListado (reutilizado ×7), MAM, Shorts, Ovación,
Más noticias, Apertura, Listado sin fotos, Branded.

---

## 🔢 Truncado de texto (line-clamp)

| Valor          | Ocurrencias | Uso                                              |
| -------------- | ----------- | ------------------------------------------------ |
| `line-clamp-2` | 6           | Bajadas, títulos Shorts, notas relacionadas.     |
| `line-clamp-3` | 11          | Títulos principales en cards y listados.         |
| `line-clamp-4` | 3           | Listado sin fotos, Más noticias, Opinión.        |

---

## 🗂 Estructura de secciones en la Home (orden)

1. MuyDestacada — nota principal con video cuadrado + LIVE
2. Apertura — hero card con foto 4:3
3. Principales — carrusel Swiper de noticias
4. **Carrusel MAM** — videos de producción (mp4)
5. Política — principal + 4 listado
6. **YouTube Shorts** — Shorts del canal
7. Servicios — widgets clima, dólar, tránsito, claves
8. Opinión — grid 2×2 columnistas
9. **Branded Content** — videos por vertical comercial
10. Encuesta — poll interactivo
11. Senatus Romano — 2 cards apiladas (video + imagen)
12. Banner Publicitario — 300×250 animado
13. Sociedad — grid 2×2 con foto retrato
14. Canal 7 Live — stream 16:9
15. Radio Nihuil Live — click-to-load stream
16. Listado sin fotos — feed solo texto
17. ChatBot — "Chat Vox Dei"
18. Ovación — deportes (widget + principal + listado)
19. Banner Publicitario — segundo 300×250
20. Gente — grid 2×2 con foto retrato
21. Crimen — principal + 4 listado
22. Sudoku — juego interactivo
23. Más noticias — feed 50/50 texto + foto
24. Footer

---

## ⚠️ Restricciones

- **Solo mobile.** El diseño actual es exclusivamente mobile (viewport ~414px). No hay versión desktop resuelta.
- **No usar JW Player.** No hay contrato vigente con el proveedor.
- **Contenido ficticio.** Textos e imágenes son de muestra (excepto MAM y Shorts, que son reales).
- **El stack es fijo:** Next.js 16, React 19, Tailwind CSS 4, Swiper 12, @heroicons/react.
- **Patrón wrapper obligatorio.** `page.tsx` solo importa wrappers (`-wrapper.tsx`).
