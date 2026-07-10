import { getWinner } from "./getWinner";

export function resolveTeam(teamName, bracketMatches) {
  if (!teamName.startsWith("Ganador")) {
    return teamName;
  }

  const matchId = Number(teamName.replace("Ganador ", ""));

  const match = bracketMatches.find(
    (m) => m.id === matchId
  );

  if (!match) {
    return teamName;
  }

  const home =
  match.home.startsWith("Ganador")
    ? resolveTeam(match.home, bracketMatches)
    : match.home;

const away =
  match.away.startsWith("Ganador")
    ? resolveTeam(match.away, bracketMatches)
    : match.away;

const winner = getWinner(
  match.id,
  home,
  away
);

return winner || teamName;
}