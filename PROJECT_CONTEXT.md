# Memoria del Proyecto: UNO 2026 (Rediseño Diario UNO)

## 🎯 Objetivo Principal
Crear un prototipo de alto impacto ("Wow Effect") para el rediseño de `diariouno.com.ar`. Este prototipo servirá para presentar la visión a los accionistas.
*   **Fase actual**: Prototipo enfocado en UI/UX Mobile First. El contenido de texto
    y el bloque branded son de maqueta (Lorem Ipsum + Pexels); el carrusel MAM ya
    consume **contenido real de producción**.
*   **Alcance actual**: **solo versión mobile**. La versión desktop está pendiente.
*   **Fase futura**: Posible integración con API real y entrega a proveedores para implementación final.

## 💡 Filosofía de Diseño (Core Concepts)
1.  **Consumo en Home (Zero-Click)**:
    *   Romper el paradigma tradicional de "clic para leer".
    *   El usuario debe poder consumir la mayor cantidad de contenido directamente en la Home.
    *   Menos banners intrusivos, más contenido fluido.

2.  **Video First & Formato Vertical**:
    *   Fuerte presencia de video en la Home.
    *   Enfoque en hábitos de consumo tipo TikTok/Reels.
    *   Integración de transmisiones en vivo (Canal 7, Radio Nihuil).

3.  **Estética**:
    *   **Valores**: Credibilidad, Seriedad, Modernidad.
    *   **Estilo**: Premium, limpio, animaciones suaves.
    *   **Diseño**: Mobile First.

## 🛠 Stack Tecnológico
*   **Framework**: Next.js 16 (App Router).
*   **Lenguaje**: TypeScript.
*   **Estilos**: Tailwind CSS 4.
*   **UI Libraries**: Swiper (carruseles), @heroicons/react.
*   **React**: v19.

## 🏗 Arquitectura del Proyecto

### Estructura de Directorios (`app/`)
*   `page.tsx`: Página principal. Compone la home importando **únicamente wrappers**.
*   `detalle-nota/`: Prototipo de página de nota.
*   `layout.tsx`: Layout global (fuentes, metadatos).
*   `globals.css`: Estilos globales y configuración de Tailwind.
*   `services/`: Capa de datos.
    *   `fetchs.ts`: Fotos y widgets (datos de maqueta desde Pexels).
    *   `videos/`: Capa de datos de video, **separada por fuente**.

### 📐 Convención: el patrón `-wrapper.tsx`
**Decisión arquitectónica deliberada.** Cada sección expone un único archivo
`-wrapper.tsx` y es **el único que `page.tsx` importa**. El wrapper es un Server
Component que resuelve sus propios datos, decide si la sección se muestra y delega
el resto a sus componentes internos.

Reglas:
*   `page.tsx` nunca importa una card, un carrusel ni un servicio directamente.
*   Si una fuente no devuelve datos, **el wrapper retorna `null`** y la sección
    desaparece por completo (no deja contenedores vacíos).
*   Los componentes internos de una sección no se importan desde otras secciones.

### 🎬 Arquitectura de Video
El prototipo presenta **tres carruseles de video**, cada uno con su propia fuente y
su propia estrategia de reproducción. No comparten player: comparten primitives.

| Módulo | Wrapper | Fuente | Reproducción | Modal |
|---|---|---|---|---|
| `carrusel-mam/` | `carrusel-mam-wrapper.tsx` | API MAM (mp4 propios) | Autoplay muteado del slide activo | Sí |
| `youtube-shorts/` | `youtube-shorts-wrapper.tsx` | YouTube Data API | Click-to-Load (fachada) | Todavía no |
| `branded/` | `branded-wrapper.tsx` | Pexels (solo muestra de diseño) | Autoplay muteado del slide activo | Sí |

*   **`carrusel-mam/`**: Reels de producción de Diario UNO. Consume la playlist vía
    API y reproduce los `.mp4` en un `<video>` nativo, con badge de duración,
    control de sonido y título enlazado a la nota.
*   **`youtube-shorts/`**: Shorts del canal. Mantiene el patrón fachada: muestra el
    thumbnail y solo monta el iframe tras el clic del usuario. Al deslizar, el
    iframe anterior se desmonta (nunca hay dos videos sonando).
*   **`branded/`**: Demuestra que se puede mostrar **contenido brandeado por
    vertical** (comidas, autos, etc.). Pexels es solo la fuente de maqueta: las
    verticales se definen en `branded-content.ts` y cambiar de vertical no requiere
    tocar componentes.
*   **`videos-shared/`**: Solo primitives transversales, **nunca un player
    genérico**: el contenedor visual de sección, el botón de play, el hook
    `useVideoAutoplay` (IntersectionObserver), el shell del modal y el slide mp4.

#### Modal inmersivo
Al tocar un video se abre a pantalla completa y se pasa a los demás videos **del
mismo carrusel** con desplazamiento vertical (patrón TikTok/Reels).

La división sigue la misma lógica que los carruseles: un **shell compartido**
(`videos-shared/video-modal-shell.tsx`) resuelve portal, fullscreen, navegación
vertical, cierre, foco y bloqueo de scroll; un **slide mp4 reutilizable**
(`video-modal-slide.tsx`) sirve a las fuentes con video propio; y cada fuente
aporta un **modal fino** que solo decide qué metadatos superpone. No hay un player
universal con ramas por tipo de fuente.

