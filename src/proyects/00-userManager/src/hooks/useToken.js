import { useContext } from "react";
import { TokenContext } from "../context/token";

function useToken() {
   const tokenContext = useContext(TokenContext)

   if (tokenContext === undefined) {
      throw new Error("Falta contexto")
   }

   return tokenContext
}

export default useToken