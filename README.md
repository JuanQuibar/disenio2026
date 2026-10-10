# UNO 2026 — Rediseño Diario UNO

Prototipo de alto impacto para el rediseño de `diariouno.com.ar`, pensado para
presentar la visión a los accionistas.

**Mobile first**: por ahora solo existe la versión mobile. Para verlo como fue
diseñado, usar el modo dispositivo del navegador (por ejemplo 414×896).

La integración desktop tiene un
[plan aprobado](./PROJECT_CONTEXT.md#plan-aprobado-integración-mobile-y-desktop),
todavía no implementado: una misma home responsive con las mismas secciones,
composición desktop desde 1024 px y `/desktop` como referencia estática.
La API de Diario UNO y la segunda grilla 3+6+3 quedan fuera del tramo.

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
| `NEXT_PUBLIC_PEXELS_API_KEY` | Fotos de maqueta y el carrusel Branded | Branded desaparece; los helpers legacy de la home pueden provocar un fallo |
| `NEXT_PUBLIC_YOUTUBE_API_KEY` | Carrusel de YouTube Shorts | La sección Shorts no se renderiza |

El carrusel MAM consume una API pública y **no requiere credenciales**.

Los servicios de video en `app/services/videos/` degradan a vacío. Los helpers
legacy de `app/services/fetchs.ts` todavía lanzan si falta Pexels y algunos
consumidores no toleran datos vacíos. Validar la home y el build con configuración
válida, sin claves ficticias ni dar por aprobado un build fallido.

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
`/desktop` es su copia local para análisis. La home integrada debe ajustarse al
inventario mobile, no incorporar automáticamente agregados u omisiones de Stitch.

| Ruta | Descripción |
|---|---|
| `/` | Home del prototipo |
| `/detalle-nota` | Prototipo de página de nota |
| `/desktop` | Maqueta desktop estática de Stitch para revisión |

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
