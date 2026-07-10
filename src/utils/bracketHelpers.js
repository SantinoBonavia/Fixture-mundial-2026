import {
  roundOf16,
  quarterFinals,
  semiFinals,
  finalRounds,
} from "./nextRounds";

import { resolveTeam } from "./resolveTeam";
import { getWinner } from "./getWinner";

export function getAllKnockoutMatches(bracketMatches) {
  return [
    ...bracketMatches,
    ...roundOf16,
    ...quarterFinals,
    ...semiFinals,
    ...finalRounds,
  ];
}

export function getPodium(allMatches) {
  const finalMatch = allMatches.find(
    (m) => m.id === 104
  );

  const thirdMatch = allMatches.find(
    (m) => m.id === 103
  );

  if (!finalMatch || !thirdMatch) {
    return {
      champion: null,
      runnerUp: null,
      thirdPlace: null,
    };
  }

  const finalHome = resolveTeam(
    finalMatch.home,
    allMatches
  );

  const finalAway = resolveTeam(
    finalMatch.away,
    allMatches
  );

  const champion = getWinner(
    104,
    finalHome,
    finalAway
  );

  let runnerUp = null;

  if (champion) {
    runnerUp =
      champion === finalHome
        ? finalAway
        : finalHome;
  }

  const thirdHome = resolveTeam(
    thirdMatch.home,
    allMatches
  );

  const thirdAway = resolveTeam(
    thirdMatch.away,
    allMatches
  );

  const thirdPlace = getWinner(
    103,
    thirdHome,
    thirdAway
  );

  return {
    champion,
    runnerUp,
    thirdPlace,
  };
}