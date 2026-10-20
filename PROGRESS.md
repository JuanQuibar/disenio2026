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

Hay dos homes funcionales aprobadas para la presentación: `/` y `/opcion-2`.
La segunda recibió aprobación visual del usuario el 2026-10-19 y comparte
`HomeWrapper` con la primera. Solo difiere desde 1024 px en el header y el tramo
editorial anterior a MAM; Live/Muy Destacada y todo el contenido desde MAM,
incluido, conservan la implementación de `/`. Ambas comparten la misma mobile.
La composición alternativa mantiene 8/4 y muestra siempre seis titulares en
AHORA y cuatro en AVANCES DE LA IA, con resúmenes interactivos y altura natural
del lateral. `/desktop` y `/desktop2` siguen siendo experimentos estáticos
independientes; no confundirlos con la segunda home funcional.
En mobile, Última hora muestra solo Agencia con cinco noticias y resúmenes
superpuestos. Las dos homes funcionales usan la selección de doce fotos editoriales
tomadas en Argentina tanto en mobile como en desktop; `/desktop` y `/desktop2`
conservan esa selección en sus instantáneas desktop independientes.

Prototipo mobile-first funcionando. La home renderiza los **tres carruseles de
video definitivos** (MAM, Shorts y Branded), validados en viewport 414×896 sin
errores de consola.

MAM, Branded y Shorts abren **modal fullscreen con scroll vertical**, con
controles de pausa, barra de progreso y silencio (el silencio, sólo en MAM y
Shorts). Los tres carruseles están completos en mobile.
Desde 1024 px, el modal compartido presenta el video vertical centrado a la
altura completa del viewport, deja la home visible detrás de un velo oscuro y
agrega botones laterales para avanzar o retroceder. Hasta 1023 px conserva sin
cambios el fullscreen mobile.

La home `/` ya comparte un único árbol para mobile y desktop; el cambio visual a
desktop comienza en 1024 px. La composición desktop presenta Encuesta/Senatus y
Gráfico interactivo/chat en parejas de dos columnas, y Canal 7/Radio Nihuil
junto al primer anuncio en una fila de tres columnas. Mobile apila el contenido
y deja ese anuncio inmediatamente debajo de los dos streams.
El header desktop muestra sus dos franjas únicamente al inicio: al hacer scroll
oculta la barra superior de servicios y mantiene fija la fila principal de
57 px; la barra completa reaparece solo al volver a `scrollY = 0`.
Mobile conserva las cinco notas de Legionarius y ubica Sudoku inmediatamente
debajo del chat. Desde 1024 px, Legionarius se reemplaza por el video local de
Nepal en loop continuo, el chat comparte su altura y Sudoku se oculta sin
reservar espacio.
Inmediatamente debajo de Crimen, desktop incorpora un contenedor blanco de
400 px de alto y ancho completo para reservar el futuro espacio de juegos;
permanece ausente en mobile.
Desde 1024 px los tres contenedores mantienen la misma altura; los streams
tienen cabezales `CANAL 7 EN VIVO` y `RADIO NIHUIL EN VIVO` con punto rojo
pulsante, respetando la preferencia de movimiento reducido.
La ruta `/desktop` inició su tarea independiente de diseño alternativo. Su
baseline es una réplica HTML estática de la home actual desde 1024 px, aislada
de sus wrappers, datos y handlers React. Su primera composición aprobada usa
header sticky de una sola fila y una columna editorial de ocho columnas para
Apertura y Principales. Apertura evolucionó a foto 16:9 sin cabezal interno.
Agencia ocupa las cuatro derechas durante ambos módulos;
su panel negro reúne seis noticias, una pieza publicitaria 300×600 y una copia
visual de la encuesta; debajo cierra con el listado estático `AVANCES DE LA IA`.
Ovación ya tiene una variante aprobada de ancho completo: panel oscuro, agenda
DataFactory enmarcada, contenido editorial principal/listado de igual altura y
una cinta deportiva continua junto al logo.
Sigue excluida de las referencias y validaciones de la integración original de
`/`. Su tramo superior fue la referencia visual explícita de `/opcion-2`.

La ruta `/desktop2` conserva una segunda alternativa completamente estática e
independiente. Se creó a partir del HTML final renderizado de `/desktop`,
incluidos sus estilos locales, y guarda toda la instantánea en un único
`String.raw` de `app/desktop2/page.tsx`, renderizado exclusivamente mediante
`dangerouslySetInnerHTML`. No importa componentes, wrappers, servicios ni
datos de `/desktop`, no hidrata handlers y puede abrirse directamente. Desde
esa captura evolucionó de forma deliberada: los módulos editoriales acordados
presentan título y firma antes del medio, Apertura usa foto 4:3 y las bajadas no
se muestran, salvo las dos del panel `FOCO DE COBERTURA`. Política, Sociedad y
Crimen expanden su imagen principal para terminar a la misma altura que el
listado lateral.

Por instrucción explícita del usuario, la variante de Ovación de `/desktop`
fue trasladada después al módulo real de Ovación en `/` como un trabajo
independiente de la etapa 5. El
desktop integrado quedó aprobado desde 1024 px usando los wrappers, servicios y
datos reales; Stitch no intervino. La adaptación mobile posterior quedó cerrada
con el mismo panel oscuro, ticker CSS junto al logo, agenda deportiva general de
DataFactory, títulos uppercase y sin bajada ni rótulo de fixture. Ovación adopta
desde ahora esta línea visual propia en ambos anchos: no será adaptado a Stitch y
queda definitivamente fuera del alcance de la etapa 5.

Al trasladar la base a la carpeta principal el 2026-10-10, con su configuración
local existente, pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`.
El bloqueo anterior correspondía al entorno del worktree, no al estado actual
de la carpeta principal.

El estado acumulado se revalidó técnicamente el 2026-10-19: pasaron
`npx tsc --noEmit`, `npm run build` y `git diff --check`, conservando las rutas
`/`, `/detalle-nota` y `/desktop`. La validación visual posterior de `/` quedó
aprobada por el usuario y permitió cerrar la etapa 5. Las revisiones funcional e
integral cerraron después las etapas 7 y 8.

La inspección y las etapas 2 (marco/composición), 3 (noticias), 4 (adaptación de
videos) y 5 (cotejo y adaptación visual) están implementadas y aprobadas, con la
salvedad de Shorts registrada abajo. La etapa 5 quedó cerrada por el usuario el
2026-10-19. El estado visual actual de la home es la línea base aprobada: los
módulos adaptados conservan sus decisiones documentadas y los que no recibieron
un rediseño específico quedan aceptados en su presentación vigente, sin tareas
visuales residuales dentro de esa etapa.
La etapa 6, **ajuste de tamaño de fuentes**, quedó cerrada y aprobada con títulos
y bajadas largos, completos, sin punto final y sin truncado dentro del alcance
acordado. El tramo
independiente de Última hora conserva solo Agencia en mobile, por decisión del
usuario del 2026-10-20. Tiene cabezal pulsante, reloj real y resúmenes por
fuente superpuestos que se leen sin salir de la home ni cambiar el tamaño del
recuadro al abrir o cerrar. El bloque mobile se oculta desde 1024 px, sin
reservar espacio, en ambas homes. `/opcion-2` conserva AHORA e IA en su lateral
desktop aprobado, con sus respectivas interacciones.
Servicios quedó oculto en `/` para mobile y desktop por indicación del usuario;
su implementación se conserva fuera de la composición para una posible
reactivación.
Las etapas 7 y 8 cerraron la revisión funcional de widgets/anuncios y la
validación integral. El plan responsive queda completado; no hay una etapa
siguiente automática.
El plan está documentado en
[PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md#plan-aprobado-integración-mobile-y-desktop).
Principales (6), Sociedad (5; una principal y cuatro secundarias), Senatus
(video e imagen) y encuesta compartida quedaron alineados con las decisiones
acordadas. La etapa 5 usó la publicación y
el MCP oficiales de Stitch; las decisiones aprobadas de `DESIGN.md` prevalecen.
El [resultado autosuficiente](./PROJECT_CONTEXT.md#etapa-1-verificada-inventario-y-baseline-2026-10-10)
registra cantidades, controles reales, diferencias, fuentes y pendientes.
Las capturas están en la conversación de esta etapa, no en el repositorio;
una sesión nueva no debe asumir acceso a ellas.

El MCP oficial de Stitch quedó disponible y verificado el 2026-10-14. Se
identificaron el proyecto `Diario UNO Desktop Redesign` y su pantalla principal
`Diario UNO — Portada Desktop 2026`; los identificadores y las reglas de uso
consultivo están en `PROJECT_CONTEXT.md`. Es una fuente complementaria a la web
pública, no autoriza mutaciones y su credencial nunca se guarda en el repositorio.
`/desktop` queda excluida del cotejo.

---

## ✅ Hecho

### 2026-10-20 — Agencia elegida como única Última hora mobile

Después de comparar ambas interacciones, el usuario eligió Agencia como única
presentación mobile en `/` y `/opcion-2`. Se retiró Timeline, sus componentes
exclusivos y el wrapper de comparación. `UltimaHoraWrapper` genera una sola vez
el dataset por carga y entrega las primeras cinco noticias a Agencia; en
`/opcion-2`, el lateral desktop sigue recibiendo el dataset completo y conserva
seis titulares en AHORA y cuatro en AVANCES DE LA IA. Las instantáneas estáticas
`/desktop` y `/desktop2` no se sincronizan con esta decisión.

Agencia adoptó la apertura superpuesta del antiguo Timeline: el título no salta
de posición y la altura exterior permanece estable. Si un resumen largo no cabe
entero arriba ni debajo del título, el panel limita su altura y permite desplazar
solo su contenido para conservar visibles tanto el título como el resumen.
El aspecto de Agencia, el cierre, Escape y el retorno de foco se mantienen.
Se verificaron las dos homes a 414 px y el lateral de `/opcion-2` a 1440 px;
pasaron tipos, build y `git diff --check`.

### 2026-10-19 — Selección editorial compartida con mobile

Las doce fotos argentinas ya elegidas para desktop se aplican también a mobile
en `/` y `/opcion-2`, sin cambiar la composición ni las fuentes de datos. Los
wrappers siguen omitiendo la sección si el servicio no trae noticias y entregan
las fotos y sus textos alternativos a las cards correspondientes. La fuente de
la selección está en `app/content/editorial-photos.ts`; `EditorialImage` pide
resoluciones adecuadas al ancho y al recorte en cada viewport. Las dos rutas
estáticas mantienen sus instantáneas independientes. Se comprobaron ambas homes
a 414 px sin desborde y pasaron tipos, build y `git diff --check`.

### 2026-10-19 — Cinco noticias por variante de Última hora mobile

Estado de la comparación en esa fecha; la elección de Agencia del 2026-10-20
reemplazó esta coexistencia.

Timeline y Agencia comparten ahora las primeras cinco noticias del mismo dataset
en `/` y `/opcion-2`. La reducción se hace en
`UltimaHoraComparacionWrapper`; el lateral desktop de `/opcion-2` sigue
recibiendo el dataset completo y conserva seis titulares en AHORA y cuatro en
AVANCES DE LA IA. `/desktop` y `/desktop2` no cambiaron en este tramo. Se
comprobaron ambas homes a 414 px, la interacción del quinto titular y el conteo
desktop a 1440 px. Pasaron tipos, build y `git diff --check`.

### 2026-10-19 — Fotos editoriales argentinas en las cuatro homes desktop

Tras la revisión visual de las candidatas, se eligieron doce fotos de Pexels
tomadas en Argentina para Apertura, dos tarjetas de Principales, las principales
de Política, Ovación, Sociedad y Crimen, una secundaria de Sociedad y cuatro
retratos de Gente. Apertura usa la misma foto de viñedo mendocino en las cuatro
rutas. Las homes funcionales declaran la selección en
`app/content/desktop-editorial-photos.ts` y la muestran solo desde 1024 px
mediante `EditorialImage`; `/desktop` y `/desktop2` conservan copias propias
en sus instantáneas. Las fotos mobile siguen siendo las del servicio.

Se comprobaron las dimensiones originales, entre 3011 y 6016 px de ancho, y
los recortes principales a 1440 px, incluida la Apertura 4:3 de `/desktop2`.
Las cuatro rutas muestran la selección esperada, sin overflow, y las dos homes
funcionales mantienen sus fuentes mobile a 414 px. Pasaron tipos, build y
`git diff --check`.

### 2026-10-19 — Reserva de juegos ubicada debajo de Crimen

Por indicación del usuario, el mismo bloque de 400 px se trasladó de debajo
de Gráfico interactivo/Chat a entre Crimen y Últimas noticias. La ubicación
coincide en `/`, `/opcion-2`, `/desktop` y `/desktop2`; en las dos homes
funcionales sigue oculto en mobile. No cambian su contenido ni sus medidas.

### 2026-10-19 — Fotos desktop desde originales con resolución suficiente

Se auditaron `/`, `/opcion-2`, `/desktop` y `/desktop2`, comparando el tamaño
real de los archivos servidos con el tamaño necesario antes del recorte
`object-cover`. Varias fotos usaban la copia Pexels `medium` de 350 px de alto
y se ampliaban en desktop; algunas miniaturas también seleccionaban un archivo
demasiado pequeño para cubrir su recuadro cuadrado.

Las homes funcionales incorporan `EditorialImage`, una primitive presentacional
que conserva el `<Image>` mobile y agrega una fuente desde 1024 px. Desktop
optimiza el original sin los límites `h`/`w` de la miniatura; `desktopSizes`
contempla el recorte, incluyendo Gente y los retratos de Opinión. Las dos rutas
estáticas guardan fuentes equivalentes dentro de su propia instantánea, sin
conectarlas a los componentes ni a los datos de las homes. Se conservan las
fotografías, el diseño y las fuentes mobile.

Las cuatro rutas se comprobaron a 1024, 1280 y 1440 px, incluida densidad 2×:
las fotografías tienen píxeles suficientes y no hay overflow. A 414 px las
fuentes y medidas de ambas homes coinciden con las anteriores. El usuario
aportó `public/aviso_pepsi.jpeg` (1440×2912) para resolver también la falta de
resolución Retina de la publicidad anterior: se usa en `/opcion-2`, `/desktop`
y `/desktop2`, conservando el recuadro de hasta 300×600 y su recorte.
Por indicación posterior del usuario, Apertura en ambas rutas estáticas usa la
foto actual de `/` (Pexels `12909990`), manteniendo respectivamente 16:9 y 4:3.
Pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`. El build
requirió acceso de red para descargar las fuentes de Google.

