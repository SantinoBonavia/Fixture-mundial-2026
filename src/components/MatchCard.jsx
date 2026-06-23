import { useEffect, useState } from "react";
import { flags } from "../data/flags";
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
    <div className="match-header">
      <div className="team">
        <span className="team-name">{homeTeam}</span>
        <span className="team-flag">{flags[homeTeam]}</span>
      </div>

      <div className="score-inputs">
        <input
          type="number"
          min="0"
          value={homeScore}
          onChange={(e) => setHomeScore(e.target.value)}
        />

        <span className="score-separator">-</span>

        <input
          type="number"
          min="0"
          value={awayScore}
          onChange={(e) => setAwayScore(e.target.value)}
        />
      </div>

      <div className="team">
        <span className="team-name">{awayTeam}</span>
        <span className="team-flag">{flags[awayTeam]}</span>
      </div>
    </div>

    <div className="match-info">
      <p>📅 {date}</p>
      <p>🕒 {time}</p>
      <p>🏟️ {stadium}</p>
    </div>
  </div>
  );
}

export default MatchCard;