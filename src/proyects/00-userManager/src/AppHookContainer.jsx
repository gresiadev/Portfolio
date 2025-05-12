// Components 
import App from "./App";
import UserManagerRouter from "./UserManagerRouter";

// Contexts 
import { TokenProvider } from "./context/token";
import { UserFormProvider } from "./context/userForm";
import { ErrorProvider } from "./context/errors"

function AppHookContainer() {
   return (
         <ErrorProvider>
            <TokenProvider>
               <UserFormProvider>
                  <App>
                     <UserManagerRouter />
                  </App>
               </UserFormProvider>
            </TokenProvider>
         </ErrorProvider>
   )
}

export default AppHookContainer