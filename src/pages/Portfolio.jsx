// HOOKS 
import { useEffect } from "react"

// COMPONENTS 
import Header from "../components/Header"
import Main from "../components/Main"

// CSS 
import "../global.css"
import "../portfolio.css"

function Portfolio() {

   useEffect(() => {
      document.body.classList.add("portfolio__body")

      return () => document.body.classList.remove("portfolio__body")
   }, [])

   return (<>
      <Header />
      <Main />
   </>)
}

export default Portfolio