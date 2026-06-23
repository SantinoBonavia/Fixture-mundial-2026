import { flags } from "../data/flags";

function Bracket({ matches }) {
  return (
    <div>
      <h2>16avos de Final</h2>

      {matches.map((match) => (
        <div key={match.id} className="bracket-match">
          <p>
            {flags[match.home] || "🏳️"} {match.home}
          </p>

          <strong>VS</strong>

          <p>
            {flags[match.away] || "🏳️"} {match.away}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Bracket;