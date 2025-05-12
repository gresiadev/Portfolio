// Components 
import App from "./App";
import LeagueTeamBuilderRouter from "./LeagueTeamBuilderRouter"

// Providers 
import { ChampionsProvider } from "../context/champions";
import { FiltersProvider } from "../context/filters";
import { TeamProvider } from "../context/team";

function AppHookContainer() {
   return (
         <ChampionsProvider>
            <FiltersProvider>
               <TeamProvider>
                  <App>
                     <LeagueTeamBuilderRouter />
                  </App>
               </TeamProvider>
            </FiltersProvider>
         </ChampionsProvider>
   )
}

export default AppHookContainer