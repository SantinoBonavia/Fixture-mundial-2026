import GroupSection from "../components/GroupSection";
import { groups } from "../data/groups";
import MatchCard from "../components/MatchCard";
import { matches } from "../data/matches";
import { getAllResults } from "../utils/localStorage";
import { calculateStandings } from "../utils/standings";
import Bracket from "../components/Bracket";
import { generateBracket } from "../utils/bracket";


function Home() {
  const results = getAllResults();

  const allStandings = {};

  const qualifiedTeams = {};

  const bracketMatches = generateBracket(
    qualifiedTeams
  );

  Object.entries(allStandings).forEach(([group, table]) => {
    qualifiedTeams[group] = {
      first: table[0],
      second: table[1],
    };
  });

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

        {matches.map((match) => (
          <MatchCard
            key={match.id}
            id={match.id}
            homeTeam={match.homeTeam}
            awayTeam={match.awayTeam}
            date={match.date}
            time={match.time}
            stadium={match.stadium}
            results={results}
          />
        ))}
        </section>

        <aside className="right-panel">
          <h2>Clasificados</h2>

          {Object.entries(qualifiedTeams).map(([group, teams]) => (
            <div key={group} className="qualified-card">
              <h3>Grupo {group}</h3>

              <p>🥇 {teams.first.team}</p>
              <p>🥈 {teams.second.team}</p>
            </div>
          ))}

          <Bracket matches={bracketMatches} />

        </aside>
      </main>
    </div>
  );
}

export default Home;