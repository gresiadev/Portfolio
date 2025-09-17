// Components 
import App from "./App";
import UserManagerRouter from "./UserManagerRouter";

// Contexts 
import { TokenProvider } from "../context/token";
import { UserFormProvider } from "../context/userForm";

// Store 
import store from "../store/store";
import { Provider } from "react-redux";

function AppHookContainer() {
   return (
      <Provider store={store}>
            <TokenProvider>
               <UserFormProvider>
                  <App>
                     <UserManagerRouter />
                  </App>
               </UserFormProvider>
            </TokenProvider>
      </Provider>
   )
}

export default AppHookContainer