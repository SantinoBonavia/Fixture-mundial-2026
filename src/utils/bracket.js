export function generateBracket(qualifiedTeams) {
  return [
    {
      id: 73,
      home: qualifiedTeams.A?.second?.team || "2° Grupo A",
      away: qualifiedTeams.B?.second?.team || "2° Grupo B",
    },

    {
      id: 74,
      home: qualifiedTeams.E?.first?.team || "1° Grupo E",
      away: "Mejor 3° (A/B/C/D/F)",
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
      away: "Mejor 3° (C/D/F/G/H)",
    },

    {
      id: 78,
      home: qualifiedTeams.E?.second?.team || "2° Grupo E",
      away: qualifiedTeams.I?.second?.team || "2° Grupo I",
    },

    {
      id: 79,
      home: qualifiedTeams.A?.first?.team || "1° Grupo A",
      away: "Mejor 3° (C/E/F/H/I)",
    },

    {
      id: 80,
      home: qualifiedTeams.L?.first?.team || "1° Grupo L",
      away: "Mejor 3° (E/H/I/J/K)",
    },

    {
      id: 81,
      home: qualifiedTeams.D?.first?.team || "1° Grupo D",
      away: "Mejor 3° (B/E/F/I/J)",
    },

    {
      id: 82,
      home: qualifiedTeams.G?.first?.team || "1° Grupo G",
      away: "Mejor 3° (A/E/H/I/J)",
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
      away: "Mejor 3° (E/F/G/I/J)",
    },

    {
      id: 86,
      home: qualifiedTeams.J?.first?.team || "1° Grupo J",
      away: qualifiedTeams.H?.second?.team || "2° Grupo H",
    },

    {
      id: 87,
      home: qualifiedTeams.K?.first?.team || "1° Grupo K",
      away: "Mejor 3° (D/E/I/J/L)",
    },

    {
      id: 88,
      home: qualifiedTeams.D?.second?.team || "2° Grupo D",
      away: qualifiedTeams.G?.second?.team || "2° Grupo G",
    },
  ];
}
