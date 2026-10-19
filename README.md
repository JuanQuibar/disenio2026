# UNO 2026 — Rediseño Diario UNO

Prototipo de alto impacto para el rediseño de `diariouno.com.ar`, pensado para
presentar la visión a los accionistas.

**Mobile first**: la home `/` conserva la experiencia mobile y compone su
presentación desktop desde 1024 px. Para revisar mobile, usar el modo dispositivo
del navegador (por ejemplo 414×896).
La home conserva el mismo orden en ambos anchos y una columna general; solo
Encuesta/Senatus y Legionarius/chat comparten fila de dos columnas desde
1024 px. Canal 7 y Radio Nihuil comparten una fila de tres columnas con el
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

Las etapas 1–4 están implementadas y verificadas. La etapa 6, forma de
titulación, también está cerrada y aprobada. Dentro de la etapa 5 ya fueron
adaptados y aprobados Muy Destacada, APERTUM, Principales, MAM, el header,
Política, Crimen, Sociedad, Gente, ULTIMATEM, Shorts y
`# A COMER!`/Branded. La etapa 5 está suspendida por indicación del usuario.

Continúan pendientes de cotejo y adaptación visual a Stitch: Servicios,
Opinión, Encuesta/Senatus, los dos anuncios, Canal 7/Radio Nihuil,
Legionarius/chat, Sudoku, Últimas noticias, el footer, los modales
desktop de video y los skeletons desktop. Se trabaja un único tramo por vez y
no hay un módulo actualmente en intervención.

Ovación es una excepción cerrada a esa lista: tiene una línea visual propia en
mobile y desktop, con panel `#111827`, ticker CSS, agenda general de DataFactory,
títulos uppercase y sin bajada principal ni rótulo de fixture. No será adaptado
a la versión de Stitch y queda fuera del alcance y del cierre de la etapa 5.

Los widgets y anuncios pueden recibir su adaptación visual durante la etapa 5,
pero su revisión funcional y el cierre de paridad permanecen reservados para la
etapa 7. La etapa 8 conserva la validación integral y el cierre final; ninguna
de las dos debe iniciarse automáticamente.

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
automáticamente agregados u omisiones de Stitch. `/desktop` no es una referencia
de la home ni un fallback de la integración: su baseline quedó congelado como
una instantánea visual independiente, sin datos ni handlers React.

El cliente del agente puede disponer además del MCP oficial de Stitch. Esta
integración es una fuente consultiva externa, no una dependencia del proyecto ni
una variable de entorno de la aplicación. Verificar su disponibilidad al iniciar
la sesión y usar el proyecto/pantalla identificados en
[PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md#plan-aprobado-integración-mobile-y-desktop).
No guardar la credencial del MCP en este repositorio ni usar sus herramientas
para modificar el diseño remoto.

| Ruta | Descripción |
|---|---|
| `/` | Home del prototipo |
| `/detalle-nota` | Prototipo de página de nota |
| `/desktop` | Prototipo desktop alternativo; baseline estático con experimentos visuales independientes desde 1024 px |

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
