// Hooks 
import { useAppDispatch } from "../hooks/useStore"

// Reducers 
import { handleShowForm } from "../store/usersUI/usersUISlice"
import { setCurrentUser } from "../store/users/usersSlice"

function useFormUser() {

   const dispatch = useAppDispatch()

   const createUser = (user = null) => {
      dispatch(handleShowForm())
      dispatch(setCurrentUser(user))
   }

   // const handleSubmit = (formData) => {
   //    formData.id
   //       ? putUser(formData.id, formData)
   //       : postUser(formData)
   // }

   return { createUser }
}

export default useFormUser