// Hooks 
import { useAppDispatch, useAppSelector } from "./useStore"

// Reducers 
import { addToTeam, removeFromTeam, clearTeam } from "../store/team/teamSlice"
import { closeModal, openModal } from "../store/team/teamUISlice"
import { useEffect } from "react"

function useTeam() {
   const { team } = useAppSelector(state => state.team)
   const { showModalCharactersSent } = useAppSelector(state => state.teamUI)
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

   const handleOpenModalCharactersSent = () => {
      dispatch(openModal())
   }
   const handleCloseModalCharactersSent = () => {
      dispatch(closeModal())
   }

   useEffect(() => {
      window.localStorage.setItem("team", JSON.stringify(team))
   }, [team])

   return { team, handleAddToTeam, handleRemoveFromTeam, handleClearTeam, handleCloseModalCharactersSent, handleOpenModalCharactersSent, showModalCharactersSent }
}

export { useTeam }