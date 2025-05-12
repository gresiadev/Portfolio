import { Route, Navigate } from "react-router-dom"

// Components 
import RoutesWhitNotFound from "../router/RoutesWhitNotFound"
import Home from "../Pages/Home"
import About from "../Pages/About"
import ViewChampionsAll from "../Pages/ViewChampionsAll"
import ViewChampion from "../Pages/ViewChampion"

function LeagueTeamBuilderRouter() {
   return (
      <RoutesWhitNotFound>
         <Route index element={<Home/>} />
         <Route path="home" element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="viewChampionsAll" element={<ViewChampionsAll />} />
         <Route path="viewChampion/:championName" element={<ViewChampion />} />
      </RoutesWhitNotFound>
   )
}

export default LeagueTeamBuilderRouter