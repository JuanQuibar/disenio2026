# PROGRESS — Bitácora y Backlog

> **Para qué sirve este archivo**
> Es el punto de entrada para retomar el trabajo en una sesión nueva o con otro
> agente. Responde a: de dónde venimos, dónde estamos y qué sigue.
>
> - ¿Qué es el proyecto y cómo está arquitecturado? → [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md)
> - ¿Cómo levanto el proyecto? → [README.md](./README.md)

---

## 📍 Estado actual

Prototipo mobile-first funcionando. `npm run build` y `npx tsc --noEmit` pasan sin
errores. La home renderiza los **tres carruseles de video definitivos** (MAM,
Shorts y Branded), validados en viewport 414×896 sin errores de consola.

No hay trabajo a medio terminar: el último tramo cerró completo.

---

## ✅ Hecho

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

Nada en curso.

---

## ⏭️ Siguiente

### Modal fullscreen con scroll vertical  ← **prioridad**

Al tocar un video de un carrusel, abrir un modal a pantalla completa con ese video,
y permitir pasar a los demás videos **del mismo carrusel** con desplazamiento
vertical (patrón TikTok/Reels).

**Diseño acordado.** Un shell compartido + un modal por fuente. No un player
universal con ramas `if (source === ...)`.

```text
videos-shared/
└── video-modal-shell.tsx    → fullscreen, cierre, navegación vertical,
                                foco y bloqueo del scroll del documento

carrusel-mam/mam-modal.tsx         → reproduce <video> mp4
branded/branded-modal.tsx          → reproduce <video> mp4
youtube-shorts/…-modal.tsx         → reproduce iframe
```

**Contrato propuesto** (se prefiere `activeVideoId` sobre un índice, porque es
estable si cambia el orden):

```ts
type VideoModalProps<TVideo> = {
  videos: TVideo[];
  activeVideoId: string;
  onClose: () => void;
};
```

**Precondiciones ya resueltas** por la reorganización: cada video tiene `id`
estable, los datos son objetos (no `string[]`) y la lógica del modal no vive en
`page.tsx`.

**A tener en cuenta**: el estado del modal debe vivir en el carrusel o en un
coordinador, no en el wrapper (que es Server Component). Al abrir el modal hay que
pausar el video del carrusel para no duplicar reproducción.

---

## 📋 Backlog

- **Versión desktop.** Hoy solo existe mobile. Queda a cargo de otro agente. Los
  componentes ya conservan los puntos de extensión (`slidesPerView`, breakpoints,
  aspect ratios) para no bloquearla.
- **Verticales branded adicionales.** `branded-content.ts` ya soporta `comidas` y
  `autos`; agregar más es declarativo. Definir cuáles se muestran en la
  presentación.
- **Ads nativos en el feed** (programáticos).
- **Títulos de maqueta.** Branded usa copys ficticios de `branded-content.ts`;
  reemplazar cuando haya contenido comercial real.

---

## ❓ Decisiones pendientes

| Tema | Pregunta abierta |
|---|---|
| Alcance del modal | ¿El modal aplica a los tres carruseles o solo a MAM y Branded? |
| Branded en producción | ¿De dónde vendrá el contenido brandeado real: CMS, anunciante o MAM? |
| Orden en la home | El orden actual de los tres carruseles es provisorio. |

### Decisiones ya resueltas

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
