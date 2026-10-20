# Instrucciones para agentes

Prototipo de rediseño de **Diario UNO**. Next.js 16 · React 19 · Tailwind 4 · Swiper.

## Antes de tocar código, leé en este orden

1. **[PROGRESS.md](./PROGRESS.md)** — de dónde venimos, dónde estamos y qué sigue.
   Empezá acá siempre.
2. **[PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md)** — qué es el proyecto, cómo está
   arquitecturado y qué decisiones ya están tomadas.
3. **[README.md](./README.md)** — cómo levantarlo y qué variables de entorno pide.

Para trabajar en la interfaz, consultá también [DESIGN.md](./DESIGN.md): reúne
las decisiones visuales y los patrones de componentes de la versión mobile.

## Reglas que no se negocian

- **Sin worktrees.** Trabajar siempre en la carpeta principal `uno-2026-1`.
  No crear, solicitar ni usar worktrees para este proyecto, tampoco al abrir
  sesiones o delegar tareas. Si una sesión arranca en un worktree, informar
  el conflicto y detener las modificaciones: no editar allí ni migrar cambios
  automáticamente. Al configurar una sesión, elegir carpeta/workspace sin
  aislamiento (`isolation: false` si la herramienta usa un booleano).
  No eliminar worktrees existentes sin autorización y revisión de su contenido.
- **`page.tsx` importa wrappers.** Todo componente que traiga datos expone un
  archivo `-wrapper.tsx` que es su única puerta de entrada: nunca importar cards,
  carruseles ni servicios directamente desde una página. Es una convención
  deliberada, no una casualidad. Las excepciones son componentes puramente
  presentacionales sin fetch (`MuyDestacada`, `Footer`, `BannerPublicitario`);
  si agregás uno que traiga datos, dale su wrapper.
- **Mobile-first.** Solo existe la versión mobile. No romper los puntos de
  extensión que habilitan el desktop más adelante.
- **Los servicios nunca lanzan excepciones.** Ante un error de red o una API key
  faltante degradan a `[]`; el wrapper devuelve `null` y la sección desaparece.
- **Los videos se identifican por `id`, no por índice del slide.**
- **JW Player está dado de baja.** No reintroducirlo: se terminó el contrato con
  el proveedor.
- **Contenido ficticio.** Los textos y las imágenes son de muestra.

La lista completa está en la sección *Convenciones a respetar* de
[PROGRESS.md](./PROGRESS.md).

## Navegador compartido de pruebas

- Usar exclusivamente Chrome DevTools MCP conectado a
  `http://127.0.0.1:9222`, según la [guía de pruebas](./BROWSER_TESTING.md).
- Antes de abrir una pestaña, listar las existentes y reutilizar la del proyecto.
  No lanzar Chrome, Chromium, Playwright ni navegadores headless adicionales,
  tampoco mediante capturas por CLI o el navegador integrado del editor.
- Si el navegador compartido no está disponible, informar el bloqueo y pedir
  que se abra; no iniciar otro como fallback. No iniciar servidores de desarrollo
  duplicados.
- Un solo agente controla cada pestaña. En tareas simultáneas, usar pestañas
  distintas dentro del mismo Chrome y coordinar su propiedad.
- Cerrar solo las pestañas temporales creadas por la tarea. No cerrar el Chrome
  compartido al terminar, salvo pedido explícito del usuario.
- No visitar cuentas personales ni sitios sensibles en el perfil de pruebas.

## Al cerrar un tramo de trabajo

Actualizá [PROGRESS.md](./PROGRESS.md) siguiendo su sección *Cómo mantener este
archivo*: define qué se registra y qué no. No es un log de commits.

## Validación

```bash
npx tsc --noEmit   # tipos
npm run build      # build de producción
```

Ambos deben pasar antes de dar por terminado un cambio.
