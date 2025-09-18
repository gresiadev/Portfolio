import { createSlice } from "@reduxjs/toolkit";
import useFormUser from "../../hooks/useFormUser";

// const { currentUSer } = useFormUser()

const usersUISlice = createSlice({
    name: "usersUI",
    initialState: {
        showForm: false,
        editUser: false,
        confirmUser: false,
        completeUser: false,
        createdUser: false,
    },
    reducers: {
        handleShowForm: (state) => {
            state.showForm = !state.showForm
        },
        handleEditUser: (state, action) => {
            state.editUser = !state.editUser
        },
        handleConfirmUser: (state) => {
            state.confirmUser = !state.confirmUser
        },
        handleCompleteUser: (state) => {
            state.completeUser = !state.completeUser
        },
        handleCreatedUser: (state) => {
            state.createdUser = !state.createdUser
        }
    }
})

export default usersUISlice.reducer
export const { handleShowForm, handleConfirmUser, handleCompleteUser, handleCreatedUser } = usersUISlice.actions
