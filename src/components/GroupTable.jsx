import { flags } from "../data/flags";

function GroupTable({ standings }) {
  return (
    <table className="group-table">
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
          <tr key={team.team}>
            <td>
              {flags[team.team]} {team.team}
            </td>
            <td>{team.pts}</td>
            <td>{team.pj}</td>
            <td>{team.dg}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GroupTable;