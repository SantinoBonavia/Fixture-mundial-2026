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

  const winner = getWinner(
    match.id,
    match.home,
    match.away
  );

  return winner || teamName;
}