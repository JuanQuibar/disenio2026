# UNO 2026 — Prototipo de rediseño de Diario UNO

Prototipo responsive de `diariouno.com.ar`. El directorio aprobó el **look and
feel y la estructura de la portada `/`**. La portada de sección genérica
también tiene diseño aprobado en mobile y desktop. Quedan por diseñar detalles
de nota y otras páginas públicas; el
[inventario vigente](./PROGRESS.md#inventario-de-pantallas) registra su estado.
Más adelante, el proveedor del CMS reconstruirá el producto en su propia
tecnología. Este repositorio es una referencia de diseño, no una implementación
de producción ni una especificación del stack del proveedor.

## Rutas actuales

| Ruta | Estado |
|---|---|
| `/` | Portada aprobada en mobile y desktop. Composición editorial 8/4 desde 1024 px. |
| `/opcion` | Variante anterior de la home; referencia secundaria. |
| `/detalle-nota` | Borrador revisable de nota común. |
| `/portada-seccion` | Portada de sección genérica aprobada en mobile y desktop; [ficha visual](./PORTADA_SECCION.md). |

Las otras páginas del inventario aún no tienen ruta propia. Las antiguas
`/desktop`, `/desktop2` y `/opcion-2` fueron retiradas.

## Requisitos y arranque

- Node.js 20 o superior
- npm

```bash
npm install
npm run dev
```

El servidor de desarrollo usa `http://localhost:3000`. No iniciar una segunda
instancia si ya hay una en ejecución.

## Variables de entorno

Crear `.env.local` en la raíz del proyecto con las claves disponibles:

```dotenv
NEXT_PUBLIC_PEXELS_API_KEY=...
NEXT_PUBLIC_YOUTUBE_API_KEY=...
```

| Variable | Uso en el prototipo | Si falta |
|---|---|---|
| `NEXT_PUBLIC_PEXELS_API_KEY` | Fotos de muestra y videos Branded | Los módulos dependientes se omiten. |
| `NEXT_PUBLIC_YOUTUBE_API_KEY` | Playlist de Shorts | Shorts se omite. |

MAM consulta una playlist pública y no necesita clave. Los servicios de Pexels
y YouTube devuelven listas vacías ante falta de clave o fallo de red; los
wrappers no renderizan secciones sin datos. `.env.local` está ignorado por Git:
no incluir credenciales en el repositorio. Reiniciar el servidor tras cambiar
las variables.

## Comandos

```bash
npm run dev      # desarrollo
npx tsc --noEmit # tipos
npm run build    # build de producción
npm run start    # servir el build
```

## Documentación

Leer en este orden al retomar el trabajo:

1. [PROGRESS.md](./PROGRESS.md): estado vigente e inventario de pantallas.
2. [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md): propósito, etapas, rutas y
   arquitectura del prototipo.
3. Este README: instalación, variables y comandos.
4. [DESIGN.md](./DESIGN.md) antes de trabajar en la interfaz: lenguaje visual
   aprobado y guía general para páginas nuevas.

Además:

- [CATALOGO_FORMATOS_PORTADA.md](./CATALOGO_FORMATOS_PORTADA.md): 15 formatos,
  capturas y acuerdos editoriales de la portada para el futuro traspaso.
- [PORTADA_SECCION.md](./PORTADA_SECCION.md): composición, medidas y alcance
  funcional de la portada de sección genérica aprobada.
- [AGENTS.md](./AGENTS.md): reglas operativas para agentes, incluida la
  prohibición de worktrees.
- [BROWSER_TESTING.md](./BROWSER_TESTING.md): uso del Chrome compartido. Para
  pruebas del proyecto, no abrir navegadores alternativos.
- [Índice de docs](./docs/README.md): ubicación de las guías vigentes y las
  capturas de los formatos de home.
- [Archivo histórico](./archivo/2026-10-26/README.md): decisiones y
  etapas anteriores, incluidas rutas retiradas. No es una guía vigente.

## Stack del prototipo

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Swiper
