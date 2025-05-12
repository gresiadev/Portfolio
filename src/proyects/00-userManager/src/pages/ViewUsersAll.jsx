
// Hooks 
import { useEffect, useState } from "react"
import useFormUser from "../hooks/useFormUser"
import useErrors from "../hooks/useErrors"

// Components 
import { ListOfUsers } from "../components/users/ListUsers"
import Toast from "../components/layout/Toast"

// Services 
import { searchAllUsers } from "../services/pagesServices"


function ViewUsersAll() {
   const { errorMsg, handleErrorMsg } = useErrors()
   const { handleUsers } = useFormUser()

   const getAllUsers = async () => {
      try {
         const newUsers = await searchAllUsers()
         handleUsers(newUsers)
      } catch (error) {
         handleErrorMsg(error.message)
      }
   }

   useEffect(() => {
      getAllUsers()
   }, [])

   return (<>
      <section className="userManager__view-users-all-container">
         <h1 className="userManager__view-users-all-h1">Usuarios Registrados</h1>
         <ListOfUsers />
         {
            errorMsg &&
            <Toast />
         }
      </section>
   </>)
}

export default ViewUsersAll