export function calculateStandings(teams, matches, results) {
  const table = {};

  teams.forEach((team) => {
    table[team] = {
      team,
      pts: 0,
      pj: 0,
      gf: 0,
      gc: 0,
      dg: 0,
    };
  });

  matches.forEach((match) => {
    const result = results[match.id];

    if (
      !result ||
      result.homeScore === "" ||
      result.awayScore === ""
    ) {
      return;
    }

    const homeGoals = Number(result.homeScore);
    const awayGoals = Number(result.awayScore);

    const home = table[match.homeTeam];
    const away = table[match.awayTeam];

    home.pj++;
    away.pj++;

    home.gf += homeGoals;
    home.gc += awayGoals;

    away.gf += awayGoals;
    away.gc += homeGoals;

    if (homeGoals > awayGoals) {
      home.pts += 3;
    } else if (awayGoals > homeGoals) {
      away.pts += 3;
    } else {
      home.pts += 1;
      away.pts += 1;
    }

    home.dg = home.gf - home.gc;
    away.dg = away.gf - away.gc;
  });

  return Object.values(table).sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.dg !== a.dg) return b.dg - a.dg;
    return b.gf - a.gf;
  });
}