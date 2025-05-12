// Hooks 
import { useChampions } from "../../hooks/useChampions"
import { useTeam } from "../../hooks/useTeam"

// Components 
import CustomNavLink from "../navigation/CustomNavlinks"

function Champion({ champion }) {
   const { addToTeam, removeFromTeam } = useTeam()
   return (
      <li className="leagueTeam__view-champions-all-champion-card">
         <h3 className="leagueTeam__view-champions-all-champion-card-h3">{champion.name}</h3>
         <img src={champion.image} alt={`image: ${champion.name}`} className="leagueTeam__view-champions-all-champion-card-img" />
         <div className="leagueTeam__view-champions-all-champion-card-info">
            <p className="leagueTeam__view-champions-all-champion-card-p">AP: <span className="leagueTeam__view-champions-all-champion-card-text-ap">{champion.magicPower}</span></p>
            <p className="leagueTeam__view-champions-all-champion-card-p">AD: <span className="leagueTeam__view-champions-all-champion-card-text-ad">{champion.attackPower}</span></p>
            <p className="leagueTeam__view-champions-all-champion-card-p">{champion.type}</p>
         </div>
         <div className="leagueTeam__view-champions-all-champion-card-action-btns-container ">
            <button
               className="leagueTeam__view-champions-all-champion-card-button"
               onClick={() => { removeFromTeam(champion) }}
            >➖</button>
            <button
               className="leagueTeam__view-champions-all-champion-card-button"
               onClick={() => { addToTeam(champion) }}
            >➕</button>
         </div>
         <CustomNavLink
            to={`/gresia-dev/projects/LeagueTeamBuilder/viewChampion/${champion.name}`}
         >
            Ver más
         </CustomNavLink>
      </li>
   )
}

function NoResults() {
   return (<h2 className="leagueTeam__view-champions-all-container-title-no-results ">No champions results...</h2>)
}

function ListOfChampions() {
   const { championsFiltereds } = useChampions()
   const hasChampions = championsFiltereds?.length > 0

   return (
      hasChampions
         ? <ul className="leagueTeam__view-champions-all-champions-container ">{championsFiltereds.map(champion => (<Champion champion={champion} key={champion.id} />))}</ul>
         : <NoResults />
   )
}

export default ListOfChampions