// Hooks 
import { useAppDispatch, useAppSelector } from "../hooks/useStore"

// Reducers users UI
import { changeShowForm, changeEditUser, changeCreatedUser, changeConfirmUser, changeCompleteUser } from "../store/usersUI/usersUISlice"

// Reducers users 
import { fetchUsers, fetchDeleteUser, fetchPutUser, fetchPostUser, setCurrentUser, setFirstTime } from "../store/users/usersSlice"

function useFormUser() {

   const dispatch = useAppDispatch()
   const { users } = useAppSelector(state => state.users)

   const createUser = (user = null) => {
      dispatch(changeShowForm())
      dispatch(setCurrentUser(user))
   }

   const putUser = (formData) => {
      dispatch(fetchPutUser({
         currentID: formData.id,
         userData: formData
      }))
      dispatch(changeShowForm())
      dispatch(changeEditUser())
   }

   const postUser = (formData) => {
      dispatch(fetchPostUser(formData))
      dispatch(changeShowForm())
      dispatch(changeCreatedUser())
   }

   const deleteUser = (userID) => {
      dispatch(changeConfirmUser())
      dispatch(changeCompleteUser())
      dispatch(fetchDeleteUser(userID))
   }

   const firstTimeValidate = () => {
      dispatch(setFirstTime())
      dispatch(fetchUsers())
   }

   const getUsers = ()=>{
      dispatch(fetchUsers())
   }

   const handleSubmit = (formData) => {
      formData.id
         ? putUser(formData)
         : postUser(formData)
   }

   return {
      // states 
      users,

      // Reducers
      createUser, deleteUser, firstTimeValidate, handleSubmit, getUsers
   }
}

export default useFormUser