import { useEffect, useState } from "react";
import {
  saveMatchResult,
  getMatchResult,
} from "../utils/localStorage";

function MatchCard({
  id,
  homeTeam,
  awayTeam,
  date,
  time,
  stadium,
}) {
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");
  useEffect(() => {
    const savedResult = getMatchResult(id);

    if (savedResult) {
      setHomeScore(savedResult.homeScore);
      setAwayScore(savedResult.awayScore);
    }
  }, [id]);

  useEffect(() => {
    if (homeScore !== "" && awayScore !== "") {
      saveMatchResult(id, { homeScore, awayScore });
    }
  }, [homeScore, awayScore, id]); 

  return (
    <div className="match-card">
      <div className="match-teams">
        <span>{homeTeam}</span>

        <div className="score-inputs">
          <input
            type="number"
            min="0"
            value={homeScore}
            onChange={(e) => setHomeScore(e.target.value)}
          />

          <span>-</span>

          <input
            type="number"
            min="0"
            value={awayScore}
            onChange={(e) => setAwayScore(e.target.value)}
          />
        </div>

        <span>{awayTeam}</span>
      </div>

      <div className="match-info">
        <p>{date}</p>
        <p>{time}</p>
        <p>{stadium}</p>
      </div>
    </div>
  );
}

export default MatchCard;