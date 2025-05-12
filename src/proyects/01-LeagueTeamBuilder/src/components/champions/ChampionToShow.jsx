// Hooks 
import { useChampions } from "../../hooks/useChampions"

function ChampionDetails({ championToShow }) {
   return (
      <article className="leagueTeam__champion-to-show-container">

         <section className="league__team-champion-to-show-info ">
            <div className="leagueTeam__champion-to-show-img-container">
               <img src={championToShow.image} alt={`image of: ${championToShow.name}`} className="leagueTeam__champion-to-show-img " />
            </div>
            <div className="leagueTeam__champion-to-show-description ">
               <p className="leagueTeam__champion-to-show-p">{championToShow.description.paragraph1}</p>
               <p className="leagueTeam__champion-to-show-p">{championToShow.description.paragraph2}</p>

               <p className="leagueTeam__champion-to-show-p leagueTeam__champion-to-show-lines">
                  Lines
                  <span className="leagueTeam__champion-to-show-span "><img src={championToShow.lines.primary} /></span>
                  <span className="leagueTeam__champion-to-show-span "><img src={championToShow.lines.secondary} alt="" /></span>
               </p>

            </div>
         </section>

         <section className="leagueTeam__champion-to-show-skills-container ">

            <section className="leagueTeam__champion-to-show-runes-container">
               <h2 className="leagueTeam__champion-to-show-runes-title ">Runas</h2>
               <section className="leagueTeam__champion-to-show-runes">
                  <div className="leagueTeam__champion-to-show-runes-1">
                     <span>
                        <img src={championToShow.runes.primary.type} alt="" className="leagueTeam__champion-to-show-runes-img"/>
                     </span>

                     <span>
                        <img src={championToShow.runes.primary.rune1} alt="" className="leagueTeam__champion-to-show-runes-img"/>
                     </span>

                     <span>
                        <img src={championToShow.runes.primary.rune2} alt="" className="leagueTeam__champion-to-show-runes-img"/>
                     </span>

                     <span>
                        <img src={championToShow.runes.primary.rune3} alt="" className="leagueTeam__champion-to-show-runes-img"/>
                     </span>

                     <span>
                        <img src={championToShow.runes.primary.rune4} alt="" className="leagueTeam__champion-to-show-runes-img"/>
                     </span>
                  </div>

                  <div className="leagueTeam__champion-to-show-runes-2">
                     <span>
                        <img src={championToShow.runes.secondary.type} alt="" className="leagueTeam__champion-to-show-runes-img"/>
                     </span>

                     <span>
                        <img src={championToShow.runes.secondary.rune1} alt="" className="leagueTeam__champion-to-show-runes-img"/>
                     </span>
                     <span>
                        <img src={championToShow.runes.secondary.rune2} alt="" className="leagueTeam__champion-to-show-runes-img"/>
                     </span>
                  </div>
                  
                  <div className="leagueTeam__champion-to-show-runes-3 ">

                     <span>
                        <img src={championToShow.runes.fragments.fragment1} alt="" className="leagueTeam__champion-to-show-runes-img"/>
                     </span>
                     <span>
                        <img src={championToShow.runes.fragments.fragment2} alt=""
                        className="leagueTeam__champion-to-show-runes-img"/>
                     </span>
                     <span>
                        <img src={championToShow.runes.fragments.fragment3} alt="" className="leagueTeam__champion-to-show-runes-img"/>
                     </span>
                  </div>
               </section>
            </section>

            <section className="leagueTeam__champion-to-show-objects-container">
               <h2 className="leagueTeam__champion-to-show-title-objects">Objetos</h2>
               <div className="leagueTeam__champion-to-show-objects ">
                  <span>
                     <img src={championToShow.objects.object1} alt="" className="leagueTeam__champion-to-show-objects-img"/>
                  </span>
                  <span>
                     ➕
                  </span>
                  <span>
                     <img src={championToShow.objects.object2} alt="" className="leagueTeam__champion-to-show-objects-img"/>
                  </span>
                  <span>
                     ➕
                  </span>
                  <span>
                     <img src={championToShow.objects.object3} alt="" className="leagueTeam__champion-to-show-objects-img"/>
                  </span>
                  <span>
                     ➕
                  </span>
                  <span>
                     <img src={championToShow.objects.object4} alt="" className="leagueTeam__champion-to-show-objects-img"/>
                  </span>
                  <span>
                     ➕
                  </span>
                  <span>
                     <img src={championToShow.objects.object5} alt="" className="leagueTeam__champion-to-show-objects-img"/>
                  </span>
                  <span>
                     ➕
                  </span>
                  <span>
                     <img src={championToShow.objects.object6} alt="" className="leagueTeam__champion-to-show-objects-img"/>
                  </span>
                  <span>
                     ➕
                  </span>
                  <span>
                     <img src={championToShow.objects.object7} alt="" className="leagueTeam__champion-to-show-objects-img"/>
                  </span>
                  <span>
                     ➕
                  </span>
                  <span>
                     <img src={championToShow.objects.object8} alt="" className="leagueTeam__champion-to-show-objects-img"/>
                  </span>
               </div>
            </section>
         </section>
      </article>
   )
}

function LoadChampion() {
   return (<h2>Loading Champion...</h2>)
}

function ChampionToShow() {
   const { championToShow } = useChampions()

   return (
      championToShow
         ? <ChampionDetails championToShow={championToShow} />
         : <LoadChampion />
   )
}

export default ChampionToShow