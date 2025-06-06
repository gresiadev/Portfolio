// Hooks 
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import useErrors from "../hooks/useErrors"


// Components 
import { CompletUser } from "../components/users/ListUsers"
import Toast from "../components/layout/Toast"

// Services 
import { searchUser } from "../services/pagesServices"


function ViewUser() {
   const { userID } = useParams()
   const { errorMsg, handleErrorMsg } = useErrors()
   const [user, setUser] = useState(null)

   const getUser = async (userID) => {
      try {
         const newUser = await searchUser(userID)

         setUser(newUser)
      } catch (error) {
         handleErrorMsg(error.message)
      }
   }

   useEffect(() => {
      getUser(userID)
   }, [])

   return (<>
      <section className="userManager__view-user-container">
         <h1 className="userManager__view-user-h1">Detalles del usuario</h1>
         <CompletUser user={user} />
         {
            errorMsg &&
            <Toast />
         }
      </section>
   </>)
}

export default ViewUser