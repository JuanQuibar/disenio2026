# Instrucciones para agentes

Prototipo responsive de rediseño de **Diario UNO**. Next.js 16 · React 19 ·
Tailwind CSS 4 · Swiper. El directorio aprobó el look and feel y la portada `/`;
quedan por diseñar otras páginas públicas. El proveedor del CMS implementará
más adelante el producto en su propia tecnología.

## Antes de trabajar, leer en este orden

1. **[PROGRESS.md](./PROGRESS.md)** — estado vigente e inventario de páginas.
   Empezar acá siempre.
2. **[PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md)** — propósito, rutas,
   arquitectura y referencias aprobadas.
3. **[README.md](./README.md)** — arranque y variables de entorno.
4. Para interfaz, **[DESIGN.md](./DESIGN.md)** — lenguaje visual de la portada
   aprobada y guía para diseñar páginas nuevas. Para formatos de home, consultar
   también [CATALOGO_FORMATOS_PORTADA.md](./CATALOGO_FORMATOS_PORTADA.md).

Los documentos de [historia](./archivo/2026-10-26/README.md) preservan
iteraciones anteriores. Pueden describir rutas y decisiones reemplazadas; no
son instrucciones vigentes.
La carpeta [docs/](./docs/README.md) reúne las capturas y un índice; las guías
vigentes están en la raíz del repositorio.

## Reglas que no se negocian

- **Sin worktrees.** Trabajar siempre en la carpeta principal `uno-2026-1`.
  No crear, solicitar ni usar worktrees para este proyecto, tampoco al abrir
  sesiones o delegar tareas. Si una sesión arranca en un worktree, informar
  el conflicto y detener las modificaciones: no editar allí ni migrar cambios
  automáticamente. Al configurar una sesión, elegir carpeta/workspace sin
  aislamiento (`isolation: false` si la herramienta usa un booleano). No
  eliminar worktrees existentes sin autorización y revisión de su contenido.
- **Datos a través de wrappers.** Todo componente que trae datos expone un
  archivo `-wrapper.tsx` como única puerta de entrada de la página o de la
  composición. `page.tsx` no importa cards, carruseles ni servicios para
  resolver datos. Los componentes puramente presentacionales pueden entrar
  directamente; si empiezan a obtener datos, necesitan wrapper.
- **Mobile-first con desktop vigente.** `/` y `/opcion` comparten mobile y
  presentan desktop desde 1024 px. Conservar un único árbol y los puntos de
  extensión responsive. La home `/` es la referencia aprobada para páginas
  nuevas; `/opcion` es secundaria y `/detalle-nota` es un borrador revisable.
- **Fuentes vacías sin sección.** Ante un error de red o API key faltante,
  los servicios devuelven `[]` y registran el fallo sin lanzar excepciones.
  El wrapper devuelve `null` y no deja un contenedor vacío permanente.
- **Videos por `id`.** La identidad del video es su `id` estable, no el índice
  del slide. MAM, Shorts y Branded conservan fuentes y reproductores propios;
  `videos-shared/` contiene solo primitivas comunes.
- **JW Player está dado de baja.** No reintroducirlo: terminó el contrato con
  el proveedor.
- **Contenido de muestra.** Los textos, fotografías editoriales y anuncios de
  la maqueta no son contenido final. MAM, Shorts y algunos widgets consultan
  servicios externos; identificar siempre qué datos e interacciones son reales.
- **Calibración tipográfica en todas las pruebas editoriales.** Alternar títulos
  y bajadas desde `app/content/typography-calibration.ts` mediante sus helpers,
  también al diseñar detalles y portadas de sección. Probar los textos largos
  en mobile y desktop; la regla completa está en [DESIGN.md](./DESIGN.md#títulos-y-bajadas-para-todas-las-pruebas).
- **No inventar el CMS.** El catálogo conserva acuerdos editoriales futuros,
  pero las tecnologías, APIs y pantallas internas del proveedor aún no están
  definidas. Diseñar cada página pública pendiente sin convertir una propuesta
  visual en requisito técnico no aprobado.

## Navegador compartido de pruebas

- Usar exclusivamente Chrome DevTools MCP conectado a
  `http://127.0.0.1:9222`, según [BROWSER_TESTING.md](./BROWSER_TESTING.md).
- Antes de abrir una pestaña, listar las existentes y reutilizar la del
  proyecto. No lanzar Chrome, Chromium, Playwright ni navegadores headless
  adicionales, tampoco mediante capturas por CLI o el navegador integrado del
  editor.
- Si el navegador compartido no está disponible, informar el bloqueo y pedir
  que se abra; no iniciar otro como alternativa. No iniciar servidores de
  desarrollo duplicados.
- Un solo agente controla cada pestaña. En tareas simultáneas, usar pestañas
  distintas dentro del mismo Chrome y coordinar su propiedad.
- Cerrar solo las pestañas temporales creadas por la tarea. No cerrar el Chrome
  compartido al terminar, salvo pedido explícito del usuario.
- No visitar cuentas personales ni sitios sensibles en el perfil de pruebas.

## Al cerrar un tramo de trabajo

Actualizar [PROGRESS.md](./PROGRESS.md) según *Cómo mantener este archivo*:
registrar el estado, las decisiones aprobadas y lo que falta, no una lista de
commits. Si se aprueba una página nueva, incorporar a [DESIGN.md](./DESIGN.md)
solo las reglas visuales que deban guiar trabajos posteriores.

## Validación

```bash
npx tsc --noEmit   # tipos
npm run build      # build de producción
```

Ambos deben pasar antes de dar por terminado un cambio. Comprobar también los
enlaces de la documentación y `git diff --check` cuando se editen documentos.
