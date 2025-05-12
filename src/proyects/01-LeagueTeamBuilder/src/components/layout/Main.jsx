// Components 
import Team from "../team/Team"

function Main({ appRouter }) {
   return (
      <main className="leagueTeam__main">
         <section className="leagueTeam__main-container">
            {appRouter}
         </section>
         <Team />
      </main>
   )
}

export default Main