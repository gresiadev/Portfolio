// Hooks 
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import useFormUser from "../hooks/useFormUser"

// Components 
import { CompletUser } from "../components/users/ListUsers"

function ViewUser() {
   const { userID } = useParams()
   const { users } = useFormUser()
   const [user, setUser] = useState(null)

   const getUser = async (userID) => {
      try {
         if (userID.length > 2) {
            const userToShow = users.find(user => user.id === userID)
            setUser(userToShow)
            return
         }

         const newUSERID = Number(userID)
         const userToShow = users.find(user => user.id === newUSERID)
         setUser(userToShow)

      } catch (error) {
         console.log(error.message)
      }
   }

   useEffect(() => {
      getUser(userID)
   }, [])

   return (<>
      <section className="userManager__view-user-container">
         <h1 className="userManager__view-user-h1">Detalles del usuario</h1>

         <CompletUser user={user} />

      </section>
   </>)
}

export default ViewUser