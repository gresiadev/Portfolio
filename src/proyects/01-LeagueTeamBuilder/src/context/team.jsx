// Hooks 
import { createContext, useReducer } from "react";

// Reducer 
import reducerTeam from "../reducers/teamReducer";

const TeamContext = createContext()

function TeamProvider({ children }) {

   const initialValue = JSON.parse(window.localStorage.getItem("team")) || []

   const [state, dispatch] = useReducer(reducerTeam, initialValue)

   const addToTeam = (newChampion) => dispatch({
      type: "ADD_TO_TEAM",
      newChampion
   })

   const removeFromTeam = (newChampion) => dispatch({
      type: "REMOVE_FROM_TEAM",
      newChampion
   })

   const clearTeam = () => dispatch({
      type: "CLEAR_TEAM"
   })

   return (
      <TeamContext.Provider value={{
         team: state,
         addToTeam,
         removeFromTeam,
         clearTeam,
      }}>
         {children}
      </TeamContext.Provider>
   )
}

export { TeamContext, TeamProvider }