import GroupSection from "../components/GroupSection";
import { groups } from "../data/groups";
import MatchCard from "../components/MatchCard";
import { matches } from "../data/matches";
import { getAllResults } from "../utils/localStorage";
import { calculateStandings } from "../utils/standings";
import Bracket from "../components/Bracket";
import { generateBracket } from "../utils/bracket";
import { flags } from "../data/flags";

function Home() {
  const results = getAllResults();

  const allStandings = {};
  const qualifiedTeams = {};
  const matchesByMatchday = {};

  // Agrupar partidos por fecha
  matches.forEach((match) => {
    if (!matchesByMatchday[match.matchday]) {
      matchesByMatchday[match.matchday] = [];
    }

    matchesByMatchday[match.matchday].push(match);
  });

  // Calcular tablas
  Object.entries(groups).forEach(([groupLetter, teams]) => {
    const groupMatches = matches.filter(
      (match) => match.group === groupLetter
    );

    allStandings[groupLetter] = calculateStandings(
      teams,
      groupMatches,
      results
    );
  });

  // Obtener clasificados
  Object.entries(allStandings).forEach(([group, table]) => {
    if (
      table.length >= 2 &&
      (table[0].pts > 0 || table[1].pts > 0)
    ) {
      qualifiedTeams[group] = {
        first: table[0],
        second: table[1],
      };
    }
  });

  // Generar cruces
  const bracketMatches = generateBracket(qualifiedTeams);

  return (
    <div className="app-layout">
      <header className="header">
        <h1>COPA DEL MUNDO 2026</h1>
        <p>USA • CANADÁ • MÉXICO</p>
      </header>

      <main className="content">
        <aside className="left-panel">
          <h2>Fase de grupos</h2>

          {Object.entries(groups).map(([letter, teams]) => (
            <GroupSection
              key={letter}
              title={`Grupo ${letter}`}
              teams={teams}
              standings={allStandings[letter]}
            />
          ))}
        </aside>

        <section className="center-panel">
          <h2>Fixture Mundial</h2>

          {Object.entries(matchesByMatchday).map(
            ([matchday, dayMatches]) => (
              <div key={matchday} className="matchday-block">
                <h2>Fecha {matchday}</h2>

                {dayMatches.map((match) => (
                  <MatchCard
                    key={match.id}
                    id={match.id}
                    homeTeam={match.homeTeam}
                    awayTeam={match.awayTeam}
                    date={match.date}
                    time={match.time}
                    stadium={match.stadium}
                  />
                ))}
              </div>
            )
          )}
        </section>

        <aside className="right-panel">
          <h2>Clasificados</h2>

          {Object.entries(qualifiedTeams).map(([group, teams]) => (
            <div key={group} className="qualified-card">
              <h3>Grupo {group}</h3>

              <p>
                🥇 {flags[teams.first.team]} {teams.first.team}
              </p>

              <p>
                🥈 {flags[teams.second.team]} {teams.second.team}
              </p>
            </div>
          ))}

          {Object.keys(qualifiedTeams).length > 0 && (
            <Bracket matches={bracketMatches} />
          )}
        </aside>
      </main>
    </div>
  );
}

export default Home;