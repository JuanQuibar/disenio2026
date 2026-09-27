# UNO 2026 — Rediseño Diario UNO

Prototipo de alto impacto para el rediseño de `diariouno.com.ar`, pensado para
presentar la visión a los accionistas.

**Mobile first**: por ahora solo existe la versión mobile. Para verlo como fue
diseñado, usar el modo dispositivo del navegador (por ejemplo 414×896).

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
| `NEXT_PUBLIC_PEXELS_API_KEY` | Fotos de maqueta y el carrusel Branded | Las secciones que dependen de ella no se renderizan |
| `NEXT_PUBLIC_YOUTUBE_API_KEY` | Carrusel de YouTube Shorts | La sección Shorts no se renderiza |

El carrusel MAM consume una API pública y **no requiere credenciales**.

Los servicios degradan a vacío en lugar de lanzar: si falta una clave, la sección
correspondiente simplemente desaparece y el resto de la home sigue funcionando.

> `.env` está ignorado por git. No commitear credenciales.

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

| Ruta | Descripción |
|---|---|
| `/` | Home del prototipo |
| `/detalle-nota` | Prototipo de página de nota |

## Documentación

| Archivo | Contenido |
|---|---|
| [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) | Visión, stack, arquitectura y decisiones vigentes |
| [PROGRESS.md](./PROGRESS.md) | Bitácora, backlog y convenciones. **Empezar por acá al retomar el trabajo** |
| [AGENTS.md](./AGENTS.md) | Punto de entrada para agentes de IA: orden de lectura y reglas que no se negocian |

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Swiper
