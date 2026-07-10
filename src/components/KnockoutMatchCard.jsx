import { useEffect, useState } from "react";
import { flags } from "../data/flags";
import {
  saveMatchResult,
  getMatchResult,
} from "../utils/localStorage";

function KnockoutMatchCard({
  match,
  home,
  away,
  onUpdate,
}) {

  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");
  const [homePenalties, setHomePenalties] = useState("");
  const [awayPenalties, setAwayPenalties] = useState("");

  useEffect(() => {
  const savedResult = getMatchResult(match.id);

  if (savedResult) {
    setHomeScore(savedResult.homeScore);
    setAwayScore(savedResult.awayScore);
    setHomePenalties(savedResult.homePenalties || "");
    setAwayPenalties(savedResult.awayPenalties || "");
  }
}, [match.id]);

useEffect(() => {
  if (homeScore === "" || awayScore === "") {
    return;
  }

  const result = {
    homeScore,
    awayScore,
  };

  if (Number(homeScore) === Number(awayScore)) {
    if (homePenalties === "" || awayPenalties === "") {
      return;
    }

    if (Number(homePenalties) === Number(awayPenalties)) {
      return;
    }

    result.homePenalties = homePenalties;
    result.awayPenalties = awayPenalties;
  }

  saveMatchResult(match.id, result);

  if (onUpdate) {
    onUpdate();
  }

}, [
  homeScore,
  awayScore,
  homePenalties,
  awayPenalties,
  match.id,
]);

  return (
    <div className="match-card">
      <div className="match-number">
        Partido {match.id}
      </div>

      <div className="match-header">
        <div className="team">
          <span className="team-name">{home}</span>
          <span className="team-flag">{flags[home] || "🏳️"}</span>
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
          <span className="team-name">{away}</span>
          <span className="team-flag">{flags[away] || "🏳️"}</span>
        </div>
      </div>

      {homeScore !== "" &&
        awayScore !== "" &&
        Number(homeScore) === Number(awayScore) && (
          <div className="penalties-section">
            <p className="penalties-title">
              ⚽ Definición por penales
            </p>

            <div className="score-inputs">
              <input
                type="number"
                min="0"
                value={homePenalties}
                onChange={(e) => setHomePenalties(e.target.value)}
              />

              <span className="score-separator">-</span>

              <input
                type="number"
                min="0"
                value={awayPenalties}
                onChange={(e) => setAwayPenalties(e.target.value)}
              />
            </div>

            {homePenalties !== "" &&
              awayPenalties !== "" &&
              Number(homePenalties) === Number(awayPenalties) && (
                <p className="knockout-warning">
                  En los penales debe haber un ganador.
                </p>
              )}
          </div>
        )}
    </div>
  );
}

export default KnockoutMatchCard;