// Hooks 
import { useEffect } from "react"
import useFormUser from "../hooks/useFormUser"

// Components 
import { ListOfUsers } from "../components/users/ListUsers"

function ViewUsersAll() {

   const { users, firstTime, firstTimeValidate, getUsers } = useFormUser()

   useEffect(() => {

      if (firstTime) {
         firstTimeValidate()
         return
      }

      if (users.length < 1) {
         setTimeout(() => {
            getUsers()
         }, [4000])
      }
   }, [])

   return (<>
      <section className="userManager__view-users-all-container">
         <h1 className="userManager__view-users-all-h1">Usuarios Registrados</h1>
         <ListOfUsers />
      </section>
   </>)
}

export default ViewUsersAll