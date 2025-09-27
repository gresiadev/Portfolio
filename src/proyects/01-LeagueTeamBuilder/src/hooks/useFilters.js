// Hooks 
import { useAppSelector, useAppDispatch } from "./useStore"
import { useChampions } from "./useChampions"
import { useEffect } from "react"

// Reducers 
import { changeMinAd, changeMinAp, changeType } from "../store/filters/filtersSlice"

function useFilters() {

   const dispatch = useAppDispatch()
   const { champions } = useAppSelector(state => state.champions)
   const { filters } = useAppSelector(state => state.filters)

   const { handleChampionsFiltereds } = useChampions()

   const championsFilter = () => {
      const newsChampions = champions.filter(champion =>
         (
            filters.minAp <= champion.magicPower &&
            filters.minAd <= champion.attackPower
         ) &&
         (
            filters.type === "All" ||
            filters.type === champion.type
         )
      )
      handleChampionsFiltereds(newsChampions)
   }

   const handleMinAd = (newMinAd) => {
      dispatch(changeMinAd(newMinAd))
   }
   const handleMinAp = (newMinAp) => {
      dispatch(changeMinAp(newMinAp))
   }
   const handleType = (newType) => {
      dispatch(changeType(newType))
   }

   useEffect(() => {
      championsFilter()
      window.localStorage.setItem("filters", JSON.stringify(filters))
   }, [filters])

   return {
      // Functions
      handleMinAd,
      handleMinAp,
      handleType,
   }
}

export { useFilters }