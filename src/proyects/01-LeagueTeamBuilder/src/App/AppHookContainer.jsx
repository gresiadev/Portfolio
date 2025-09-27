// Components 
import App from "./App";
import LeagueTeamBuilderRouter from "./LeagueTeamBuilderRouter"

// Store
import store from "../store/store";
import { Provider } from "react-redux";

function AppHookContainer() {
   return (
      <Provider store={store}>
         <App>
            <LeagueTeamBuilderRouter />
         </App>
      </Provider>
   )
}

export default AppHookContainer