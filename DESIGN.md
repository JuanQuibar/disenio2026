# Guía visual vigente — Diario UNO 2026

El directorio aprobó el **look and feel y la estructura de la portada `/`**. La
portada de sección genérica `/portada-seccion` también quedó aprobada en desktop
y mobile. Esta guía reúne las decisiones visuales que sirven para diseñar otras
páginas del sitio. No convierte una composición de home en plantilla obligatoria
para notas o formularios. El estado de cada página está en
[PROGRESS.md](./PROGRESS.md); la especificación y las capturas de los 15
formatos de home están en el
[catálogo de portada](./CATALOGO_FORMATOS_PORTADA.md). La versión detallada
anterior de este documento permanece en el
[archivo histórico](./docs/historico/2026-10-26/DESIGN.md).

## Referencias y criterio de uso

1. **`/` es la referencia principal** porque es la portada aprobada e
   implementada en mobile y desktop. Inspeccionar su estado actual antes de
   derivar componentes, colores o comportamiento.
2. **Stitch complementa la lectura visual del desktop.** El proyecto contiene
   una pantalla de portada desktop, identificada en
   [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md#referencias-para-diseñar-lo-que-falta).
   No hay en Stitch diseños de los detalles de nota, portadas de sección,
   registración o 404. No copiar literalmente elementos que contradigan la
   portada local aprobada.
3. **`/opcion` es una variante secundaria** de la home. Sirve para consultar
   una decisión anterior; las páginas nuevas toman `/` como base.
4. **`/detalle-nota` es un borrador revisable.** Su estructura actual puede
   ayudar a listar contenido y acciones existentes, pero no define el estilo
   aprobado de los futuros detalles.
5. **`/portada-seccion` es el patrón aprobado para secciones generales.** La
   [ficha de la portada de sección](./PORTADA_SECCION.md) registra su composición,
   capturas y límites del prototipo.

Para un cambio nuevo, distinguir siempre entre **aprobado**, **muestra temporal**
y **propuesta por revisar**. No presentar un control meramente visual o un dato
ficticio como funcionalidad cerrada.

## Identidad compartida

Diario UNO es un medio periodístico digital de Mendoza. El diseño busca
**credibilidad, seriedad y modernidad** con jerarquía editorial clara, medios
visuales de calidad y movimiento discreto. La home favorece el consumo directo
de resúmenes, video y transmisiones; cada página nueva debe resolver su propia
lectura y navegación según su propósito.

| Recurso | Referencia aprobada | Uso orientativo |
|---|---|---|
| Azul institucional | `#1c69a8` | Marca, enlaces, acentos y foco. |
| Carbón editorial | `#111827` | Paneles oscuros y títulos sobre fondo claro. |
| Rojo de actualidad | `#dc2626` / `#ef4444` | En vivo, alertas y acentos deportivos. |
| Fondo mobile de home | `#000000` | Marco de la portada mobile; no obliga a usar negro en todas las páginas. |
| Fondo desktop de home | `#f1f5f9` | Lienzo de la portada con módulos blancos. |
| Superficie de contenido | `#ffffff` | Tarjetas, paneles y espacios de lectura. |
| Titulares editoriales | Playfair Display | Noticias generales y jerarquía principal. |
| Interfaz y cuerpo | Geist | Bajadas, navegación, controles y deportes. |
| Datos compactos | Geist Mono | Relojes y lecturas numéricas cuando corresponda. |

Ovación es una excepción visual deliberada: su módulo aprobado utiliza panel
`#111827`, logo propio, detalles rojos y titulares Geist en mayúsculas. Una
portada o nota de Ovación debe partir de esa identidad, no del diseño deportivo
que aparecía en la antigua referencia de Stitch. Opinión se distingue en la
home por retratos de autores y titulares serif en itálica; sus detalles aún
requieren diseño propio.

## Responsive y composición

- Diseñar **mobile primero** y resolver también desktop. En el prototipo, el
  cambio visual principal ocurre a **1024 px**; hasta 1023 px se conserva la
  estructura mobile. Comprobar el corte en 1023/1024, no solo los extremos.
- La home usa márgenes de 8 px en mobile y 32 px desde desktop, con módulos
  blancos sobre el lienzo. Su ancho máximo es 1360 px. La cabecera de `/`
  distribuye Apertura y Principales en **8 columnas** y el lateral en **4**, con
  24 px de separación. Es una composición aprobada de portada, no una regla
  automática para otras páginas.
- El header y footer pertenecen al marco compartido del sitio. En desktop, el
  header inicia con franja de servicios y barra principal; al desplazarse la
  página se compacta y permanece la barra principal. Las páginas nuevas deben
  comprobar su contenido bajo ese header en ambos estados. Mobile usa el
  header compacto existente.
- Los módulos editoriales de la home usan superficies de radio cercano a 8 px,
  separación clara entre secciones y fotos recortadas según su función. Elegir
  proporciones a partir del contenido de cada página; las fotos de retrato,
  noticias horizontales y video vertical no son intercambiables.
- Los titulares y bajadas de noticias en la home fueron probados con textos
  largos y se muestran completos en sus posiciones editoriales principales.
  En páginas nuevas, definir la jerarquía tipográfica para lectura prolongada
  sin cortar el título principal por conveniencia del layout.

El [catálogo](./CATALOGO_FORMATOS_PORTADA.md) contiene la composición,
cantidad de piezas, diferencias responsive e interacciones de cada formato de
portada. Las capturas allí enlazadas muestran la implementación aprobada.

## Portada de sección genérica

- Política, Sociedad, Economía y otras secciones generales comparten la
  plantilla de `/portada-seccion`: nombre de sección azul `#1c69a8` en Geist
  mayúsculas y peso 800, acompañado por una línea azul. El nombre es la
  jerarquía principal de la página; no agregar un cabezal «Principales» antes
  del listado.
- En desktop, el cabezal, la nota principal con formato de Apertura y la grilla
  de dos columnas ocupan el área editorial de ocho columnas. El lateral de
  cuatro columnas aloja dos anuncios 300 × 250 sticky, fuera del cabezal.
- En mobile, cabezal y notas forman un contenedor blanco. La principal sigue el
  formato de Política mobile de la home; las notas del listado llevan título y
  firma a la izquierda, foto 4:3 a la derecha y más aire vertical entre filas.
  Mantener la misma selección de noticias que en desktop y paginar después de
  diez notas.

Las medidas, capturas y funciones efectivas de esta página están en
[PORTADA_SECCION.md](./PORTADA_SECCION.md). Las fotos y anuncios de la maqueta
no son contenido final.

## Patrones de interacción que ya existen

- Los carruseles MAM, Shorts y Branded abren un modal vertical. En mobile ocupa
  el viewport; desde 1024 px centra el video 9:16 sobre la home atenuada. Los
  controles, el sonido y la carga de player dependen de cada fuente. No usar
  JW Player ni asumir que todas las fuentes se comportan igual.
- Última hora mobile y el lateral AHORA/IA permiten leer resúmenes sin salir de
  la portada, con cierre explícito, Escape y retorno del foco. Esta solución
  pertenece a esos módulos; no reemplaza por sí sola una página de detalle.
- La encuesta, varios botones, hovers y anuncios de la maqueta muestran estados
  visuales sin persistencia o destino real. Al diseñar otra página, identificar
  qué acción funcionará en el prototipo y qué queda representado solamente.
- Los indicadores en vivo y el ticker de Ovación respetan la preferencia de
  movimiento reducido. Toda nueva interacción debe conservar controles
  identificables, foco visible, navegación con teclado y texto alternativo para
  medios informativos.

## Cómo diseñar una página pendiente

1. Elegir una familia del [inventario](./PROGRESS.md#inventario-de-pantallas)
   sin imponer un orden general. Revisar `/` en mobile y desktop, su formato
   relacionado en el catálogo y la pantalla de Stitch para el lenguaje desktop.
   Si existe una maqueta local de esa familia, registrar qué partes son
   reutilizables y cuáles son solo muestra.
2. Definir para esa página su propósito editorial, contenido necesario,
   jerarquía, navegación, medios, anuncios, interacciones y estados visibles.
   Marcar las preguntas que requieran una decisión del usuario; no completar
   con supuestos de CMS, autenticación o datos en tiempo real.
3. Proponer mobile y desktop con un criterio compartido de marca, pero con una
   composición adecuada a la página. Revisar textos largos, espacios vacíos,
   tamaño de medios, desplazamiento, header fijo, teclado y movimiento reducido.
4. Registrar la solución específica **después de su aprobación**: actualizar
   su estado en PROGRESS y añadir aquí únicamente las reglas visuales que
   deban respetar diseños posteriores. Si se usa una nueva pantalla de Stitch,
   guardar su identificación y distinguir propuesta de decisión aprobada.

Esta guía describe el prototipo público. La implementación posterior del
proveedor del CMS se documentará cuando estén terminadas las páginas; sus
herramientas, modelo de datos y pantallas internas no se deducen de estos
patrones visuales.
