export function getBestThirds(allStandings) {
  const thirdPlaces = [];

  Object.entries(allStandings).forEach(
    ([group, table]) => {
      if (table.length >= 3) {
        thirdPlaces.push({
          group,
          ...table[2],
        });
      }
    }
  );

  thirdPlaces.sort((a, b) => {
    if (b.pts !== a.pts) {
      return b.pts - a.pts;
    }

    if (b.dg !== a.dg) {
      return b.dg - a.dg;
    }

    return b.gf - a.gf;
  });

  return thirdPlaces.slice(0, 8);
}