import { useContext } from "react";
import { FiltersContext } from "../context/filters";

function useFilters() {
   const filtersContext = useContext(FiltersContext)

   if (filtersContext === undefined) {
      throw new Error("Falta contexto")
   }

   return filtersContext
}

export { useFilters }