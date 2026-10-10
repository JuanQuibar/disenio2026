# Memoria del Proyecto: UNO 2026 (Rediseño Diario UNO)

## 🎯 Objetivo Principal
Crear un prototipo de alto impacto ("Wow Effect") para el rediseño de `diariouno.com.ar`. Este prototipo servirá para presentar la visión a los accionistas.
*   **Fase actual**: Prototipo enfocado en UI/UX Mobile First. El contenido de texto
    y el bloque branded son de maqueta (Lorem Ipsum + Pexels); el carrusel MAM ya
    consume **contenido real de producción**.
*   **Alcance actual**: La home del prototipo sigue siendo mobile-first. Existe una
    ruta `/desktop` con una maqueta estática de Stitch para evaluar el diseño antes
    de decidir su integración; no reemplaza la home ni está conectada a sus datos.
*   **Fase futura**: Posible integración con API real y entrega a proveedores para implementación final.
*   **Destino de la maqueta**: aprobación del directorio. Si se aprueba, el
    proveedor del CMS reconstruirá el diseño en su propia tecnología; no se
    pretende entregar este código como implementación de producción.
*   **Próximo tramo aprobado**: integrar mobile y desktop en una misma home
    responsive, según el [plan persistente](#plan-aprobado-integración-mobile-y-desktop).
    La implementación comienza en una nueva sesión; todavía no está realizada.

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

La especificación visual del prototipo mobile (paleta, tipografía, layout y
componentes) está en [DESIGN.md](./DESIGN.md).

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
| `youtube-shorts/` | `youtube-shorts-wrapper.tsx` | YouTube Data API | Solo en el modal (IFrame Player API) | Sí |
| `branded/` | `branded-wrapper.tsx` | Pexels (solo muestra de diseño) | Autoplay muteado del slide activo | Sí |

*   **`carrusel-mam/`**: Reels de producción de Diario UNO. Consume la playlist vía
    API y reproduce los `.mp4` en un `<video>` nativo, con badge de duración,
    control de sonido y título enlazado a la nota.
*   **`youtube-shorts/`**: Shorts del canal. **El carrusel no monta ningún
    iframe**: la tarjeta es thumbnail más botón, y el iframe existe solo dentro
    del modal, únicamente el del slide activo. Se controla con la IFrame Player
    API para que tenga los mismos controles propios que MAM y Branded.
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

Los servicios de video en `services/videos/` **degradan a array vacío** ante un
error de red o una API key faltante. Nunca lanzan: una fuente caída oculta su
sección, no rompe la home. Esta es también la convención para los demás servicios,
pero los helpers legacy de `services/fetchs.ts` todavía lanzan si falta Pexels y
algunos consumidores no toleran arrays vacíos; no confundir la regla con el estado
implementado.

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
2.  **Shorts sin iframe en el feed**:
    *   El carrusel de Shorts muestra solo thumbnails; el iframe se monta
        únicamente dentro del modal y solo para el slide activo.
    *   La fachada Click-to-Load sigue aplicando a las transmisiones en vivo.
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
*   **El modal llegó primero a MAM y Branded**, que sirven mp4 propio con control
    total de la reproducción, y después a Shorts vía **IFrame Player API**. En
    Shorts se usan **controles propios** (`controls: 0`) para mantener la misma
    interfaz en los tres carruseles. El iframe va con `pointer-events: none`,
    porque si no se queda con el gesto táctil y bloquea el swipe vertical.
*   **La home de producto sigue siendo mobile-first.** `/desktop` contiene solo la
    maqueta estática de Stitch para análisis; la integración de un diseño desktop
    con las secciones y fuentes reales sigue pendiente. Los componentes conservan
    los puntos de extensión (`slidesPerView`, breakpoints, aspect ratios) para no
    bloquearla.
*   **Arquitectura responsive aprobada (2026-10-08)**: composiciones visuales
    diferenciadas con contenido, piezas y comportamiento compartidos. Un único
    árbol de secciones, orden semántico mobile y orden visual desktop por CSS.
    Se acepta para esta maqueta la diferencia entre orden visual desktop y
    recorrido de Tab/lectores de pantalla. No montar dos homes ni duplicar players.

## Plan aprobado: integración mobile y desktop

### Alcance y límites

**Referencia original de Stitch:** [diseño público completo](https://2eaa6e7d-diario-uno-desktop-redesign.netlify.app/#).
La URL muestra la propuesta original; `/desktop` es su copia local para análisis.
La home integrada debe ajustarla para conservar todos los módulos mobile, no
copiar automáticamente omisiones o agregados de Stitch.

- `/` será la home responsive; `/desktop` permanece como referencia estática de
  Stitch, sin descomponer su exportación. `/detalle-nota` conserva su URL.
- Mobile define el inventario: desktop debe conservar las mismas secciones,
  submódulos y las dos inserciones publicitarias. Stitch define la referencia
  visual, no habilita agregar funcionalidades ni eliminar módulos.
- Mantener orden y comportamiento mobile. Desktop adopta el orden de Stitch
  ajustado por paridad. Desde **1024 px (`lg`)** se activa la composición desktop;
  por debajo se mantiene composición mobile con ajustes de ancho.
- Conservar fuentes actuales y modales de video. No rediseñar los modales para
  desktop ni construir un player nuevo.
- Fuera de este tramo: API de `diariouno.com.ar`, segunda propuesta desktop
  **3+6+3**, funcionalidades nuevas de CMS, IA real y ads programáticos.
- Ambas versiones podrán cambiar después: aceptar duplicación presentacional
  pequeña si facilita el diseño, no duplicación de datos o lógica compleja.
  No construir un motor genérico de layouts ni adaptar el proyecto al futuro CMS.

### Matriz inicial de paridad

Revisada contra `app/page.tsx`, sus wrappers y el HTML de Stitch. La equivalencia
es de módulos; la primera etapa debe cerrar también la matriz de elementos
internos (cards, widgets, agenda, medios, anuncios y controles).

| Módulo mobile | Referencia Stitch | Decisión |
| --- | --- | --- |
| MuyDestacada | Cobertura Extraordinaria | Adaptar preservando contenido y video |
| Apertura | Apertura del Día | Adaptar |
| Principales | Principales Noticias | Adaptar; su rótulo LEGIONARIUS no es el listado sin fotos |
| MAM | MAM Contenidos en Video | Reutilizar fuente, carrusel y modal |
| Política | Sección Política | Adaptar |
| Shorts | YouTube Shorts Diario UNO | Reutilizar fuente, carrusel y modal |
| Servicios | Servicios y Estado del Tiempo | Adaptar widgets existentes |
| Opinión | Opinión y Columnistas | Adaptar |
| Branded | Branded Content & Experiencias | Reutilizar verticales, carrusel y modal |
| Listado sin fotos / Legionarius | Legionarius y Espacio Comercial | Reubicar visualmente, conservar identidad |
| Encuesta y Senatur Romano / Senatus | Participación y Senatus | Conservar ambos módulos; agrupar visualmente |
| Gente | Sociedad y Gente; rótulo GENTE & CULTURA CUYANA | Es Gente, no la otra sección Sociedad |
| Canal 7 y Radio Nihuil | Transmisiones en Vivo | Conservar ambas fachadas; agrupar visualmente |
| Sociedad | Sección Sociedad | Conservar separada de Gente |
| Ovación | Sección Ovación Deportes | Adaptar conservando agenda |
| Crimen | Sección Policiales | Adaptar |
| Sudoku y Chat Vox Dei | Entretenimiento y Asistente IA | Conservar ambos módulos y comportamiento |
| Últimas noticias | Ultimatem Más Noticias | Adaptar |
| Dos BannerPublicitario | Espacios comerciales | Conservar dos inserciones |
| Header y Footer | Header y Footer | Adaptar marco responsive |

No se detectaron omisiones de módulos principales en esta correspondencia.
Stitch cambia orden, agrupa módulos y agrega detalles internos, como datos
financieros/fronterizos, enlaces a herramientas y promociones. No importarlos
automáticamente como funciones nuevas: restaurar elementos mobile omitidos y
excluir agregados exclusivamente desktop salvo aprobación expresa. No renombrar
los títulos mobile solo para igualarlos a Stitch.

### Arquitectura objetivo — aún no implementada

**Marco del sitio**

- Layout raíz para fuentes, metadatos, idioma y base global, sin ancho editorial
  ni Header del sitio.
- Route group `app/(sitio)/` con layout para header responsive y marco de home y
  detalle. Mover las páginas a ese grupo sin cambiar las URLs; ajustar imports a
  aliases. `/desktop` queda fuera del grupo y conserva su aspecto.
- Mantener `app/components/` y `app/services/`; no reorganizar todo el repositorio.
  Adaptar header/footer existentes sin agregar búsqueda real, autenticación ni
  suscripciones por el solo hecho de que aparezcan en Stitch.

**Composición**

- Un único árbol React en orden mobile; orden visual y spans desktop por CSS.
  Primitive presentacional y estilos de composición en `app/components/home/`,
  con identificadores estables por módulo.
- Grilla implícita y spans locales para agrupaciones; no grilla 3+6+3 en este tramo
  ni filas reservadas que dejen huecos si falta una fuente. No usar colocación
  densa que altere el orden visual previsto.
- Orden visual desktop: cobertura → apertura → principales → MAM → política →
  Shorts → servicios → opinión → branded → Legionarius/primer anuncio →
  encuesta/Senatus → Gente → Canal 7/Radio Nihuil → Sociedad → Ovación →
  segundo anuncio → Crimen → Sudoku/asistente → últimas noticias → footer.
- Los grupos son visuales: cada módulo conserva identidad y wrapper. No volver a
  invocarlo para otra composición. Orden y spans tienen un lugar identificable
  de edición, separado de fuentes de datos y estilos internos.
- El slot de posición se crea **dentro del wrapper después de validar datos**,
  no alrededor de un wrapper que puede retornar `null`. Los fallbacks de
  `Suspense` conservan posición y geometría responsive.
- Tab y lectores de pantalla siguen orden mobile también en desktop: limitación
  aceptada para esta maqueta. No introducir `tabindex` positivo para compensarla.

**Contenido y presentación**

- Cada sección con fetch expone un `-wrapper.tsx`: prepara sus datos, valida
  presencia y decide si se muestra. La página no importa servicios ni cards.
- `MuyDestacada` actualmente hace fetch pese a su excepción documentada; al
  intervenirla, extraerlo a un wrapper y conservar su comportamiento visible.
- Separar textos, enlaces e imágenes de muestra del JSX al intervenir módulos,
  con contratos TypeScript pequeños según necesidades reales. Mobile y desktop
  reciben los mismos objetos, no datasets paralelos.
- CSS responsive cuando solo cambia distribución; markup específico cuando
  realmente cambia composición. No duplicar medios activos ni controles con estado.
- No importar componentes internos entre secciones; extraer primitives
  compartidas explícitas cuando exista reutilización real.
- Estilos de composición scoped a home y tokens en Tailwind existente, sin
  contaminar detalle o referencia. No implementar adaptadores de API especulativos.

**Video e interacciones**

- Conservar módulos por fuente, selección por `id`, reglas de sonido y portal de
  los modales. Una instancia por carrusel.
- Adaptar slides visibles/separación con breakpoints de Swiper; navegación desktop
  conectada al mismo carrusel, si hace falta.
- Solo el video activo reproduce en viewport; abrir el modal pausa el carrusel.
  Shorts no monta iframes en feed y mantiene un iframe activo en su modal.
- Conservar cierre, scroll y retorno de foco; probar resize con modal abierto.
  Preservar interacciones actuales de encuesta, Sudoku, chat y live.

### Secuencia para una nueva sesión

**Antes de código:** leer `PROGRESS.md`, este documento y `README.md`, en ese
orden. Preservar la base del import de Stitch y cualquier cambio local existente.
Este plan quedó consolidado, no ejecutado.

**Continuidad acordada (2026-10-10):** trabajar en la carpeta principal
`uno-2026-1`, sin crear otro worktree por conversación. Se trasladaron la maqueta,
sus tokens y este plan, sin incorporar cambios de
`responsive-plan-implementation-inventory`, que se conserva solo como respaldo.
Preservar los cambios locales existentes en MAM y el orden mobile más reciente:
Principales antes de MAM y Política antes de Shorts. La especificación
[DESIGN.md](./DESIGN.md) sigue siendo la referencia visual mobile.

1. **Inventario y baseline.** Cerrar paridad de submódulos, registrar baseline
   mobile a 414×896 y desktop de referencia, y validar configuración local sin
   revelar claves. Resolver diferencias de alcance con el usuario antes de añadir
   o quitar contenido.
2. **Marco y composición.** Route group, header/footer, contenedores, orden,
   spans, slots y skeletons. Verificar `/`, `/detalle-nota` y `/desktop`.
3. **Noticias.** Cobertura, apertura, principales, política, opinión, Legionarius,
   Sociedad, Gente, Ovación, Crimen y últimas noticias. Separar contenido y
   adaptar presentación conservando experiencia mobile.
4. **Videos.** Adaptar MAM, Shorts y Branded y validar comportamiento por fuente
   en ambos anchos, sin rediseñar modales.
5. **Widgets y anuncios.** Servicios, encuesta/Senatus, ambas transmisiones,
   Sudoku/chat y dos anuncios; cerrar matriz de paridad.
6. **Validación y cierre.** Ejecutar criterios siguientes y actualizar estado
   real en documentación. Cada etapa se valida antes de avanzar; no requiere
   completar todo en una sesión.

### Criterios de aceptación

- Una home responsive y rutas preservadas; referencia Stitch intacta.
- Cada módulo mobile existe una vez en desktop, incluidos dos anuncios y ambas
  transmisiones. Sin extras, datasets paralelos ni truncamientos no acordados.
- Orden mobile preservado y orden visual desktop según matriz. Comparar con
  Stitch por estructura, jerarquía, proporciones y espacios, no fotos/copys.
- Probar 414×896, 768×1024, anchos 1023 y 1024, y 1440×900: sin overflow horizontal,
  scroll hasta footer y transición de breakpoint correcta.
- Probar apertura por id, slides, pausa/progreso/sonido por fuente, cierre/Escape,
  scroll/foco restaurados y resize con modal abierto. Sin dobles reproductores ni
  iframes Shorts en feed.
- Widgets y links existentes preservados; sin errores nuevos de consola o
  hidratación. Revisar teclado respetando la limitación semántica acordada.
- Fuentes vacías no dejan slots/secciones vacíos; fallos con logging, sin
  respuestas ficticias de éxito. Corregir guards de wrappers intervenidos.
- `npx tsc --noEmit`, `npm run build` y `git diff --check` deben pasar para cerrar
  implementación. La consolidación documental no requiere builds.

**Bloqueador conocido:** el build anterior compiló pero falló al prerenderizar
`/` sin Pexels válido. Validar con configuración local válida, nunca claves
ficticias ni secretos en git. Si no está disponible y cerrar el build exige
reparar helpers legacy fuera de las secciones intervenidas, pedir alcance antes
de extender el trabajo. No afirmar que el build pasó ni que toda la home ya
degrada correctamente.

**Actualización 2026-10-10:** el build y los tipos pasaron en la carpeta principal
tras trasladar la base, usando su configuración local existente. El bloqueo de
entorno anterior no está activo allí; las limitaciones de degradación legacy
siguen pendientes y no fueron corregidas durante el traslado.

## ❓ Preguntas Pendientes / Definiciones
*   **Monetización**: Ads nativos en el feed programáticos.
*   **API de Diario UNO**: evaluar acceso y equivalencia editorial si se solicita
    comparar ambos diseños con el mismo contenido real; fuera del tramo aprobado.
*   **Segunda propuesta desktop 3+6+3**: posible exploración posterior, no decidida
    ni incluida en la integración actual.

---

📋 Para el estado del trabajo, la bitácora y el backlog, ver [PROGRESS.md](./PROGRESS.md).
