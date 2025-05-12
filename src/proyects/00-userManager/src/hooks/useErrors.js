import { useContext } from "react";
import { ErrorContext } from "../context/errors"

function useErrors() {
   const errorContext = useContext(ErrorContext)

   if (errorContext === undefined) {
      throw new Error("Falta contexto")
   }

   return errorContext
}

export default useErrors