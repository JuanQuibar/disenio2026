# Memoria del Proyecto: UNO 2026 (Rediseño Diario UNO)

## 🎯 Objetivo Principal
Crear un prototipo de alto impacto ("Wow Effect") para el rediseño de `diariouno.com.ar`. Este prototipo servirá para presentar la visión a los accionistas.
*   **Fase actual**: Prototipo enfocado en UI/UX Mobile First. El contenido de texto
    y el bloque branded son de maqueta (Lorem Ipsum + Pexels); el carrusel MAM ya
    consume **contenido real de producción**.
*   **Alcance actual**: La home del prototipo integra mobile y desktop en `/`, con
    composición desktop desde 1024 px. La ruta `/desktop` inició una tarea de
    diseño alternativo aislada: parte de una réplica HTML estática de la home,
    sin conectarse a sus datos ni participar de las referencias o validaciones
    de la integración original. Para `/`, la excepción fue una instrucción explícita para
    trasladar exclusivamente el diseño aprobado de Ovación al módulo real de
    `/`; esa intervención es independiente de la etapa 5 y no convierte a
    `/desktop` en referencia general de esa home. Ovación ya tiene su
    presentación propia cerrada en mobile y desktop: no será adaptado a Stitch
    y queda fuera del alcance y los criterios de cierre de la etapa 5.
    `/desktop2` es otra instantánea estática aislada: nació de una captura del
    HTML final de `/desktop`, pero desde entonces evoluciona por separado y no
    constituye una referencia para `/` ni para `/desktop`.
*   **Segunda home funcional, aprobada el 2026-10-19**: `/opcion-2` reutiliza
    la composición de `/` y adopta el diseño superior de `/desktop` solo desde
    1024 px, conservando Live y todo el tramo desde MAM, incluido. Ambas rutas
    muestran la misma experiencia mobile. Esta autorización es específica de
    `/opcion-2` y no reabre el diseño aprobado de `/` ni las etapas 1–8.
*   **Fase futura**: Posible integración con API real y entrega a proveedores para implementación final.
*   **Destino de la maqueta**: aprobación del directorio. Si se aprueba, el
    proveedor del CMS reconstruirá el diseño en su propia tecnología; no se
    pretende entregar este código como implementación de producción.
