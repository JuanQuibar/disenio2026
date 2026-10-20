# UNO 2026 — Rediseño Diario UNO

Prototipo de alto impacto para el rediseño de `diariouno.com.ar`, pensado para
presentar la visión a los accionistas.

Hay dos propuestas funcionales aprobadas: **`/` y `/opcion-2`**. Ambas usan
`HomeWrapper`, comparten la experiencia mobile, Live y todos los módulos desde
MAM, incluido. La segunda cambia solo desde 1024 px: Apertura y Principales
ocupan ocho columnas y el lateral cuatro, con seis titulares interactivos en
AHORA, publicidad, encuesta y cuatro titulares interactivos en AVANCES DE LA IA.
El lateral tiene altura natural y no oculta noticias según el ancho. Su diseño
superior toma `/desktop` como referencia visual, pero está implementado con
React, sin `String.raw` ni `dangerouslySetInnerHTML`. El usuario aprobó
visualmente `/opcion-2` el 2026-10-19.

**Mobile first**: la home `/` conserva la experiencia mobile y compone su
presentación desktop desde 1024 px. Para revisar mobile, usar el modo dispositivo
del navegador (por ejemplo 414×896).
Las dos variantes temporales de Última hora muestran cinco noticias cada una en
mobile. El lateral de `/opcion-2` conserva seis titulares en AHORA y cuatro en
AVANCES DE LA IA desde 1024 px.
La home usa una columna general. En mobile, las cinco notas de Legionarius, el
chat y Sudoku aparecen consecutivamente. Desde 1024 px, esa zona se convierte
en una fila con `GRÁFICO INTERACTIVO` a la izquierda y `CHAT VOX DEI` en una
columna de 448 px; ambos paneles igualan su altura y Sudoku queda oculto.
Debajo de Crimen aparece únicamente en desktop una reserva blanca de ancho
completo y 400 px de altura para el futuro espacio de juegos.
Después de Encuesta/Senatus, la composición aprobada continúa con Ovación, el
segundo anuncio y Sociedad, en ese orden y en ambos anchos. Ese anuncio conserva
el formato 300×250 en mobile y adopta desde 1024 px el leaderboard
`VENDIMIA CONNECT 2026` de Stitch. Encuesta/Senatus comparte una fila de dos
columnas en desktop. Canal 7 y Radio Nihuil comparten una fila de tres columnas con el
anuncio 300×250: el anuncio reserva 332 px y el espacio restante se divide entre
ambas transmisiones. En mobile, el anuncio queda debajo de los dos streams.
Los tres contenedores igualan su altura desde 1024 px; los streams muestran
cabezales `CANAL 7 EN VIVO` y `RADIO NIHUIL EN VIVO` con punto rojo pulsante
que respeta movimiento reducido. Mobile conserva sus cabezales y alturas.
Si falta uno de los integrantes de una pareja, se omite la pareja, sin skeleton
permanente.

Desde 1024 px, MAM presenta los primeros 15 videos del dataset compartido en una
grilla estática 5×3, sin carrusel ni reproducción inline. Shorts y Branded
conservan sus Swipers y muestran seis piezas con navegación anterior/siguiente
sobre la misma instancia. Los tres módulos mantienen sus modales y reglas de
reproducción/sonido; no se montan iframes de Shorts en el feed. La disponibilidad
de reproducción de YouTube sigue dependiendo del proveedor externo.

Las cuatro homes presentan desde 1024 px una selección de doce fotos editoriales
tomadas en Argentina. Las homes funcionales mantienen sus imágenes mobile y
sirven originales de resolución suficiente para los recortes desktop; las dos
rutas estáticas guardan la misma selección en sus propias instantáneas.

