
// Hooks 
import { useEffect, useState } from "react"
// import useFormUser from "../hooks/useFormUser"
import { useAppDispatch } from "../hooks/useStore"

// Reducers 
import { setUsers } from "../store/users/usersSlice"

// Components 
import { ListOfUsers } from "../components/users/ListUsers"

// Services 
import { searchAllUsers } from "../services/pagesServices"


function ViewUsersAll() {
   const dispatch = useAppDispatch()

   const getAllUsers = async () => {
      try {
         const newUsers = await searchAllUsers()
         dispatch(setUsers(newUsers))
      } catch (error) {
         console.log(error.message)
      }
   }

   useEffect(() => {
      getAllUsers()
   }, [])

   return (<>
      <section className="userManager__view-users-all-container">
         <h1 className="userManager__view-users-all-h1">Usuarios Registrados</h1>
         <ListOfUsers />
      </section>
   </>)
}

export default ViewUsersAll