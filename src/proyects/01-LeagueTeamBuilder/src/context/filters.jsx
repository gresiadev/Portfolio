// Hooks 
import { createContext, useState, useEffect } from "react";
import { useChampions } from "../hooks/useChampions";

// Filters 
import { initialFilters } from "../logic/vars";

const FiltersContext = createContext()

function FiltersProvider({ children }) {
   
   const { champions, handleChampionsFiltereds } = useChampions()
   const [filters, setFilters] = useState(initialFilters)
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
      handleChampionsFiltereds(newChampions)
   }

   const handleType = (newType) => {
      setFilters(prevState => ({
         ...prevState,
         type: newType
      }))
   }

   const handleMinAp = (newMinAp) => {
      setFilters(prevState => ({
         ...prevState,
         minAp: newMinAp
      }))
   }

   const handleMinAd = (newMinAd) => {
      setFilters(prevState => ({
         ...prevState,
         minAd: newMinAd
      }))
   }

   useEffect(() => {
      championsFilter()
      window.localStorage.setItem("filters", JSON.stringify(filters))
   }, [filters])

   return (
      <FiltersContext.Provider value={{
         filters,
         handleType,
         handleMinAd,
         handleMinAp
      }}>
         {children}
      </FiltersContext.Provider>
   )
}

export { FiltersContext, FiltersProvider }