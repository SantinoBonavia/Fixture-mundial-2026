export function generateBracket(qualifiedTeams) {
  return [
    {
      id: 73,
      home: qualifiedTeams.A?.second?.team || "2° Grupo A",
      away: qualifiedTeams.B?.second?.team || "2° Grupo B",
    },

    {
      id: 76,
      home: qualifiedTeams.C?.first?.team || "1° Grupo C",
      away: qualifiedTeams.F?.second?.team || "2° Grupo F",
    },

    {
      id: 75,
      home: qualifiedTeams.F?.first?.team || "1° Grupo F",
      away: qualifiedTeams.C?.second?.team || "2° Grupo C",
    },

    {
      id: 78,
      home: qualifiedTeams.E?.second?.team || "2° Grupo E",
      away: qualifiedTeams.I?.second?.team || "2° Grupo I",
    },
  ];
}