import { useContext } from "react";
import { TeamContext } from "../context/team";

function useTeam() {
   const teamContext = useContext(TeamContext)

   if (teamContext === undefined) {
      throw new Error("Falta contexto")
   }

   return teamContext
}

export { useTeam }