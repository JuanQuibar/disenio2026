# PROGRESS — Estado vigente y próximos diseños

> Punto de entrada para retomar el proyecto. Describe qué está aprobado, qué existe
> solo como maqueta y qué falta diseñar. La bitácora completa anterior está en el
> [archivo histórico](./docs/historico/2026-10-26/PROGRESS.md).
>
> Después, leer [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) para el propósito y la
> arquitectura, [README.md](./README.md) para ejecutar el prototipo y
> [DESIGN.md](./DESIGN.md) antes de trabajar en una interfaz.

## Estado actual — 2026-10-26

El **directorio aprobó el look and feel y la estructura de la portada**. La
portada vigente es `/`, responsive y consolidada en mobile y desktop. Desde
1024 px usa la composición editorial 8/4; la experiencia mobile es compartida
con `/opcion`. Esta última ruta conserva una variante anterior de la home como
**referencia secundaria** y no define el diseño de las páginas nuevas.

La próxima etapa del prototipo es diseñar y ajustar las demás páginas públicas.
La portada de sección genérica `/portada-seccion` quedó **aprobada en desktop y
mobile**. `/detalle-nota` ya existe, pero su composición es un **borrador
revisable**, no un detalle aprobado. Las demás familias pendientes aún no
tienen ruta ni diseño en este repositorio. No hay un orden obligatorio: se
elige la próxima pantalla según la necesidad de cada sesión.

Cuando las páginas estén diseñadas y aprobadas, el proveedor del CMS recibirá el
repositorio como referencia para reconstruir el producto en su tecnología,
incluidos frontend, backend e interfaz editorial. Este código es un prototipo de
diseño, no la implementación de producción. No se conoce ni se presupone el
stack del proveedor.

## Inventario de pantallas

| Familia | Estado en este repositorio | Referencia para continuar |
|---|---|---|
| Portada `/` | Aprobada por el directorio | Fuente implementada del lenguaje visual y responsive. |
| Home `/opcion` | Variante existente, secundaria | Consulta histórica; no condiciona páginas nuevas. |
| Detalle de nota común `/detalle-nota` | Borrador revisable | Revisar sus elementos y rediseñar lo necesario a partir de la portada. |
| Detalle live blog | Pendiente de diseño | Definir su experiencia específica cuando se aborde. |
| Videonota | Pendiente de diseño | Definir la relación entre video y lectura cuando se aborde. |
| Detalle de nota de Ovación | Pendiente de diseño | Tomar la identidad deportiva aprobada en la home. |
| Detalle de opinión | Pendiente de diseño | Tomar la identidad de Opinión aprobada en la home. |
| Portada de sección genérica `/portada-seccion` | Aprobada en desktop y mobile | [Composición, capturas y alcance funcional](./PORTADA_SECCION.md); plantilla para secciones generales. |
| Portada de Ovación | Pendiente de diseño | Tratar su identidad visual diferenciada. |
| Registración | Pendiente de diseño | Acordar contenido y estados antes de fijar su experiencia. |
| Página 404 | Pendiente de diseño | Diseñar una salida coherente con el sitio. |

Este es el inventario inicial; pueden agregarse otras pantallas. Una fila pasa a
«aprobada» solo después de una aprobación explícita de su diseño. Los posibles
flujos de autenticación, publicación o actualización de contenido no se infieren
de la maqueta.

## Referencias y decisiones vigentes

- La portada `/` es la referencia implementada. [DESIGN.md](./DESIGN.md) resume
  su lenguaje y cómo extenderlo. El [catálogo de formatos](./CATALOGO_FORMATOS_PORTADA.md)
  reúne los 15 formatos, cupos y capturas de la portada aprobada.
- La [portada de sección genérica](./PORTADA_SECCION.md) comparte contenidos en
  ambos anchos, con composición 8/4 y anuncios de muestra en desktop, y una
  lista vertical con fotos a la derecha en mobile. El rótulo «Nombre sección»
  sigue siendo un marcador de la maqueta.
- Stitch contiene una pantalla de **portada desktop**, útil como referencia
  visual. No contiene diseños de las páginas pendientes. Cuando difieran, las
  decisiones aprobadas e implementadas en `/` prevalecen sobre esa referencia.
- La home conserva muestras deliberadas: el gráfico interactivo responsive aún
  no existe; mobile reserva su espacio y desktop muestra temporalmente el video
  de Nepal. El espacio de juegos muestra Sudoku en mobile y una reserva en
  desktop. Estas muestras no definen el producto final de gráficos o juegos.
- Los textos y fotografías editoriales son de muestra. MAM consume una playlist
  pública; Shorts y algunos widgets dependen de servicios externos. No presentar
  los datos ficticios como hechos ni las interacciones visuales como funciones
  de producción.

## Pendientes posteriores al diseño

Estos asuntos no bloquean el diseño de las páginas del inventario y requieren
una definición propia antes de producir el sitio:

- Reconstrucción por el proveedor del CMS, con su modelo de contenido, interfaz
  editorial, integraciones, autenticación y tecnología por acordar. El catálogo
  de portada conserva los **acuerdos editoriales existentes** para esa etapa;
  esta revisión no agrega requisitos técnicos del CMS.
- Contenido real para branded, anuncios nativos, gráfico interactivo y producto
  de juegos. La maqueta conserva fuentes y reservas temporales.
- Revisión del audio inicial de Shorts en iOS, contraste de algunos rótulos
  auxiliares y refinamientos opcionales del modal. Los antecedentes y motivos
  están en la [bitácora histórica](./docs/historico/2026-10-26/PROGRESS.md).

## Cómo mantener este archivo

Al cerrar un tramo de diseño, actualizar el estado de la pantalla, su decisión
aprobada y el enlace a la especificación visual correspondiente. Registrar aquí
solo cambios que otra persona necesite entender antes de continuar: decisiones,
restricciones y asuntos abiertos. Los ajustes menores y la secuencia de commits
pertenecen a Git. Si una decisión reemplaza otra, mantener vigente solo la nueva
y conservar el razonamiento anterior en el archivo histórico o en Git.

Las reglas operativas para agentes están en [AGENTS.md](./AGENTS.md). No crear
worktrees para este proyecto.
