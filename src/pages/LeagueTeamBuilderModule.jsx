// HOOKS 
import { useEffect } from "react"
import AppHookContainer from "../proyects/01-LeagueTeamBuilder/src/App/AppHookContainer"

// CSS
import "../proyects/01-LeagueTeamBuilder/src/leagueTeamBuilder.css"
import "../global.css"

function LeagueTeamBuilderModule() {
   useEffect(() => {
      document.body.classList.add("leagueTeamBuilder__body")

      return () => document.body.classList.remove("leagueTeamBuilder__body")
   }, [])
   return (
      <AppHookContainer />
   )
}

export default LeagueTeamBuilderModule