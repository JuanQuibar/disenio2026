const pexelsPhoto = (id: number, alt: string) => ({
  src: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb`,
  alt,
});

// Shared editorial selection for the responsive homes.
export const editorialPhotos = {
  apertura: pexelsPhoto(
    10922964,
    "Trabajador cosechando uvas en un viñedo de Mendoza, con la cordillera de fondo",
  ),
  principales: [
    pexelsPhoto(16894035, "Feriante en un mercado de Mendoza"),
    pexelsPhoto(32441027, "Personas en la feria de Recoleta, Buenos Aires"),
  ],
  politica: pexelsPhoto(
    36480615,
    "Mujer en una manifestación frente al Congreso argentino",
  ),
  ovacion: pexelsPhoto(32179264, "Futbolista en un partido local argentino"),
  sociedad: pexelsPhoto(
    20495590,
    "Participantes de un desfile tradicional en Mendoza",
  ),
  sociedadSecundaria: pexelsPhoto(
    17914082,
    "Visitantes en el mercado de San Telmo, Buenos Aires",
  ),
  gente: [
    pexelsPhoto(32701034, "Mujer caminando por una calle de Buenos Aires"),
    pexelsPhoto(30908953, "Retrato de una mujer en Buenos Aires"),
    pexelsPhoto(34209536, "Retrato de un hombre en Buenos Aires"),
    pexelsPhoto(35879852, "Retrato de un hombre en un parque de Buenos Aires"),
  ],
  crimen: pexelsPhoto(
    29571585,
    "Oficial de la Policía de la Ciudad en Buenos Aires",
  ),
} as const;
