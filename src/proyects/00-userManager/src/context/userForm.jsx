// Hooks 
import { useState, createContext } from "react";
import useErrors from "../hooks/useErrors"

// Services 
import { putFunction, postFunction, deleteFunction } from "../services/userServices";

const UserFormContext = createContext()

function UserFormProvider({ children }) {

   const [users, setUsers] = useState([])
   const [currentUser, setCurrentUser] = useState(null)
   const [createdUser, setCreatedUser] = useState(false)
   const [editUser, setEditUser] = useState(false)

   const [showForm, setShowForm] = useState(false)
   const [confirmDelete, setConfirmDelete] = useState(false)
   const [completDelete, setCompleteDelete] = useState(false)

   const { handleErrorMsg } = useErrors()


   // FUNCTION MODALS 

   const handleShowForm = () => {
      setShowForm(!showForm)
   }

   const handleConfirmUser = () => {
      setConfirmDelete(!confirmDelete)
   }

   const handleCompletUser = () => {
      setCompleteDelete(!completDelete)
   }

   const handleEditUser = () => {
      setEditUser(!editUser)
   }

   const handleCreatedUser = () => {
      setCreatedUser(!createdUser)
   }

   // USERS FUNCTIONS 

   const createUser = (user = null) => {
      handleShowForm()
      setCurrentUser(user)
   }

   const handleUsers = (newUsers) => {
      setUsers(newUsers)
   }

   const putUser = async (currentID, userData) => {
      try {
         const res = await putFunction(currentID, userData)

         const data = await res

         handleShowForm()
         handleEditUser()
      } catch (error) {
         handleErrorMsg(error.message)
      }
   }

   const postUser = async (userData) => {
      try {
         const res = await postFunction(userData)

         const data = await res

         handleShowForm()
         handleCreatedUser()
      } catch (error) {
         handleErrorMsg(error.message)
      }
   }

   const deleteUser = async (userID) => {
      try {
         const res = await deleteFunction(userID)

         const data = await res

         const updateListUsers = users.filter(user => user.id !== userID)

         setUsers(updateListUsers)
         handleConfirmUser()
         handleCompletUser()
      } catch (error) {
         handleErrorMsg(error.message)
      }
   }

   const handleSubmit = (formData) => {
      formData.id
         ? putUser(formData.id, formData)
         : postUser(formData)
   }
   return (
      <UserFormContext.Provider value={{
         showForm,
         handleShowForm,

         users,
         createUser,
         currentUser,
         handleUsers,
         handleSubmit,

         deleteUser,

         confirmDelete,
         handleConfirmUser,

         completDelete,
         handleCompletUser,

         editUser,
         handleEditUser,

         createdUser,
         handleCreatedUser
      }}
      >
         {children}
      </UserFormContext.Provider>
   )
}
export { UserFormContext, UserFormProvider }