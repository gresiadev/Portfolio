// Hooks 
import { useAppSelector, useAppDispatch } from "./useStore"

// Reducers 
import { updateChampionToShow, updateChampionsFiltereds } from "../store/champions/championsSlice"

function useChampions() {

   const { champions, championsFiltereds, championToShow } = useAppSelector(state => state.champions)

   const dispatch = useAppDispatch()

   const handleChampionToShow = (newChampion) => {
      dispatch(updateChampionToShow(newChampion))
   }
   const handleChampionsFiltereds = (newsChampions) => {
      dispatch(updateChampionsFiltereds(newsChampions))
   }

   return {
      // States 
      champions,
      championsFiltereds,
      championToShow,

      // Functions 
      handleChampionToShow,
      handleChampionsFiltereds,
   }
}
export { useChampions }