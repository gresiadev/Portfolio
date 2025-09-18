// Components 
import App from "./App";
import UserManagerRouter from "./UserManagerRouter";

// Store 
import store from "../store/store";
import { Provider } from "react-redux";

function AppHookContainer() {
   return (
      <Provider store={store}>
         <App>
            <UserManagerRouter />
         </App>
      </Provider>
   )
}

export default AppHookContainer