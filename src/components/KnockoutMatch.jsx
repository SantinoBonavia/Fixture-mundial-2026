import { useEffect, useState } from "react";
import { flags } from "../data/flags";
import {
  saveMatchResult,
  getMatchResult,
} from "../utils/localStorage";

function KnockoutMatch({ id, homeTeam, awayTeam }) {
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
      saveMatchResult(id, {
        homeScore,
        awayScore,
      });
    }
  }, [homeScore, awayScore, id]);

  return (
    <div className="bracket-match">
      <div className="match-number">
        Partido {id}
      </div>

      <div className="bracket-team">
        <span>{flags[homeTeam] || "🏳️"}</span>
        <span>{homeTeam}</span>
      </div>

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

      <div className="bracket-team">
        <span>{flags[awayTeam] || "🏳️"}</span>
        <span>{awayTeam}</span>
      </div>
    </div>
  );
}

export default KnockoutMatch;