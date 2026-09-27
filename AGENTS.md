# Instrucciones para agentes

Prototipo de rediseño de **Diario UNO**. Next.js 16 · React 19 · Tailwind 4 · Swiper.

## Antes de tocar código, leé en este orden

1. **[PROGRESS.md](./PROGRESS.md)** — de dónde venimos, dónde estamos y qué sigue.
   Empezá acá siempre.
2. **[PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md)** — qué es el proyecto, cómo está
   arquitecturado y qué decisiones ya están tomadas.
3. **[README.md](./README.md)** — cómo levantarlo y qué variables de entorno pide.

## Reglas que no se negocian

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

## Al cerrar un tramo de trabajo

Actualizá [PROGRESS.md](./PROGRESS.md) siguiendo su sección *Cómo mantener este
archivo*: define qué se registra y qué no. No es un log de commits.

## Validación

```bash
npx tsc --noEmit   # tipos
npm run build      # build de producción
```

Ambos deben pasar antes de dar por terminado un cambio.
