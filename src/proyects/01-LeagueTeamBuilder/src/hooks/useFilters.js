import { useContext } from "react";
import { FiltersContext } from "../context/filters";

function useFilters() {
   const filtersContext = useContext(FiltersContext)

   if (filtersContext === undefined) {
      throw new Error("Falta contexto")
   }

   return filtersContext
}

export { useFilters }
/*
   Estados quedan en el hook
   const { champions } = useAppSelector(state => state.champions)
   const dispatch = useAppDispatch()

   const { handleChampionsFiltereds } = useChampions()
   const { filters } = useAppSelector(state => state.filters)

   Esta funcion queda en el hook 

   const championsFilter = () => {
      const newChampions = champions.filter(champion =>
         (
            filters.minAp <= champion.magicPower &&
            filters.minAd <= champion.attackPower
         ) &&
         (
            filters.type === "All" ||
            filters.type === champion.type
         )
      )
      dispatch(handleChampionsFiltereds(newChampions))

   }

   Este efecto queda en el hook

      useEffect(() => {
         championsFilter()
         window.localStorage.setItem("filters", JSON.stringify(filters))
      }, [filters])

   Traer:
   handleType, handleMinAp, handleMinAD = FILTERS 
*/