### 2026-10-19 — Segunda home funcional `/opcion-2`, aprobada visualmente

Se incorporó una segunda propuesta para accionistas mediante React y los
wrappers existentes, sin `String.raw` ni `dangerouslySetInnerHTML`. Las dos
páginas delegan en `HomeWrapper` con las variantes `original` y `alternativa`:
compartir Live y la composición desde MAM evita que las propuestas diverjan en
los módulos que deben permanecer idénticos. El header/footer siguen dentro de
`(sitio)` y no se duplican homes completas ni reproductores por viewport.

Desde 1024 px, la alternativa toma de `/desktop` el header sticky, Apertura con
foto 16:9, Principales 2×3 y el lateral con AHORA, Pepsi 300×600, encuesta e IA.
Se mantiene 8/4 en todos los anchos desktop, con seis titulares de AHORA y cuatro
de IA siempre completos. Se descartó heredar la ocultación de noticias por ancho
y la altura forzada del lateral estático: MAM comienza después de la columna más
alta, aunque quede espacio libre debajo de la izquierda.

AHORA conserva la apariencia de Agencia pero abre resúmenes superpuestos como
`UltimaHoraWrapper`; IA los despliega en flujo como `UltimaHoraAgenciaWrapper`.
Ambos mantienen el tamaño exterior al abrir/cerrar, lectura en home, cierre con
botón o Escape y retorno de foco. La encuesta adicional comparte los datos de
la original y continúa sin votación ni persistencia.

Se verificaron paridad mobile a 414, 768 y 1023 px; cantidades, lectura y ausencia
de overflow a 1024, 1200, 1280, 1366 y 1440 px; header, teclado, resize con
resumen abierto, modales, radio y chat. `/` conservó sus dimensiones desktop y
los módulos compartidos coincidieron entre rutas. Pasaron `npx tsc --noEmit`,
`npm run build` y `git diff --check`, y las recargas finales no mostraron errores
de consola. Las capturas del MCP estuvieron bloqueadas por permisos; la
aprobación visual corresponde a la revisión posterior del usuario. La
documentación se actualizó recién después de esa aprobación, por su instrucción.
Las dos referencias estáticas permanecieron intactas durante este tramo.

### 2026-10-19 — `/desktop2`: segunda alternativa estática independiente

Se creó `app/desktop2/page.tsx` como una captura autosuficiente del HTML final
renderizado de `/desktop`, con sus estilos locales incluidos en la misma
constante `String.raw`. La ruta solo usa `dangerouslySetInnerHTML`: no importa
ni comparte componentes, wrappers, servicios o datos con `/desktop`, no agrega
hidratación ni recrea handlers React. La captura puede abrirse directamente y no
se sincroniza automáticamente con cambios futuros de `/` o `/desktop`.

Sobre esa base se invirtió el orden interno a título/firma antes del medio en
Cobertura extraordinaria, Apertura, las seis tarjetas de
Legionarius/Principales, Política, Ovación, Sociedad, Crimen y las dos tarjetas
de Senatus. Apertura usa relación 4:3. Se retiraron visualmente las 14 bajadas
editoriales con clase `bajada`; las dos descripciones de `FOCO DE COBERTURA`
se conservan. Política, Sociedad y Crimen compensan el espacio retirado haciendo
crecer la imagen principal hasta igualar exactamente la altura del listado
derecho.

Se verificó la ruta a 1024×900, 1366×900 y 1440×900: conserva el orden de
módulos, no presenta overflow horizontal ni errores o warnings de consola.
Pasaron `git diff --check`, `npx tsc --noEmit` y `npm run build`; el build
prerenderiza `/desktop2` como contenido estático. `/`, `/desktop` y sus
componentes permanecieron fuera de este trabajo.

### 2026-10-19 — Etapa 8 cerrada: validación integral

Se validaron `/` y `/detalle-nota`, el árbol compartido, el corte exacto de
1023/1024 px, el scroll hasta footer y la ausencia de overflow horizontal. La
matriz incluyó Lighthouse mobile a 412×823, navegador a 500, 768, 1023, 1024 y
1440 px, además de la comprobación previa a 414×896 conservada como baseline.
`/desktop` siguió preservada y excluida de la revisión funcional.

Pasaron header y banner de detalle, Última hora, las parejas responsive,
transmisiones, anuncios, Chat, Sudoku, reserva de juegos, carruseles y los tres
modales. Se verificaron reproducción única, navegación, pausa, cierre con
Escape, bloqueo/restauración de scroll, retorno de foco y las variantes mobile y
desktop. Los modales ahora contienen el foco de teclado y marcan sus slides
inactivos con `inert` y `aria-hidden`, sin cambios visuales. El enlace de marca
del header incluye `Mendoza` en su nombre accesible y el indicador EN VIVO del
header se detiene con `prefers-reduced-motion`, igual que streams y ticker.

Lighthouse obtuvo 96 en accesibilidad y 100 en SEO en home y detalle; Best
Practices fue 100 en desktop. Permanecen documentados, sin modificar el diseño
aprobado, el contraste bajo de algunos rótulos auxiliares. En mobile, cookies de
terceros de YouTube y dos recursos placeholder de DataFactory bloqueados por ORB
reducen Best Practices; no son errores de la aplicación. La limitación conocida
del audio inicial de Shorts en iOS tampoco cambia.

No hubo errores nuevos de consola o hidratación. Pasaron `npx tsc --noEmit`,
`npm run build` y `git diff --check`; el build conserva `/`, `/detalle-nota` y
`/desktop`.

### 2026-10-19 — Etapa 7 cerrada: widgets y anuncios

Se revisaron Servicios, Encuesta/Senatus, Canal 7, Radio Nihuil, Chat, Sudoku y
los dos anuncios sin reabrir el diseño desktop aprobado. Servicios continúa
implementado pero fuera de `/`; Encuesta mantiene cuatro resultados de muestra
sin votación ni historial funcional; Senatus reproduce su video muteado solo en
viewport; Canal 7 monta su iframe desde el inicio y Radio Nihuil lo crea recién
después del click. Los dos anuncios conservan sus variantes y no incorporan
navegación.

Chat ahora desplaza únicamente su historial al enviar mensajes, por lo que no
mueve la página ni altera la altura de la pareja desktop. Enter envía y
Shift+Enter agrega una nueva línea. Sudoku conserva 81 celdas, 30 pistas
bloqueadas y 51 editables; solo acepta del 1 al 9, identifica cada celda de forma
accesible y sigue oculto desde 1024 px. Se retiró un contenedor 16:9 duplicado de
Canal 7 y el separador de Senatus solo aparece cuando existen ambos medios.

Se verificaron el apilado mobile y la activación real de Radio Nihuil a 414 px,
la composición desktop a 1440 px, el autoplay/pausa de Senatus, el chat, Sudoku,
la instancia única de cada widget y ambos anuncios. No hubo errores nuevos de
aplicación; los únicos avisos del navegador corresponden a recursos ajenos a
este tramo. Pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`.

### 2026-10-19 — Tramo inferior de `/desktop` sincronizado con la home

La variante `/desktop` conserva sin cambios Branded y todos los módulos
anteriores de su experimento. Desde Encuesta/Senatus hacia abajo reemplaza su
composición previa por una instantánea HTML estática de la home `/`: Ovación,
segundo anuncio, Sociedad, transmisiones con el primer anuncio, Gráfico
interactivo/Chat, reserva de juegos, Gente, Crimen y Ultimatem mantienen el
orden, contenido y presentación vigentes al momento de la captura.

La copia sigue sin wrappers ni hidratación propia. Se retiraron únicamente las
reglas locales de la antigua Ovación experimental para que ese tramo use los
estilos globales de la home. A 1024, 1366 y 1440 px no presenta overflow; a
1440 px todos los módulos desde Encuesta coinciden con `/` en dimensiones,
texto y medios. Pasaron `git diff --check`, `npx tsc --noEmit` y
`npm run build`.

### 2026-10-19 — Header desktop compacto durante el scroll

Desde 1024 px, el header integrado conserva sus 94 px y las dos franjas al inicio
de la página. Al abandonar `scrollY = 0`, la barra superior de servicios colapsa
y queda fija únicamente la fila principal de 57 px con hamburguesa, logo,
navegación y acciones. Scrollear hacia arriba no expande el header: los servicios
reaparecen solo al regresar al comienzo, evitando cambios de altura frecuentes.

El offset del marco acompaña la transición de 94 a 57 px. En
`/detalle-nota`, el banner superior fijo también pasa de `top: 94px` a
`top: 57px`, por lo que permanece pegado al header sin huecos. La franja oculta
queda fuera del foco mediante `inert` y `aria-hidden`; las transiciones se
desactivan con `prefers-reduced-motion`. Mobile y 1023 px permanecen intactos.

Se verificaron 1023, 1024 y 1440 px, estado inicial, scroll descendente,
ascendente y retorno al inicio, además de `/` y `/detalle-nota`. Pasaron
`npx tsc --noEmit`, `npm run build` y `git diff --check`.

### 2026-10-19 — Modales de video desktop rediseñados y aprobados

Desde 1024 px, MAM, Shorts y Branded reutilizan el mismo shell de modal con una
presentación desktop específica. El video activo conserva su proporción 9:16,
se centra y ocupa el alto completo del viewport; el resto de la home permanece
visible detrás de un velo negro translúcido con desenfoque. Dos botones
circulares a los costados recorren el catálogo anterior/siguiente y se
deshabilitan en los extremos; la cruz de cierre permanece visible en la esquina
superior derecha.

La adaptación no crea players ni carruseles nuevos: mantiene el portal sobre
`document.body`, la selección por `id`, Swiper vertical, mousewheel, teclado,
Escape, bloqueo de scroll, retorno de foco y controles/audio propios de cada
fuente. MAM y Branded limitan sus `<video>` nativos al frame vertical; Shorts
hace lo mismo con el único iframe activo. Hasta 1023 px el modal fullscreen
mobile queda intacto.

Se verificaron el corte 1023/1024 px, la composición a 1440×900, resize con el
modal abierto, navegación lateral, cierre y reproducción en las tres fuentes.
El usuario aprobó visualmente el resultado. Pasaron `npx tsc --noEmit`,
`npm run build` y `git diff --check`.

### 2026-10-19 — Etapa 5 cerrada y composición final aprobada

El usuario dio por terminada la etapa 5 después de aprobar visualmente el estado
actual de `/`. En mobile y desktop, el tramo central queda en el orden
Encuesta/Senatus → Ovación → segundo anuncio → Sociedad. Después continúan las
transmisiones con el primer anuncio, Gráfico interactivo/Chat —Legionarius,
Chat y Sudoku en mobile— y la reserva desktop para juegos antes de Gente.

Los módulos que no recibieron una adaptación visual específica durante la etapa
5 —Opinión, Encuesta/Senatus, primer anuncio, transmisiones, footer, modales
desktop de video y skeletons desktop— se aceptaron tal como estaban implementados
y dejaron de integrar el backlog de esa etapa. La decisión posterior sobre los
modales desktop está registrada en la entrada precedente y reemplaza únicamente
esa parte de la línea base. Este cierre no certifica la revisión
funcional y de paridad de widgets/anuncios de la etapa 7 ni la validación integral
de la etapa 8. `/desktop` continúa como tarea independiente.

La última validación visual comprobó el orden a 414 y 1440 px, sin overflow. En
el mismo tramo pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`.

