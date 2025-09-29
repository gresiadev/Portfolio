// Hooks 
import { useAppSelector, useAppDispatch } from "./useStore"

// Reducers 
import { changeShowForm, changeEditUser, changeConfirmUser, changeCompleteUser, changeCreatedUser } from "../store/usersUI/usersUISlice"

function useUsersUI() {
    const dispatch = useAppDispatch()

    const { showForm, editUser, createdUser, confirmUser, completeUser } = useAppSelector(state => state.usersUI)

    const handleShowForm = () => { dispatch(changeShowForm()) }
    const handleEditUser = () => { dispatch(changeEditUser()) }
    const handleConfirmUser = () => { dispatch(changeConfirmUser()) }
    const handleCompleteUser = () => { dispatch(changeCompleteUser()) }
    const handleCreatedUser = () => { dispatch(changeCreatedUser()) }

    return {
        // states 
        showForm, editUser, createdUser, confirmUser, completeUser,

        // Functions 
        handleShowForm, handleEditUser, handleConfirmUser, handleCompleteUser, handleCreatedUser
    }
}

export default useUsersUI