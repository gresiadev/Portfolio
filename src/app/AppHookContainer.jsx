// PROVIDER 
import { BrowserRouter } from "react-router-dom";

// COMPONENTS 
import App from "./App";

// ROUTERS 
import PortfolioRouter from "./PortfolioRouter";

function AppHookContainer() {
   return (
      <BrowserRouter>
         <App>
            <PortfolioRouter />
         </App>
      </BrowserRouter>
   )
}

export default AppHookContainer