### 2026-10-19 — Segundo anuncio desktop adaptado a Stitch

El anuncio ubicado entre Ovación y Sociedad conserva en mobile el rectángulo
animado 300×250. Desde 1024 px se reemplaza visualmente por el leaderboard
premium de Stitch: gradiente azul de ancho completo, rótulo
`ESPACIO PUBLICITARIO • IAB LEADERBOARD PREMIUM`, título
`VENDIMIA CONNECT 2026`, bajada y CTA visual `Reservar Experiencia →`. No se
agregó navegación ni comportamiento publicitario.

La referencia se cotejó en la publicación pública y en la pantalla oficial del
MCP de Stitch. Se verificaron 414, 1023, 1024 y 1440 px; la ubicación final entre
Ovación y Sociedad, el cambio de variante en el breakpoint, la ausencia de overflow y consola
limpia. Pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`.

### 2026-10-19 — Espacio de juegos reservado en desktop

La home `/` incorpora desde 1024 px un contenedor presentacional blanco de ancho
completo y 400 px de altura, ubicado inmediatamente después de Gráfico
interactivo/Chat Vox Dei y antes de Gente. El mensaje centrado usa 24 px y dice
`Espacio reservado para juegos. Proyecto en fase de evaluación`. El bloque no se
muestra ni reserva espacio hasta 1023 px y no agrega todavía juegos, controles o
datos.

Se verificó el breakpoint en 1023/1024 px, la presentación a 1440 px, la altura,
el ancho disponible y la ausencia de overflow o errores de consola. Pasaron
`npx tsc --noEmit`, `npm run build` y `git diff --check`.

### 2026-10-19 — Gráfico interactivo y Chat Vox Dei desktop aprobados

La pareja anteriormente identificada como Legionarius/chat adoptó una variante
desktop propia desde 1024 px. La columna izquierda usa el espacio disponible y
presenta el video local `public/video_nepal.mp4` en 16:9, autoplay muteado, loop
continuo, sin controles y sin montarlo por debajo del breakpoint. Su cabezal
aprobado es `GRÁFICO INTERACTIVO`, con ícono de gráfico, y conserva a la derecha
el copy solicitado `EDICIÓN ESPCIAL`.

La columna derecha mantiene 448 px y el chat incorporó un cabezal oscuro
`CHAT VOX DEI` con ícono afín. Ambos paneles se estiran a la misma altura,
determinada por el video; cuando crece la conversación, los mensajes usan scroll
interno sin modificar la fila. Sudoku se conserva inmediatamente debajo del chat
en mobile y se oculta completamente desde 1024 px, sin reservar espacio.

Mobile mantiene las cinco notas de Legionarius, el chat de 60vh y el Sudoku
interactivo. Se verificaron 414, 1023, 1024 y 1440 px, reproducción y loop,
igualdad de alturas, envío y scroll del chat, ausencia de overflow y consola sin
errores. Pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`. Este
tramo reemplaza las decisiones desktop anteriores de la pareja y cierra su
adaptación visual; no modifica `/desktop`.

### 2026-10-19 — Sudoku debajo del chat en mobile

Sudoku se trasladó en el árbol de la home para aparecer inmediatamente después
de Legionarius/chat en mobile, con el gap general de 8 px. El reordenamiento
posterior de Ovación, anuncio y Sociedad no alteró esa relación local. Desde
1024 px Sudoku queda oculto sin reservar espacio. No se duplica el juego ni su
estado. Se verificaron el orden DOM y visual a
414×896, el orden desktop a 1440×900, ausencia de overflow y consola sin errores
nuevos tras una recarga limpia. Pasaron `npx tsc --noEmit`, `npm run build` y
`git diff --check`.

### 2026-10-19 — Servicios oculto en la home integrada

Por indicación del usuario, el módulo de Servicios salió de la composición de
`/` en mobile y desktop, sin reservar espacio entre Shorts y Opinión. Se
conservan su wrapper y sus componentes para poder reactivarlo sin reconstruirlo;
la ruta alternativa `/desktop` no cambia. La ocultación se verificó a 414×896 y
1440×900, sin overflow ni errores nuevos de consola. Pasaron
`npx tsc --noEmit`, `npm run build` y `git diff --check`.

### 2026-10-19 — Trabajo exclusivo en la carpeta principal

Por decisión explícita del usuario, este proyecto no debe crear ni usar
worktrees: todas las sesiones trabajan en la carpeta principal `uno-2026-1`.
`AGENTS.md` exige detener modificaciones si el editor inicia la sesión en un
worktree. La elección de carpeta sin aislamiento debe hacerse en el selector
de la sesión antes del primer mensaje; las instrucciones no impiden que el
editor prepare un worktree antes de leerlas. Los worktrees anteriores se
conservan hasta revisar su contenido y recibir autorización para retirarlos.

### 2026-10-19 — Navegador compartido para pruebas de agentes

Se establece una única instancia de Chrome de pruebas con perfil separado y
depuración local en `127.0.0.1:9222`. Copilot y Codex tienen configuraciones MCP
de proyecto para conectarse al navegador existente, sin cambiar sus ajustes
globales. `AGENTS.md` exige reutilizar pestañas, coordinar tareas simultáneas y
no lanzar navegadores adicionales. La guía `BROWSER_TESTING.md` documenta
arranque, seguridad y verificación tras recargar cada cliente. Esto no inicia
Next.js ni cierra etapas de diseño; las sesiones ya abiertas deben recargarse
para comprobar que usan la conexión nueva.
Se verificaron la sintaxis JSON/TOML, la igualdad de argumentos entre clientes,
el endpoint de Chrome limitado a loopback y una llamada MCP real a `list_pages`
usando la configuración de proyecto. La activación en las interfaces de ambos
clientes queda sujeta a su recarga y a la comprobación descrita en la guía.

### 2026-10-19 — Anuncio de participación junto a las transmisiones

El anuncio `ad-listado`, antes ubicado entre Participación (Encuesta/Senatus) y
Sociedad, ahora se presenta debajo de la pareja de transmisiones de Canal 7 y
Radio Nihuil en mobile. Desde 1024 px comparte una fila de tres columnas con
ambos streams: el anuncio ocupa 332 px (banner 300×250 más padding) y el espacio
restante se divide por igual entre las transmisiones. El wrapper conserva el
anuncio si faltara alguno de los dos streams; cuando ambos están presentes,
comparten el mismo grid. Se mantiene el anuncio 300×250 y no se altera
`/desktop`.

La fila desktop iguala además la altura de sus tres contenedores blancos según
el contenido más alto, sin altura fija y conservando los videos 16:9. Canal 7 y
Nihuil tienen cabezales oscuros con borde azul y los textos `CANAL 7 EN VIVO` y
`RADIO NIHUIL EN VIVO`, con punto rojo pulsante que respeta movimiento reducido.
Mobile conserva sus cabezales y alturas independientes. Se verificaron alturas
iguales a 1024, 1440 y 1920 px, incluida la activación del iframe de Nihuil;
mobile a 414 px y el límite de 1023 px mantienen el apilado sin overflow.
Pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`. No se cierra
el cotejo pendiente con Stitch ni la revisión funcional de la etapa 7.

### 2026-10-19 — Sociedad con una principal y cuatro secundarias

Por indicación del usuario, Sociedad ahora usa en mobile la misma estructura
editorial que Política: una noticia principal con imagen, titular, bajada y
firma, seguida por cuatro filas secundarias. Se conserva este esquema en
desktop y se omite la última noticia que antes completaba las seis piezas; las
categorías y firmas restantes se mantienen. La composición reemplaza la grilla
mobile de retratos.

El wrapper conserva la selección de fotos `[11, 16)`, usa el layout compartido y
sigue omitiendo la sección si falta la foto principal. La respuesta renderizada
de producción contiene cinco artículos (uno principal y cuatro secundarios),
sin la grilla de retratos. Pasaron `npx tsc --noEmit`, `npm run build` y
`git diff --check`.

### 2026-10-19 — Ovación mobile integrado y excluido de la etapa 5

Después de la aprobación del desktop, Ovación adoptó en mobile la misma línea
visual independiente: todo el módulo usa un único contenedor `#111827` con radio
de 8 px y padding de 8 px; el cabezal combina el logo de 96 px con la cinta
deportiva CSS de 34 segundos y termina en una línea blanca recta. Se dejaron
16 px entre esa línea y el widget de DataFactory.

La agenda general de DataFactory se conserva en un iframe de 90 px. El rótulo
`FIXTURE - PRIMERA A` y la bajada de la noticia principal están ocultos, y todos
los títulos se muestran en uppercase y blanco. La implementación sigue usando
los componentes, wrappers, datos y comportamientos reales, sin copiar HTML de
`/desktop`; el desktop aprobado no cambió y no hay overflow horizontal.

Por decisión explícita del usuario, esta presentación pasa a ser la referencia
propia de Ovación para mobile y desktop. El módulo **no será adaptado a la
versión de Stitch** y queda fuera del inventario pendiente, el cotejo y los
criterios de cierre de la etapa 5. La etapa 5 continúa suspendida y esta decisión
no convierte a `/desktop` en referencia para ninguna otra sección. El cierre
pasó `npx tsc --noEmit`, `npm run build` y `git diff --check`.

### 2026-10-19 — Ovación desktop integrado en `/` y aprobado

Por indicación explícita del usuario, el diseño aprobado de Ovación en
`/desktop` se usó excepcionalmente como referencia exclusiva para trasladar ese
módulo a la home real. Este trabajo no reanuda la etapa 5, no usa Stitch y no
autoriza tomar `/desktop` como referencia para ninguna otra sección.

La implementación conserva `OvacionWrapper`, `fetchDeportes()` y los
componentes reales. Desde 1024 px presenta un único panel `#111827` con padding
de 24 px y radio de 8 px; logo de 135 px, línea blanca recta, ticker deportivo
CSS de 34 segundos con pausa por hover y `prefers-reduced-motion`, agenda general
de DataFactory, una noticia principal y cuatro secundarias. El título principal
es uppercase 28/34 px, sin bajada y con firma; el listado usa cuatro filas
iguales, fotos 3:2 y títulos uppercase 16/22 px, reducidos a 14/19 px entre 1024
y 1100 px. Las dos columnas terminan a la misma altura.

La agenda general reemplazó al fixture de Primera A también en mobile, por
decisión posterior del usuario; fue el único cambio visual/funcional mobile de
este tramo. Se verificaron 1024×900, 1366×768 y 1440×900, carga del iframe,
ticker, pausa, alineaciones, igualdad de alturas y ausencia de overflow. Pasaron
`npx tsc --noEmit` y `git diff --check`. El usuario aprobó visualmente el desktop;
después de esa aprobación se actualizó esta documentación y pasó también
`npm run build`.

### 2026-10-19 — `/desktop`: Apertura compactada y Ovación aprobado

La prueba alternativa avanzó sin modificar la home `/`. Apertura ocultó su
cabezal interno y pasó la foto a 16:9 con una fuente de mayor resolución para
mantener el encuadre sin pixelado. Conserva título, bajada, firma e `INFORME
ESPECIAL`. Al reducirse su alto, `AVANCES DE LA IA` adapta el cierre de la
columna derecha mostrando una, dos, tres o cuatro filas completas en los rangos
1024–1199, 1200–1279, 1280–1365 y desde 1366 px, respectivamente.

Ovación quedó reunido en un único contenedor `#111827`, con radio de 8 px,
padding de 24 px y tipografía blanca. El logo se redujo a 135 px y el cabezal
termina en una línea blanca. A su derecha, una cinta visual de novedades
deportivas simula una fuente RSS: duplica el grupo para un loop CSS continuo de
34 segundos, usa volantas y puntos rojos, se pausa con hover y queda estática
con `prefers-reduced-motion`.

La agenda reemplaza el fixture específico por el centro deportivo general de
DataFactory y oculta `FIXTURE - PRIMERA A`. El iframe de 90 px queda dentro de
un marco gris 200 con 10 px de padding y radio de 8 px. Debajo, la noticia
principal conserva foto 4:3, firma y título sans de 28/34 px, sin bajada. Las
cuatro secundarias forman filas iguales, con fotos 3:2 alineadas arriba y
títulos de 16/22 px; entre 1024 y 1100 px bajan a 14/19 px. Principal y listado
terminan a la misma altura. Los cinco títulos son uppercase y llevan volantas
rojas: `INDEPENDIENTE RIVADAVIA`, `COPA ARGENTINA`, `MERCADO DE PASES`, `LIGA
PROFESIONAL` y `FÚTBOL INTERNACIONAL`.

