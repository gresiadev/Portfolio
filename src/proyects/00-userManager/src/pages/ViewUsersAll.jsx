
// Hooks 
import { useEffect } from "react"

// import useFormUser from "../hooks/useFormUser"
import { useAppDispatch, useAppSelector } from "../hooks/useStore"

// Reducers 
import { fetchUsers, setFirstTime } from "../store/users/usersSlice"

// Components 
import { ListOfUsers } from "../components/users/ListUsers"


function ViewUsersAll() {
   const dispatch = useAppDispatch()
   const { users, firstTime } = useAppSelector(state => state.users)

   useEffect(() => {

      if (firstTime) {
         dispatch(setFirstTime())
         dispatch(fetchUsers())
         return
      }

      if (users.length < 1) {
         setTimeout(() => {
            dispatch(fetchUsers())
         }, [5000])
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