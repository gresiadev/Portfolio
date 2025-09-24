// Hooks 
import { useAppDispatch } from "../hooks/useStore"

// Reducers users UI
import { handleShowForm } from "../store/usersUI/usersUISlice"
import { handleEditUser } from "../store/usersUI/usersUISlice"
import { handleCreatedUser } from "../store/usersUI/usersUISlice"

// Reducers users 
import { fetchPutUser } from "../store/users/usersSlice"
import { fetchPostUser } from "../store/users/usersSlice"
import { setCurrentUser } from "../store/users/usersSlice"

function useFormUser() {

   const dispatch = useAppDispatch()

   const createUser = (user = null) => {
      dispatch(handleShowForm())
      dispatch(setCurrentUser(user))
   }

   const putUser = (formData) => {
      dispatch(fetchPutUser({
         currentID: formData.id,
         userData: formData
      }))
      dispatch(handleShowForm())
      dispatch(handleEditUser())
   }

   const postUser = (formData) => {
      dispatch(fetchPostUser(formData))
      dispatch(handleShowForm())
      dispatch(handleCreatedUser())
   }

   const handleSubmit = (formData) => {
      formData.id
         ? putUser(formData)
         : postUser(formData)
   }

   return { createUser, handleSubmit }
}

export default useFormUser