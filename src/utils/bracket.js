export function generateBracket(qualifiedTeams, bestThirds) {

  const third1 = bestThirds[0]?.team || "Mejor 3°";
  const third2 = bestThirds[1]?.team || "Mejor 3°";
  const third3 = bestThirds[2]?.team || "Mejor 3°";
  const third4 = bestThirds[3]?.team || "Mejor 3°";
  const third5 = bestThirds[4]?.team || "Mejor 3°";
  const third6 = bestThirds[5]?.team || "Mejor 3°";
  const third7 = bestThirds[6]?.team || "Mejor 3°";
  const third8 = bestThirds[7]?.team || "Mejor 3°";

  return [
    {
      id: 73,
      home: qualifiedTeams.A?.second?.team || "2° Grupo A",
      away: qualifiedTeams.B?.second?.team || "2° Grupo B",
    },

    {
      id: 74,
      home: qualifiedTeams.E?.first?.team || "1° Grupo E",
      away: third7,
    },

    {
      id: 75,
      home: qualifiedTeams.F?.first?.team || "1° Grupo F",
      away: qualifiedTeams.C?.second?.team || "2° Grupo C",
    },

    {
      id: 76,
      home: qualifiedTeams.C?.first?.team || "1° Grupo C",
      away: qualifiedTeams.F?.second?.team || "2° Grupo F",
    },

    {
      id: 77,
      home: qualifiedTeams.I?.first?.team || "1° Grupo I",
      away: third2,
    },

    {
      id: 78,
      home: qualifiedTeams.E?.second?.team || "2° Grupo E",
      away: qualifiedTeams.I?.second?.team || "2° Grupo I",
    },

    {
      id: 79,
      home: qualifiedTeams.A?.first?.team || "1° Grupo A",
      away: third3,
    },

    {
      id: 80,
      home: qualifiedTeams.L?.first?.team || "1° Grupo L",
      away: third1, 
    },

    {
      id: 81,
      home: qualifiedTeams.D?.first?.team || "1° Grupo D",
      away: third5, 
    },

    {
      id: 82,
      home: qualifiedTeams.G?.first?.team || "1° Grupo G",
      away: third8,
    },

    {
      id: 83,
      home: qualifiedTeams.K?.second?.team || "2° Grupo K",
      away: qualifiedTeams.L?.second?.team || "2° Grupo L",
    },

    {
      id: 84,
      home: qualifiedTeams.H?.first?.team || "1° Grupo H",
      away: qualifiedTeams.J?.second?.team || "2° Grupo J",
    },

    {
      id: 85,
      home: qualifiedTeams.B?.first?.team || "1° Grupo B",
      away: third6,
    },

    {
      id: 86,
      home: qualifiedTeams.J?.first?.team || "1° Grupo J",
      away: qualifiedTeams.H?.second?.team || "2° Grupo H",
    },

    {
      id: 87,
      home: qualifiedTeams.K?.first?.team || "1° Grupo K",
      away: third4,
    },

    {
      id: 88,
      home: qualifiedTeams.D?.second?.team || "2° Grupo D",
      away: qualifiedTeams.G?.second?.team || "2° Grupo G",
    },
  ];
}
