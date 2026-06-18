function GroupSection({ title, teams, standings }) {
  return (
    <div className="group-card">
      <h3>{title}</h3>

      {standings ? (
        <table className="mini-table">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>PTS</th>
              <th>PJ</th>
              <th>DG</th>
            </tr>
          </thead>

          <tbody>
            {standings.map((team) => (
              <tr
                key={team.team}
                className={standings.indexOf(team) < 2 ? "qualified" : ""}
              >
                <td>{team.team}</td>
                <td>{team.pts}</td>
                <td>{team.pj}</td>
                <td>{team.dg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ul className="team-list">
          {teams.map((team) => (
            <li key={team}>{team}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GroupSection;