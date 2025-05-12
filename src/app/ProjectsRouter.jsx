// COMPONENTS 
import { Route } from "react-router-dom"
import RoutesWhitNotFound from "./RoutesWhitNotFound"

// MODULES PAGES 
import UserManagerModule from "../pages/UserManagerModule"
import LeagueTeamBuilderModule from "../pages/LeagueTeamBuilderModule"

function ProjectsRouter() {
   return (
      <RoutesWhitNotFound>
         <Route path="projects/UserManager/*" element={<UserManagerModule />} />
         <Route path="projects/LeagueTeamBuilder/*" element={<LeagueTeamBuilderModule />} />
      </RoutesWhitNotFound>
   )
}
export default ProjectsRouter