// Hooks 
import { useFilters } from "../../hooks/useFilters"
import { useId } from "react"

function FiltersChampions() {
   const FilterTypeID = useId()
   const FilterMinApID = useId()
   const FilterMinAdID = useId()

   const { filters, handleType, handleMinAd, handleMinAp } = useFilters()

   const handleChangeType = (ev) => {
      const newType = ev.target.value
      handleType(newType)
   }

   const handleChangeAd = (ev) => {
      const newMinAd = ev.target.value
      handleMinAd(newMinAd)
   }

   const handleChangeAp = (ev) => {
      const newMinAp = ev.target.value
      handleMinAp(newMinAp)
   }

   return (
      <section className="leagueTeam__filters-champions-container">
         <div className="leagueTeam__filters-champions-field">
            <label
               className="leagueTeam__filters-champions-label"
               htmlFor={FilterTypeID}>
               Select Type
            </label>
            <select
               name={FilterTypeID}
               id={FilterTypeID}
               className="leagueTeam__filters-champions-input-select-type"
               defaultValue={filters.type}
               onChange={handleChangeType}
            >
               <option value="All">All</option>
               <option value="Assassin">Assassin</option>
               <option value="Fighter">Fighter</option>
               <option value="Mage">Mage</option>
               <option value="Marksman">Marksman</option>
               <option value="Support">Support</option>
               <option value="Tank">Tank</option>
            </select>
         </div>

         <div className="leagueTeam__filters-champions-field">
            <label htmlFor={FilterMinApID}
               className="leagueTeam__filters-champions-label"
            >
               <span className="leagueTeam__filters-champions-text-ap">Min Ap </span>
            </label>
            <input
               type="range"
               className="leagueTeam__filters-champions-input-min-ap "
               name={FilterMinApID}
               id={FilterMinApID}
               min={0}
               max={100}
               defaultValue={filters.minAp}
               onChange={handleChangeAp}
            />
            <span className="leagueTeam__filters-champions-text-ap">{filters.minAp}</span>
         </div>

         <div className="leagueTeam__filters-champions-field">
            <label
               className="leagueTeam__filters-champions-label"
               htmlFor={FilterMinAdID}>
               <span className="leagueTeam__filters-champions-text-ad">Min Ad </span>
            </label>
            <input
               type="range"
               className="leagueTeam__filters-champions-input-min-ad"
               name={FilterMinAdID}
               id={FilterMinAdID}
               min={0}
               max={100}
               defaultValue={filters.minAd}
               onChange={handleChangeAd}
            />
            <span className="leagueTeam__filters-champions-text-ad">{filters.minAd}</span>
         </div>
      </section>
   )
}

export default FiltersChampions