*   **Integración responsive**: etapas 1 a 8 verificadas y cerradas según el
    [plan persistente](#plan-aprobado-integración-mobile-y-desktop). La etapa 5
    quedó cerrada por el usuario el 2026-10-19 y el estado visual actual de `/`
    es su línea base final.
    La composición se simplificó el 2026-10-13: una columna general y tres
    agrupaciones responsive. Desde el 2026-10-19, mobile conserva Legionarius,
    chat y Sudoku en ese orden. Desde 1024 px, Legionarius se reemplaza por el
    Gráfico interactivo, comparte fila y altura con el chat, y Sudoku se oculta
    sin reservar espacio. La reserva presentacional blanca de 400 px para un
    futuro espacio de juegos aparece debajo de Crimen. También desde esa
    fecha,
    Canal 7, Radio Nihuil y el primer anuncio comparten una fila de tres
    columnas desde 1024 px: el anuncio reserva 332 px y el espacio restante se
    divide entre ambos streams; en mobile el anuncio aparece debajo de ellos.
    Los tres contenedores desktop igualan su altura sin deformar videos ni
    anuncio. Los streams usan cabezales oscuros `CANAL 7 EN VIVO` y
    `RADIO NIHUIL EN VIVO` con punto rojo pulsante; mobile no cambia.
    Encuesta/Senatus, Ovación, el segundo anuncio y Sociedad quedan consecutivos
    en ese orden en mobile y desktop. El anuncio usa el leaderboard de Stitch
    desde 1024 px y conserva el 300×250 mobile. Los módulos sin adaptación
    específica a Stitch se aceptan en su presentación vigente y no quedan
    pendientes visuales dentro de la etapa 5. La etapa 6, **ajuste de tamaño de
    fuentes**, también quedó cerrada y aprobada con textos largos completos.
    La revisión funcional de widgets/anuncios cerró la etapa 7 y la validación
    integral cerró la etapa 8. No hay una etapa siguiente automática. La etapa 4
    registra una limitación de reproducción de un Short remoto, sin simular éxito.

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
*   `(sitio)/`: Route group de `/`, `/opcion-2` y `/detalle-nota`, con header y
    footer compartidos. Las dos páginas de home importan **únicamente
    `HomeWrapper`** y eligen su variante; no importan servicios ni cards.
*   `components/home/home-wrapper.tsx`: Composición compartida de las dos homes.
    `home-types.ts` define `HomeVariant` (`original` o `alternativa`, con
    `original` por defecto); `home-alternative.css` contiene la presentación
    específica de la segunda opción.
*   `desktop/page.tsx`: Prototipo desktop alternativo, fuera del marco del sitio.
    Usa `dangerouslySetInnerHTML` para una instantánea visual congelada de `/`
    desde 1024 px; no importa wrappers, servicios ni componentes de la home.
*   `desktop2/page.tsx`: Segunda instantánea desktop autosuficiente. Contiene el
    HTML y los estilos locales en un único `String.raw` y lo renderiza solamente
    con `dangerouslySetInnerHTML`; no importa ni comparte implementación con
    `/desktop`.
*   `layout.tsx`: Layout global (fuentes, metadatos e idioma).
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

### Resolución y selección de las fotos editoriales

`components/editorial-image.tsx` es un componente presentacional, sin fetch.
Usa `<Image>` con tamaños responsive para mobile y agrega un `<source>` desde
1024 px. Para Pexels retira los parámetros `h` y `w` de la copia reducida antes
de pasarla al optimizador de Next; pedir más ancho sobre la copia `medium` de
350 px no recupera el detalle del original. Los retratos locales también usan
una selección desktop ajustada a su recorte circular.

`desktopSizes` debe cubrir la imagen completa **antes** del recorte
`object-cover`, no solo el ancho del contenedor. Por eso Gente, las fotos 4:3 y
las miniaturas cuadradas pueden necesitar más ancho de descarga que su ancho
CSS. Se verificó suficiencia hasta densidad 2× con los originales actuales.
La selección aprobada de doce fotos tomadas en Argentina se define para
las dos homes funcionales en `app/content/editorial-photos.ts` y cubre
Apertura, Principales, Política, Ovación, Sociedad, Gente y Crimen. Los
originales verificados tienen entre 3011 y 6016 px de ancho. Los wrappers
entregan estas fotos y sus textos alternativos tanto en mobile como en desktop;
conservan las fuentes de datos y la omisión de secciones cuando faltan noticias.
Las medidas del diseño mobile se conservan.
`/desktop` y `/desktop2` conservan fuentes equivalentes dentro de su HTML
estático independiente; la selección de fotos se incorporó por separado a cada
instantánea. No importan esta primitive ni se regeneran desde las homes. La
publicidad Pepsi usa el original aportado por el usuario
`public/aviso_pepsi.jpeg` (1440×2912), suficiente para su recuadro de hasta
300×600 también a densidad 2×, en las tres rutas que la muestran.

### Segunda home funcional aprobada (`/opcion-2`)

El usuario aprobó visualmente esta propuesta el 2026-10-19. Se implementó para
presentar una segunda opción interactiva a los accionistas, conservando `/`
como primera propuesta. No utiliza HTML capturado, `String.raw` ni
`dangerouslySetInnerHTML`; `/desktop` y `/desktop2` permanecen independientes.

Las páginas `(sitio)/page.tsx` y `(sitio)/opcion-2/page.tsx` delegan en
`HomeWrapper` con `variante="original"` y `variante="alternativa"`. Live/Muy
Destacada y todo el tramo desde MAM, incluido, comparten exactamente la misma
composición, wrappers y fallbacks. Los cambios de presentación de la alternativa
se limitan a desktop; hasta 1023 px se mantiene la home mobile actual, incluido
el único bloque de Última hora (Agencia). No se montan dos homes completas ni
dos juegos de reproductores para resolver el responsive.

Desde 1024 px, Apertura y Principales ocupan las ocho columnas izquierdas y el
lateral las cuatro derechas, con gap de 24 px. Apertura presenta foto 16:9 de
alta resolución y Principales sus seis cards en 2×3 sobre el mismo Swiper.
El `<picture>` de Apertura sirve la misma foto editorial en mobile y desktop,
con tamaños adecuados a cada ancho. El lateral
reúne AHORA, publicidad Pepsi 300×600, encuesta adicional y AVANCES DE LA IA.
Siempre muestra seis titulares de AHORA y cuatro de IA, incluso a 1024 px.
Tiene altura natural y MAM comienza después de la columna más alta: puede quedar
espacio libre bajo la izquierda. No heredar de `/desktop` las reglas que ocultan
filas por ancho ni su `contain: size` para forzar la altura del lateral.

`UltimaHoraWrapper` acepta `alternativa` y genera un dataset por carga. Entrega
las primeras cinco noticias al único bloque mobile, Agencia, y el dataset
completo al lateral desktop. `UltimaHoraLateralWrapper` limita AHORA a las seis
primeras noticias y compone el lateral. IA usa los primeros
cuatro titulares y fuentes de la referencia, con resúmenes ficticios en
`avances-ia-noticias.ts`; no son citas reales de esos medios. La primitive
`UltimaHoraResumenes` separa `variante` (interacción) de `apariencia` y permite
configurar `mostrarPastillas`:

- Agencia mobile: apertura superpuesta y apariencia de Agencia, con cinco
  noticias y pastillas de maqueta.
- AHORA desktop: misma apertura y apariencia, con seis noticias; reloj real y
  pastillas de maqueta.
- IA: apariencia de Agencia sin pastillas y resumen en flujo, con desplazamiento
  interno del contenido para revelar la selección.
- Los tres: una noticia abierta por módulo, sin navegación; altura exterior estable
  al abrir/cerrar, recalculada al cambiar el ancho; cierre por titular, botón o
  Escape, retorno de foco y filas tapadas inertes. Si un resumen superpuesto no
  cabe entero en ninguno de los lados del título, el panel limita su altura y
  permite desplazar su contenido sin tapar el titular seleccionado.

`EncuestaWrapper` acepta `lateral`, reutiliza los datos actuales y usa un ID
distinto para la copia adicional. La encuesta principal sigue en su lugar;
ninguna agrega votación, historial funcional ni persistencia.

El header reconoce `/opcion-2`: en desktop, servicios se desplaza con la página
y la fila principal queda sticky; logo, Portada y enlace a transmisiones
mantienen al usuario en la alternativa. El CSS usa `overflow-x: clip` en
`html/body` exclusivamente para esa ruta y breakpoint para no crear un
contenedor de scroll que rompa el sticky. `/`, detalle y mobile mantienen su
presentación anterior. El footer sigue siendo el compartido de `(sitio)`.

Pasaron tipos, build y whitespace. Se comprobó paridad a 414/768/1023 px y la
alternativa a 1024/1200/1280/1366/1440 px, incluyendo cantidades, dimensiones,
resúmenes, teclado, resize, header, modales, radio y chat. Las recargas finales
de ambas homes quedaron sin errores de consola. La revisión visual posterior
del usuario cerró el tramo y habilitó esta documentación.

### Prototipo desktop alternativo (`/desktop`)

La tarea independiente comenzó el 2026-10-17. Su baseline es el
`outerHTML` congelado de `.site-layout`, capturado desde la home integrada a
1440×900 con los carruseles en el primer slide. Conserva header, 25 contenedores
de módulo y footer, y reutiliza las hojas globales. Los overrides CSS locales
neutralizan los anchos inline de Swiper y permiten que la alternativa evolucione
sin modificar la home integrada.

La primera composición alternativa fue aprobada el 2026-10-18. La franja de
servicios del header permanece en el flujo y desaparece al hacer scroll; solo la
fila principal de 57 px queda sticky. Apertura ocupa ocho columnas, apila foto
16:9, título, bajada y meta con 16 px entre foto y título, y oculta el cabezal
interno, la volanta y las claves. La foto usa una fuente de alta resolución para
evitar pixelado. Conserva la firma y `INFORME ESPECIAL`. Principales ocupa las
mismas ocho columnas debajo, con sus seis cards estáticas en una grilla 2×3 y
gaps de 24 px.

Las cuatro columnas derechas muestran la copia HTML congelada de Agencia en un
panel negro que abarca Apertura y Principales, con radio exterior de 8 px y
`overflow: hidden`. Su cabezal blanco queda separado 24 px del borde superior y
de ambos laterales, usa radio de 6 px y presenta en negro el punto rojo, `AHORA`
y el reloj congelado. Se muestran sólo los primeros seis titulares. A
continuación, un fragmento HTML estático añade una tarjeta blanca con separador
`PUBLICIDAD` y la pieza Pepsi 300×600 de `public/aviso_pepsi.jpeg`, seguida
por un corte `PARTICIPACIÓN` y una réplica visual de la encuesta. La pieza escala
proporcionalmente a 1024 px; el cabezal de la encuesta replica al original y
oculta su meta hasta 1100 px. La encuesta original permanece en su ubicación.
Debajo, `AVANCES DE LA IA` reutiliza el lenguaje visual de Agencia con un
cabezal blanco, un símbolo azul de tres nodos conectados y un listado oscuro de
volanta, título y fuentes, sin pastillas `URGENTE`/`TENDENCIA`. La regla vigente
muestra una, dos, tres y cuatro filas completas en los rangos 1024–1199,
1200–1279, 1280–1365 y desde 1366 px, respectivamente, de modo que ninguna
quede cortada. No hay
scroll ni apertura de resúmenes y Timeline continúa oculto. Esta decisión
pertenece solo a `/desktop` y no modifica la ocultación ni el comportamiento
responsive de Última hora en `/`.

Ovación fue aprobado el 2026-10-19 como un panel único de ancho completo con
fondo `#111827`, padding de 24 px y radio de 8 px. El logo mide 135 px y comparte
cabezal con una cinta de novedades deportivas ficticias: dos grupos idénticos
producen un loop CSS lineal de 34 segundos, con volantas y puntos rojos, pausa
por hover y fallback estático para `prefers-reduced-motion`. Una línea blanca
separa el cabezal del resto del contenido.

La agenda usa el iframe general de DataFactory
`https://america-df.s3.amazonaws.com/html/v3/htmlCenter/data/deportes/todos/todos/pages/es/agenda.html`.
El rótulo `FIXTURE - PRIMERA A` está oculto y el iframe de 90 px se presenta en
un marco gris 200 con 10 px de padding y radio de 8 px. La composición editorial
mantiene foto principal 4:3, firma y título sans uppercase de 28/34 px, sin
bajada. Las cuatro secundarias ocupan filas iguales con miniaturas 3:2 y títulos
uppercase de 16/22 px, reducidos a 14/19 px entre 1024 y 1100 px. Todos los
títulos llevan una volanta roja y las dos columnas terminan exactamente a la
misma altura. Es una réplica visual: no agrega datos, handlers ni comportamiento
React.

Es una réplica visual, no funcional: no hidrata React ni recrea sus handlers.
Enlaces, iframes y medios conservan solo el comportamiento nativo del HTML. No
tiene requisitos por debajo de 1024 px, no se regenera cuando cambia `/` y puede
evolucionar de forma independiente. Sigue excluida de las etapas 5, 7 y 8.

### Segunda alternativa estática (`/desktop2`)

La ruta se creó el 2026-10-19 capturando el HTML final renderizado de
`/desktop`, incluidos sus estilos locales. Toda la captura vive en la constante
`desktop2Snapshot` de `app/desktop2/page.tsx`, declarada con `String.raw`, y
el componente de página devuelve únicamente un contenedor con
`dangerouslySetInnerHTML`. No importa componentes, wrappers, servicios ni datos
de `/desktop`; tampoco agrega hidratación o handlers React. Por esa razón puede
abrirse directamente, pero no recibe cambios futuros de `/` o `/desktop`:
cualquier sincronización debe ser una decisión explícita y una nueva captura.

La composición actual invierte el patrón foto/título de la instantánea original:
Cobertura extraordinaria, Apertura, las seis tarjetas de
Legionarius/Principales, Política, Ovación, Sociedad, Crimen y las dos tarjetas
de Senatus muestran título, firma y metadatos antes del medio. Apertura usa una
relación 4:3. Las 14 bajadas editoriales con clase `bajada` no se muestran;
las dos descripciones de `FOCO DE COBERTURA` permanecen visibles. Para evitar
huecos después de retirar las bajadas, Política, Sociedad y Crimen permiten que
la imagen principal crezca hasta completar exactamente la altura del listado
lateral; el resto de las tarjetas conserva sus proporciones naturales.

La variante fue revisada en 1024×900, 1366×900 y 1440×900, sin overflow
horizontal ni errores o warnings de consola. `git diff --check`,
`npx tsc --noEmit` y `npm run build` pasaron; Next.js prerenderiza
`/desktop2` como ruta estática. Estas verificaciones no convierten la ruta en
parte de las etapas cerradas de la home integrada.

### Integración independiente de Ovación en la home real

El 2026-10-19, por instrucción explícita del usuario, la variante aprobada de
Ovación en `/desktop` se trasladó exclusivamente al módulo real de `/` desde
1024 px. La implementación conserva `OvacionWrapper`, `fetchDeportes()` y sus
componentes internos; no copia el HTML estático ni usa
`dangerouslySetInnerHTML`. Mantiene datos, firmas e imágenes reales y encapsula
la presentación desktop bajo la clase `ovacion-integrated`.

El panel integrado replica fondo, cabezal, ticker CSS, agenda y composición
editorial de la alternativa aprobada. Se verificaron 1024×900, 1366×768 y
1440×900 con igualdad exacta entre la columna principal y el listado, agenda de
90 px, ticker de 34 segundos, pausa por hover y ausencia de overflow. La agenda
general de DataFactory reemplaza al fixture anterior en ambos anchos por decisión
del usuario; hasta la aprobación desktop fue el único cambio permitido en
mobile. Después, el módulo mobile adoptó también un único panel `#111827` con
padding de 8 px y radio de 8 px; cabezal con logo de 96 px, ticker CSS, línea
blanca recta y 16 px de separación hasta la agenda. El rótulo del fixture y la
bajada principal están ocultos, y todos los títulos se muestran uppercase y en
blanco. La agenda conserva el iframe general de 90 px. No se alteró la
presentación desktop ni se introdujo overflow horizontal.

Esta implementación es ahora la referencia propia y definitiva de Ovación en
la home integrada. Por decisión explícita del usuario, el módulo no será
cotejado ni adaptado a la versión de Stitch y queda excluido de la etapa 5. La
etapa permanece suspendida; `/desktop` no gana alcance como referencia para
otros módulos.

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

Desde 1024 px, el shell mantiene el viewport completo como superficie modal,
pero limita el reproductor activo a un frame 9:16 centrado y de `100dvh`. La
home queda visible detrás mediante un velo negro al 75% con desenfoque. Dos
botones circulares, alineados a los costados del frame, llaman a `slidePrev()` y
`slideNext()` sobre el mismo Swiper y se deshabilitan en los extremos; la cruz
de cierre usa una variante desktop visible en la esquina superior derecha.
MAM y Branded aplican el límite al `<video>` nativo, y Shorts al único iframe
activo. Hasta 1023 px se conserva el fullscreen mobile a sangre completa, sin
los botones laterales.

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

Los servicios de video en `services/videos/` y los helpers de `services/fetchs.ts`
degradan a array vacío ante errores de red o una API key faltante, y registran el
error sin exponer credenciales. Los wrappers omiten su sección cuando no hay datos.

### Otros componentes (`app/components/`)
*   **`ultima-hora/`**: Agencia es la única variante mobile desde la decisión
    del usuario del 2026-10-20. Se ubica inmediatamente después de Apertura y
    antes de Principales, sin margen vertical propio. Su contenedor exterior
    usa `data-home-module`, `pt-1 pb-2` y `lg:hidden`; el padding de 4/8 px
    se combina con el gap de 8 px de la home. El bloque mobile se oculta desde
    1024 px sin reservar espacio en ambas homes.
    `ultima-hora-wrapper.tsx` espera `connection()`, genera un solo dataset por
    carga y entrega las primeras cinco noticias a Agencia. En `/opcion-2`
    también entrega el dataset completo al lateral desktop, que muestra seis
    titulares en AHORA. `ultima-hora-noticias.ts` centraliza identidad, titular,
    hora ficticia, volanta y contribuciones estructuradas como fuente/párrafo.
    Cada noticia reúne entre dos y cuatro fuentes únicas aleatorias, estables
    hasta recargar, del catálogo Infobae, Clarín, La Nación, Cronista, Página 12,
    iProfesional y a24. Son datos de maqueta, no citas reales.
    `ultima-hora-resumenes.tsx` mide la altura de las cinco filas cerradas con
    ResizeObserver y superpone el resumen sobre el listado, debajo o arriba del
    título según el espacio disponible. Si un resumen largo no cabe entero en
    ninguno de los dos lados, limita la altura del panel y permite desplazar
    solo su contenido: el título sigue visible. Abrir/cerrar no mueve el título
    seleccionado ni altera el tamaño exterior o los módulos siguientes. Hay
    una noticia abierta por módulo, cierre por titular, botón o Escape, retorno
    de foco y filas tapadas inertes. Los resúmenes blancos incluyen título y
    un párrafo por fuente con atribución.
    Agencia conserva fondo oscuro, volantas y fuentes bajo cada titular,
    separadores y pastillas `URGENTE`/`TENDENCIA` de muestra. El cabezal negro
    muestra punto rojo y reloj cliente `HH:mm:ss` en Geist Mono, actualizado
    cada segundo, con una línea blanca bajo el grupo. Las etiquetas no son
    clasificación editorial ni noticias en tiempo real. `/desktop` y
    `/desktop2` son instantáneas independientes y no se sincronizan.
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
*   **Las homes funcionales siguen siendo mobile-first.** `/` y `/opcion-2`
    comparten la base mobile y los módulos desde MAM. La segunda incorpora el
    lateral desktop aprobado. `/desktop` conserva su implementación estática:
    fue referencia visual explícita para esa alternativa, pero no se conecta a
    sus datos ni se sincroniza automáticamente con ella.
*   **Arquitectura responsive vigente (simplificada el 2026-10-13)**: contenido,
    piezas y comportamiento compartidos en un único árbol. El orden mobile se
    conserva también visualmente en desktop; Encuesta/Senatus, Canal 7/
    Radio Nihuil y Gráfico interactivo/chat comparten fila desde 1024 px. La
    excepción aprobada es Sudoku: permanece debajo del chat en mobile y se
    oculta en desktop. Desktop suma después de esa fila una reserva de 400 px
    para juegos, sin contenido interactivo ni equivalente mobile. No montar dos
    homes ni duplicar players.

## Plan aprobado: integración mobile y desktop

### Alcance y límites

**Referencia original de Stitch:** [diseño público completo](https://2eaa6e7d-diario-uno-desktop-redesign.netlify.app/#).
La URL muestra la propuesta original y es una referencia obligatoria de la etapa
5. La home integrada debe ajustarla para conservar todos los módulos mobile, no
copiar automáticamente omisiones o agregados de Stitch. Las decisiones ya
aprobadas y registradas en [DESIGN.md](./DESIGN.md) prevalecen ante cualquier
discrepancia.

**MCP oficial de Stitch:** la conexión del cliente a
`https://stitch.googleapis.com/mcp` fue verificada el 2026-10-14. No es una
dependencia de la aplicación ni requiere configuración dentro del repositorio.
El proyecto de referencia identificado es
`projects/8393196556759612477` (`Diario UNO Desktop Redesign`) y la pantalla
principal es
`projects/8393196556759612477/screens/ff4fca9cd22a49c8b6ac9350425059ec`
(`Diario UNO — Portada Desktop 2026`, desktop). Antes de una consulta nueva,
confirmar que el MCP siga disponible y que esos recursos continúen siendo los
correctos mediante las operaciones de listado/lectura.

El MCP se usó como fuente de consulta para estructura, estilos, tokens, captura
y HTML expuestos por el servicio, complementado con la web pública durante el
cotejo de etapa 5. Ninguna discrepancia
autoriza a cambiar inventario, orden o
comportamiento sin acuerdo. No llamar herramientas de creación, edición,
aplicación de sistemas de diseño, carga o eliminación: consultar el diseño no
autoriza modificar el proyecto de Stitch. La credencial se configura en el
cliente, fuera del repositorio; no copiarla a `.env`, documentación, comandos,
logs ni mensajes. Si Stitch o su MCP no están disponibles en otra sesión, usar
la documentación aprobada y el ZIP preservado; `/desktop` no es un fallback.

- `/` será la home responsive y `/detalle-nota` conserva su URL. `/desktop`
  permanece disponible como prototipo alternativo independiente: queda fuera de
  comparaciones, validaciones y decisiones de la home aunque su baseline inicial
  sea una instantánea visual de ella.
- Mobile define el inventario base y desktop lo conserva salvo por decisiones
  explícitamente aprobadas: Servicios está fuera de `/`, Sudoku se oculta y las
  cinco notas de Legionarius son reemplazadas por el gráfico interactivo.
  Desktop agrega además la reserva presentacional para juegos debajo de Crimen.
  Stitch define la referencia visual, no habilita por sí solo agregar
  funcionalidades ni eliminar módulos.
- Mantener orden y comportamiento mobile. Desktop sigue ese mismo orden, no el
  de Stitch. Desde **1024 px (`lg`)**, Encuesta/Senatus y Gráfico
  interactivo/chat se muestran en dos columnas locales; Canal 7/Radio Nihuil
  comparte una fila con el primer anuncio. El resto permanece en una columna
  general y, por debajo del breakpoint, las agrupaciones se apilan en el mismo
  orden.
- Conservar fuentes actuales y la arquitectura compartida de los modales de
  video. La presentación desktop aprobada el 2026-10-19 reemplaza la restricción
  inicial de no rediseñarlos, pero no construye un player ni un carrusel nuevo.
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
| MuyDestacada | Cobertura Extraordinaria | Adaptada y aprobada el 2026-10-14; preserva el contenido mobile y usa un video fijo 16:9 |
| Apertura | Apertura del Día | Adaptar |
| Principales | Principales Noticias | Adaptado y aprobado el 2026-10-14; su rótulo LEGIONARIUS no es el listado sin fotos |
| MAM | MAM Contenidos en Video | Reutilizar fuente, carrusel y modal |
| Política | Sección Política | Adaptada y aprobada el 2026-10-15 como `POLÍTICA & GOBIERNO`, conservando 1 principal + 4 secundarias |
| Shorts | YouTube Shorts Diario UNO | Reutilizar fuente, carrusel y modal |
| Servicios | Servicios y Estado del Tiempo | Oculto en `/`; implementación preservada y presentación vigente aceptada al cerrar la etapa 5 |
| Opinión | Opinión y Columnistas | Presentación vigente aceptada al cerrar la etapa 5 |
| Branded | Branded Content & Experiencias | Reutilizar verticales, carrusel y modal |
| Listado sin fotos / Legionarius | Legionarius y Espacio Comercial | Mobile conserva cinco notas; desde 1024 px se reemplaza por `GRÁFICO INTERACTIVO`, video Nepal en loop y meta `EDICIÓN ESPCIAL` |
| Encuesta y Senatur Romano / Senatus | Participación y Senatus | Conservar ambos módulos; agrupar visualmente |
| Gente | Sociedad y Gente; rótulo GENTE & CULTURA CUYANA | Es Gente, no la otra sección Sociedad |
| Canal 7 y Radio Nihuil | Transmisiones en Vivo | Conservar ambas fachadas; agrupar visualmente |
| Sociedad | Sección Sociedad | Actualizada el 2026-10-19: `SOCIEDAD & COMUNIDAD` presenta 1 principal + 4 secundarias en mobile y desktop; se omite la última noticia anterior |
| Ovación | Sección Ovación Deportes | Conserva el diseño independiente aprobado en mobile y desktop, sin adaptación ni cotejo con Stitch |
| Crimen | Sección Policiales | Adaptado y aprobado el 2026-10-15 como `CRIMEN & POLICIALES`, conservando 1 principal + 4 secundarias y el enlace existente |
| Sudoku y Chat Vox Dei | Entretenimiento y Asistente IA | Mobile conserva ambos; desktop presenta Chat junto al video y oculta Sudoku sin reservar espacio |
| Últimas noticias | Ultimatem Más Noticias | Adaptar |
| Dos BannerPublicitario | Espacios comerciales | Conservar dos inserciones; la segunda, entre Ovación y Sociedad, usa `VENDIMIA CONNECT 2026` como leaderboard desktop y mantiene el 300×250 mobile |
| Header y Footer | Header y Footer | Header adaptado y aprobado el 2026-10-14; presentación vigente del footer aceptada al cerrar la etapa 5 |

No se detectaron omisiones de módulos principales en esta correspondencia.
Stitch cambia orden, agrupa módulos y agrega detalles internos, como datos
financieros/fronterizos, enlaces a herramientas y promociones. No importarlos
automáticamente como funciones nuevas: restaurar elementos mobile omitidos y
excluir agregados exclusivamente desktop salvo aprobación expresa. No renombrar
los títulos mobile solo para igualarlos a Stitch.

### Etapa 1 verificada: inventario y baseline (2026-10-10)

**Inspeccionado, no implementado.** Se trabajó directamente en
`/Users/juanquibar/Desktop/proyectos/Diario-UNO/uno-2026-1`, en `main` sobre
`8c5066a`. Se preservaron el cambio local de formato en
`app/services/videos/mam.ts` y `stitch_diario_uno_desktop_redesign (1).zip` sin
seguimiento. No se incorporó el worktree de respaldo ni se crearon worktrees,
commits o cambios de componentes/estilos. `/desktop` sigue intacta.

#### Inventario interno cerrado

El orden de la columna izquierda es el **orden real de `app/page.tsx`**, no el
orden visual desktop. Hay 24 bloques de home contando footer y los dos anuncios;
el header se monta aparte en el layout raíz. Las cantidades editoriales
corresponden al caso con datos completos. Las cantidades de videos son una
observación de la fuente de ese día, no un nuevo límite.

| Posición / módulo mobile | Piezas, medios y controles existentes | Stitch local y público / ajuste exigido por el plan |
| --- | --- | --- |
| Header (layout) | Logo con link a `/`, hamburguesa sin acción en mobile; desde `md`, logo y placeholder `nav` | Barra de datos, fecha, categorías, acceso, búsqueda, suscripción y acceso a live. Referencia de marco, no funcionalidades a incorporar |
| 1. MuyDestacada | 1 noticia con LIVE, título, bajada y firma; video cuadrado Pexels con controles nativos, autoplay muteado y loop; 2 relacionadas con volanta (la segunda con firma) | Cobertura: video simulado 16:9 a la izquierda y 2 relacionadas a la derecha. Conservar video real y ambas relacionadas; no implementar selector de calidad ni transmisión simultánea sugeridos por el mock |
| 2. Apertura | 1 foto 4:3, firma encima del título y bajada | 1 foto y texto lateral; añade caja de 3 claves y metadatos. Conservar la card mobile, sin crear contenido adicional |
| 3. Última hora | Agencia como única variante mobile: cinco noticias, reloj y resúmenes superpuestos | Oculta desde 1024 px; `/opcion-2` conserva AHORA e IA en su lateral desktop interactivo |
| 4. Principales | 6 cards: foto 4:3, título, bajada y firma; 1 Swiper, 1 slide visible y 6 bullets clicables | Grilla de 6 noticias: paridad de cantidad acordada; `LEGIONARIUS • NOTICIAS DESTACADAS` corresponde a Principales, no al listado sin fotos |
| 5. MAM | 30 videos en el baseline; cards 9:16, poster, duración cuando existe, mute inline y apertura por `id`; título enlazado solo si hay URL de nota | 15 imágenes simulando videos en grilla 5×3. Conservar dataset completo, carrusel, autoplay solo del activo en viewport y modal de MAM; no limitar a 15 |
| 6. Política | 1 principal con foto, título, bajada y firma + 4 filas con thumb y firma condicional | 1 principal + 4 filas: correspondencia completa. Conservar textos y firmas existentes |
| 7. Shorts | 12 thumbnails 9:16, badge YouTube, botón abrir y título; 1 Swiper, **0 iframes en feed** | 6 imágenes y flechas estáticas, invitación a suscribirse. Conservar los 12 recibidos y modal; flechas, si hacen falta, controlarán el mismo Swiper, sin agregar suscripción |
| 8. Opinión | 4 cards, avatar local, autor y título; 2 columnas mobile | 4 columnistas en fila. Presentación vigente aceptada al cerrar la etapa 5 |
| 9. Branded | 10 videos 9:16 en el baseline; logo Qué comer, copy y categoría de la vertical activa `comidas`; `autos` queda configurada, no mostrada; apertura por `id`, autoplay muteado del activo y modal sin sonido | 6 imágenes de experiencias y flechas estáticas. Conservar vertical, contenido y carrusel actuales, sin multiplicar carruseles ni sustituir la vertical por promociones de Stitch |
| 10. Encuesta | Pregunta, total y **4** opciones con porcentajes/barras. Hover y botón `Ver resultados anteriores`, sin handler; no registra votos | Desktop integrado presenta el mismo contenido mobile; no implementar votación, persistencia ni resultados históricos |
| 11. Senatur Romano / Senatus | 2 cards: **1 video paisaje** con autoplay muteado por IntersectionObserver + **1 imagen**; ambas con título, bajada y firma | La home integrada conserva los dos medios mobile, incluido el video; no confundir con la referencia estática |
| 12. Ovación | Panel `#111827`, logo y ticker CSS; **agenda general de DataFactory en iframe** sin rótulo de fixture; 1 principal + **4** secundarias; títulos uppercase y sin bajada principal | Conservar su diseño independiente aprobado, la cuarta secundaria y la agenda real; no agregar tabla ni partidos ficticios |
| 13. Segundo anuncio | Pieza **300×250** en mobile; desde 1024 px, leaderboard azul `VENDIMIA CONNECT 2026` de ancho completo | Ubicado después de Ovación y antes de Sociedad; el CTA es visual, sin navegación |
| 14. Sociedad | **5** noticias: 1 principal con foto, título, bajada y firma + 4 filas con miniatura y firmas condicionales | `SOCIEDAD & COMUNIDAD`: mismo esquema en ambos anchos; las cuatro secundarias conservan categorías y firmas acordadas |
| 15. Canal 7 | Fachada 16:9 con **iframe ya montado**, controles del embed y fullscreen; título del wrapper Canal 7 | Foto y botón simulados, junto a Radio. Conservar instancia y comportamiento existente: actualmente no es click-to-load |
| 16. Radio Nihuil | Fachada 16:9 con thumbnail, play y badge EN VIVO; iframe con autoplay/sonido y controles nativos **solo tras clic** | Foto y botón simulados junto a Canal 7. Conservar el click-to-load y ambas transmisiones separadas |
| 17. Primer anuncio | `BannerPublicitario`: etiqueta Publicidad, pieza animada **300×250**, sin CTA | Se apila después de los streams en mobile y comparte su fila desde 1024 px; presentación vigente aceptada al cerrar la etapa 5 |
| 18. Listado sin fotos | 5 artículos solo texto en mobile; desde 1024 px, video Nepal 16:9 en autoplay muteado y loop bajo `GRÁFICO INTERACTIVO` / `EDICIÓN ESPCIAL` | Las cinco notas no se importan a desktop; no sumar volantas, horas ni promociones |
| 19. Chat Vox Dei | Saludo, historial, textarea y enviar; en desktop usa cabezal oscuro y se iguala al alto del video con scroll interno | Conservar conversación de muestra, sin IA ni controles nuevos |
| 20. Sudoku | 81 inputs, 30 pistas deshabilitadas y 51 celdas editables; visible debajo del chat hasta 1023 px | Oculto desde 1024 px; conservar edición mobile sin agregar generador, validación o reinicio |
| 21. Gente | **6** cards retrato 3:4 y título; 2 columnas mobile | `Sociedad y Gente` / `GENTE & CULTURA CUYANA`: 6 cards. Es Gente, no Sociedad; conservar ambos módulos |
| 22. Crimen | 1 principal + 4 filas con thumb y firma condicional; principal enlaza a `/detalle-nota` | 1 principal + 4 filas. Conservar enlace y todos los artículos |
| 23. Últimas noticias | 10 artículos texto/foto 50/50; firma condicional en índices 2, 4, 7 y 9 | 10 artículos en 2 columnas y botón `Cargar más`. Conservar los 10; no agregar paginación/carga incremental |
| 24. Footer | Copyright, sin controles ni fetch | Presentación vigente aceptada al cerrar la etapa 5; no generar destinos ni servicios inexistentes |

**Lectura de controles de video:** los tres carruseles abren por `id` un modal
de su fuente; comparten portal a `document.body`, cierre/Escape, scroll vertical,
bloqueo/restauración de scroll y retorno de foco. Los controles son pausa/play
y progreso; sonido solo en MAM y Shorts. MAM y Branded pausan el feed al abrir.
Shorts crea/destruye el iframe del slide activo dentro del modal y conserva el
reintento muteado cuando el navegador bloquea autoplay con sonido. Este tramo
inspeccionó esa implementación: **no volvió a certificar interacción de modales
ni audio en dispositivos reales**.

El baseline del 2026-10-10 tenía 5 cards en Principales y 6 en Sociedad; los
conteos actuales tras los acuerdos del 2026-10-13 son 6 y 5, respectivamente.
Hay 9 tipos de skeleton, reutilizados por los 15 límites de `Suspense` de la
home. La composición posterior debe conservar su geometría y posición.
En el DOM del baseline hay 4 Swipers (Principales, MAM, Shorts y Branded), sin
instancias duplicadas. Shorts declara `pagination`, pero no renderiza bullets
en el estado actual; MAM y Branded tampoco los tienen. El Swiper de Principales
ahora contiene seis slides y sus seis bullets. No tomar la descripción genérica
de paginación de `DESIGN.md` como prueba de controles presentes.
Gente conserva 6 cards en su grilla mobile de dos columnas. Sociedad se actualizó
el 2026-10-19 a cinco noticias: una principal y cuatro secundarias en ambos
anchos, omitiendo la última noticia anterior.

#### Baseline visual real y cotejo de las dos referencias

Registrado el **2026-10-10, zona America/Argentina/Mendoza (UTC−03:00)** en Chrome,
sirviendo el build de producción desde la carpeta principal con
`npm run start -- --hostname 127.0.0.1 --port 3100`. No se modificaron estilos
para las capturas. Se recorrió cada documento hasta el footer y se volvió al
inicio; se capturaron viewport y página completa.

| Referencia / archivo de origen | URL utilizada | Viewport CSS / DPR | Resultado observado |
| --- | --- | --- | --- |
| Home mobile, `app/page.tsx` | `http://127.0.0.1:3100/` | **414×896**, DPR 1, emulación mobile/touch | Header negro fijo, columna de cards blancas, orden mobile completo. Ancho cliente/scroll **414/414**; alto observado tras recorrer **16551 px**; footer alcanzable |
| Copia local, `app/desktop/page.tsx` | `http://127.0.0.1:3100/desktop` | **1440×900**, DPR 1, desktop | 18 secciones, 1 aside publicitario adicional y footer; ancho cliente/scroll **1425/1425** (barra vertical visible); alto **12953 px**; footer alcanzable |
| Stitch público | `https://2eaa6e7d-diario-uno-desktop-redesign.netlify.app/#` | **1440×900**, DPR 1, desktop | Mismas 18 secciones, aside y footer; ancho cliente/scroll **1440/1440**; alto **12952 px**; footer alcanzable |

**Ubicación de las imágenes:** las capturas quedaron adjuntas a la conversación
de esta etapa, **no en el repositorio**. El navegador denegó el guardado en la
carpeta principal y en los archivos de sesión; el usuario aceptó conservarlas
en la conversación, sin cambiar su configuración. Los archivos temporales
generados por el navegador no son un archivo persistente del proyecto.
**Una sesión nueva no debe asumir acceso a esas imágenes:** debe usar esta
matriz autosuficiente y repetir las capturas en las URLs/medidas indicadas
(levantando su servidor local si el de esta etapa ya no existe).

El cotejo visual confirma la misma estructura, agrupaciones y orden de Stitch
en local y público: cobertura con relacionadas 8/4; apertura 7/5; Principales
3×2; MAM 5×3; Shorts y Branded en filas de 6; servicios en 4 columnas; opinión
en 4; listado/anuncio, encuesta/Senatus y Sudoku/chat agrupados; Gente 3×2;
ambas fachadas live lado a lado; Sociedad y Crimen con principal/listado;
Ovación con columna lateral y últimas noticias en 2 columnas.
Estas son **referencias visuales**, no cantidades o funcionalidades para copiar
a la home integrada. En particular, la decisión posterior de la home reemplaza
el listado desktop por el gráfico interactivo y oculta Sudoku desde 1024 px.

La copia **no es idéntica píxel a píxel** al público: conserva barra vertical,
y el header local muestra barras horizontales internas en datos/navegación,
con algunos datos recortados. El público las oculta. El header público computa
Geist; partes del header local heredan `ui-sans-serif`, y sus datos mono usan
Geist Mono. Se observan diferencias de ancho, altura de cabezales y espaciado,
aunque las familias editoriales Playfair Display/Geist están cargadas.
No se corrigió la exportación ni se eligió una nueva solución de estilos:
al adaptar el header existente, cotejar ambos y consultar antes de resolver
diferencias no previstas. No usar la copia como equivalencia visual exacta.

En los tres recorridos no hubo errores de consola del documento principal ni
imágenes `<img>` rotas. El público emitió el warning de Tailwind CDN; las dos
rutas locales no emitieron errores/warnings. En mobile se observaron 42 videos
nativos (1 cobertura + 30 MAM + 10 Branded + 1 Senatus), sin `video.error`,
65 imágenes y 2 iframes (Canal 7 y agenda). Radio quedó como fachada y Shorts
sin iframe en feed. Esto confirma montaje/carga del baseline, **no garantiza
que los embeds externos emitan una señal reproducible** ni prueba todos los
controles. Los frames/videos y la altura de home pueden variar por fuentes,
fuentes tipográficas, carga diferida y video aleatorio de MuyDestacada.

#### Configuración y validación del punto de partida

- `.env` está ignorado por Git; las dos variables requeridas estaban presentes.
  No se mostraron valores ni se usaron claves ficticias; tampoco se modificó
  configuración.
- Comprobaciones directas con la configuración existente: Pexels fotos **HTTP
  200 / 46 fotos**; Pexels `food` para Branded **200 / 10 videos**; playlist de
  YouTube Shorts **200 / 12 ítems**; playlist pública MAM **200 / 30 entradas**.
  Se verificó además la URL de agenda DataFactory **HTTP 200**. El DOM confirma
  30/12/10 slides normalizados; no confundir respuesta de API con reproducción.
- Playfair Display y Geist cargadas en mobile; la referencia local también
  carga Geist Mono y Material Symbols, y la pública carga Playfair Display,
  Geist y Material Symbols. No se cambiaron fuentes ni claves.
- `npx tsc --noEmit`, `npm run build` y `git diff --check` pasaron en la carpeta
  principal. El build preserva `/`, `/desktop` y `/detalle-nota`.
- Siguen las limitaciones legacy: `fetchs.ts` lanza si falta Pexels; Apertura
  no valida su foto y otros wrappers pueden dejar secciones vacías. No se
  ensayaron fuentes caídas ni se repararon guards en esta etapa.

#### Resultado de etapa 1 y pendientes que quedaron entonces

Inventario y baseline cerrados, sin cambios de alcance ni impedimento concreto
para la arquitectura aprobada. Las omisiones internas y los extras detectados
se resuelven por la regla ya aprobada: **preservar mobile**, sin truncar datasets
ni agregar funcionalidades de Stitch. La encuesta y Canal 7 deben preservarse
según su implementación real, no según descripciones históricas de interacción
o click-to-load.

En ese corte quedaban pendientes la etapa 2 (marco/composición) y después noticias,
videos, widgets/anuncios y validación. El primer anuncio pasa visualmente al
listado; el segundo queda después de Ovación, aunque Stitch lo muestra antes
de Gente. Sociedad y Gente permanecen distintas. No se modificó el orden DOM:
Principales sigue antes de MAM y Política antes de Shorts.

Las validaciones responsive de esos anchos se completaron durante la etapa 2.
Los controles, modales, audio/foco/resize y las fuentes vacías permanecen dentro
de las etapas posteriores que les corresponden. En ese corte no se avanzó a
etapa 2 hasta recibir indicación.

### Ajustes acordados antes de la etapa 2 (2026-10-13)

Se decidió alinear los conteos de las cards **antes** del marco responsive:

- **Principales:** 6 cards en mobile e integrado desktop, como en Stitch.
- **Sociedad:** inicialmente 5 cards como en Stitch; el acuerdo posterior del
  mismo día restablece 6 en ambos anchos de la home integrada.
- **Senatus:** mobile ya presenta un video y una imagen. La home desktop
  integrada conserva ambos medios, incluido el video, aunque la maqueta Stitch
  estática use imágenes.
- **Encuesta:** la futura presentación desktop usa exactamente el mismo
  contenido mobile: pregunta `Quaestio de opinione publica: Lorem ipsum dolor
  sit amet?`, total 1245 y las opciones `Optio Prima: Consectetur adipiscing
  elit` (45%), `Optio Secunda: Sed do eiusmod tempor` (25%), `Optio Tertia: Ut
  labore et dolore magna` (20%) y `Optio Quarta: Ut enim ad minim veniam`
  (10%). Se mantiene la muestra actual; no se agregan votos, persistencia ni
  resultados anteriores funcionales.

Se implementaron los nuevos conteos mobile y se reasignaron fotos de muestra
sin solapamiento: Principales `[0, 6)`, Política `[6, 11)` y Sociedad
`[11, 16)`. Los rangos de Gente en adelante no cambian. Esta asignación desplaza
las fotos de muestra de Política y Sociedad y evita repetir una foto entre
estas tres secciones. Senatus ya contenía el video en mobile y no requirió
cambios.

**Actualización de Sociedad (2026-10-13):** seis cards en ambos anchos. Se
mantienen las cinco fotos de `[11, 16)` y se agrega la de `[40, 41)`, disponible
en la misma fuente y fuera de los rangos de otras secciones. No se desplazan
Gente ni Crimen ni se duplica su primera foto. Los seis títulos están definidos
en la misma lista de muestra; `/desktop` permanece intacta.
Verificado con seis cards en 414, 1024 y 1440 px; dos columnas mobile y tres
desktop, sin overflow. Pasaron tipos, build y whitespace. La revisión de
`app/globals.css` eliminó la animación `gradient-xy` sin uso, estilos comentados
descartados y overrides desktop redundantes del header, manteniendo sus
declaraciones base y los tokens requeridos por Stitch.

**Actualización de Sociedad (2026-10-19):** se omite la última noticia anterior
y se conserva el rango de fotos `[11, 16)`. Mobile y desktop comparten ahora el
layout de una principal y cuatro secundarias; la principal conserva bajada y
firma, y el listado mantiene cuatro filas con sus categorías y firmas.

`/desktop` se conserva sin cambios como copia estática fiel de Stitch; estos
acuerdos aplican a la futura home integrada y no justifican modificar la
referencia. Tipos, build, whitespace y cantidades renderizadas se verificaron
después de los cambios.

### Etapa 2 verificada — marco y composición (2026-10-13)

Se creó `app/(sitio)/` para `/` y `/detalle-nota`; el layout global mantiene
fuentes/metadatos, y el marco responsive aporta un header y un footer compartidos.
La home conserva el orden DOM mobile y una instancia por módulo, con 23 módulos,
las dos inserciones publicitarias y ambas transmisiones. La portada importa
wrappers; cobertura ahora resuelve Pexels desde su wrapper.

La composición desktop usa flex-wrap y orden/spans CSS desde 1024 px, según la
matriz aprobada. Se verificaron los pares de listado/anuncio, encuesta/Senatus,
transmisiones, anuncio/Crimen y Sudoku/asistente. Los anuncios no se estiran a la
altura de los módulos vecinos. No se duplicó contenido ni se agregó
funcionalidad de Stitch; `/desktop` sigue fuera del marco del sitio.

Los helpers Pexels ausentes degradan a `[]` con logging y los wrappers vacíos
retornan `null`, sin dejar slots una vez resuelta la carga. Esto incluye
cobertura; se eliminó su video ficticio de reserva cuando no hay fuente.

Verificación en navegador: `/` en 414×896, 768×1024, 1023×900, 1024×900 y
1440×900, sin overflow horizontal y con transición correcta en 1024 px; 23
módulos, dos anuncios y un footer. Se confirmó orden mobile bajo el breakpoint y
orden visual desktop, incluidos los pares. `/detalle-nota` en 414×896 y 1440×900
mantiene el banner fijo inmediatamente debajo del header y un solo footer.
`/desktop` se cotejó con la referencia pública a 1440 px; mantiene su markup y no
recibe header/footer del sitio. No hubo errores de consola; DevTools reportó
avisos de dimensiones de imágenes/campos sin `id` o `name` y una respuesta CORB,
que quedan registrados sin cambios de alcance.

Al cierre de la etapa 2 pasaron `npx tsc --noEmit`, `npm run build` y
`git diff --check`. No se modificó `/desktop`, no hubo commits y los cambios
locales preexistentes siguieron preservados. En aquel punto quedaban pendientes
la etapa 3 (noticias) y las etapas de videos y widgets/anuncios.

### Etapa 3 verificada — noticias (2026-10-13)

Se adaptaron cobertura, Apertura, Principales, Política, Opinión, el listado
Legionarius, Sociedad, Gente, Ovación, Crimen y últimas noticias. Se conservaron
las cards y textos de muestra; sus datos estáticos quedaron separados del JSX.
Los módulos siguen usando sus wrappers y fuentes existentes, sin datasets
paralelos ni cambios a `/desktop`.

Desde 1024 px, cobertura usa titular/video y dos notas relacionadas; Apertura
presenta imagen y texto en columnas; Principales muestra sus seis cards en una
grilla Swiper de tres columnas por dos filas. Política, Ovación y Crimen usan
distribuciones de noticia principal y lista; el contenido de opinión conserva sus
cuatro columnistas; Legionarius y últimas noticias se organizan en columnas, y
Sociedad/Gente conservan sus cards de retrato. Entre 1024 y 1199 px, Crimen
apila su historia principal y la lista en dos columnas internas para sostener la
lectura dentro de su span compartido con el segundo anuncio. La presentación
mobile conserva el orden, carruseles y cantidades, incluido Principales como
una card por slide.

Validación visual en `/`: 414×896, 768×1024, 1023×900, 1024×900 y 1440×900,
sin overflow horizontal. Los seis Principales quedan visibles en dos filas a
1024 y 1440 px; se verificaron los conteos de Sociedad (5), Gente (6),
Legionarius (5) y Últimas (10), además de sus órdenes y composiciones. No se
detectaron errores o warnings de consola en las vistas revisadas.
`npx tsc --noEmit`, `npm run build` y `git diff --check` pasaron.

Pendiente: etapa 4 (videos) y etapa 5 (widgets y anuncios); no avanzar hasta
recibir la siguiente indicación y validar cada tramo.

### Composición simplificada verificada (2026-10-13)

Este acuerdo reemplaza el orden desktop y las agrupaciones de las etapas 2/3
descritas arriba, sin deshacer sus estilos internos de noticias. Stitch sigue
como referencia de Look & Feel, no de secuencia de módulos.

El `<main>` de `app/(sitio)/page.tsx` define con Tailwind una grilla de una columna,
gap de 8 px y gap de 24 px desde 1024 px. Tres grupos tienen grillas locales
de una columna mobile y dos desktop: Encuesta/Senatus, Canal 7/Radio Nihuil y
Legionarius/chat (agregado después del cierre inicial de esta simplificación).
No se usan `order`, `flex-basis`, posiciones de filas ni colocación densa.
Los anuncios, Crimen y Sudoku quedan en filas independientes.
Crimen ya no necesita la excepción interna de 1024–1199 px para compartir ancho
con publicidad; conserva su composición desktop de noticia principal/listado.

Los wrappers de pareja resuelven una vez los wrappers de servidor existentes.
`HomePair` valida ambos resultados antes de crear el contenedor; si cualquiera
es `null`, omite toda la pareja, tanto en mobile como en desktop, sin hueco ni
skeleton permanente. `Suspense` muestra el fallback de participación completo
solo durante la carga. Las transmisiones actuales son estáticas y siempre
disponibles: no se consulta ni se infiere el estado remoto de YouTube.

Verificado en navegador a 414×896, 768×1024, 1023×900, 1024×900 y 1440×900:
orden DOM y visual coincidentes, parejas apiladas por debajo de 1024 px y en
dos columnas desde él, 23 módulos con las fuentes presentes, dos anuncios,
seis Principales, un footer y sin overflow horizontal. `/desktop` no recibe
grillas ni marco del sitio y no se modificó su archivo. No hubo errores ni
warnings de consola en la home revisada. Pasaron tipos, build y whitespace.
Trece pruebas dirigidas con Node y el compilador TypeScript existente verificaron
ambos grupos con resultados presentes/ausentes, una invocación por wrapper y
el caso real de Senatus con fuentes vacías. El script queda como artefacto de
sesión, sin agregar dependencias ni tooling al proyecto.

No se avanzó a adaptar carruseles, modales o widgets de las etapas siguientes.

La incorporación posterior de Legionarius/chat se verificó a 414×896,
1023×900, 1024×900 y 1440×900, sin overflow, conservando cinco notas y un chat
operativo. Pasaron tipos, build, whitespace y 17 pruebas dirigidas, incluidos
los casos ausentes de la nueva pareja. Ambos wrappers son estáticos; el grupo
no necesita un fallback de carga. Sin errores de consola; se observó un aviso
de preload de imágenes no utilizado a tiempo, fuera de esta pareja.

### Etapa 4: adaptación de videos verificada localmente (2026-10-13)

El feed conserva un Swiper por fuente y los datasets completos. Desde 1024 px
se muestran cinco MAM y seis Shorts/Branded con 24 px de separación, cotejados
con las referencias desktop pública y local. Por debajo quedan los valores
mobile existentes: MAM/Branded 1.2 y Shorts 1.2/2.5/3.5 según ancho, a 16 px.
Los botones desktop anterior/siguiente se conectan mediante `useSwiper`, con
estado deshabilitado en los extremos o sin desplazamiento. No existe un
segundo carrusel ni un player genérico nuevo. Los skeletons siguen la densidad
de cada fuente y los cabezales desktop usan la presentación editorial existente.

Se preservaron modales fullscreen, portal, controles y sonido por fuente.
MAM/Branded habilitan un único video del feed por ID y lo pausan cuando abre
su modal; Shorts no monta iframes en el feed y solo mantiene el activo en el
modal. Se corrigió el retorno de foco con `preventScroll` para que cerrar tras
un resize no desplace internamente Swiper hacia una card fuera de vista.

Verificados 414×896, 768×1024, 1023×900, 1024×900 y 1440×900 sin overflow,
densidad desktop y mobile, botones/extremos, selección por ID de cards no
activas, play/pausa/progreso/sonido, pausa de feed, cierre/Escape, foco/scroll
y resize con modal abierto. Pasaron tipos, build, whitespace y ocho pruebas
dirigidas, incluidas fuentes vacías de los tres wrappers.

**Límite comprobado:** un Short reprodujo y permitió verificar controles/
progreso; otro quedó en `UNSTARTED` con duración cero, incluso tras un nuevo
pedido de play. Se verificó el ID elegido y un único iframe, pero no se declara
reproducción de todo el catálogo externo ni validación nueva en iOS real.
Se conservan avisos de preload de imágenes y handshake postMessage de YouTube;
sin errores nuevos de aplicación. No se cambió `/desktop` ni se avanzó a
widgets/anuncios.

### Etapa 5 cerrada — cotejo y adaptación visual a Stitch

#### Muy Destacada aprobada (2026-10-14)

Desde 1024 px el módulo adopta el panel blanco y el cabezal oscuro de la
cobertura extraordinaria de Stitch, con indicador pulsante, `EN VIVO`, texto de
cobertura y aviso de transmisión simultánea. El cuerpo usa una grilla 8/4 con
24 px de separación. La columna principal contiene el video 16:9, el título,
la bajada y la firma de mobile, y suma `EDICIÓN ESPECIAL` solo en desktop.

La columna derecha usa `FOCO DE COBERTURA` y dos cards: conserva los títulos
segundo y tercero de mobile, incorpora las categorías y bajadas de Stitch, no
muestra firma en la primera y usa `Facundo García` en la segunda. Se omiten los
metadatos inferiores de la referencia y no se agregan enlaces, acciones o
controles de video simulados.

La cobertura dejó de elegir un video aleatorio. El wrapper solicita el ID fijo
de Pexels `34634812` mediante un helper que devuelve las URLs MP4 válidas y
prioriza 1280×720. Si falta la clave, falla la red o la respuesta no contiene un
archivo apto, el servicio conserva el logging, devuelve `[]` y el wrapper omite
la sección. Mobile mantiene su contenido y orden, pero usa el mismo video en
16:9; en ambos anchos hay una sola instancia con controles nativos, autoplay
silenciado, loop y `playsInline`.

El resultado fue aprobado después de verificar 414×896, 1023, 1024 y 1440×900,
el breakpoint, la grilla 8/4, textos, firmas, reproducción, ausencia de overflow
y una única instancia de video. No hubo errores de hidratación; permanecen solo
avisos preexistentes de imágenes/campos de formulario y CORB. Pasaron tipos,
build y whitespace. `/desktop` y `MuyDestacadaSkeleton` permanecen intactos; la
presentación vigente del skeleton fue aceptada al cerrar la etapa 5.

#### Principales aprobado (2026-10-14)

El módulo local con cabezal `LEGIONARIUS` corresponde en Stitch a
`LEGIONARIUS • NOTICIAS DESTACADAS`, no al listado sin fotos. Desde 1024 px la
home integrada replica ese cabezal con marcador azul y `AL MINUTO`, elimina el
panel blanco exterior y presenta las seis cards del mismo Swiper en 3×2 con
24 px de separación. Las cards no tienen borde, usan radio de 8 px, sombra,
16 px de padding y hover con elevación y zoom de imagen. La bajada ocupa hasta
dos líneas y no se incorporan las categorías de Stitch.

Se mantienen una instancia de Swiper, seis cards, contenido local, servicios,
controles y comportamiento. Los títulos se limitan a dos líneas tanto en mobile
como en desktop; el resto de la presentación mobile se conserva. Para igualar
el peso visual de la referencia pública, el título usa Playfair Display 700 solo
desde 1024 px: el 500 declarado por Stitch se rasteriza más grueso que el archivo
servido localmente por `next/font`. `/desktop` permanece intacta.

Ese límite de dos líneas pertenece a la aprobación histórica de etapa 5. La
decisión posterior de titulación de la etapa 6 lo reemplaza para Principales:
título y bajada se muestran completos en mobile y desktop.

El resultado fue aprobado visualmente después de comprobar 414×896, 1023, 1024
y 1440×900, sin overflow, con transición correcta, hover y una única instancia
del carrusel. Pasaron tipos, build y whitespace. Esto cierra solo Principales;
la etapa 5 continúa con los módulos restantes.

La validación final del header detectó que la configuración `Grid` de Swiper no
tenía cargada su hoja de estilos: las seis cards existían, pero se distribuían en
una fila horizontal. `globals.css` importa ahora `swiper/css/grid`; se confirmó
la grilla efectiva 3×2 a 1024 y 1440 px, seis cards en mobile y cero overflow.

#### MAM aprobado (2026-10-14)

Desde 1024 px MAM deja de comportarse como carrusel visible y presenta los
primeros 15 videos del dataset compartido en una grilla estática 5×3, con 16 px
de separación. El panel negro, el cabezal interno y las cards 9:16 siguen la
referencia de Stitch; cada pieza usa un frame limpio del mp4, duración, degradado,
play y título de hasta dos líneas. No hay flechas, arrastre ni autoplay inline en
desktop. La apertura sigue usando el modal existente y selección por `id`.

Por debajo de 1024 px se conserva el único Swiper, el catálogo completo y el
comportamiento mobile anterior. Esta decisión de etapa 5 reemplaza para desktop
la presentación de cinco slides documentada en la etapa 4, sin reescribir aquel
registro histórico. El resultado fue aprobado tras validar 414×896, 1023, 1024
y 1440×900, modal, consola, tipos, build y whitespace. `/desktop` permanece
intacto.

#### Shorts aprobado (2026-10-16)

Desde 1024 px Shorts elimina el panel blanco exterior y replica el cabezal
oscuro de Stitch con acento rojo, badge `SHORTS`, el texto
`CANAL OFICIAL DE YOUTUBE @DIARIOUNO` y las flechas conectadas al Swiper real.
No incorpora la invitación a suscribirse. Conserva los 12 elementos recibidos en
una única instancia y presenta seis cards 9:16 por vista con 16 px de gap; las
flechas permiten recorrer el catálogo completo.

Cada card desktop usa radio de 8 px, sombra, degradado, play central y título
Geist 14/17,5 en blanco superpuesto con límite de dos líneas. El badge de YouTube
individual se oculta en desktop y permanece en mobile; el hover amplía el
thumbnail sin cambiar la acción. Hasta 1023 px siguen vigentes el panel blanco,
el título debajo de la imagen, el badge por pieza, el gap de 16 px y las
densidades 1.2/2.5/3.5 anteriores.

Se comprobaron 414×896, 1023, 1024 y 1440×900, 12 slides, seis visibles en
desktop, navegación hasta el extremo, apertura por `id`, cero iframes en feed y
cero overflow. El modal existente conservó un único iframe activo, controles,
sonido, Escape y retorno de foco por teclado; su diseño desktop no se modificó.
Pasaron tipos, build y whitespace. El usuario aprobó visualmente el tramo y se
da por cerrado.

#### `# A COMER!`/Branded aprobado (2026-10-16)

Desde 1024 px Branded elimina el título y panel blanco exteriores y replica el
cabezal oscuro de Stitch con acento azul, el logo `# A COMER!`, el texto
`BRANDED CONTENT • EXPERIENCIAS DE CUYO` y flechas conectadas al Swiper real.
Conserva los diez videos gastronómicos y sus copys de la vertical activa en una
única instancia, con seis cards 9:16 por vista y 16 px de gap; no incorpora las
experiencias estáticas ni los contenidos mixtos de la referencia.

Cada card desktop usa radio de 8 px, sombra, degradado, play central y título
Geist 14/17,5 en blanco superpuesto con límite de dos líneas. El hover amplía el
video y se preserva el autoplay muteado de un único slide activo. Hasta 1023 px
siguen vigentes el título `Branded`, panel blanco, logo y sponsor, densidad 1.2,
gap de 16 px y título debajo del video.
El ajuste tipográfico final fijó el rótulo del cabezal en Geist 12/16 px, peso
700 y tracking `0.06em`, igual que el token `cabezal` de Stitch.

Se comprobaron 414×896, 1023, 1024 y 1440×900, diez slides, seis visibles en
desktop, navegación hasta el extremo, apertura del décimo video por `id`, cero
overflow y cero iframes dentro del módulo. El modal existente conservó un único
video activo, bloqueo de scroll, Escape y retorno de foco; su diseño desktop no
se modificó. Pasaron tipos, build y whitespace. El usuario aprobó visualmente el
tramo y se da por cerrado.

Al cerrar la etapa 5, los modales de video y los skeletons desktop conservaron
su presentación vigente, aceptada como parte de la línea base visual.
Esa afirmación describe el cierre histórico de la etapa: el rediseño desktop de
los modales aprobado el 2026-10-19 lo reemplaza como decisión vigente, sin
reabrir la etapa 5 ni modificar los skeletons.

#### Header aprobado (2026-10-14)

Desde 1024 px el header replica las dos franjas de Stitch con Geist, altura total
de 94 px, posición fija, bordes y sombra. La franja superior usa los datos y la
fecha demostrativos acordados; la fecha se oculta en anchos intermedios y los
grupos que no entran usan overflow interno sin scrollbar visible. La barra
principal incorpora hamburguesa, logo azul, sello `MENDOZA`, navegación completa,
búsqueda, `Acceder` y `Suscribite`; MAM conserva su indicador rojo pulsante.

Solo logo, `PORTADA` y `Canal 7 & Radio Nihuil EN VIVO` son interactivos. El
resto son elementos visuales sin enlace, foco ni acción ficticia, y el dataset de
links del footer sigue separado. La transmisión en vivo quedó sin fondo rojo,
con texto blanco y punto rojo pulsante; `Suscribite` usa fondo rojo y texto
blanco. No se importaron Material Symbols ni se agregaron dependencias.

La home y el detalle compensan los 94 px del header fijo; el banner del detalle
comienza debajo de él. Mobile permanece intacto y `/desktop` no recibe el header
del sitio. Se validaron 414×896, 1023, 1024 y 1440×900, home, detalle, enlaces,
foco, overflow, consola e hidratación. Pasaron tipos, build y whitespace, y el
usuario aprobó visualmente el resultado.

Una decisión posterior del 2026-10-19 modifica solo su comportamiento durante
el scroll. Desde 1024 px, las dos franjas y los 94 px se conservan en
`scrollY = 0`; al abandonar el inicio, la franja de servicios colapsa y queda
fija únicamente la fila principal de 57 px. No reaparece por cambiar la dirección
del scroll, sino solo al volver al comienzo. El offset del marco y el banner fijo
de `/detalle-nota` acompañan 94/57 px; la franja oculta usa `inert` y
`aria-hidden`. Hasta 1023 px no cambia el header mobile.

El 2026-10-20 se retiró el sello visual `MENDOZA` junto al logo en el header
compartido. En las dos homes funcionales, la barra desktop centra el logo entre
hamburguesa y `PORTADA`, con 40 px libres a cada lado y el nav desplazado a la
derecha. Usa el mismo padding horizontal de 32 px que el contenido principal;
así `Suscribite` termina en su borde derecho. La
página de detalle conserva su padding de 24 px y las rutas estáticas no cambian.

#### Política aprobada (2026-10-15)

Desde 1024 px `PoliticaWrapper` adopta el formato `POLÍTICA & GOBIERNO`: panel
blanco con padding de 24 px, radio de 8 px y sombra; cabezal oscuro de 26 px con
marcador azul y `LEGISLATURA Y PODER EJECUTIVO`; y cuerpo 7/5 con gap de 32 px.
La principal conserva el contenido local, foto 3:2, Playfair Display 28/35 en
peso 700, bajada Geist 15/22 y firma `Analía Doña`, sin la meta `POLÍTICA
CENTRAL` de Stitch.

El lateral conserva cuatro noticias y muestra miniaturas 112×112 dentro de cards
`#f9fafb` con padding y radio de 8 px. Las categorías son, en orden,
`COPARTICIPACIÓN`, `CONGRESO NACIONAL`, `PODER JUDICIAL` y `MUNICIPIOS`; solo
la segunda y cuarta card conservan las firmas `Julián Imazio` y
`Rosana Villegas`. Principal y listado se estiran al mismo alto en todos los
anchos desktop. No se incorporan metas temáticas inferiores, enlaces ni
controles; el hover solo modifica imagen, color de titular y fondo.

`PoliticaWrapper` sigue siendo la puerta de entrada y conserva fetch, selección
de cinco fotos y retorno `null`. El marco interno
`EditorialLeadListLayout` recibe cabezales y slots de principal/listado y admite
una cantidad variable de secundarias; Sociedad lo reutiliza después con cinco.
Mobile y 1023 px mantienen el título `POLÍTICA`, cuatro filas, geometría,
contenido y firmas anteriores. El resultado se aprobó tras validar 414×896,
1023, 1024 y 1440×900, alturas iguales, hover, cero overflow, tipos, build y
whitespace. `/desktop` quedó intacta.

#### Crimen aprobado (2026-10-15)

Desde 1024 px `CrimenWrapper` reutiliza `EditorialLeadListLayout` con el formato
`CRIMEN & POLICIALES`: panel blanco de 24 px, radio de 8 px y sombra; cabezal
oscuro de 26 px con marcador y borde rojos, más la meta `INVESTIGACIÓN Y
JUSTICIA`; y cuerpo 7/5 con gap de 32 px. La principal conserva contenido,
firma y enlace a `/detalle-nota`, con foto 3:2, Playfair Display 28/35 en peso
700 y bajada Geist 15/22.

El lateral conserva cuatro noticias y muestra miniaturas 112×112 dentro de cards
`#f9fafb` con padding y radio de 8 px. Sus categorías son `POLO JUDICIAL`,
`OPERATIVO REGIONAL`, `PERITAJES FORENSES` y `PODER JUDICIAL`; solo la segunda
y cuarta conservan las firmas `Julián Imazio` y `Rosana Villegas`. Principal y
listado se estiran al mismo alto. Se omiten la meta principal y las metas
temáticas inferiores de Stitch.

El hover modifica solo imagen, color de titular y fondo, sin sumar controles ni
acciones; el único elemento interactivo sigue siendo el enlace real preexistente
de la principal. Mobile y 1023 px conservan título `CRIMEN`, cuatro filas,
contenido, tamaños, firmas y comportamiento. Se validaron 414×896, 1023, 1024 y
1440×900, alturas iguales, hover, enlace, cero overflow, tipos, build y
whitespace. `/desktop` y Sociedad permanecieron intactos.

#### Sociedad actualizada (2026-10-19)

`SociedadWrapper` reutiliza `EditorialLeadListLayout` con el formato
`SOCIEDAD & COMUNIDAD`: mobile y desktop presentan una noticia principal y
cuatro secundarias. Desde 1024 px conserva el panel blanco de 24 px, radio de
8 px y sombra; cabezal oscuro de 26 px con marcador azul y meta
`EDUCACIÓN, SALUD Y CIUDAD`; y cuerpo 7/5 con gap de 32 px.

La última noticia anterior se omite; las cinco fotos y los cinco titulares
restantes se presentan como una principal y cuatro filas. La principal usa foto
3:2, Playfair Display 28/35 en peso 700, la misma bajada de muestra que Crimen y
firma `Soledad Segade`. Las secundarias usan cards `#f9fafb`, padding y radio
de 8 px, miniaturas 96×96 y las categorías `SALUD PÚBLICA`,
`BIODIVERSIDAD`, `EDUCACIÓN` y `PATRIMONIO`; la primera fila muestra
`Daniel Calivares` y la tercera, `Miguel Guayama`. No se muestran metas
temáticas inferiores.

El hover solo modifica imagen, color de titular y fondo, sin enlaces, foco,
cursor de acción ni controles ficticios. Mobile usa la composición principal +
listado de Política, con la bajada y firma de la principal, y cuatro filas
horizontales con miniaturas, categorías ocultas y firmas condicionales.

#### Cursor de acción desktop aprobado (2026-10-15)

Desde 1024 px, limitado a dispositivos con `hover` y puntero fino, las
superficies visuales aprobadas de Muy Destacada, Principales, MAM, Política,
Crimen y Sociedad y los controles de presentación del header muestran
`cursor: pointer`. Es una affordance deliberadamente visual: no convierte las
cards estáticas en enlaces, no agrega handlers, foco ni navegación y el click no
produce efectos nuevos.

Se mantienen todas las interacciones anteriores: MAM continúa abriendo su modal
por `id`, la principal de Crimen conserva su enlace y siguen activos únicamente
los enlaces reales ya aprobados del header. Mobile y 1023 px no cambian. El
resultado se validó en 414×896, 1023, 1024 y 1440×900, con clicks de control,
cero overflow, consola limpia, tipos, build y whitespace aprobados.

La referencia desktop se revisa **módulo por módulo** contra la implementación
actual, la web pública de Stitch y su MCP oficial. Antes de editar se presenta
una comparación breve de estructura interna, jerarquía editorial, colores,
tipografía, proporciones, espaciados, cards, medios y controles. Toda diferencia
que requiera cambiar contenido, cantidades, controles o comportamiento se
resuelve con el usuario antes de implementar. Las decisiones aprobadas de
`DESIGN.md` prevalecen y `/desktop` queda excluida del cotejo.

Cada módulo acordado se adaptó desde 1024 px preservando mobile, inventario,
datos, comportamientos compartidos y wrappers. El usuario cerró la etapa 5 el
2026-10-19 y aceptó como línea base final tanto los módulos intervenidos como la
presentación vigente de los que no recibieron un rediseño específico.

La etapa 7 cerró la revisión específica de comportamientos y paridad completa
de widgets y anuncios el 2026-10-19. Stitch definió Look & Feel y estructura
interna durante el cotejo, pero no autorizó sustituir contenido ni agregar
funciones.

### Etapa 7 cerrada — widgets y anuncios (2026-10-19)

Servicios conserva su implementación fuera de `/`. Encuesta continúa como una
muestra de cuatro resultados sin votación ni historial funcional. Senatus monta
video e imagen cuando existen; su video HTML5 se reproduce muteado al entrar en
viewport y se pausa al salir, y el separador intermedio solo existe cuando están
presentes ambos medios.

Canal 7 mantiene un único iframe montado desde el render inicial. Radio Nihuil
muestra primero la portada y crea su único iframe con autoplay después del click.
Los anuncios `ad-ovacion` y `ad-listado` conservan una instancia cada uno, sus
variantes responsive aprobadas y ningún CTA funcional.

Chat es una demostración local: Enter envía, Shift+Enter agrega una línea y el
autoscroll se limita al historial interno para no mover la página ni cambiar la
fila desktop. Sudoku conserva 81 celdas —30 pistas y 51 editables—, acepta solo
dígitos del 1 al 9, identifica cada campo para tecnologías de asistencia y se
oculta sin reservar espacio desde 1024 px. No se agregaron persistencia,
resolución del juego, IA real ni fuentes remotas nuevas.

### Etapa 8 cerrada — validación integral (2026-10-19)

La home integrada quedó validada en mobile, el límite 1023/1024 y desktop, sin
overflow horizontal y con scroll completo hasta el footer. `/detalle-nota`
conserva el banner fijo pegado al header tanto en su estado de 94 px como en el
compacto de 57 px. `/desktop` permanece preservada y fuera de esta validación.

Se recorrieron header, Última hora, noticias, carruseles, modales, widgets,
transmisiones, anuncios, Chat, Sudoku y footer. Los modales compartidos contienen
el foco dentro del diálogo, exponen solo el slide activo a tecnologías de
asistencia y restauran foco y scroll al cerrar. La preferencia de movimiento
reducido detiene ticker e indicadores pulsantes. El nombre accesible de la marca
del header incluye el texto visible `Mendoza`.

El cierre conserva tres límites deliberados: audio inicial de Shorts en iOS;
contraste insuficiente de algunos rótulos auxiliares, que no se cambió porque el
diseño está congelado; y avisos de terceros de YouTube/DataFactory —cookies y
dos placeholders bloqueados por ORB— que no representan fallas de la aplicación.
Tipos, build de producción y whitespace pasaron con las tres rutas preservadas.

### Etapa 6 cerrada — forma de titulación aprobada (2026-10-15)

La decisión responde al recorrido editorial esperado de una noticia: se publica
en Live/Muy Destacada o Apertura, desciende por Principales, pasa a la principal
y luego al listado de su sección, y finalmente llega a Últimas noticias. La
misma titulación debe funcionar en todas esas jerarquías sin perder información.

Para calibrar la interfaz se creó en
`app/content/typography-calibration.ts` un dataset de diez títulos de 89–91
caracteres y diez bajadas de 155–165 caracteres. Se aplica de forma determinista
a los títulos y bajadas disponibles de Muy Destacada, Apertura, Principales,
Política, Senatus Romano, Sociedad, Listado sin fotos, Ovación, Gente, Crimen y
Últimas noticias. Desde 1024 px aparece también en todos esos módulos cuando
comparten datos con mobile, incluso en los que conservaron su presentación
vigente al cerrar la etapa 5.

La forma aprobada presenta títulos y bajadas sin punto final y completos, sin
`line-clamp`. Reemplaza para este alcance los límites previos de dos, tres o
cuatro líneas. Quedan excluidos MAM, Shorts, `# a comer!`/Branded, Opinión,
Servicios, transmisiones, Chat, Encuesta, Sudoku y el reader de detalle.

Este primer tramo no cambió tamaños, familias, pesos, estructura, cantidades,
comportamiento ni breakpoints. Se verificó a 414×896, 1023, 1024 y 1440×900 que
los textos fueran visibles completos, sin puntuación terminal ni overflow. La
eliminación del truncado requirió que Principales igualara desde 1024 px la
altura de sus seis cards mediante la misma grilla 3×2; toma la altura de la pieza
de mayor contenido y conserva completos títulos y bajadas. El ajuste se validó
y aprobó visualmente sin alterar el Swiper, los datos ni el breakpoint.

Con la aprobación visual final, la etapa 6 queda cerrada. La etapa 5 también se
cerró después; no avanzar a la etapa 7 sin indicación del usuario. La
especificación visual canónica está en
[DESIGN.md](./DESIGN.md#forma-de-titulación-aprobada-etapa-6--2026-10-15).

### Arquitectura aprobada

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

- Un único árbol React en orden mobile y grilla general de una columna mediante
  clases Tailwind en el `<main>` de la home. Desktop conserva ese orden salvo
  por Sudoku, que se oculta sin reservar espacio.
- Encuesta/Senatus, Canal 7/Radio Nihuil y Gráfico interactivo/chat se agrupan en
  grillas locales. La última usa columnas `minmax(0, 1fr) 448px`, iguala alturas
  y sustituye las notas mobile por el video local de Nepal.
- Desde 1024 px, `EspacioJuegos` agrega inmediatamente después una sección
  presentacional blanca, de ancho completo y 400 px de alto, con mensaje centrado
  a 24 px. No monta juegos, datos ni controles y permanece oculta en mobile.
- Secuencia compartida: cobertura → apertura → Última hora mobile → principales
  → MAM → política → Shorts → opinión → branded → encuesta/Senatus → Ovación →
  segundo anuncio → Sociedad → Canal 7/Radio Nihuil/primer anuncio →
  Legionarius/asistente → Gente → Crimen → últimas noticias → footer. Servicios
  se conserva implementado pero está oculto. En mobile, Sudoku se ubica debajo
  del asistente; desde 1024 px queda oculto, Legionarius pasa a ser Gráfico
  interactivo y la reserva para juegos aparece debajo de Crimen.
- Los wrappers de pareja en `app/components/home/` resuelven y validan ambos
  módulos antes de crear el contenedor. Si falta cualquiera, la pareja completa
  devuelve `null` en ambos anchos. Conservar las puertas de entrada por wrapper,
  las fuentes y una única instancia de cada módulo; no invocar componentes
  cliente como funciones para inspeccionar su resultado.
- Los fallbacks de `Suspense` conservan la geometría responsive de la pareja
  durante la carga, pero desaparecen al resolver sin contenido. No reemplazar
  un módulo ausente por un skeleton permanente.
- Tab y lectores de pantalla siguen el orden DOM mobile. Sudoku no participa del
  árbol accesible desktop porque usa `display: none`. No introducir `tabindex`
  positivo.

**Contenido y presentación**

- Cada sección con fetch expone un `-wrapper.tsx`: prepara sus datos, valida
  presencia y decide si se muestra. La página no importa servicios ni cards.
- `MuyDestacada` hacía fetch pese a su excepción documentada; ya se encapsuló en
  `muy-destacada-wrapper.tsx`. En la etapa 5 su fuente quedó fijada al ID de
  Pexels `34634812`; el servicio devuelve `[]` y el wrapper `null` si no obtiene
  un MP4 válido.
- Separar textos, enlaces e imágenes de muestra del JSX al intervenir módulos,
  con contratos TypeScript pequeños según necesidades reales. Mobile y desktop
  reciben los mismos objetos, no datasets paralelos.
- CSS responsive cuando solo cambia distribución; markup específico cuando
  realmente cambia composición. No duplicar medios activos ni controles con estado.
- El gráfico interactivo es una excepción presentacional aprobada: desde
  1024 px monta una sola vez `public/video_nepal.mp4`, sustituye el listado de
  Legionarius y convive con Chat Vox Dei en una grilla
  `minmax(0, 1fr) 448px`. Mobile conserva las cinco notas, el chat y Sudoku.
- No importar componentes internos entre secciones; extraer primitives
  compartidas explícitas cuando exista reutilización real.
- Estilos de composición scoped a home y tokens en Tailwind existente, sin
  contaminar detalle o referencia. No implementar adaptadores de API especulativos.

**Video e interacciones**

- Conservar módulos por fuente, selección por `id`, reglas de sonido y portal de
  los modales. Una instancia por carrusel.
- Desde 1024 px, el modal usa reproductor 9:16 centrado a `100dvh`, velo oscuro
  translúcido, navegación anterior/siguiente a los costados y cruz de cierre.
  Hasta 1023 px conserva el fullscreen mobile sin navegación lateral.
- Adaptar slides visibles/separación con breakpoints de Swiper; navegación desktop
  conectada al mismo carrusel, si hace falta.
- Solo el video activo reproduce en viewport; abrir el modal pausa el carrusel.
  Shorts no monta iframes en feed y mantiene un iframe activo en su modal.
- El video local de Nepal no pertenece a un carrusel: solo se monta desde
  1024 px y se reproduce silenciado en loop continuo, sin controles.
- Conservar cierre, scroll y retorno de foco; probar resize con modal abierto.
  Preservar interacciones actuales de encuesta, Sudoku, chat y live.

### Secuencia para una nueva sesión

**Antes de código:** leer `PROGRESS.md`, este documento y `README.md`, en ese
orden. Preservar la base del import de Stitch y cualquier cambio local existente.
Las etapas 1–8 están implementadas y cerradas, con la salvedad de Shorts
registrada en etapa 4. La etapa 5 dejó la presentación actual como línea base
visual; las etapas 7 y 8 cerraron widgets/anuncios y la validación integral el
2026-10-19. No hay una etapa siguiente automática.

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
2. **Marco y composición.** Route group, header/footer, contenedores, orden
   mobile compartido, parejas responsive y skeletons. Verificar `/`,
   `/detalle-nota`; preservar `/desktop` sin incorporarla a la validación.
3. **Noticias.** Cobertura, apertura, principales, política, opinión, Legionarius,
   Sociedad, Gente, Ovación, Crimen y últimas noticias. Separar contenido y
   adaptar presentación conservando experiencia mobile.
4. **Videos.** Adaptar MAM, Shorts y Branded y validar comportamiento por fuente
   en ambos anchos. La restricción original de no rediseñar los modales rigió
   durante esta etapa; la decisión desktop posterior del 2026-10-19 la reemplaza.
5. **Cotejo y adaptación visual a Stitch — completada.** La home visual vigente,
   incluido el orden Encuesta/Senatus → Ovación → segundo anuncio → Sociedad,
   fue aprobada el 2026-10-19. Los módulos no intervenidos específicamente se
   aceptan en su presentación actual. `/desktop` no fue referencia.
6. **Ajuste de tamaño de fuentes — completada.** Forma de titulación aprobada
   con títulos y bajadas largos, completos y sin punto final; tamaños y altura
   uniforme de Principales validados en los anchos acordados.
7. **Widgets y anuncios — completada.** Servicios, encuesta/Senatus, ambas
   transmisiones, Chat, Sudoku mobile y los dos anuncios cerraron su revisión
   funcional y de paridad el 2026-10-19 sin modificar el diseño aprobado.
8. **Validación integral y cierre — completada.** Se ejecutaron los criterios
   siguientes y se documentaron las limitaciones conocidas el 2026-10-19.

### Criterios de aceptación

- Una home responsive y rutas preservadas; referencias oficiales de Stitch
  consultadas y `/desktop` intacta pero excluida de la validación.
- Cada módulo compartido existe una vez, incluidos dos anuncios y ambas
  transmisiones. Sudoku es la excepción aprobada: se oculta desde 1024 px.
  La reserva para juegos es el único bloque desktop adicional aprobado y aún no
  incorpora funcionalidad. Sin otros extras, datasets paralelos ni truncamientos
  no acordados.
- Orden mobile preservado también visualmente en desktop salvo la ocultación de
  Sudoku, el reemplazo aprobado de Legionarius por el gráfico interactivo y la
  reserva para juegos debajo de Crimen; solo las agrupaciones locales
  documentadas comparten fila. Comparar con Stitch por jerarquía, proporciones y
  espacios internos, no secuencia, agrupaciones descartadas ni fotos/copys.
- Probar 414×896, 768×1024, anchos 1023 y 1024, y 1440×900: sin overflow horizontal,
  scroll hasta footer y transición de breakpoint correcta.
- Probar apertura por id, slides, pausa/progreso/sonido por fuente, cierre/Escape,
  scroll/foco restaurados y resize con modal abierto. Sin dobles reproductores ni
  iframes Shorts en feed.
- Widgets y links existentes preservados; sin errores nuevos de consola o
  hidratación. Revisar teclado respetando la limitación semántica acordada.
- Fuentes vacías no dejan slots/secciones vacíos; fallos con logging, sin
  respuestas ficticias de éxito. Si un integrante de una pareja devuelve
  `null`, omitir ambos y el contenedor. Corregir guards de wrappers intervenidos.
- `npx tsc --noEmit`, `npm run build` y `git diff --check` deben pasar para cerrar
  implementación. La consolidación documental no requiere builds.

**Configuración y errores:** no inventar ni exponer claves. Tipos, build y rutas
pasaron usando la configuración local; las funciones Pexels sin clave o ante
fallo retornan `[]` con logging y sus wrappers omiten la sección. No se probó
eliminando o mostrando la configuración local.

## ❓ Preguntas Pendientes / Definiciones
*   **Monetización**: Ads nativos en el feed programáticos.
*   **API de Diario UNO**: evaluar acceso y equivalencia editorial si se solicita
    comparar ambos diseños con el mismo contenido real; fuera del tramo aprobado.
*   **Exploración desktop 3+6+3**: no decidida ni incluida en las propuestas
    actuales. La segunda home funcional aprobada es `/opcion-2` y utiliza 8/4.
*   **Próxima intervención visual**: `/opcion-2` está cerrada y aprobada;
    cualquier evolución de las homes o de los experimentos estáticos
    `/desktop` y `/desktop2` requiere un nuevo objetivo del usuario.

---

📋 Para el estado del trabajo, la bitácora y el backlog, ver [PROGRESS.md](./PROGRESS.md).
