# Memoria del Proyecto: UNO 2026 (Rediseño Diario UNO)

## 🎯 Objetivo Principal
Crear un prototipo de alto impacto ("Wow Effect") para el rediseño de `diariouno.com.ar`. Este prototipo servirá para presentar la visión a los accionistas.
*   **Fase actual**: Prototipo con contenido ficticio (Lorem Ipsum + Pexels) enfocado en UI/UX Mobile First.
*   **Fase futura**: Posible integración con API real y entrega a proveedores para implementación final.

## 💡 Filosofía de Diseño (Core Concepts)
1.  **Consumo en Home (Zero-Click)**:
    *   Romper el paradigma tradicional de "clic para leer".
    *   El usuario debe poder consumir la mayor cantidad de contenido directamente en la Home.
    *   Menos banners intrusivos, más contenido fluido.

2.  **Video First & Formato Vertical**:
    *   Fuerte presencia de video en la Home.
    *   Enfoque en hábitos de consumo tipo TikTok/Reels.
    *   Integración de transmisiones en vivo (Canal 7, Radio Nihuil).

3.  **Estética**:
    *   **Valores**: Credibilidad, Seriedad, Modernidad.
    *   **Estilo**: Premium, limpio, animaciones suaves.
    *   **Diseño**: Mobile First.

## 🛠 Stack Tecnológico
*   **Framework**: Next.js 16 (App Router).
*   **Lenguaje**: TypeScript.
*   **Estilos**: Tailwind CSS 4.
*   **UI Libraries**: Swiper (carruseles), @heroicons/react.
*   **React**: v19.

## 🏗 Arquitectura del Proyecto

### Estructura de Directorios (`app/`)
*   `page.tsx`: Página principal. Realiza fetch de datos en el servidor (SSR) y distribuye a los componentes.
*   `layout.tsx`: Layout global (fuentes, metadatos).
*   `globals.css`: Estilos globales y configuración de Tailwind.
*   `services/`: Capa de datos.
    *   `fetchs.ts`: Simulación de llamadas a API (retorna datos mockeados de Pexels/Lorem Ipsum).

### Componentes (`app/components/`)
Organizados por funcionalidad/sección:

*   **`muy-destacada/`**: Noticia principal con gran impacto visual.
*   **`principales/`**:
    *   `principales-wrapper.tsx`: Contenedor de la sección.
    *   `carrusel-swiper.tsx`: Carrusel interactivo de noticias destacadas.
*   **`carrusel-videos/`**:
    *   `videos-wrapper-carrusel.tsx`: Contenedor.
    *   `videos-card.tsx`: Tarjeta de video vertical. **Optimizado con IntersectionObserver** (solo reproduce cuando es visible).
*   **`live/`**: Transmisiones en vivo.
    *   `canal7-live.tsx` & `radio-nihuil-live.tsx`: Integraciones de YouTube.
    *   **Optimización**: Patrón "Click-to-Load" (Fachada). Carga una imagen estática ligera y solo inyecta el iframe pesado al hacer clic en Play.
*   **`servicios/`**: Widgets de servicios (clima, cotizaciones, etc.).
*   **`chat-bot/`**: Botón flotante de asistencia.
*   **`footer/`**: Pie de página.
*   **`header.tsx`**: Cabecera de navegación.

## ⚡ Optimizaciones de Rendimiento (Performance & UX)
1.  **Lazy Loading de Videos**:
    *   Los videos HTML5 en el carrusel solo se reproducen cuando entran en el viewport (IntersectionObserver).
    *   Se pausan automáticamente al salir de pantalla para ahorrar batería y CPU.
2.  **Fachada para YouTube (Click-to-Load)**:
    *   Evita la carga inicial de ~1MB+ de JS de YouTube por cada video.
    *   Mejora drásticamente el Time-to-Interactive (TTI) y el First Contentful Paint (FCP).
    *   Previene el consumo de datos innecesario en móviles.

## ❓ Preguntas Pendientes / Definiciones
*   **Monetización**: Ads nativos en el feed programáticos.
*   **Navegación**: Definir flujo de videos inmersivos.
*   **SSR**: Se prioriza SSR para el contenido inicial, hidratando solo las islas interactivas (carruseles, videos).