La integración sigue el
[plan aprobado](./PROJECT_CONTEXT.md#plan-aprobado-integración-mobile-y-desktop):
una misma home responsive con las mismas secciones, cotejada con la publicación
y el MCP oficiales de Stitch. La ruta `/desktop` inició una tarea independiente
de diseño alternativo y no participa de esta integración. Su punto de partida es
una réplica HTML estática de la home actual desde 1024 px. Su primera variante
aprobada deja fija solo la fila principal del header. Apertura y Principales usan
las ocho columnas izquierdas; Agencia ocupa las cuatro derechas durante ambos
módulos y reúne seis noticias, un anuncio Pepsi 300×600 y una copia visual de la
encuesta. El lateral cierra con `AVANCES DE LA IA`, un segundo listado estático
sin pastillas que adapta su cantidad visible al ancho disponible. Apertura usa
foto 16:9 sin cabezal interno. Ovación ya cuenta con una variante oscura de
ancho completo, agenda DataFactory enmarcada, principal/listado de igual altura
y una cinta deportiva CSS junto al logo. La réplica continúa sin hidratar React,
pero su diseño de Ovación fue trasladado después, por instrucción explícita, al
módulo real de `/` mediante sus wrappers y componentes. Esa excepción no vuelve
a `/desktop` una referencia general.
La API de Diario UNO y la segunda grilla 3+6+3 quedan fuera del tramo.

## Estado de la integración responsive

Las etapas 1–8 están implementadas, verificadas y aprobadas. El usuario cerró la
etapa 5 el 2026-10-19 y la presentación visual actual de `/` constituye su línea
base final. Los módulos que no recibieron una adaptación específica a Stitch se
aceptan tal como están implementados y no quedan pendientes visuales dentro de
esa etapa.

Ovación es una excepción cerrada a esa lista: tiene una línea visual propia en
mobile y desktop, con panel `#111827`, ticker CSS, agenda general de DataFactory,
títulos uppercase y sin bajada principal ni rótulo de fixture. No se adapta a
la versión de Stitch y quedó incorporado a la línea base al cerrar la etapa 5.

Las revisiones funcional e integral cerraron las etapas 7 y 8. `/opcion-2` es
un tramo posterior también cerrado y aprobado; no hay una etapa siguiente
automática.

## Navegador de pruebas compartido

Copilot y Codex usan un único Chrome de pruebas, con perfil separado y conexión
local en el puerto 9222. Configuración, arranque y verificación en
[BROWSER_TESTING.md](./BROWSER_TESTING.md). No usar navegadores adicionales para
las pruebas del proyecto.

## Requisitos

- Node.js 20 o superior
- npm

## Instalación

```bash
npm install
```

## Variables de entorno

Crear un archivo `.env` en la raíz con estas dos claves:

```bash
NEXT_PUBLIC_PEXELS_API_KEY=...
NEXT_PUBLIC_YOUTUBE_API_KEY=...
```

| Variable | Alimenta | Si falta |
|---|---|---|
| `NEXT_PUBLIC_PEXELS_API_KEY` | Fotos de maqueta, cobertura y el carrusel Branded | Los módulos que dependen de fotos/videos Pexels se omiten; Branded desaparece |
| `NEXT_PUBLIC_YOUTUBE_API_KEY` | Carrusel de YouTube Shorts | La sección Shorts no se renderiza |

El carrusel MAM consume una API pública y **no requiere credenciales**.

Los servicios y helpers Pexels degradan a arrays vacíos ante errores de red o
falta de clave, con logging; los wrappers omiten las secciones sin datos. No usar
claves ficticias ni incluir credenciales en git.

> `.env` está ignorado por git. No commitear credenciales.
> Los archivos ignorados no se copian automáticamente a nuevos worktrees.
> También puede usarse `.env.local`; reiniciar el servidor tras configurarlo.

## Scripts

```bash
npm run dev     # servidor de desarrollo en http://localhost:3000
npm run build   # build de producción
npm run start   # sirve el build de producción
```

Chequeo de tipos:

```bash
npx tsc --noEmit
```

## Rutas

Referencia original: [diseño público completo de Stitch](https://2eaa6e7d-diario-uno-desktop-redesign.netlify.app/#).
La home integrada debe ajustarse al inventario mobile, no incorporar
automáticamente agregados u omisiones de Stitch. `/desktop` no es un fallback
ni una referencia general de `/`: conserva su implementación estática y
aportó el diseño superior acordado para `/opcion-2`. `/desktop2` es otro
experimento estático independiente. Ninguna de esas instantáneas se sincroniza
automáticamente con las homes funcionales.

El cliente del agente puede disponer además del MCP oficial de Stitch. Esta
integración es una fuente consultiva externa, no una dependencia del proyecto ni
una variable de entorno de la aplicación. Verificar su disponibilidad al iniciar
la sesión y usar el proyecto/pantalla identificados en
[PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md#plan-aprobado-integración-mobile-y-desktop).
No guardar la credencial del MCP en este repositorio ni usar sus herramientas
para modificar el diseño remoto.

| Ruta | Descripción |
|---|---|
| `/` | Primera home funcional; diseño original aprobado |
| `/opcion-2` | Segunda home funcional; variante 8/4 desde 1024 px, misma home mobile y tramo compartido desde MAM |
| `/detalle-nota` | Prototipo de página de nota |
| `/desktop` | Prototipo desktop alternativo; baseline estático con experimentos visuales independientes desde 1024 px |
| `/desktop2` | Segunda instantánea estática independiente, con experimentos editoriales propios; distinta de `/opcion-2` |

## Documentación

| Archivo | Contenido |
|---|---|
| [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) | Visión, stack, arquitectura y decisiones vigentes |
| [Plan responsive aprobado](./PROJECT_CONTEXT.md#plan-aprobado-integración-mobile-y-desktop) | Paridad, arquitectura, etapas y validación para la nueva sesión |
| [PROGRESS.md](./PROGRESS.md) | Bitácora, backlog y convenciones. **Empezar por acá al retomar el trabajo** |
| [DESIGN.md](./DESIGN.md) | Sistema visual mobile: colores, tipografía, layout y catálogo de componentes |
| [AGENTS.md](./AGENTS.md) | Punto de entrada para agentes de IA: orden de lectura y reglas que no se negocian |

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Swiper
