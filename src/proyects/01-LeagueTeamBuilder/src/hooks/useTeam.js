// Hooks 
import { useAppDispatch, useAppSelector } from "./useStore"

// Reducers 
import { addToTeam, removeFromTeam, clearTeam } from "../store/team/teamSlice"
import { useEffect } from "react"

function useTeam() {
   const { team } = useAppSelector(state => state.team)
   const dispatch = useAppDispatch()

   const handleAddToTeam = (newChampion) => {
      dispatch(addToTeam(newChampion))
   }

   const handleRemoveFromTeam = (championToRemove) => {
      dispatch(removeFromTeam(championToRemove))
   }

   const handleClearTeam = () => {
      dispatch(clearTeam())
   }

   useEffect(() => {
      window.localStorage.setItem("team", JSON.stringify(team))
   }, [team])

   return { team, handleAddToTeam, handleRemoveFromTeam, handleClearTeam }
}

export { useTeam }