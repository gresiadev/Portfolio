// Functions 
import { createSlice } from "@reduxjs/toolkit";

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
        changeShowForm: (state) => {
            state.showForm = !state.showForm
        },
        changeEditUser: (state, action) => {
            state.editUser = !state.editUser
        },
        changeConfirmUser: (state) => {
            state.confirmUser = !state.confirmUser
        },
        changeCompleteUser: (state) => {
            state.completeUser = !state.completeUser
        },
        changeCreatedUser: (state) => {
            state.createdUser = !state.createdUser
        }
    }
})

export default usersUISlice.reducer
export const { changeShowForm, changeEditUser, changeConfirmUser, changeCompleteUser, changeCreatedUser } = usersUISlice.actions
