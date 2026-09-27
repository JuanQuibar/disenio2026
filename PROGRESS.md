# PROGRESS — Bitácora y Backlog

> **Para qué sirve este archivo**
> Es el punto de entrada para retomar el trabajo en una sesión nueva o con otro
> agente. Responde a: de dónde venimos, dónde estamos y qué sigue.
>
> - ¿Qué es el proyecto y cómo está arquitecturado? → [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md)
> - ¿Cómo levanto el proyecto? → [README.md](./README.md)
> - ¿Sos un agente de IA? → [AGENTS.md](./AGENTS.md)

---

## 📍 Estado actual

Prototipo mobile-first funcionando. `npm run build` y `npx tsc --noEmit` pasan sin
errores. La home renderiza los **tres carruseles de video definitivos** (MAM,
Shorts y Branded), validados en viewport 414×896 sin errores de consola.

MAM y Branded ya abren **modal fullscreen con scroll vertical**, con controles de
pausa, barra de progreso y silencio (este último sólo en MAM). Shorts todavía no.

No hay trabajo a medio terminar: el último tramo cerró completo.

---

## ✅ Hecho

### 2026-09-27 — Controles de reproducción en el modal

El modal pasó de reproducir sin intervención posible a tener pausa, barra de
progreso y silencio. Todo vive en `video-modal-slide.tsx`, así que las dos
fuentes mp4 lo heredan sin duplicar nada.

**Qué se agregó**

- Botón de pausa/reproducción, abajo a la derecha, con el mismo lenguaje visual
  que el botón de silencio de la tarjeta MAM.
- Barra de progreso de 3 px pegada al borde inferior, con `role="progressbar"`.
- Botón de silencio **condicional**, gobernado por la nueva prop `allowSound`.

**Decisiones y por qué**

- **El estado sigue al elemento, no al click.** `isPlaying` se actualiza desde
  los eventos `play`/`pause` del `<video>`. Si se dedujera del click, quedaría
  desincronizado cuando el navegador pausa por su cuenta o cuando falla el
  autoplay.
- **La barra se refresca por frame, no con `timeupdate`.** Ese evento dispara
  unas cuatro veces por segundo y la barra avanzaría a saltos. El valor se
  redondea a milésimas, así que React descarta el render cuando no cambia nada
  visible.
- **Margen inferior con `env(safe-area-inset-bottom)`.** Sin eso, en iPhone el
  indicador de inicio tapa la barra por estar pegada al borde.
- **El sonido se decide por fuente, con datos.** Ver la decisión de audio más
  abajo: no fue una elección estética.

**Verificado en navegador** (430 px, dev server): en MAM el video abre con
`muted: false`, la pausa congela `currentTime` y el botón de silencio alterna
estado y etiqueta; en Branded el slide activo abre con `muted: true` y sin botón
de silencio. Barra medida en el borde exacto (`y=592 + 3px` en viewport de 595).
Sin errores de consola. `npm run build` y `npx tsc --noEmit` pasan.

> Nota de método: dos mediciones iniciales dieron falsos negativos porque
> `querySelector('video')` devuelve el primer video del DOM y no el del slide
> activo. Para inspeccionar el modal hay que apuntar a `.swiper-slide-active`.

### 2026-09-27 — Modal fullscreen con scroll vertical (MAM y Branded)

Al tocar un video se abre a pantalla completa y se pasa a los demás videos del
mismo carrusel con desplazamiento vertical, estilo TikTok/Reels.

**Cómo está armado.** Un shell compartido con todo lo que no depende de la fuente
(`videos-shared/video-modal-shell.tsx`: portal, fullscreen, Swiper vertical,
cierre, foco, bloqueo de scroll), un slide mp4 reutilizable
(`videos-shared/video-modal-slide.tsx`) y un modal fino por fuente
(`mam-modal.tsx`, `branded-modal.tsx`). No hay un player universal con ramas por
tipo de fuente.

**Decisiones y el porqué:**

- **`createPortal` es obligatorio, no una preferencia.** El modal se dispara desde
  dentro de un slide de Swiper, cuyo wrapper lleva `transform`. Un `position: fixed`
  dentro de un ancestro transformado se posiciona respecto de ese ancestro y no del
  viewport: sin portal, el "fullscreen" queda recortado dentro de la tarjeta.
- **Abre con sonido.** El toque que abre cuenta como gesto del usuario, así que el
  navegador lo permite. Si aun así lo bloquea, el slide reintenta muteado antes de
  rendirse.
- **El modal no reutiliza `useVideoAutoplay`.** Ese hook combina slide activo con
  IntersectionObserver, útil en la home; en fullscreen solo hay un slide visible por
  definición y su `rootMargin` de 50px podría activar vecinos.
- **`object-cover` en vez de `object-contain`.** Se verificó contra la API: los 30
  videos de MAM son 9:16 y el servicio de Pexels ya descarta los horizontales. Con
  todo el material vertical, `contain` solo agregaba bandas negras sin proteger de
  nada.
