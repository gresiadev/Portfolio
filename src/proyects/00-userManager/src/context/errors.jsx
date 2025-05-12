import { useState, createContext } from "react";

const ErrorContext = createContext()

function ErrorProvider({ children }) {
   const [errorMsg, setErrorMsg] = useState(null)

   const handleErrorMsg = (newError) => {
      setErrorMsg(newError)
   }

   const closeModal = () => {
      setErrorMsg(null)
   }

   return (
      <ErrorContext.Provider value={{
         errorMsg,
         handleErrorMsg,
         closeModal
      }}>
         {children}
      </ErrorContext.Provider>
   )
}

export { ErrorContext, ErrorProvider }