El shell se monta con `createPortal` sobre `document.body`, y esto **no es
opcional**: el modal se dispara desde dentro de un slide de Swiper, cuyo wrapper
lleva `transform`, y un `position: fixed` dentro de un ancestro transformado se
posiciona respecto de ese ancestro en lugar del viewport.

**Controles.** Cada slide trae pausa/reproducción, una barra de progreso fina al
pie y, sólo cuando la fuente lo habilita, silencio. El estado de reproducción se
sincroniza desde los eventos `play`/`pause` del elemento y no desde el click, para
que siga siendo correcto cuando la reproducción la cambia el navegador. La barra
se refresca por frame (`requestAnimationFrame`) en vez de con `timeupdate`, que
dispara unas cuatro veces por segundo y se vería a saltos.

**Audio por fuente.** El control de sonido se habilita con la prop `allowSound`,
activa en MAM y ausente en branded. No es una preferencia estética: se midieron
los archivos reales con `ffprobe`/`ffmpeg` y el stock de Pexels que alimenta
branded está mudo (sólo 2 de 20 tienen sonido audible; 4 más traen pista pero a
-91 dB, silencio digital), mientras que MAM ronda -12 a -19 dB en 7 de 9. Un
botón de silencio sobre material mudo no haría nada, y habilitar el audio
global haría que un video suelto arrancara fuerte sin que el usuario lo espere.

#### Capa de datos (`services/videos/`)
Un archivo por fuente (`mam.ts`, `youtube.ts`, `pexels.ts`) más `types.ts`, que
define el contrato común `VideoItem` (`id` estable + `source`). Cada fuente
extiende ese contrato con sus propios campos.

El `id` es **estable y propio de la fuente**, no el índice del carrusel: es lo que
permite abrir el modal en el video correcto sin depender del orden visual.

Todos los servicios **degradan a array vacío** ante un error de red o una API key
faltante. Nunca lanzan: una fuente caída oculta su sección, no rompe la home.

### Otros componentes (`app/components/`)
*   **`muy-destacada/`**: Noticia principal con gran impacto visual.
*   **`principales/`**: Carrusel interactivo de noticias destacadas.
*   **`live/`**: Transmisiones en vivo (Canal 7, Radio Nihuil).
    *   **Optimización**: Patrón "Click-to-Load" (Fachada).
*   **`servicios/`**: Widgets de servicios (clima, cotizaciones, etc.).
*   **`chat-bot/`**: Botón flotante de asistencia.
*   **`skeletons.tsx`**: Fallbacks de `<Suspense>` para toda la home.
*   **`footer/`** y **`header.tsx`**.

## ⚡ Optimizaciones de Rendimiento (Performance & UX)
1.  **Lazy Loading de Videos (MAM y Branded)**:
    *   Solo reproduce el **slide activo** del carrusel, y solo si está en viewport
        (IntersectionObserver).
    *   Se pausan al salir de pantalla para ahorrar batería, CPU y datos.
2.  **Fachada para YouTube (Click-to-Load)**:
    *   Aplica a Shorts y a las transmisiones en vivo.
    *   Evita la carga inicial de ~1MB+ de JS de YouTube por cada video.
    *   Mejora drásticamente el TTI y el FCP.
3.  **SSR + islas interactivas**: los wrappers resuelven datos en el servidor y solo
    se hidratan los carruseles y players.

## 📌 Decisiones registradas
*   **JW Player fue eliminado por completo** (sin componentes, servicios, tipos ni
    scripts). Motivo: ya no hay contrato con ese proveedor. No debe reintroducirse.
*   **MAM pasó de iframe embebido a carrusel nativo.** Ventaja: control total del
    diseño y viabilidad del futuro modal inmersivo. **Contrapartida asumida y
    aceptada**: se pierden las métricas del player del proveedor (Chartbeat y
    contador de views de la playlist). **No es un problema en esta etapa**: se
    trata de un prototipo de diseño, no de una pieza de producción. Si el
    prototipo avanza a producción, habrá que definir el tracking del lado de UNO.
*   **El modal abre con sonido**, como TikTok: el toque que lo abre cuenta como
    gesto del usuario y el navegador lo permite. Si aun así lo bloquea, el slide
    reintenta muteado antes de rendirse.
*   **El modal usa `object-cover`, no `object-contain`.** Se verificó contra la
    fuente: los videos de MAM son todos 9:16 y el servicio de Pexels descarta los
    horizontales. Con todo el material vertical, `contain` solo agregaba bandas
    negras sin proteger de ningún recorte.
*   **El modal llegó primero a MAM y Branded.** Ambos sirven mp4 propio, con
    control total de la reproducción. Shorts es un iframe y queda para un tramo
    aparte.
*   **Solo existe la versión mobile.** La versión desktop está pendiente. Los
    componentes conservan los puntos de extensión (`slidesPerView`, breakpoints,
    aspect ratios) para no bloquearla.

## ❓ Preguntas Pendientes / Definiciones
*   **Monetización**: Ads nativos en el feed programáticos.
*   **Navegación**: extender el modal inmersivo a YouTube Shorts, que hoy es la
    única fuente sin él.

---

📋 Para el estado del trabajo, la bitácora y el backlog, ver [PROGRESS.md](./PROGRESS.md).
