// HOOKS 
import { useEffect } from "react";

// Components
import AppHookContainer from "../proyects/00-userManager/src/app/AppHookContainer";

// CSS 
import "../proyects/00-userManager/src/userManager.css"
import "../global.css"

function UserManagerModule() {
   useEffect(() => {
      document.body.classList.add("userManager__body")

      return () => document.body.classList.remove("userManager__body")
   }, [])
   return (<AppHookContainer />)
}

export default UserManagerModule