import { flags } from "../data/flags";
import KnockoutMatch from "./KnockoutMatch";
import { resolveTeam } from "../utils/resolveTeam";
import {
  roundOf16,
  quarterFinals,
  semiFinals,
  finalRounds,
} from "../utils/nextRounds";

function renderMatch(match, allMatches) {
  const home = resolveTeam(
    match.home,
    allMatches
  );

  const away = resolveTeam(
    match.away,
    allMatches
  );

  return (
    <KnockoutMatch
      key={match.id}
      id={match.id}
      homeTeam={home}
      awayTeam={away}
    />
  );
}

function Bracket({ matches }) {

  const allMatches = [
    ...matches,
    ...roundOf16,
    ...quarterFinals,
    ...semiFinals,
    ...finalRounds,
  ];

  return (
    <div className="bracket-container">

      <h2>16avos de Final</h2>
      {matches.map((match) => renderMatch(match, allMatches))}

      <h2>Octavos de Final</h2>
      {roundOf16.map((match) => renderMatch(match, allMatches))}

      <h2>Cuartos de Final</h2>
      {quarterFinals.map((match) => renderMatch(match, allMatches))}

      <h2>Semifinales</h2>
      {semiFinals.map((match) => renderMatch(match, allMatches))}

      <h2>Tercer Puesto</h2>
      {renderMatch(finalRounds[0], allMatches)}

      <h2>Final</h2>
      {renderMatch(finalRounds[1], allMatches)}

    </div>
  );
}

export default Bracket;