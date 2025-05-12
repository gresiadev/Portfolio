import IconList from "../components/layout/IconList"

function Home() {
   return (
      <section className="leagueTeam__home-container">
         <section className="leagueTeam__home-section-1">

            <h1 className="leagueTeam__home-section-1-title ">Bienvenidos a League Team Builder</h1>
            <p className="leagueTeam__home-p">
               Esta es una aplicación diseñada como una landing interactiva que te permite explorar, seleccionar y armar tu propio equipo de campeones de League of Legends.
            </p>
            <p className="leagueTeam__home-p">
               Podés navegar entre cuatro páginas públicas: <strong className="leagueTeam__home-section-1-strong ">Home</strong>, <strong className="leagueTeam__home-section-1-strong ">About</strong>, <strong className="leagueTeam__home-section-1-strong ">View Champions All</strong> y <strong className="leagueTeam__home-section-1-strong ">View Champion</strong>.
            </p>
         </section>

         <section className="leagueTeam__home-section-2">
            <h2 className="leagueTeam__home-section-2-title">
               Desde la vista de campeones vas a poder:
            </h2>
            <ul className="leagueTeam__home-section-2-list">
               <li className="leagueTeam__home-section-2-li">
                  <span><IconList /></span>
                  Agregar campeones a tu equipo</li>
               <li className="leagueTeam__home-section-2-li">
                  <span><IconList /></span>
                  Quitar campeones individualmente</li>
               <li className="leagueTeam__home-section-2-li">
                  <span><IconList /></span>
                  Sumar múltiples unidades del mismo campeón</li>
               <li className="leagueTeam__home-section-2-li">
                  <span><IconList /></span>
                  Ver información detallada de cada uno: <em>builds de objetos, runas sugeridas y más</em></li>
            </ul>
         </section>

         <p>
            El equipo no tiene límite de integrantes, y no sigue las reglas tradicionales de League of Legends. Está pensado para que uses tu imaginación y explores distintas composiciones.
         </p>
      </section>
   )
}
export default Home