// Hooks 
import { createContext, useState } from "react";

// Initial values  
import { initialChampions, initialChampionToShow } from "../logic/vars";

const ChampionsContext = createContext()

function ChampionsProvider({ children }) {

   const [champions] = useState(initialChampions)
   const [championsFiltereds, setChampionsFiltereds] = useState([])
   const [championToShow, setChampionToShow] = useState(initialChampionToShow)

   const handleChampionToShow = (newChampion) => {
      setChampionToShow(newChampion)
   }

   const handleChampionsFiltereds = (newChampions) => { setChampionsFiltereds(newChampions) }

   return (
      <ChampionsContext.Provider value={{
         champions,
         championsFiltereds,
         handleChampionsFiltereds,

         championToShow,
         handleChampionToShow
      }}>
         {children}
      </ChampionsContext.Provider>
   )
}

export { ChampionsContext, ChampionsProvider }
