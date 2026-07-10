import { flags } from "../data/flags";

function Podium({
  champion,
  runnerUp,
  thirdPlace,
}) {
  if (!champion) return null;

  return (
    <div className="podium-container">

      <div className="champion-card">

        <div className="trophy">
          🏆
        </div>

        <p className="champion-title">
          CAMPEÓN DEL MUNDO
        </p>

        <div className="champion-flag">
          {flags[champion] || "🏳️"}
        </div>

        <h1>{champion}</h1>

        <p className="champion-year">
          FIFA WORLD CUP 2026
        </p>

      </div>

      <div className="podium-bottom">

        <div className="runner-card">

          <div className="podium-medal">
            🥈
          </div>

          <h3>Subcampeón</h3>

          <div className="podium-flag">
            {flags[runnerUp]}
          </div>

          <strong>{runnerUp}</strong>

        </div>

        <div className="third-card">

          <div className="podium-medal">
            🥉
          </div>

          <h3>Tercer puesto</h3>

          <div className="podium-flag">
            {flags[thirdPlace]}
          </div>

          <strong>{thirdPlace}</strong>

        </div>

      </div>

    </div>
  );
}

export default Podium;