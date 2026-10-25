export const saveMatchResult = (matchId, result) => {
  const savedResults = getAllResults();

  savedResults[matchId] = result;

  localStorage.setItem(
    "worldcup-results",
    JSON.stringify(savedResults)
  );
};

export const getMatchResult = (matchId) => {
  return getAllResults()[matchId];
};

export const getAllResults = () => {
  return (
    JSON.parse(localStorage.getItem("worldcup-results")) || {}
  );
};