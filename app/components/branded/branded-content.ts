import type { BrandedVerticalConfig } from "@/app/services/videos/pexels";

export interface BrandedVertical extends BrandedVerticalConfig {
  /** Cabezal de la seccion en la home. */
  titulo: string;
  logoSrc?: string;
  logoAlt?: string;
  /** Copys de muestra: reemplazan al contenido comercial real del anunciante. */
  copys: string[];
}

/**
 * Verticales comerciales demostrables en el prototipo.
 * Cambiar de vertical no requiere tocar los componentes: solo la vertical activa.
 */
export const BRANDED_VERTICALES = {
  comidas: {
    query: "food",
    category: "Comidas",
    brandName: "Qué comer",
    sponsorLabel: "Contenido patrocinado",
    titulo: "Branded",
    logoSrc: "/a-comer.png",
    logoAlt: "Qué comer",
    copys: [
      "Tres recetas rápidas para resolver la cena de esta semana",
      "El secreto para que la masa casera quede crocante",
      "Cómo armar una picada mendocina para seis personas",
      "La técnica simple para que las verduras no pierdan color",
      "Postres de estación con menos azúcar y mismo sabor",
      "Qué vino elegir según el plato principal",
      "El paso a paso del pan de masa madre sin complicaciones",
      "Ideas de viandas frías para los días de calor",
      "Cómo aprovechar las sobras sin repetir el mismo plato",
      "Guarniciones que transforman una comida sencilla",
    ],
  },
  autos: {
    query: "car",
    category: "Autos",
    brandName: "Motores UNO",
    sponsorLabel: "Contenido patrocinado",
    titulo: "Branded",
    copys: [
      "Qué revisar antes de salir a la ruta en verano",
      "Cinco modelos que dominan el mercado mendocino",
      "Cuánto cuesta mantener un híbrido en la provincia",
      "El detalle que define la seguridad de un usado",
      "Neumáticos: cómo leer el desgaste a tiempo",
      "Tecnologías de asistencia que ya vienen de serie",
      "Consumo real versus consumo declarado",
      "Qué mirar en la primera inspección de un 0 km",
      "Carga rápida: el mapa que cambia los viajes",
      "El mantenimiento que más se posterga y más cuesta",
    ],
  },
} satisfies Record<string, BrandedVertical>;

/** Vertical mostrada actualmente en la home del prototipo. */
export const BRANDED_VERTICAL_ACTIVA: BrandedVertical =
  BRANDED_VERTICALES.comidas;
