type StandingsTeam = {
  name: string;
  crestId: number;
  points: number;
};

const groups: { name: string; teams: StandingsTeam[] }[] = [
  {
    name: "Grupo A",
    teams: [
      { name: "Instituto", crestId: 11, points: 32 },
      { name: "Vélez", crestId: 20, points: 27 },
      { name: "Boca Juniors", crestId: 5, points: 27 },
      { name: "Defensa y Justicia", crestId: 129, points: 27 },
      { name: "Lanús", crestId: 12, points: 24 },
      { name: "Newell's", crestId: 13, points: 21 },
      { name: "Gimnasia (Mendoza)", crestId: 816, points: 20 },
      { name: "Independiente", crestId: 10, points: 19 },
      { name: "San Lorenzo", crestId: 19, points: 18 },
      { name: "Unión", crestId: 137, points: 17 },
      { name: "Estudiantes", crestId: 7, points: 14 },
      { name: "Platense", crestId: 489, points: 14 },
      { name: "Dep. Riestra", crestId: 788, points: 12 },
      { name: "Central Córdoba (SE)", crestId: 1485, points: 10 },
      { name: "Talleres", crestId: 135, points: 9 },
    ],
  },
  {
    name: "Grupo B",
    teams: [
      { name: "Independiente Riv. (M)", crestId: 664, points: 28 },
      { name: "Argentinos Juniors", crestId: 2, points: 25 },
      { name: "Gimnasia", crestId: 8, points: 25 },
      { name: "River Plate", crestId: 17, points: 23 },
      { name: "Belgrano", crestId: 124, points: 22 },
      { name: "Barracas Central", crestId: 685, points: 22 },
      { name: "Sarmiento", crestId: 142, points: 21 },
      { name: "Huracán", crestId: 100, points: 19 },
      { name: "Rosario Central", crestId: 18, points: 19 },
      { name: "Atlético Tucumán", crestId: 815, points: 17 },
      { name: "Banfield", crestId: 4, points: 14 },
      { name: "Tigre", crestId: 136, points: 13 },
      { name: "Racing Club", crestId: 16, points: 12 },
      { name: "Aldosivi", crestId: 122, points: 11 },
      { name: "Estudiantes (RC)", crestId: 834, points: 9 },
    ],
  },
];

export function DeportesPosicionesWrapper() {
  return (
    <section className="sports-front__standings" aria-labelledby="sports-front-standings-title">
      <div className="sports-front__standings-heading">
        <h2 id="sports-front-standings-title">Tabla de posiciones</h2>
      </div>
      <div className="sports-front__standings-viewport">
        <div
          className="sports-front__standings-scroll"
          role="region"
          aria-label="Posiciones de muestra de Primera A"
          tabIndex={0}
        >
          <table>
            <thead>
              <tr>
                <th scope="col">N°</th>
                <th scope="col">Equipo</th>
                <th scope="col">Pts.</th>
              </tr>
            </thead>
            {groups.map((group) => (
              <tbody key={group.name}>
                <tr className="sports-front__standings-group">
                  <th scope="rowgroup" colSpan={3}>{group.name}</th>
                </tr>
                {group.teams.map((team, index) => (
                  <tr key={team.crestId}>
                    <td className="sports-front__standings-position">{index + 1}</td>
                    <th scope="row" className="sports-front__standings-team">
                      <span>
                        {/* Los escudos son imágenes de muestra del proveedor. */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://1287719000.rsc.cdn77.org/escudos_ch/${team.crestId}.gif`}
                          alt=""
                          width={22}
                          height={22}
                          loading="lazy"
                        />
                        <span>{team.name}</span>
                      </span>
                    </th>
                    <td className="sports-front__standings-points"><span>{team.points}</span></td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
}
