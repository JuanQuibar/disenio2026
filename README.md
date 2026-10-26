# UNO 2026 — Rediseño Diario UNO

Prototipo de alto impacto para el rediseño de `diariouno.com.ar`, pensado para
presentar la visión a los accionistas.

Hay dos propuestas funcionales: **`/` es la portada aprobada** y **`/opcion`**
conserva la portada anterior. Ambas usan `HomeWrapper`, comparten mobile, Live y
todos los módulos desde MAM, incluido. Desde 1024 px, `/` presenta Apertura y
Principales en ocho columnas y un lateral de cuatro con AHORA, publicidad,
encuesta y AVANCES DE LA IA. El lateral tiene altura natural y siempre muestra
seis titulares de AHORA y cuatro de IA. La implementación usa React y wrappers,
sin `String.raw` ni `dangerouslySetInnerHTML`. El usuario aprobó visualmente esta
variante el 2026-10-19 y la eligió como portada el 2026-10-26.

**Mobile first**: la home `/` conserva la experiencia mobile y compone su
presentación desktop desde 1024 px. Para revisar mobile, usar el modo dispositivo
del navegador (por ejemplo 414×896).
Última hora muestra únicamente Agencia con cinco noticias en mobile. Sus
resúmenes se superponen sin mover el título ni el tamaño exterior del módulo;
si uno es demasiado largo, el panel permite desplazarse dentro de él. El
lateral de `/` conserva seis titulares en AHORA y cuatro en AVANCES DE
LA IA desde 1024 px.
La home usa una columna general. En mobile, un espacio reservado para el futuro
gráfico interactivo responsive aparece antes de `CHAT VOX DEI`. Desde 1024 px,
ambos forman una fila: la izquierda muestra temporalmente el video de Nepal en
loop hasta disponer del gráfico HTML interactivo y el chat ocupa 448 px a la
derecha; los paneles igualan su altura. El espacio de juegos es otro bloque:
debajo de Crimen muestra Sudoku como muestra mobile y, en desktop, una reserva
blanca de ancho completo y 400 px de altura para el futuro producto.
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

Las dos homes funcionales presentan en mobile y desktop la misma selección de
doce fotos editoriales tomadas en Argentina, con resoluciones adecuadas a cada
recorte.

La integración se desarrolló según el
[plan aprobado](./PROJECT_CONTEXT.md#plan-aprobado-integración-mobile-y-desktop)
y se cotejó con la publicación y el MCP oficiales de Stitch. Las antiguas rutas
estáticas `/desktop` y `/desktop2`, y la URL `/opcion-2`, se retiraron al elegir
la nueva portada; su evolución permanece en la bitácora histórica.
La API de Diario UNO y la segunda grilla 3+6+3 quedan fuera del tramo.

## Estado de la integración responsive

Las etapas 1–8 están implementadas, verificadas y aprobadas. El usuario cerró la
etapa 5 el 2026-10-19 y la presentación visual de `/opcion` constituye su línea
base final. Los módulos que no recibieron una adaptación específica a Stitch se
aceptan tal como están implementados y no quedan pendientes visuales dentro de
esa etapa.

Ovación es una excepción cerrada a esa lista: tiene una línea visual propia en
mobile y desktop, con panel `#111827`, ticker CSS, agenda general de DataFactory,
títulos uppercase y sin bajada principal ni rótulo de fixture. No se adapta a
la versión de Stitch y quedó incorporado a la línea base al cerrar la etapa 5.

Las revisiones funcional e integral cerraron las etapas 7 y 8. La nueva portada
`/` es un tramo posterior también cerrado y aprobado; no hay una etapa siguiente
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
Las homes funcionales conservan el inventario mobile acordado. Las referencias
estáticas utilizadas durante el diseño ya no son rutas disponibles.

El cliente del agente puede disponer además del MCP oficial de Stitch. Esta
integración es una fuente consultiva externa, no una dependencia del proyecto ni
una variable de entorno de la aplicación. Verificar su disponibilidad al iniciar
la sesión y usar el proyecto/pantalla identificados en
[PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md#plan-aprobado-integración-mobile-y-desktop).
No guardar la credencial del MCP en este repositorio ni usar sus herramientas
para modificar el diseño remoto.

| Ruta | Descripción |
|---|---|
| `/` | Portada funcional aprobada; variante 8/4 desde 1024 px, con lateral AHORA/IA |
| `/opcion` | Home funcional anterior; misma experiencia mobile y tramo compartido desde MAM |
| `/detalle-nota` | Prototipo de página de nota |

## Documentación

| Archivo | Contenido |
|---|---|
| [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) | Visión, stack, arquitectura y decisiones vigentes |
| [Plan responsive aprobado](./PROJECT_CONTEXT.md#plan-aprobado-integración-mobile-y-desktop) | Paridad, arquitectura, etapas y validación para la nueva sesión |
| [PROGRESS.md](./PROGRESS.md) | Bitácora, backlog y convenciones. **Empezar por acá al retomar el trabajo** |
| [DESIGN.md](./DESIGN.md) | Sistema visual mobile: colores, tipografía, layout y catálogo de componentes |
| [CATALOGO_FORMATOS_PORTADA.md](./CATALOGO_FORMATOS_PORTADA.md) | Formatos editoriales de la portada aprobada para editores y proveedor del CMS |
| [AGENTS.md](./AGENTS.md) | Punto de entrada para agentes de IA: orden de lectura y reglas que no se negocian |

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Swiper