- **El disparador es un `<button>` superpuesto** (z-10), no un `onClick` en el
  contenedor: la tarjeta de MAM ya tiene un botón de mute (ahora z-20) y anidar
  interactivos es HTML inválido y rompe el teclado.
- **Se bloquea el scroll de `html` además del de `body`.** Con overflow solo en
  `body`, la barra de scroll seguía ocupando ancho y el modal no llegaba al borde
  derecho (medido: 485px contra un viewport de 500px).
- **Se pausa el carrusel mientras el modal está abierto**
  (`isActive={index === activeIndex && modalVideoId === null}`), o suenan dos videos
  a la vez.

**Efecto lateral.** `brandName` y `category`, que habían quedado sin consumidor al
sacar la leyenda de las tarjetas, se muestran ahora en el modal de branded.

**Verificado en navegador:** apertura en el video correcto y no en el primero,
navegación vertical, un solo video reproduciéndose a la vez, cierre con botón y con
`Escape`, foco que va al botón de cerrar y vuelve a la tarjeta de origen, scroll de
la home restaurado en la posición exacta, y el botón de mute que sigue funcionando
sin abrir el modal.

### 2026-09-27 — Reorganización de la arquitectura de video

**Problema que lo motivó.** Había una migración a medias entre dos
implementaciones: `branded/` importaba un player JW Player que no usaba y en su
lugar renderizaba el carrusel genérico de `carrusel-videos/`, que a su vez estaba
comentado en `page.tsx`. Ambos bloques consumían el mismo feed de Pexels, con lo
que "Branded" y "Videos" eran la misma sección con distinto encabezado.

**Qué se hizo.**

1. **Se definieron tres carruseles, uno por fuente**, cada uno con su wrapper:
   - `carrusel-mam/` → API MAM
   - `youtube-shorts/` → YouTube Data API
   - `branded/` → Pexels (muestra de diseño)

2. **MAM migró de iframe embebido a carrusel nativo.** Se verificó que la API
   (`/api/playlists/{id}`) devuelve `videoUrl` (mp4), `thumbnailUrl`, `title`,
   `duration` y `articleUrl`, lo que permitió construir un carrusel propio con
   badge de duración, control de sonido y título enlazado a la nota.
   *Contrapartida asumida*: se pierden las métricas del player del proveedor.
   **Decidido: no es un problema**, porque esto es un prototipo de diseño.

3. **Se separó la capa de datos por fuente** en `app/services/videos/`
   (`mam.ts`, `youtube.ts`, `pexels.ts`, `types.ts`), con el contrato común
   `VideoItem` basado en un `id` estable, no en el índice del carrusel.

4. **Branded se rehizo como demostración por vertical.** `branded-content.ts`
   define las verticales (comidas, autos) con su query, marca y copys. Cambiar de
   vertical no requiere tocar componentes.

5. **JW Player se eliminó por completo**: `jwp-noticias/`, `jwp-virales/`, el
   `branded-card` con JW, los tipos `JWVideo` / `JWPlaylistResponse`,
   `getPlaylistData`, el script de `cdn.jwplayer.com` y `JwpNoticiasSkeleton`.
   Motivo: fin de contrato con el proveedor.

6. **Se eliminó el módulo duplicado `carrusel-videos/`** y su bloque comentado en
   `page.tsx`.

7. **`detalle-nota` se actualizó**: usaba el carrusel JW, ahora usa MAM.

8. **Se crearon primitives compartidos** en `videos-shared/`: contenedor de
   sección, botón de play y el hook `useVideoAutoplay`. Se evitó deliberadamente
   un player genérico con ramas por tipo de fuente.

**Verificado**: MAM reproduce solo en viewport y pausa al salir; Shorts monta un
único iframe recién al hacer clic (las demás tarjetas siguen siendo fachada);
Branded ya no arrastra el contenedor blanco duplicado.

---

## 🔄 En curso

Nada en curso.

---

## ⏭️ Siguiente

### Modal fullscreen para YouTube Shorts  ← **prioridad**

Extender el modal a Shorts, que quedó fuera del tramo anterior a propósito.

**Por qué se pospuso.** Shorts es un iframe de YouTube, no un mp4 propio: no se
puede controlar la reproducción sin cargar la IFrame Player API, cada swipe obliga
a montar y desmontar el iframe (costoso), y la marca de YouTube se impone sobre el
diseño.

**Lo que ya está resuelto.** `VideoModalShell` es agnóstico de la fuente: recibe
`renderSlide` y no conoce ningún tipo concreto. Alcanza con escribir
`youtube-shorts/youtube-shorts-modal.tsx` que renderice el iframe en lugar de
`VideoModalSlide` (ese slide es solo para mp4).

**A resolver:**

- Montar el iframe únicamente del slide activo, o el rendimiento se cae.
- Decidir si se carga la IFrame Player API para poder pausar al deslizar, o si
  alcanza con desmontar el iframe.
- El autoplay con sonido en un iframe embebido es menos confiable que en un
  `<video>` propio: verificar comportamiento real.
