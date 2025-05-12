// Hooks 
import { useParams, useNavigate } from "react-router-dom"
import { useChampions } from "../hooks/useChampions"
import { useEffect } from "react"
import { initialChampions } from "../logic/vars"
// Components 
import ChampionToShow from "../components/champions/ChampionToShow"

function ViewChampion() {
   const { championName } = useParams()
   const { championsFiltereds, handleChampionToShow } = useChampions()
   const navigate = useNavigate()

   useEffect(() => {

      if (championsFiltereds.length === 0) return

      const newChampion = initialChampions.find(champion => champion.name === championName)

      if (!newChampion) {
         navigate("/Error-Portfolio404")
         return
      }

      window.localStorage.removeItem("championToShow", JSON.stringify(newChampion))
      window.localStorage.setItem("championToShow", JSON.stringify(newChampion))
      handleChampionToShow(newChampion)

   }, [championName, handleChampionToShow])

   return (
      <section className="leagueTeam__view-champion-container ">
         <h2 className="leagueTeam__view-champion-title">{championName}</h2>
         <ChampionToShow />
      </section>
   )
}
export default ViewChampion