Se verificaron 1024×900, 1366×768 y 1440×900, igualdad de columnas, alineación,
loop, movimiento reducido y ausencia de overflow horizontal. Pasaron
`npx tsc --noEmit`, `npm run build` y `git diff --check`. La etapa 5 permanece
suspendida.

### 2026-10-18 — `/desktop`: primera composición alternativa aprobada

El usuario aprobó la primera divergencia visual respecto del baseline. Desde
1024 px, la franja de servicios del header sale del viewport con el scroll y la
fila principal de 57 px permanece sticky; al regresar al inicio reaparecen las
dos. El cambio conserva los 94 px iniciales en el flujo y no desplaza el primer
módulo.

La composición usa una grilla 8/4 con gap de 24 px. Apertura apila su foto 4:3 y
texto, elimina volanta y claves, iguala a 16 px la distancia foto-título de Live
y conserva bajada, firma e `INFORME ESPECIAL`. Principales continúa debajo en
las ocho columnas izquierdas: seis cards estáticas en dos columnas y tres filas,
con gaps de 24 px, igual altura y contenido completo.

Agencia ocupa las cuatro columnas derechas desde el inicio de Apertura hasta el
final de Principales, sobre un contenedor negro con radio exterior de 8 px. Tras
24 px de espacio superior, su cabezal blanco de 26 px presenta punto rojo,
`AHORA` y reloj negro, con radio de 6 px y 24 px libres a cada lado. Sólo se
muestran los primeros seis titulares, alineados a esos mismos márgenes. Debajo
hay una tarjeta blanca, también inset 24 px, con separador `PUBLICIDAD` y la
pieza Pepsi 300×600 de `public/ads/pepsi-300x600.png`; a 1024 px escala
proporcionalmente. Un corte `PARTICIPACIÓN` precede una réplica visual estática
de la encuesta. Su cabezal conserva los estilos de la original y oculta
`SONDEO EXCLUSIVO` hasta 1100 px para no crecer en altura. La encuesta original
permanece en su ubicación, los titulares no abren resúmenes y Timeline sigue
oculto. El espacio restante se completa con `AVANCES DE LA IA`: un cabezal
blanco con tres nodos conectados en azul institucional y noticias con volanta,
título y fuentes, sin pastillas. El listado conserva seis ítems en el HTML y
muestra sólo filas completas: dos entre 1024–1199 px, tres entre 1200–1279 px,
cinco entre 1280–1365 px y seis desde 1366 px.

Se verificaron 1024×900, 1200×900, 1280×900, 1366×768 y 1440×900: columnas,
gap, igualdad de alto, header sticky, filas completas, clics inertes, anchos
posteriores y ausencia de overflow horizontal. No hubo errores de consola
nuevos. Pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`. La home
`/` no fue modificada y la etapa 5 permanece suspendida.

### 2026-10-17 — `/desktop` adopta la home actual como baseline estático

Comenzó la tarea independiente de diseño desktop alternativo. El HTML anterior
de Stitch fue reemplazado por una instantánea congelada de `.site-layout`
capturada desde `/` a 1440×900, con header, 25 contenedores de módulo y footer.
La ruta conserva `dangerouslySetInnerHTML`, no importa wrappers, servicios ni
componentes y no hidrata ni recrea interacciones React. Enlaces, iframes y medios
mantienen únicamente su comportamiento HTML nativo; no hay soporte requerido
por debajo de 1024 px ni mecanismo de regeneración.

Los estilos globales siguen siendo la fuente de presentación. Dos reglas locales
calculan los anchos responsive de Principales, Shorts y Branded para neutralizar
los valores inline congelados por Swiper. A 1024×900 y 1440×900, `/desktop`
coincide con `/` en posición y dimensiones de todos los módulos, header, footer
y alto total, sin overflow horizontal. La etapa 5 permanece suspendida y esta
ruta continúa fuera de sus criterios y de las etapas 7 y 8.
Pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`; el acceso
directo en un contexto de navegador aislado no produjo errores de consola.

### 2026-10-17 — `/desktop` reclasificado como prueba alternativa

`/desktop` permanece disponible y sin cambios, pero deja de ser referencia,
fallback o criterio de aceptación de las etapas 5, 7 y 8. La etapa 5 continúa
cotejando cada módulo con la publicación y el MCP oficiales de Stitch; las
decisiones aprobadas de `DESIGN.md` prevalecen ante discrepancias. Si esas fuentes
no están disponibles, se usan la documentación y el ZIP preservado, nunca
`/desktop`.

La ruta queda congelada para una tarea futura independiente de diseño desktop
alternativo. Ese trabajo no tiene todavía objetivos, alcance ni criterios de
éxito y no debe iniciarse sin indicación explícita del usuario. Esta decisión no
reescribe los tramos históricos que sí fueron cotejados con `/desktop`.

### 2026-10-17 — Última hora: ocultación temporal en desktop

Por indicación del usuario, timeline y agencia se ocultan desde 1024 px
(`lg:hidden` en sus contenedores exteriores), sin dejar espacio vacío en la
home. No se eliminan ni se decide una ubicación desktop: permanecen ocultos
hasta definirla. Por debajo de ese breakpoint conservan su orden, presentación
e interacción. Esta decisión es independiente del focus group que determinará
la única variante definitiva y no implica retomar la etapa 5.
En mobile, el usuario reubicó el wrapper de comparación después de Apertura
y antes de Principales, manteniendo timeline antes de agencia. Los dos
contenedores quedan sin márgenes verticales propios. Tras cotejar Apertura,
Principales y Política, se separó el contenedor exterior del recuadro visual:
cada variante usa `data-home-module`, `pt-1 pb-2` (4 px arriba y 8 px abajo)
y `lg:hidden`, más el gap de 8 px de la home. El padding interno y los cabezales
se preservan. El usuario aprobó visualmente este criterio; pasaron tipos,
build y `git diff --check`, y se verificó la ocultación desde 1024 px.
Esta es la ubicación y separación mobile vigente, sin definir todavía una
ubicación desktop.

### 2026-10-17 — Última hora: lectura en home y fuentes compartidas

Se incorporaron resúmenes accionables desde los titulares en ambas variantes,
sin navegación a otra página. El timeline superpone el resumen sobre las filas
siguientes y lo abre hacia arriba cuando falta espacio inferior; agencia lo
inserta en el flujo y recorta el excedente, sin scroll interno. En las últimas
noticias de agencia el contenido se desplaza temporalmente hacia arriba para
mostrar el resumen y su cierre completos; al cerrar se recupera el listado.
La altura se mide a partir de las filas cerradas, no de un valor arbitrario:
abrir, cambiar o cerrar una noticia no debe modificar ancho/alto del recuadro,
mover el módulo siguiente ni desplazar la home. El alto sí se adapta al ancho
del viewport y al contenido del listado cerrado.

Cada módulo admite una noticia abierta. El titular completo es un botón con
estado accesible y foco visible; no lleva indicadores `+`/`−`, para conservar
el aspecto periodístico. El seleccionado cambia sutilmente de color. Hay cierre
explícito, Escape y retorno del foco al titular; las filas cubiertas o recortadas
no reciben foco. Los paneles blancos incluyen el titular y un párrafo de muestra
por fuente, con atribución debajo y cuerpo de 12 px.

Las diez noticias comparten entre variantes entre dos y cuatro fuentes únicas,
elegidas al cargar de Infobae, Clarín, La Nación, Cronista, Página 12,
iProfesional y a24. Permanecen estables durante la lectura y se reasignan al
recargar. Son atribuciones ficticias de maqueta, no citas ni contenido obtenido
de esos medios. El wrapper de comparación genera un solo dataset por carga en
el servidor y lo entrega a ambos wrappers; el cliente recibe los datos
serializados, sin sortear fuentes durante la hidratación.

Ambas variantes tienen volantas temáticas y la línea tenue `Fuentes:` debajo
del titular. Las pastillas `URGENTE`/`TENDENCIA` siguen siendo exclusivas de
agencia; el timeline conserva hora, punto y `LO ÚLTIMO`. No se elige una
variante definitiva todavía: ambas se someterán a un focus group y el usuario
elegirá una sola para conservar. La duplicación es temporal, no una decisión
de mostrar dos módulos en la versión final. No se avanza en desktop.
Para esa comparación, los cabezales también quedan diferenciados: timeline
usa franja gris clara y reloj monoespaciado compacto a la derecha; agencia
conserva fondo negro y reloj monoespaciado junto a `AHORA`. Tras la revisión
visual del 2026-10-19, agencia incorpora una línea blanca continua bajo el
grupo completo (punto rojo, `AHORA` y reloj), con aire bajo el texto y separación
adicional del listado. No son subrayados individuales ni una línea a todo el
ancho del módulo. La especificación
visual vigente está en [DESIGN.md](./DESIGN.md), sin registrar cada prueba de
estilo como un hito separado. Los últimos ajustes pasaron
`npx tsc --noEmit` y `npm run build`.

Pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`. Se verificaron
320 y 414 px, correspondencia de fuentes y párrafos, fuentes únicas compartidas,
cuerpo de 12 px, resúmenes de hasta cuatro fuentes, cierre y foco. Las mediciones
confirmaron dimensiones y posición del módulo siguiente constantes al abrir y
cerrar. También se probó cambio de ancho con un resumen abierto; el build de
producción se comprobó sin errores de hidratación. El usuario autorizó
documentar el tramo tras revisar los ajustes visuales.

### 2026-10-17 — Última hora: dos variantes mobile conservadas

Tras la revisión visual, el usuario indicó conservar por ahora ambas versiones
en la home, una debajo de la otra y antes de Apertura, para someterlas a un
focus group. Después de esa evaluación quedará una sola, elegida por el usuario;
la coexistencia es exclusivamente temporal.
El timeline mantiene diez titulares completos, horas ficticias descendentes,
línea vertical tenue y la primera noticia destacada como `LO ÚLTIMO`. La variante
de agencia repite los mismos diez titulares y su orden, sin horas por noticia
ni timeline: cada uno lleva una volanta temática y una pastilla discreta
`URGENTE` roja o `TENDENCIA` verde.

Las pastillas se asignan aleatoriamente al montar, permanecen estables durante
la lectura y se vuelven a asignar al recargar; no hay alternancia estricta ni
clasificación editorial real. Su estado inicial reserva espacio para evitar
saltos y diferencias de hidratación. Ambas versiones conservan fondo oscuro,
marco blanco y cabezal `AHORA` con indicador pulsante y reloj local real.
No se incorporan fotos, noticias nuevas ni una fuente de actualización en vivo.

En este primer tramo, cada variante entraba a la página por su wrapper de servidor; solo el reloj
compartido y las pastillas aleatorias son componentes cliente. La versión
timeline se preserva al introducir la alternativa. El trabajo sigue siendo
exclusivamente mobile, independiente de la etapa 5 desktop, que continúa en pausa.

Pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`. Se verificaron
320 y 414 px sin overflow ni titulares truncados, diez noticias por variante,
el orden de los módulos y las pastillas estables mientras avanza el reloj,
con nueva asignación al recargar y sin errores de hidratación detectados.
La documentación se actualiza después de la validación visual y autorización
del usuario, no antes.

### 2026-10-17 — Última hora: cabezal mobile con reloj real

Se completó la parte superior del módulo ya iniciado, sin cambiar sus seis
noticias de muestra ni avanzar en la adaptación desktop. `AHORA+` muestra un
punto rojo con halo pulsante de dos segundos, desactivado si el dispositivo
solicita movimiento reducido.

El wrapper sigue siendo un Server Component y solo el reloj es cliente. Muestra
la hora local del dispositivo en formato de 24 horas `HH:mm:ss`, consultando la
hora real cada segundo y liberando el intervalo al desmontarse. El servidor y
el primer render muestran `--:--:--` para evitar diferencias de hidratación;
los dígitos tabulares mantienen estable su ancho. No hay conexión a una fuente
de noticias en tiempo real ni se simulan actualizaciones del listado.

Pasaron `npx tsc --noEmit` y `npm run build`. En navegador a 414×896 se
verificaron tres actualizaciones consecutivas coincidentes con la hora local,
pulso de dos segundos, movimiento reducido sin animación, seis noticias y
ausencia de overflow horizontal. La etapa 5 permanece en pausa.

### 2026-10-16 — Etapa 5: `# A COMER!`/Branded adaptado y aprobado