- Replicar los controles (pausa, progreso, silencio) exige la IFrame Player API:
  un iframe no expone `currentTime` ni `paused` como un `<video>`. Si no se
  carga la API, el modal de Shorts quedará sin barra de progreso y habrá que
  decidir si eso es aceptable o si conviene dejar los controles nativos de
  YouTube a la vista.

---

## 📋 Backlog

- **Versión desktop.** Hoy solo existe mobile. Queda a cargo de otro agente. Los
  componentes ya conservan los puntos de extensión (`slidesPerView`, breakpoints,
  aspect ratios) para no bloquearla.
- **Verticales branded adicionales.** `branded-content.ts` ya soporta `comidas` y
  `autos`; agregar más es declarativo. Definir cuáles se muestran en la
  presentación.
- **Ads nativos en el feed** (programáticos).
- **Títulos de maqueta.** Branded usa copys ficticios de `branded-content.ts`;
  reemplazar cuando haya contenido comercial real.
- **Refinamientos del modal**, deliberadamente fuera del primer tramo: cierre por
  gesto de arrastre, precarga del video siguiente y barra de progreso.

---

## ❓ Decisiones pendientes

| Tema | Pregunta abierta |
|---|---|
| Branded en producción | ¿De dónde vendrá el contenido brandeado real: CMS, anunciante o MAM? |
| Orden en la home | El orden actual de los tres carruseles es provisorio. |

### Decisiones ya resueltas

- **Alcance del modal (2026-09-27)**: se implementa en MAM y Branded, que sirven
  mp4 propio. Shorts queda para un tramo aparte por ser un iframe, con las
  limitaciones descritas en *Siguiente*.
- **Audio del modal (2026-09-27)**: abre con sonido, como TikTok. El toque que lo
  abre cuenta como gesto del usuario, así que el navegador lo permite.
- **Sonido por fuente (2026-09-27)**: la regla anterior aplica a **MAM**.
  **Branded abre siempre mudo y sin botón de silencio**, porque se midieron los
  archivos reales con `ffprobe`/`ffmpeg`: de los 20 mp4 de Pexels que consume la
  app, sólo 2 tienen sonido audible, 4 traen pista a -91 dB (silencio digital) y
  14 no traen pista. MAM, en cambio, ronda -12 a -19 dB en 7 de 9. Ofrecer un
  control de sonido sobre material mudo sería un botón que no hace nada, y
  habilitarlo igual haría que un video suelto arranque fuerte sin aviso.
  Se implementa con la prop `allowSound` del slide.
- **Métricas de MAM (2026-09-27)**: no se reimplementan. Al ser un prototipo de
  diseño, la pérdida del tracking del player del proveedor es aceptable. Queda
  como tema a retomar solo si el prototipo avanza a producción.

---

## 📐 Convenciones a respetar

Reglas que un agente nuevo debe seguir **sin tener que deducirlas del código**:

1. **Patrón `-wrapper.tsx`.** Cada sección expone un único wrapper y es lo único
   que `page.tsx` importa. Nunca importar una card, un carrusel o un servicio
   directamente desde `page.tsx`.
2. **No reintroducir JW Player.** No hay contrato con el proveedor.
3. **Sección vacía = `null`.** Si una fuente no devuelve datos, el wrapper retorna
   `null`. No dejar contenedores vacíos.
4. **Los servicios no lanzan.** Ante error de red o API key faltante, devuelven
   array vacío y loguean.
5. **Un carrusel por fuente.** No unificar fuentes distintas en un componente
   genérico con ramas por tipo.
6. **`videos-shared/` es solo para primitives** transversales, no para players.
7. **Identificar videos por `id`, no por índice.**
8. **Mobile-first.** No romper los puntos de extensión que habilitan el desktop.

---

## 🔧 Cómo mantener este archivo

Actualizarlo **al cerrar cada tramo de trabajo**: mover lo terminado a *Hecho* con
fecha y motivo, y dejar *Siguiente* apuntando a la próxima prioridad. Si una
decisión se resuelve, sacarla de *Decisiones pendientes* y registrarla en
[PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md).

### Qué se registra y qué no

Este archivo no es un log de commits: para eso está `git log`. Se registra lo que
alguien necesitaría saber **antes de tocar el código**, no todo lo que se hizo.

| Se registra | No se registra |
| --- | --- |
| Una feature o módulo nuevo | Ajustes de estilo, copys, colores |
| Un cambio de arquitectura o de convención | Renombres y refactors internos |
| Una decisión con contrapartida asumida | Correcciones de tipos o de lint |
| Dar de baja una dependencia o proveedor | Bugs detectados y resueltos en el acto |
| Un intento descartado, con el motivo | Trabajo aún sin terminar (va en *En curso*) |

Regla práctica: si al leer el cambio dentro de seis meses alguien podría
preguntarse **«¿por qué está hecho así?»**, va acá — y lo que se escribe es esa
respuesta, no la lista de archivos tocados.

Los intentos fallidos importan tanto como los logros: evitan que el próximo
agente reintente un camino ya descartado.
