export const saveMatchResult = (matchId, result) => {
  const savedResults =
    JSON.parse(localStorage.getItem("worldcup-results")) || {};

  savedResults[matchId] = result;

  localStorage.setItem(
    "worldcup-results",
    JSON.stringify(savedResults)
  );
};

export const getMatchResult = (matchId) => {
  const savedResults =
    JSON.parse(localStorage.getItem("worldcup-results")) || {};

  return savedResults[matchId];
};

export const getAllResults = () => {
  return (
    JSON.parse(localStorage.getItem("worldcup-results")) || {}
  );
};