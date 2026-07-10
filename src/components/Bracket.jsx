import { resolveTeam } from "../utils/resolveTeam";
import KnockoutMatchCard from "./KnockoutMatchCard";
import {
  roundOf16,
  quarterFinals,
  semiFinals,
  finalRounds,
} from "../utils/nextRounds";

function renderMatch(match, allMatches, onUpdate) {
  const home = resolveTeam(match.home, allMatches);
  const away = resolveTeam(match.away, allMatches);

  return (
    <KnockoutMatchCard
      key={match.id}
      match={match}
      home={home}
      away={away}
      onUpdate={onUpdate}
    />
  );
}

function Bracket({ matches, onUpdate }) {
  const allMatches = [
    ...matches,
    ...roundOf16,
    ...quarterFinals,
    ...semiFinals,
    ...finalRounds,
  ];

  return (
    <div className="bracket">
      <div className="round">
        <h2>16avos</h2>

        {matches.map((match) =>
          renderMatch(match, allMatches, onUpdate)
        )}
      </div>

      <div className="round">
        <h2>Octavos</h2>

        {roundOf16.map((match) =>
          renderMatch(match, allMatches, onUpdate)
        )}
      </div>

      <div className="round">
        <h2>Cuartos</h2>

        {quarterFinals.map((match) =>
          renderMatch(match, allMatches, onUpdate)
        )}
      </div>

      <div className="round">
        <h2>Semifinales</h2>

        {semiFinals.map((match) =>
          renderMatch(match, allMatches, onUpdate)
        )}
      </div>

      <div className="round">
        <h2>Final</h2>

        {renderMatch(finalRounds[1], allMatches, onUpdate)}

        <div className="third-place">

            <h2>Tercer Puesto</h2>

            {renderMatch(finalRounds[0], allMatches, onUpdate)}

        </div>
      </div>
    </div>
  );
}

export default Bracket;