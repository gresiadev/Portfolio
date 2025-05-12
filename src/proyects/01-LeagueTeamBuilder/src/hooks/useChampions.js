import { useContext } from "react"
import { ChampionsContext } from "../context/Champions"

function useChampions() {
   const championContext = useContext(ChampionsContext)

   if (championContext === undefined) {
      throw new Error("Falta contexto")
   }

   return championContext
}

export { useChampions }