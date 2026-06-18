function Bracket({ matches }) {
  return (
    <div>
      <h2>16avos de Final</h2>

      {matches.map((match) => (
        <div key={match.id} className="bracket-match">
          <p>
            {match.home}
          </p>

          <strong>VS</strong>

          <p>
            {match.away}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Bracket;