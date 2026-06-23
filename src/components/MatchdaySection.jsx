function MatchdaySection({ matchday, matches }) {
  return (
    <div className="matchday-section">
      <h2>Fecha {matchday}</h2>

      {matches.map((match) => (
        match.component
      ))}
    </div>
  );
}

export default MatchdaySection;