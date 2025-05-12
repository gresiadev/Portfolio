import { useState, createContext } from "react";

const TokenContext = createContext()

function TokenProvider({ children }) {
   const [token, setToken] = useState(false)

   const handleToken = () => {
      setToken(!token)
   }

   return (
      <TokenContext.Provider value={{
         token,
         handleToken
      }}>
         {children}
      </TokenContext.Provider>
   )
}

export { TokenContext, TokenProvider }