Branded se cotejó con Stitch oficial, la web pública y `/desktop`. Desde 1024 px
el título y panel blanco exteriores se ocultan y el módulo usa un cabezal oscuro
con acento azul, el logo `# A COMER!`,
`BRANDED CONTENT • EXPERIENCIAS DE CUYO` y flechas reales. El mismo Swiper
conserva los diez videos gastronómicos recibidos y muestra seis cards 9:16 por
vista, con 16 px de separación; no se sustituyeron por las experiencias
estáticas ni por los copys mixtos de Stitch.

Las cards desktop usan radio de 8 px, sombra, degradado inferior, play central,
zoom suave y títulos Geist de 14/17,5 px en blanco, superpuestos y limitados a
dos líneas. Se mantiene el autoplay muteado de un único video del feed y la
apertura del modal por `id`. Mobile y 1023 px conservan el título `Branded`, el
panel blanco, logo y sponsor, 1.2 slides, gap de 16 px y título debajo del video.
El cotejo tipográfico final corrigió el rótulo del cabezal a Geist 12/16 px,
peso 700 y tracking `0.06em`, igualando el token de Stitch.

Se verificaron 414×896, 1023, 1024 y 1440×900: breakpoint exacto, diez slides,
seis visibles desde desktop, gap de 16 px, cero overflow y estados inicial/final
de las flechas. La navegación alcanzó el décimo video, que abrió el modal en el
índice correcto por su `id`; hubo un solo video activo, Escape cerró y el foco
regresó a su card. Pasaron `npx tsc --noEmit`, `npm run build` y
`git diff --check`. Servicios, wrapper de datos, verticales, modal, skeleton y
`/desktop` permanecieron intactos. El usuario aprobó visualmente el resultado.

### 2026-10-16 — Etapa 5: Shorts adaptado y aprobado

Shorts se cotejó con Stitch oficial, la web pública y `/desktop`. Desde 1024 px
el panel blanco exterior desaparece y el módulo usa un cabezal oscuro con acento
rojo, badge `SHORTS`, `CANAL OFICIAL DE YOUTUBE @DIARIOUNO` y flechas reales. El
mismo Swiper conserva los 12 videos recibidos y muestra seis tarjetas 9:16 por
vista, con 16 px de separación; no se agregó suscripción ni un segundo carrusel.

Las cards usan radio de 8 px, sombra, degradado inferior, play central y títulos
Geist de 14/17,5 px en blanco, superpuestos y limitados a dos líneas. En desktop
se oculta el badge individual de YouTube y el thumbnail amplía suavemente en
hover. Mobile y 1023 px conservan el cabezal, panel blanco, badge por card,
título debajo de la imagen, gap de 16 px y densidades 1.2/2.5/3.5 anteriores.

Se verificaron 414×896, 1023, 1024 y 1440×900: breakpoint exacto, 12 slides,
seis visibles desde desktop, gaps de 16 px, flechas hasta el extremo, apertura
por `id`, cero iframes en feed y cero overflow. El modal existente mantuvo un
único iframe activo, sonido, Escape y retorno de foco por teclado; su rediseño
desktop continúa diferido. No hubo errores nuevos de consola, solo el aviso LCP
preexistente. Pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`.
`/desktop`, skeletons, servicios y el ZIP sin seguimiento permanecieron
intactos. El usuario aprobó visualmente el resultado.

### 2026-10-15 — Etapa 5: ULTIMATEM adaptado y aprobado

ULTIMATEM se cotejó con Stitch oficial, la web pública y `/desktop`. Desde
1024 px usa un panel blanco con radio de 8 px, sombra y 24 px de padding; el
cabezal oscuro de 26 px presenta marcador azul,
`ULTIMATEM • MÁS NOTICIAS DE CUYO Y EL PAÍS` y `ACTUALIZACIÓN CONTINUA`. Las
diez noticias se distribuyen en dos columnas de cinco, con 32 px entre columnas
y 16 px entre filas. Cada card usa fondo tonal, 8 px de padding, radio de 8 px
y una imagen fija de 128×96.

Los títulos conservan la calibración larga de etapa 6: Playfair Display 18/24
en peso 500, completos y sin `line-clamp`. Se agregaron diez categorías latinas
de dos palabras y se preservaron las cuatro firmas locales; no se incorporaron
los metadatos editoriales de Stitch. El botón
`Cargar más noticias de la edición de hoy` se conserva como recurso visual, sin
handler, paginación ni noticias adicionales. En desktop con puntero fino, las
cards aplican fondo tonal, título azul, zoom de imagen y cursor pointer sin
acción al click.

Mobile y 1023 px conservan el rótulo, las diez noticias, la composición 50/50,
las firmas y los separadores anteriores; categorías y botón permanecen ocultos.
Se verificaron 414×896, 1023, 1024 y 1440×900, incluido el orden 1–5/6–10, click
inerte, hover, transición exacta y cero overflow. A 1440 px el módulo mide
1296×773, igual que la referencia pública. No hubo errores nuevos de consola;
permanecen únicamente los avisos preexistentes de imágenes lazy, campos sin
`id`/`name` y CORB. Pasaron tipos, build y `git diff --check`. `/desktop`,
skeletons, servicios, MAM y el ZIP sin seguimiento permanecieron intactos.

### 2026-10-15 — Etapa 5: Gente adaptado y aprobado

Gente se cotejó con Stitch oficial, la web pública y `/desktop`. Desde 1024 px
usa un panel blanco con radio de 8 px, sombra y 24 px de padding; el cabezal
oscuro de 26 px presenta marcador azul, `GENTE & CULTURA CUYANA` y `PERSONAJES &
RETRATOS`. Las seis piezas forman una grilla 3×2 con 24 px de separación y
retratos 3:4. Cada título largo se muestra completo, sin `line-clamp`, sobre un
degradado negro y en Playfair Display 700 de 18/22,5 px.

La familia se referencia directamente mediante `--font-playfair-display`: el
token `--font-headline-sm` definido en `@theme inline` no existe como variable
CSS en ejecución y hacía que el navegador heredara la sans del documento. En
desktop y solo con puntero fino, las tarjetas usan cursor de acción y zoom suave
de imagen, sin enlace, handler ni efecto al click. Mobile y 1023 px conservan
las dos columnas, los títulos debajo de las fotos y su comportamiento anterior.

Como ajuste de marco aprobado durante el cotejo, el padding horizontal desktop
de toda la home pasó de 24 a 32 px, igualando el token `px-margin` de Stitch. A
1440 px la home conserva `max-width: 1360px`, Gente mide 1296×1180,66 y cada
retrato 400×533,33; la decisión estrecha también en 16 px los demás módulos
desktop y no modifica el padding mobile.

Se verificaron 414×896, 1023, 1024 y 1440×900: breakpoint exacto, seis tarjetas,
títulos completos dentro de los retratos, Playfair calculada, hover y ausencia
de overflow. No hubo errores nuevos de consola; permanecen avisos preexistentes
de LCP y proporción del logo de Ovación. Pasaron `npx tsc --noEmit`,
`npm run build` y `git diff --check`; el usuario aprobó visualmente el resultado.
`/desktop`, el ZIP sin seguimiento y el cambio previo de MAM no se modificaron.

### 2026-10-15 — Etapa 5: APERTUM adaptado y aprobado

APERTUM se cotejó con la referencia de Stitch y desde 1024 px se presenta como
`APERTUM • APERTURA DEL DÍA`: panel blanco con sombra, cabezal oscuro con
indicador azul y `EDICIÓN CENTRAL`, seguido por una composición 7/5. Conserva la
foto 4:3 a la izquierda y, a la derecha, la volanta `DECISIÓN ESTRATÉGICA
REGIONAL`, título y bajada calibrados, caja de tres claves, firma `GUSTAVO DE
MARINIS` e `INFORME ESPECIAL`.

La altura de la columna editorial iguala exactamente la de la foto en desktop.
En el rango 1024–1199 px se compactan solo los espaciados y tamaños de esa
presentación para que todo el contenido entre en la altura 4:3; desde 1200 px
recupera la escala amplia. El hover y `cursor: pointer` son exclusivamente
visuales en desktop con puntero fino: no agregan navegación, modal ni handlers.

Mobile y 1023 px conservan el título de sección, la card cuadrada, la firma
existente y los textos calibrados. El wrapper mantiene fetch, `slice(39, 40)` y
retorno `null` ante foto ausente. Se verificaron 414×896, 1023, 1024 y
1440×900: breakpoint exacto, alturas iguales desde 1024 px, ausencia de
overflow y consola limpia. Pasaron `npx tsc --noEmit`, `npm run build` y
`git diff --check`; el usuario aprobó visualmente el resultado. `/desktop`,
skeletons, modales, el ZIP sin seguimiento y el cambio previo de MAM no se
modificaron.

### 2026-10-15 — Etapa 5: cursor de acción desktop aprobado

Desde 1024 px y solo en dispositivos con puntero fino, las superficies visuales
de Muy Destacada, Principales, MAM, Política, Crimen y Sociedad, junto con los
controles de presentación del header, usan `cursor: pointer`. El cambio es una
señal visual: no agrega handlers, enlaces, foco ni navegación a las piezas que
eran estáticas. Las funciones preexistentes se preservan, incluidos el modal de
MAM, el enlace principal de Crimen y los enlaces reales del header.

Mobile y 1023 px conservan sus cursores y comportamiento anteriores. Se
verificaron 414×896, 1023, 1024 y 1440×900, clicks sin efecto en las nuevas
superficies de presentación, ausencia de overflow y consola limpia. Pasaron
`npx tsc --noEmit`, `npm run build` y `git diff --check`; el usuario aprobó
visualmente el resultado. `/desktop`, el ZIP sin seguimiento y el cambio previo
de MAM se preservaron.

### 2026-10-15 — Etapa 6: forma de titulación calibrada y aprobada

Para representar el recorrido de una noticia por Live/Muy Destacada o Apertura,
Principales, la principal y el listado de una sección y Últimas noticias, se
probaron diez títulos de 89–91 caracteres y diez bajadas de 155–165. La forma
aprobada los muestra completos, sin punto final y sin `line-clamp`; reemplaza
dentro de este alcance los límites anteriores de dos, tres o cuatro líneas.

La calibración alcanza en mobile a Muy Destacada, Apertura, Principales,
Política, Senatus Romano, Sociedad, Listado sin fotos, Ovación, Gente, Crimen y
Últimas noticias, incluidas las bajadas disponibles. Desde 1024 px usa los mismos
datos en todos esos módulos, aunque no hayan cerrado su adaptación de etapa 5.
Quedan fuera MAM, Shorts, `# a comer!`/Branded, Opinión, Servicios,
transmisiones, Chat, Encuesta, Sudoku y el reader de detalle.

Este tramo no cambió tamaños de fuente, familias, pesos, estructura, cantidades,
comportamientos ni breakpoints. Se verificaron 414×896, 1023, 1024 y 1440×900:
textos completos, sin puntuación terminal, sin clamps activos ni overflow.
Pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`; el usuario
aprobó visualmente el resultado. Como corrección posterior del mismo tramo,
Principales iguala desde 1024 px la altura de sus seis cards 3×2 según la pieza
de mayor contenido, sin reintroducir truncado; también quedó aprobado
visualmente. `/desktop`, el ZIP sin seguimiento y el cambio previo de MAM se
preservaron.

### 2026-10-15 — Etapa 5: Sociedad adaptada y aprobada

Sociedad se cotejó con el proyecto y la pantalla oficiales de Stitch, la web
pública y `/desktop`. Desde 1024 px reutiliza el layout presentacional de
principal + listado: panel blanco con 24 px de padding, radio de 8 px y sombra;
cabezal oscuro de 26 px con marcador azul, `SOCIEDAD & COMUNIDAD` y `EDUCACIÓN,
SALUD Y CIUDAD`; y cuerpo 7/5 con 32 px de separación.

Se conservan las seis fotos y los seis titulares locales como una principal y
cinco secundarias. La principal usa imagen 3:2, titular Playfair Display 28/35
en peso 700, la misma bajada de muestra que Crimen y firma `Soledad Segade`. El
lateral usa cards `#f9fafb` con padding y radio de 8 px, miniaturas 96×96 y las
categorías `SALUD PÚBLICA`, `BIODIVERSIDAD`, `EDUCACIÓN`, `PATRIMONIO` y
`COMUNIDAD`; la primera fila lleva la firma `Daniel Calivares` y la tercera,
`Miguel Guayama`. No se incorporaron metas temáticas inferiores.

Principal y listado ocupan exactamente el mismo alto. El hover desktop es
exclusivamente visual —zoom de imagen, titular azul y fondo tonal— y no agrega
enlaces, foco, cursor de acción ni controles. Mobile y 1023 px conservan el
título `SOCIEDAD`, la grilla de seis cards de retrato en dos columnas y el
contenido anterior, sin exponer los rótulos desktop.

