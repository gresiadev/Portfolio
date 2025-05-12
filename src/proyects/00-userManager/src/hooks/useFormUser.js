import { useContext } from "react";
import { UserFormContext } from "../context/userForm";

function useFormUser() {
   const userFormContext = useContext(UserFormContext)

   if (userFormContext === undefined) {
      throw new Error("Falta contexto")
   }

   return userFormContext
}

export default useFormUser