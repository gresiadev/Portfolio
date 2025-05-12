// Components 
import ListOfChampions from "../components/champions/ListOfChampions.jsx"
import FiltersChampions from "../components/filters/FiltersChampions.jsx"

function ViewChampionsAll() {
   return (
      <section className="leagueTeam__view-champions-all-container">
         <FiltersChampions />
         <ListOfChampions />
      </section>
   )
}
export default ViewChampionsAll