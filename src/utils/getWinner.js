import { getMatchResult } from "./localStorage";

export function getWinner(matchId, homeTeam, awayTeam) {
  const result = getMatchResult(matchId);

  if (!result) return null;

  const homeScore = Number(result.homeScore);
  const awayScore = Number(result.awayScore);

  if (homeScore > awayScore) {
    return homeTeam;
  }

  if (awayScore > homeScore) {
    return awayTeam;
  }

  const homePenalties = Number(result.homePenalties);
  const awayPenalties = Number(result.awayPenalties);

  if (homePenalties > awayPenalties) {
    return homeTeam;
  }

  if (awayPenalties > homePenalties) {
    return awayTeam;
  }

  return null;
}