Se verificaron 414×896, 1023, 1024 y 1440×900: breakpoint exacto, panel, grilla,
cinco filas, columnas de igual altura, miniaturas 96×96, categorías, firmas,
hover y ausencia de overflow. Pasaron `npx tsc --noEmit`, `npm run build` y
`git diff --check`; el usuario aprobó visualmente el resultado. `/desktop`,
skeletons, MAM y el ZIP sin seguimiento no se modificaron.

### 2026-10-15 — Etapa 5: Crimen adaptado y aprobado

Crimen se cotejó con el proyecto y la pantalla oficiales de Stitch, la web
pública y `/desktop`. Desde 1024 px reutiliza el layout presentacional de
principal + listado estrenado en Política: panel blanco con 24 px de padding,
radio de 8 px y sombra; cabezal oscuro de 26 px con marcador y borde rojos,
`CRIMEN & POLICIALES` e `INVESTIGACIÓN Y JUSTICIA`; y cuerpo 7/5 con 32 px de
separación.

La principal conserva foto, titular, bajada, firma y el enlace local a
`/detalle-nota`; usa imagen 3:2, Playfair Display 28/35 en peso 700 y bajada
Geist 15/22. El lateral conserva las cuatro noticias y usa cards `#f9fafb` con
padding y radio de 8 px, miniaturas 112×112 y las categorías `POLO JUDICIAL`,
`OPERATIVO REGIONAL`, `PERITAJES FORENSES` y `PODER JUDICIAL`. Solo la segunda
y cuarta card muestran sus firmas existentes. No se incorporaron la meta de la
principal ni las metas temáticas inferiores de Stitch.

Principal y listado ocupan exactamente el mismo alto. El hover desktop es
exclusivamente visual —zoom de imagen, titular azul y fondo tonal— y no agrega
interacciones; se conserva únicamente el enlace real que ya tenía la principal.
Mobile y 1023 px mantienen título `CRIMEN`, cuatro filas, contenido, tamaños,
firmas y comportamiento anteriores.

Se verificaron 414×896, 1023, 1024 y 1440×900: breakpoint exacto, panel, grilla,
cuatro filas, columnas de igual altura, miniaturas 112×112, rótulos, firmas,
hover, enlace existente y ausencia de overflow. Pasaron `npx tsc --noEmit`,
`npm run build` y `git diff --check`; el usuario aprobó visualmente el resultado.
`/desktop`, Sociedad, skeletons, MAM y el ZIP sin seguimiento no se modificaron.

### 2026-10-15 — Etapa 5: Política adaptada y aprobada

Política se cotejó con el proyecto y la pantalla oficiales de Stitch, la web
pública y `/desktop`. Desde 1024 px usa un panel blanco con 24 px de padding,
radio de 8 px y sombra; el cabezal oscuro de 26 px presenta marcador azul,
`POLÍTICA & GOBIERNO` y `LEGISLATURA Y PODER EJECUTIVO`. El cuerpo se organiza
en una grilla 7/5 con 32 px de separación.

La principal conserva foto, titular, bajada y firma locales, con imagen 3:2,
Playfair Display 28/35 en peso 700 y bajada Geist 15/22. El listado conserva las
cuatro noticias locales y usa cards de fondo `#f9fafb`, padding y radio de 8 px,
miniaturas cuadradas de 112 px y las categorías `COPARTICIPACIÓN`,
`CONGRESO NACIONAL`, `PODER JUDICIAL` y `MUNICIPIOS`; solo la segunda y cuarta
card muestran sus firmas existentes. Ambas columnas ocupan exactamente el mismo
alto. No se muestran las metas temáticas inferiores ni `POLÍTICA CENTRAL`.

El hover desktop se limita a zoom de imagen, titular azul y fondo tonal, sin
enlaces, foco, cursor de acción ni controles ficticios. Mobile y 1023 px
conservan el título `POLÍTICA`, cuatro filas, contenido, tamaños y firmas
anteriores. El wrapper mantiene fetch, selección de cinco fotos y retorno
`null`; un layout presentacional interno por slots admite una cantidad variable
de secundarias para futuras adaptaciones, sin intervenir Crimen ni Sociedad.

Se verificaron 414×896, 1023, 1024 y 1440×900: breakpoint exacto, cuatro filas,
columnas de igual altura, miniaturas 112×112, tipografía, categorías, firmas,
hover y ausencia de overflow. Pasaron `npx tsc --noEmit`, `npm run build` y
`git diff --check`; el usuario aprobó visualmente el resultado. `/desktop`,
Crimen, Sociedad, skeletons, MAM y el ZIP sin seguimiento no se modificaron.

### 2026-10-14 — Etapa 5: Muy Destacada adaptada y aprobada

Muy Destacada se cotejó con Stitch y se adaptó desde 1024 px como una cobertura
especial dentro de un panel blanco: cabezal oscuro con indicador pulsante,
`EN VIVO`, texto de cobertura y aviso de transmisión simultánea, seguido por una
composición 8/4 con 24 px de separación. La columna principal muestra el video
16:9 y conserva el título, la bajada y la firma de mobile; suma
`EDICIÓN ESPECIAL` solo en desktop. La columna secundaria replica
`FOCO DE COBERTURA` con dos cards: usa los títulos segundo y tercero de mobile,
las categorías y bajadas de Stitch, omite la firma de la primera y conserva
`Facundo García` en la segunda. No se incorporaron los metadatos inferiores ni
controles simulados de la referencia.

La selección aleatoria se reemplazó por el video fijo de Pexels con ID
`34634812`. El servicio obtiene sus archivos por ID y prioriza la variante
1280×720; ante clave ausente, error o respuesta inválida registra el problema y
devuelve `[]`, por lo que el wrapper omite el módulo. El mismo video se usa una
sola vez en ambos modos con controles nativos, autoplay silenciado, loop y
reproducción inline. Mobile conserva su contenido y orden anteriores, con la
única modificación acordada del video cuadrado a 16:9.

Se verificaron 414×896, 1023, 1024 y 1440×900: breakpoint exacto, estructura
8/4, textos y firmas, reproducción, una única instancia de video y ausencia de
overflow o errores de hidratación. Permanecen solo avisos preexistentes de
imágenes/campos de formulario y CORB. Pasaron `npx tsc --noEmit`,
`npm run build` y `git diff --check`; el usuario aprobó visualmente el resultado.
`/desktop` y `MuyDestacadaSkeleton` no se modificaron.

### 2026-10-14 — Etapa 5: header adaptado y aprobado

Desde 1024 px el header replica las dos franjas de Stitch con Geist, altura total
de 94 px, posición fija, bordes y sombra. La franja superior conserva datos
demostrativos estáticos y fecha; esta última se oculta en anchos intermedios, y
datos/navegación resuelven la falta de espacio con overflow interno sin scrollbar
visible. La barra principal incorpora hamburguesa, logo, sello `MENDOZA`,
navegación completa, búsqueda, `Acceder` y `Suscribite`. El indicador de MAM
permanece pulsante.

Solo el logo, `PORTADA` y `Canal 7 & Radio Nihuil EN VIVO` tienen navegación y
foco. Las demás categorías y controles son presentación sin acciones ficticias;
el dataset funcional del footer permanece separado. Por ajuste final aprobado,
la transmisión en vivo no usa fondo rojo y conserva el punto rojo pulsante;
`Suscribite` usa fondo rojo y texto blanco.

El header desktop compensa sus 94 px en la home y el detalle, incluido el banner
fijo de la nota. Mobile conserva su header anterior y `/desktop` permanece
aislada. Se verificaron 414×896, 1023, 1024 y 1440×900, ambas rutas del sitio,
los únicos tres enlaces permitidos, ausencia de overflow, consola e hidratación.
Pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`; el usuario
aprobó visualmente el resultado.

### 2026-10-14 — Etapa 5: MAM adaptado y aprobado

MAM se cotejó con la publicación de Stitch y con `/desktop`. Desde 1024 px el
panel es negro, usa cabezal interno, radio de 12 px y padding de 24 px; presenta
los primeros 15 videos del dataset en una grilla estática de cinco columnas por
tres filas, con 16 px de separación. Las cards 9:16 muestran un frame limpio del
mp4, duración, degradado, play central y título de hasta dos líneas. No hay
flechas, arrastre ni reproducción inline en desktop; al abrir una pieza se
conserva el modal existente y la selección por `id`.

Mobile mantiene el único Swiper y el catálogo completo recibido de MAM, con su
poster oficial, autoplay muteado del slide activo y presentación previa. No se
duplicaron datasets, carruseles ni reproductores. Se verificaron 414×896, 1023,
1024 y 1440×900, el modal, la ausencia de overflow y de errores de consola o
hidratación. Pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`; el
usuario aprobó visualmente el resultado. `/desktop` no se modificó.

Quedan diferidos para el final de la etapa 5 el diseño específico de los modales
de video en desktop y la revisión visual de los skeletons desktop.

### 2026-10-14 — Etapa 5: Principales adaptado y aprobado

Principales se cotejó con la publicación de Stitch y con `/desktop`. Desde
1024 px incorpora el cabezal `LEGIONARIUS • NOTICIAS DESTACADAS`, marcador azul
y `AL MINUTO`; se retiró el panel blanco exterior y las seis cards conservan el
Swiper existente en una grilla 3×2 con 24 px de separación. Las cards usan radio
de 8 px, sombra, cuerpo con 16 px de padding, bajada de dos líneas y elevación/
zoom de imagen al hover. No se agregaron las categorías de Stitch.

Se preservaron fuente de datos, cantidad, orden, controles y una única instancia
de Swiper. Por acuerdo posterior, el título queda limitado a dos líneas en ambos
anchos; mobile conserva el resto de su presentación. La diferencia de raster de
Playfair Display se resolvió con peso local 700 solo desde 1024 px: aunque Stitch
declara 500, el archivo servido allí se veía más grueso que el de `next/font`.
Los textos ficticios de título y bajada fueron abreviados por el usuario.

Se verificaron 414×896, 1023, 1024 y 1440×900: seis cards, transición del
breakpoint, hover, ausencia de overflow y un solo Swiper. No hubo errores nuevos
de consola o hidratación. Pasaron `npx tsc --noEmit`, `npm run build` y
`git diff --check`; el usuario aprobó visualmente el resultado. `/desktop` no se
modificó. En el cierre del header se detectó que faltaba cargar `swiper/css/grid`:
las seis cards existían, pero quedaban en una fila horizontal. Se añadió esa hoja
de estilos y se volvió a verificar la grilla real 3×2 a 1024 y 1440 px y las seis
cards del carrusel mobile. La etapa 5 continúa con los módulos restantes.

### 2026-10-13 — Etapa 4: carruseles de video responsive

MAM muestra cinco slides y Shorts/Branded seis desde 1024 px, separados por
24 px, tomando la densidad de las referencias local y pública de Stitch. Los
datos completos siguen en un único Swiper por fuente: no se truncaron ni
duplicaron listas. Por debajo se conserva MAM/Branded a 1.2 slides y 16 px;
Shorts conserva 1.2, 2.5 desde 640 px y 3.5 desde 768 px. Los cabezales desktop
reutilizan el tratamiento de noticias y los skeletons acompañan la densidad
responsive. El detalle, que usa MAM, recibe el mismo comportamiento.

Los controles anterior/siguiente desktop usan el Swiper existente y se
deshabilitan en los extremos o si no hay desplazamiento. MAM/Branded mantienen
un solo video activo por ID, únicamente en viewport, y pausan el feed al abrir
el modal. Se preservan las reglas de sonido: MAM feed mudo inicialmente/modal
con sonido; Branded siempre mudo, sin control de sonido; Shorts con controles
propios y su fallback muteado existente. No se rediseñaron los modales ni se
añadieron iframes al feed de Shorts.

En la prueba de resize con modal abierto se detectó que devolver el foco podía
desplazar el contenedor de Swiper al botón que quedó fuera de vista. La
restauración usa ahora `focus({ preventScroll: true })`: conserva foco, scroll
del documento y posición del carrusel sin cambiar la reproducción.

Verificado en 414×896, 768×1024, 1023×900, 1024×900 y 1440×900, sin overflow:
cinco/seis slides enteros desktop, controles y extremos, selección de cards
no activas por ID, pausa al salir del viewport, progreso y play/pausa, sonido
por fuente, cierre por botón/Escape, retorno de foco y resize en ambos sentidos.
MAM/Branded reproducen un único slide del modal; Shorts monta un iframe activo
y lo reemplaza al avanzar, retirándolo al cerrar. En las fuentes presentes se
conservan 23 módulos, tres parejas, dos anuncios y seis cards de Sociedad.

**Salvedad de fuente externa:** se comprobó reproducción y progreso de un Short,
play/pausa y mute, pero otro Short seleccionado permaneció en estado YouTube
`UNSTARTED`, duración/progreso cero, incluso tras pedir play de nuevo. Su ID
y thumbnail corresponden al elegido; no se simuló reproducción ni se alteró
el player para ocultarlo. No se declara verificada la reproducción de todos
los videos remotos ni las políticas de autoplay de iOS en dispositivo real.
La consola mantiene avisos de preload de imágenes y del handshake postMessage
de YouTube; no hubo errores nuevos de aplicación.

