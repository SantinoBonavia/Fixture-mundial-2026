import { getWinner } from "./getWinner";

export function resolveTeam(teamName, bracketMatches) {
  const isWinner = teamName.startsWith("Ganador");
  const isLoser = teamName.startsWith("Perdedor");

  if (!isWinner && !isLoser) {
    return teamName;
  }

  const matchId = Number(teamName.split(" ")[1]);

  const match = bracketMatches.find(
    (m) => m.id === matchId
  );

  if (!match) {
    return teamName;
  }

  const home = resolveTeam(match.home, bracketMatches);
  const away = resolveTeam(match.away, bracketMatches);

  const winner = getWinner(
    match.id,
    home,
    away
  );

  if (!winner) {
    return teamName;
  }

  if (isWinner) {
    return winner;
  }

  return winner === home ? away : home;
}
