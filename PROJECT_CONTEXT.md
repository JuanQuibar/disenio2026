# Contexto vigente — Rediseño Diario UNO

Este documento explica el propósito y la arquitectura **actuales** del
prototipo. El estado de cada pantalla está en [PROGRESS.md](./PROGRESS.md), las
reglas visuales en [DESIGN.md](./DESIGN.md) y la memoria de las iteraciones en el
[archivo histórico](./docs/historico/2026-10-26/PROJECT_CONTEXT.md).

## Propósito y etapas

El proyecto presenta una visión de rediseño para `diariouno.com.ar`. El
directorio aprobó el **look and feel y la estructura de la portada**. La home
responsive `/` materializa esa decisión. La portada de sección genérica
`/portada-seccion` también tiene diseño aprobado en mobile y desktop. Queda
diseñar el resto de las páginas públicas enumeradas en PROGRESS; la página
existente `/detalle-nota` es un borrador revisable.

Después del diseño y la aprobación de esas páginas, el proveedor del CMS usará
el repositorio como referencia para reconstruir el sitio en su propia
tecnología, tanto en frontend como en backend e interfaz editorial. **Next.js
no es una exigencia para el proveedor.** No se presupone si utilizará PHP,
Angular, Bootstrap u otro stack, ni se diseñan ahora sus pantallas internas. El
[catálogo de formatos de portada](./CATALOGO_FORMATOS_PORTADA.md) conserva los
acuerdos editoriales existentes para ese traspaso futuro.

La intención editorial de la portada es combinar credibilidad y lectura clara
con video vertical y consumo de contenido sin salir de la home cuando la
interacción lo permite. Ese principio de portada no impone la composición de
un detalle de nota, una registración o una página de error.

## Estado del prototipo

| Ruta | Estado y uso |
|---|---|
| `/` | Portada aprobada, funcional y responsive. Referencia principal para páginas nuevas. |
| `/opcion` | Variante anterior de la home, disponible como referencia secundaria. Comparte toda la experiencia mobile. |
| `/detalle-nota` | Borrador de nota común con contenido de muestra; requiere revisión visual y funcional. |
| `/portada-seccion` | Plantilla genérica aprobada en mobile y desktop para secciones generales; [ficha visual](./PORTADA_SECCION.md). |

No existen todavía rutas propias para live blog, videonota, los detalles de
Ovación y Opinión, portada de Ovación ni registración. No hay una página 404
personalizada. Las antiguas `/desktop`, `/desktop2` y `/opcion-2` fueron
retiradas; solo aparecen en el archivo histórico.

La portada usa un único árbol mobile-first. El cambio visual a desktop comienza
en **1024 px**. `/` y `/opcion` comparten mobile, la cobertura Live/Muy
Destacada y los módulos desde MAM hasta el footer. Su diferencia funcional de
presentación está en el tramo editorial superior desktop y el header. En `/`,
Apertura y Principales ocupan ocho columnas y el lateral con AHORA, publicidad,
encuesta y AVANCES DE LA IA ocupa cuatro. El
[catálogo](./CATALOGO_FORMATOS_PORTADA.md) describe los módulos, cupos,
interacciones y capturas de la home sin duplicarlos aquí.

Ovación tiene una identidad propia aprobada en ambos anchos: panel oscuro,
agenda deportiva, ticker y titulares sans en mayúsculas. La versión de Ovación
de Stitch no es la referencia aprobada para este módulo. El gráfico interactivo
y el espacio de juegos muestran reservas o ejemplos temporales en la home; no
son productos terminados.

## Arquitectura del repositorio

El prototipo está construido con Next.js 16 (App Router), React 19, TypeScript,
Tailwind CSS 4 y Swiper. Estas son herramientas **del prototipo**, no un
contrato tecnológico de producción.

- `app/(sitio)/` agrupa las cuatro rutas actuales bajo un header y footer
  compartidos. El layout raíz define idioma, fuentes y estilos globales.
- Las páginas de home importan solo `HomeWrapper`: `/` usa la variante
  `alternativa` y `/opcion` la variante `original`. `HomeWrapper` compone las
  secciones una vez, sin duplicar reproductores por viewport.
- Cada sección que obtiene datos expone un `-wrapper.tsx` como puerta de
  entrada. El wrapper resuelve la fuente y entrega componentes presentacionales;
  una página no importa cards, carruseles ni servicios directamente. Si una
  fuente no tiene datos válidos, el wrapper devuelve `null` y no deja un bloque
  vacío.
- Los servicios de `app/services/` registran fallos de red o falta de clave y
  devuelven `[]`; no lanzan excepciones para ese caso. Las fotos editoriales
  seleccionadas para ambas homes están en `app/content/editorial-photos.ts`.
- MAM, Shorts y Branded tienen fuentes y carruseles propios. Comparten
  primitivas visuales y de modal en `videos-shared/`, no un reproductor
  universal. Cada video se identifica por su `id` estable, nunca por la posición
  del slide. JW Player está dado de baja y no debe reintroducirse.
- `/detalle-nota` contiene hoy una maqueta estática con un wrapper MAM. Sus
  elementos sirven para inventariar lo existente, no para declarar aprobado su
  diseño ni para definir todas las variantes de nota.
- `/portada-seccion` obtiene su selección editorial de muestra a través de
  `PortadaSeccionWrapper`. La página combina una nota principal y diez notas
  paginadas; desktop y mobile presentan los mismos contenidos con composiciones
  diferentes. Los anuncios del lateral son reservas visuales.

Los textos, titulares, anuncios y fotografías editoriales son muestras, salvo
las fuentes externas identificadas: MAM consume una playlist pública, Shorts
consulta YouTube con clave, y algunas transmisiones y widgets usan servicios
externos. Branded utiliza videos de Pexels como muestra. Las capacidades
visuales sin acción real —por ejemplo, ciertos hovers o botones— no deben
presentarse como funciones de producción.

## Referencias para diseñar lo que falta

1. **Portada `/` implementada:** fuente principal de identidad, componentes y
   comportamiento responsive aprobados. Consultar también [DESIGN.md](./DESIGN.md)
   y las capturas del [catálogo](./CATALOGO_FORMATOS_PORTADA.md).
2. **Stitch:** referencia visual complementaria para el desktop de la portada.
   El proyecto `Diario UNO Desktop Redesign` tiene el ID
   `projects/8393196556759612477`; su única pantalla disponible es
   `Diario UNO — Portada Desktop 2026`, ID
   `projects/8393196556759612477/screens/ff4fca9cd22a49c8b6ac9350425059ec`.
   También existe la [publicación de referencia](https://2eaa6e7d-diario-uno-desktop-redesign.netlify.app/#).
   Stitch no aporta diseños aprobados de detalles, secciones, registración o
   404. Ante diferencias, prevalece la portada local aprobada y las decisiones
   posteriores documentadas.
3. **Detalle actual:** usar `/detalle-nota` solo como borrador para revisar
   contenido y elementos, no como patrón visual definitivo.
4. **Portada de sección genérica:** usar
   [PORTADA_SECCION.md](./PORTADA_SECCION.md) y `/portada-seccion` como patrón
   aprobado para portadas generales de sección en ambos anchos.

Si se crean nuevas pantallas en Stitch o se aprueba una página adicional,
registrar su identificador, estado y decisiones en la documentación activa.
No guardar credenciales de Stitch ni usar el proyecto remoto como destino de
cambios sin una tarea explícita.

Las instrucciones operativas —trabajo sin worktrees, navegador compartido y
validación— están en [AGENTS.md](./AGENTS.md). La instalación y las variables
de entorno están en [README.md](./README.md).