Pasaron tipos, build y `git diff --check`, además de ocho pruebas dirigidas de
geometría, selección por ID, pausa del feed y wrappers con fuentes vacías.
`/desktop` permanece sin cambios. No hubo commits ni avance a etapa 5.

### 2026-10-13 — Sociedad con seis cards y limpieza de CSS global

Sociedad vuelve a seis cards compartidas por mobile y desktop, con seis títulos
de muestra. Se conservaron sus cinco fotos anteriores y se agregó la foto de
`[40, 41)` de la fuente existente, sin solaparla con Gente ni cambiar los rangos
de otras secciones. `/desktop` sigue siendo referencia estática sin cambios.

Se revisaron las clases de `app/globals.css` contra los componentes y la
referencia: se retiraron `gradient-xy` y su clase sin consumidores, comentarios
con estilos descartados y dos overrides desktop redundantes del header
(`height: 62px` y `display: none`). Se conservaron los tokens de Stitch,
los estilos de noticias y la paginación/animación shimmer que siguen en uso.
No quedaron clases custom sin referencia en los archivos de la aplicación.

Pasaron tipos, build y `git diff --check`. En navegador: seis cards con título,
dos columnas/tres filas a 414×896 y tres columnas/dos filas a 1024×900 y
1440×900; sin overflow, sin foto compartida con Gente y altura del header
principal conservada. `/desktop` conserva tipografía y aislamiento del marco.
Sin errores de consola; sigue el aviso de preload de imágenes no utilizado a
tiempo. No hubo commits ni cambios a videos.

### 2026-10-13 — Pareja Legionarius/chat

Se agregó Legionarius/chat como tercera pareja responsive, reutilizando
`HomePair` y los wrappers de servidor existentes. Conserva su posición después
de las transmisiones y antes de Ovación: Legionarius primero, chat después.
Se apila por debajo de 1024 px y comparte fila desde ese ancho. Si un wrapper
devuelve `null`, se omiten ambos módulos y el contenedor. Sus contenidos son
estáticos; no se agrega fetch ni skeleton permanente.

Pasaron tipos, build, `git diff --check` y 17 pruebas dirigidas (incluidos los
cuatro escenarios presente/ausente para la nueva pareja). En navegador se
verificaron 414×896, 1023×900, 1024×900 y 1440×900: orden conservado, breakpoint
correcto, cinco notas Legionarius y un chat, sin overflow ni truncamiento de
notas en 1024 px. El chat envía y muestra su respuesta de maqueta. Sin errores
de consola; apareció un aviso de preload de imágenes ajeno a la pareja.

### 2026-10-13 — Simplificación aprobada de composición responsive

Se reemplazó el orden desktop de Stitch por la secuencia mobile en todos los
anchos. El `<main>` usa Tailwind para una columna general; Encuesta/Senatus y
Canal 7/Radio Nihuil usan grillas locales apiladas en mobile y de dos columnas
desde 1024 px. Se retiraron `order`, anchos `flex-basis` y las demás parejas:
publicidad, Listado, Crimen, asistente y Sudoku ahora ocupan filas propias.
Crimen ya no requiere su excepción de ancho compartido entre 1024 y 1199 px.
Se preservaron los estilos internos de noticias de etapa 3 y los reproductores.

Dos wrappers de grupo reutilizan los wrappers de servidor existentes y validan
sus resultados antes de montar el contenedor. Si falta cualquiera, no se muestra
la pareja completa, tampoco en mobile. Los skeletons se usan solo durante carga;
el fallback de participación conserva la grilla del grupo. Las transmisiones
siguen siendo fachadas estáticas, sin chequeo de disponibilidad remota.

