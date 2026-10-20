const pexelsPhoto = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb`;

// Curated desktop-only images; the API photos remain the mobile source.
export const desktopEditorialPhotos = {
  apertura: pexelsPhoto(10922964),
  principales: [pexelsPhoto(16894035), pexelsPhoto(32441027)],
  politica: pexelsPhoto(36480615),
  ovacion: pexelsPhoto(32179264),
  sociedad: pexelsPhoto(20495590),
  sociedadSecundaria: pexelsPhoto(17914082),
  gente: [
    pexelsPhoto(32701034),
    pexelsPhoto(30908953),
    pexelsPhoto(34209536),
    pexelsPhoto(35879852),
  ],
  crimen: pexelsPhoto(29571585),
} as const;
