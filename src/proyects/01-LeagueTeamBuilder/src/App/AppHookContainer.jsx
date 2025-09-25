// Components 
import App from "./App";
import LeagueTeamBuilderRouter from "./LeagueTeamBuilderRouter"

// Providers 
import { ChampionsProvider } from "../context/champions";
import { FiltersProvider } from "../context/filters";
import { TeamProvider } from "../context/team";


// Store
import store from "../store/store";
import { Provider } from "react-redux";

function AppHookContainer() {
   return (
      <Provider store={store}>
         <ChampionsProvider>
            <FiltersProvider>
               <TeamProvider>
                  <App>
                     <LeagueTeamBuilderRouter />
                  </App>
               </TeamProvider>
            </FiltersProvider>
         </ChampionsProvider>
      </Provider>
   )
}

export default AppHookContainer