Verificado en navegador a 414×896, 768×1024, 1023×900, 1024×900 y 1440×900:
sin overflow, mismo orden DOM/visual, breakpoint correcto, 23 módulos con datos
disponibles, dos anuncios, seis Principales y un footer. `/desktop` sigue aislada
y sin cambios. Sin errores/warnings de consola en la home revisada.
Pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`; trece pruebas
dirigidas verificaron omisión total de ambos grupos con resultados ausentes,
una invocación por wrapper y Senatus real con fuentes vacías.
No se avanzó a las etapas de videos ni widgets; no hubo commits.

### 2026-10-13 — Etapa 3: módulos de noticias responsive

Se adaptaron cobertura, Apertura, Principales, Política, Opinión, listado
Legionarius, Sociedad, Gente, Ovación, Crimen y últimas noticias, manteniendo
sus wrappers, los datos existentes y la presentación mobile.

Desde 1024 px, cobertura combina historia principal y notas relacionadas;
Apertura presenta imagen/texto en columnas; Principales muestra seis cards en
grilla Swiper de tres columnas por dos filas. Política, Ovación y Crimen
disponen historias principales y listados; Opinión conserva sus cuatro
columnistas, las listas se distribuyen en columnas y Sociedad/Gente conservan
sus cards de retrato. Crimen apila su historia principal y el listado interno
entre 1024 y 1199 px por el ancho compartido con el segundo anuncio. Los textos
de muestra intervenidos quedaron separados del JSX. No se cambió `/desktop` ni
se duplicaron datasets.

Se comprobó mobile a 414×896, y la transición responsive a 768×1024, 1023×900,
1024×900 y 1440×900. No hubo overflow horizontal; el DOM conserva el orden
mobile, seis cards de Principales y los conteos existentes. Los seis slides de
Principales quedan visibles en dos filas a 1024 y 1440 px. No se detectaron
errores ni warnings de consola en las vistas revisadas.

Pasaron `npx tsc --noEmit`, `npm run build` y `git diff --check`. Quedan
pendientes etapas 4 (videos) y 5 (widgets/anuncios); no se avanzó a ellas.

### 2026-10-13 — Etapa 2: marco y composición responsive

Se creó el route group `app/(sitio)/` sin cambiar las URLs `/` y `/detalle-nota`.
El header y footer ahora pertenecen al marco del sitio; `/desktop` permanece
aislada. La home importa wrappers para sus módulos con datos, incluida cobertura,
y mantiene una sola instancia de cada módulo en orden DOM mobile.

La composición desktop usa flex-wrap y `order`/spans CSS desde 1024 px. Se
verificaron las 23 secciones, ambas inserciones publicitarias, las dos
transmisiones y los pares de módulos definidos por el plan. Los anuncios no se
estiran a la altura del módulo vecino. Las funciones Pexels retornan `[]` ante
falta de clave o error; las secciones sin datos retornan `null`.

En navegador se validaron `/` a 414×896, 768×1024, 1023×900, 1024×900 y
1440×900: sin overflow horizontal, orden mobile bajo el breakpoint y orden
visual desktop desde él. `/detalle-nota` se revisó a 414×896 y 1440×900, con
banner inmediatamente debajo del header y un footer. `/desktop` se cotejó a
1440 px con Stitch pública y no recibe el marco compartido.

No aparecieron errores de consola. DevTools sí reportó avisos de dimensiones de
imágenes/campos sin `id` o `name` y una respuesta CORB; quedan anotados, sin
ampliar esta etapa. Pasaron `npx tsc --noEmit`, `npm run build` y
`git diff --check`. La etapa 4 (videos) y la etapa 5 (widgets/anuncios) siguen pendientes. No hubo
commits y se preservaron los cambios locales preexistentes.

### 2026-10-13 — Cantidades mobile y paridad acordada antes de etapa 2

Principales pasó a 6 cards y Sociedad a 5, alineadas con Stitch. Se reasignaron
rangos de fotos de muestra para evitar duplicados: Principales `[0, 6)`,
Política `[6, 11)` y Sociedad `[11, 16)`. Gente y rangos posteriores conservan
sus fotografías. `/desktop` no se modificó.

Senatus ya tiene una card de video y otra de imagen en mobile; su video se
conservará también al componer la futura home desktop. La encuesta desktop
reutilizará pregunta, total, opciones y porcentajes mobile, sin añadir
interacción de voto ni persistencia. Aún no se implementó su presentación
integrada.

Se actualizaron [DESIGN.md](./DESIGN.md) y
[PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md#ajustes-acordados-antes-de-la-etapa-2-2026-10-13).
Pasaron tipos, build, whitespace y verificación de cantidades en la home; no se
comenzó la etapa 2.

### 2026-10-10 — Inventario interno y baseline responsive

Se cerró la etapa 1 en la carpeta principal sobre `main` / `8c5066a`, sin
refactorizar la home ni cambiar estilos o `/desktop`. Se preservaron el cambio
local de formato de MAM y el ZIP sin seguimiento, sin incorporar el worktree de
respaldo ni hacer commits.

El cotejo de home mobile, copia local y Stitch público registra todos los
submódulos y controles. La paridad exige preservar las cantidades mobile
(Principales 5, Sociedad 6, Ovación 1+4), el video de Senatus, la agenda
DataFactory, ambas transmisiones y dos anuncios 300×250. No importar votación,
herramientas, nuevas funciones de Sudoku/chat ni carga de noticias de Stitch.
La encuesta actual no registra votos; Canal 7 ya monta un iframe y solo Radio
es click-to-load. Estas observaciones definen qué comportamiento se conserva.

Se recorrieron las tres páginas hasta footer y se capturaron viewport/página
completa a 414×896 (home) y 1440×900 (referencias). El usuario aceptó conservar
imágenes en la conversación porque el navegador no permite guardarlas en las
carpetas de trabajo/sesión; no se cambió su configuración.
La copia conserva las 18 secciones de Stitch, pero presenta diferencias de
tipografía del header y barras de scroll internas: no es equivalencia píxel a
píxel. Detalles y URLs en el
[inventario y baseline](./PROJECT_CONTEXT.md#etapa-1-verificada-inventario-y-baseline-2026-10-10).

Configuración existente y fuentes verificadas sin exponer claves: respuestas
200 de Pexels, MAM, YouTube y agenda DataFactory; 30/12/10 slides de
MAM/Shorts/Branded. Tipos, build y whitespace aprobados. Sin errores de consola
en rutas locales; el público advierte sobre Tailwind CDN. No se recertificaron
modales, audio en dispositivos reales ni fuentes caídas.

### 2026-10-10 — Base de Stitch y plan trasladados a la carpeta principal

Se trasladaron `/desktop`, sus tokens y la documentación aprobada a `uno-2026-1`.
Se conservaron los commits posteriores, el orden mobile actualizado (Principales
antes de MAM y Política antes de Shorts) y el cambio local de MAM. El worktree
`responsive-plan-implementation-inventory` queda como respaldo: no se incorporó
su implementación. Continuar nuevas conversaciones sobre la carpeta principal,
sin crear un worktree por sesión. Al cierre de esta nota, la integración
responsive seguía pendiente.

Validación en la carpeta principal: tipos, build de producción (incluyendo
`/desktop`) y chequeo de whitespace aprobados.

### 2026-10-08 — Arquitectura y plan responsive aprobados

Se acordó una home en `/` con composiciones mobile y desktop, compartiendo
contenido, piezas y comportamiento. Mobile define el inventario de módulos;
Stitch aporta la referencia visual desktop, con paridad obligatoria y sin
importar funciones nuevas por aparecer en la maqueta.

Se usará un único árbol en orden mobile y composición visual desktop por CSS
desde 1024 px. **Contrapartida aceptada para esta maqueta:** Tab y lectores de
pantalla conservarán el orden mobile aunque desktop tenga otro orden visual.
Los modales de video se mantienen; API de Diario UNO y segunda grilla 3+6+3
quedan fuera del tramo.

El [plan persistente](./PROJECT_CONTEXT.md#plan-aprobado-integración-mobile-y-desktop)
registra matriz inicial, arquitectura, fases y aceptación. Solo se consolidó
documentación: el usuario comenzará la implementación en una nueva sesión.

### 2026-10-07 — Maqueta desktop de Stitch en ruta aislada

Se agregó `/desktop` como una página estática en un único archivo, sin conectar
fuentes de datos ni reutilizar carruseles, y sin cambiar la home mobile. El HTML
exportado se conserva como markup estático; sus tokens de color, tipografía y
espaciado se declararon para Tailwind 4 en `globals.css`, sin incluir el runtime
Tailwind CDN de Stitch.

La exportación usa imágenes remotas de muestra y enlaces sin destino funcional. No
se copió al repositorio la captura PNG de 54 MB. Esta ruta sirve para analizar el
diseño con el usuario; no es todavía la versión desktop integrada del producto.
Comparada con la publicación de Stitch en Netlify, conserva las mismas 18
secciones y su orden. El scroll queda a cargo del documento, sin ocultar su barra;
se verificó con rueda de mouse hasta el footer.

### 2026-09-27 — Arreglo del arranque de Shorts en producción

Al deslizar se veía una secuencia fea: fotograma, pantalla negra con spinner,
**el overlay de marca de YouTube** (barra de título, botón rojo gigante y "Ver en
YouTube") y recién ahí el video, mudo. Reportado en iPhone, Chrome y Safari.

**Causa 1 — el thumbnail se iba demasiado pronto.** Se desvanecía con `isReady`,
que solo avisa que *el player acepta órdenes*, no que el video tenga imagen.
Entre un momento y otro YouTube muestra su pantalla negra y, si el autoplay fue
bloqueado, su overlay de marca. Ahora hay dos estados separados: `isReady` y
`hasStarted`, y el thumbnail se sostiene hasta que el estado pasa a `PLAYING`.

Detalle importante: el overlay de marca **solo aparece en el estado no-iniciado**.
Al pausar con el botón propio, el fotograma queda limpio (verificado). Por eso
alcanza con tapar el arranque y no hace falta tapar la pausa.

**Causa 2 — el reintento muteado tardaba 1500 ms.** En iOS el bloqueo del
autoplay con sonido es la regla, no la excepción, así que esa espera se sumaba
entera al arranque de *cada* video. Ahora son 600 ms, y además se reintenta
apenas el player vuelve a `UNSTARTED` o `CUED` después de pedir play, que es la
señal de que el navegador lo rechazó. El reintento corre una sola vez y solo si
el video nunca arrancó, para no pisar una pausa del usuario.

Queda mudo igual: es política de iOS, no un bug. El botón de sonido permite
recuperarlo con un toque.

### 2026-09-27 — Modal fullscreen para YouTube Shorts

Último carrusel que faltaba. Se cargó la **IFrame Player API** de YouTube para
tener los mismos controles propios que MAM y Branded, en vez de dejar a la vista
los controles nativos del player.

**Cambio de fondo en el carrusel.** La tarjeta dejó de montar un iframe inline al
hacer click: ahora es sólo thumbnail más botón, y **el carrusel no monta ningún
iframe**. El iframe existe únicamente dentro del modal, y sólo el del slide
activo: al deslizar, el player anterior se destruye. Verificado en navegador: 12
slides, siempre 1 iframe.

**Archivos nuevos**

| Archivo | Rol |
|---|---|
| `videos-shared/youtube-iframe-api.ts` | Cargador singleton de la API + tipos. El `declare global` de `window.YT` vive acá, no en `global.d.ts` |
| `videos-shared/video-modal-controls.tsx` | Capa inferior compartida por mp4 e iframe. No sabe cómo se reproduce: recibe estado y devuelve intenciones |
| `youtube-shorts/youtube-shorts-modal-slide.tsx` | Crea y destruye el player según `isActive` |
| `youtube-shorts/youtube-shorts-modal.tsx` | Arma el `VideoModalShell` con los slides de Shorts |

**Trampas de la IFrame API que ya costaron tiempo** — no volver a pisarlas:

- **`YT.Player` reemplaza el nodo que recibe por el iframe.** Hay que pasarle un
  hijo descartable creado con `document.createElement`, no el div que React
  controla; si no, al recrear, el ref apunta a un nodo removido.
- **`loop: 1` sin `playlist: videoId` no repite un video suelto.** Es requisito
  de la API, no una redundancia.
- **`cc_load_policy: 0` NO apaga los subtítulos**: sólo el valor 1 es vinculante.
  Hay que llamar a `unloadModule("captions")` / `("cc")`, y **repetirlo cuando el
  estado pasa a `PLAYING`**: en `onReady` el módulo todavía no cargó y la
  descarga no tiene efecto. Importaba porque los subtítulos se dibujan al pie y
  pisaban los botones de pausa y silencio.
- **El iframe necesita `pointer-events: none`.** Un iframe de otro origen se
  queda con el gesto táctil y Swiper nunca vería el swipe vertical: el modal
  quedaba trabado en el primer video. Como los controles son propios y el player
  va con `controls: 0`, el iframe no necesita recibir nada.
- **El player encaja el video (`contain`), no lo cubre.** Un 9:16 en una pantalla
  más alargada queda con bandas negras (84 px arriba y abajo en un iPhone de
  932 px). No se puede aplicar `object-fit` sobre un iframe: se lo agranda con
  `max()` hasta cubrir, se lo centra y el sobrante lo recorta el `overflow` del
  contenedor. Así queda a sangre completa como MAM y Branded.
- **Warning benigno de `postMessage`** al crear cada player: *"target origin
  ('https://www.youtube.com') does not match recipient window's origin"*. El
  stack lo ubica en `www-widgetapi.js`, dentro de un `setInterval` propio de
  YouTube. **Se probó el parámetro `origin`, que es el remedio documentado, y no
  lo elimina.** No perseguirlo.

Verificado en navegador con viewport de iPhone (430×932): swipe vertical pasa de
slide, la barra avanza en el slide nuevo, pausa congela, silencio alterna y el
thumbnail se desvanece al estar listo el player.

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

`/opcion-2` está implementada, validada y aprobada visualmente. Su documentación
quedó cerrada tras la revisión del usuario; no hay ajustes pendientes de este
tramo ni una intervención siguiente automática.

Las etapas 1–8 están cerradas y no hay una intervención visual en curso en la home
integrada. Última hora usa únicamente Agencia en mobile; no hay una nueva
intervención en curso en ese módulo. La tarea
alternativa de `/desktop` mantiene su evolución independiente y tampoco tiene un
tramo activo. `/desktop2` queda igualmente cerrada como instantánea independiente
hasta una nueva indicación explícita.

---

## ⏭️ Siguiente

Esperar el próximo objetivo del usuario para `/` o `/opcion-2`, preservando la
composición compartida y las dos propuestas aprobadas. No trasladar cambios del
tramo superior de una variante a la otra por cuenta propia.

Definir con el usuario cuál alternativa y qué módulo u objetivo visual se
trabajará antes de volver a modificar `/desktop` o `/desktop2`. Mantener los
tramos aprobados y no sincronizar automáticamente ninguna de esas rutas con
cambios futuros de `/` ni entre sí.

Última hora mobile quedó definida como Agencia en ambas homes; conservar sus
cinco noticias, la lectura en home y el tamaño estable del recuadro. La
actualización real de noticias sigue fuera del alcance. Mantener ese bloque
oculto desde 1024 px; en `/opcion-2`, conservar la ubicación y las
interacciones desktop ya aprobadas de AHORA e IA.
El plan responsive no tiene una etapa siguiente automática. Cualquier ajuste
visual nuevo parte de la home aprobada como línea base y se documenta después
del OK del usuario.

El [inventario interno y baseline](./PROJECT_CONTEXT.md#etapa-1-verificada-inventario-y-baseline-2026-10-10)
ya está cerrado. Las etapas 2 (marco/composición), 3 (noticias) y 4 (videos) están
implementadas y verificadas localmente con la salvedad de Shorts registrada.
Las etapas 5, 6, 7 y 8 quedaron cerradas. La integración responsive está
completada.
Repetir capturas si hace falta: las imágenes anteriores viven
en su conversación, no en Git. La home integrada se ajusta a mobile, no a
cantidades, medios omitidos o funciones nuevas de Stitch. Preservar la base de
Stitch, los cambios locales preexistentes y el orden mobile (Principales antes
de MAM; Política antes de Shorts). No avanzar de etapa sin la indicación del
usuario.

Shorts arranca mudo por política de iOS y el botón de sonido lo activa
(verificado en iPhone). Que arranque con sonido queda en el Backlog.

---

## 📋 Backlog

- **Arranque con sonido en Shorts.** Hoy arranca mudo y se activa con el botón
  (verificado en iPhone: el botón funciona). **Los controles nativos de YouTube
  NO lo resuelven**: el bloqueo es una política del navegador sobre el autoplay
  con audio, no una limitación de qué controles se muestran; cambiarlos sumaría
  la marca de YouTube sin ganar nada.
  El motivo real es que el toque que abre el modal ocurre en nuestra página y no
  cuenta como gesto dentro del iframe de otro origen. Por eso MAM sí arranca con
  sonido: es un `<video>` propio, en el mismo documento.
  **Camino a probar**: que el player exista *antes* del toque y que el propio
  gesto que abre el modal dispare `unMute()` + `playVideo()` sobre un player ya
  creado. Encarece el feed (habría que mantener un player vivo) y no hay garantía
  de que iOS lo acepte: verificar en dispositivo real antes de invertir en ello.

- **Contraste de rótulos auxiliares.** Lighthouse señala contraste insuficiente
  en algunos textos pequeños de publicidad, sponsor y estado EN VIVO. No se
  modificaron porque la presentación visual está congelada; revisar solo si el
  usuario autoriza un ajuste visual de accesibilidad.
- **Prueba desktop alternativa.** `/desktop` ya inició su tarea independiente y
  conserva como baseline una réplica HTML visual de `/` desde 1024 px. No
  interviene en las etapas 5, 7 u 8 ni funciona como fallback de `/`. Su
  composición aprobada usa Apertura/Principales en ocho columnas y una columna
  derecha continua para Agencia, publicidad, encuesta y `AVANCES DE LA IA`; el
  módulo Ovación ya tiene su variante oscura aprobada con agenda, ticker y
  composición editorial. Su tramo superior ya sirvió de referencia para la
  segunda home funcional `/opcion-2`, cerrada y aprobada. El próximo objetivo
  sobre los experimentos estáticos debe acordarse antes de continuar.
- **Verticales branded adicionales.** `branded-content.ts` ya soporta `comidas` y
  `autos`; agregar más es declarativo. Definir cuáles se muestran en la
  presentación.
- **Ads nativos en el feed** (programáticos).
- **Títulos de maqueta.** Branded usa copys ficticios de `branded-content.ts`;
  reemplazar cuando haya contenido comercial real.
- **Refinamientos del modal**, deliberadamente fuera del primer tramo: cierre por
  gesto de arrastre y precarga del video siguiente.
---

## ❓ Decisiones pendientes

| Tema | Pregunta abierta |
|---|---|
| Branded en producción | ¿De dónde vendrá el contenido brandeado real: CMS, anunciante o MAM? |

### Decisiones ya resueltas

- **Segunda home funcional (2026-10-19):** `/opcion-2` comparte `HomeWrapper`
  con `/` y solo diverge en desktop antes de MAM, preservando Live. Se eligió
  8/4 con seis titulares de AHORA y cuatro de IA en todos los anchos desktop,
  altura natural y resúmenes sin cambiar el tamaño exterior. Mobile y las
  referencias estáticas se conservan. El usuario aprobó visualmente el resultado.

- **Cierre de la etapa 5 (2026-10-19):** el usuario aprobó la composición visual
  vigente y dio la etapa por terminada. Encuesta/Senatus, Ovación, el segundo
  anuncio y Sociedad quedan consecutivos en ese orden en mobile y desktop. Los
  módulos sin adaptación específica se aceptan en su estado actual; las etapas
  7 y 8 cerraron después.

- **Cierre de la etapa 7 (2026-10-19):** widgets, transmisiones, Chat, Sudoku y
  los dos anuncios conservaron el alcance funcional acordado y no reabrieron el
  diseño desktop. Servicios permanece implementado fuera de `/`.

- **Cierre de la etapa 8 (2026-10-19):** la validación integral completó el plan
  responsive. Las limitaciones externas y visuales aceptadas permanecen en
  Backlog; no existe una etapa siguiente automática.

- **Gráfico interactivo/chat y Sudoku (2026-10-19):** mobile conserva las cinco
  notas de Legionarius, el chat y Sudoku en ese orden. Desde 1024 px, la misma
  zona muestra el video local de Nepal junto al chat, ambos con igual altura, y
  oculta Sudoku sin reservar espacio. Esta decisión sustituye su ubicación
  desktop posterior a Crimen y queda cerrada visualmente.

- **Reserva para juegos desktop (2026-10-19):** desde 1024 px, un bloque blanco
  de 400 px y ancho completo aparece entre Gráfico interactivo/Chat Vox Dei y
  Gente. Solo comunica que el proyecto está en evaluación; no incorpora aún
  funcionalidad ni tiene equivalente mobile.

- **Alcance del modal (2026-09-27)**: se implementó primero en MAM y Branded, que
  sirven mp4 propio, y después en Shorts vía IFrame Player API. Los tres
  carruseles lo tienen.
- **Controles de Shorts (2026-09-27)**: se usan los **controles propios**, no los
  nativos de YouTube (`controls: 0`). Cuesta cargar la IFrame Player API, pero
  mantiene la misma interfaz en los tres carruseles; los controles nativos
  romperían la ilusión de producto propio en una presentación a accionistas.
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
