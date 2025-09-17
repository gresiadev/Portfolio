import { createSlice } from "@reduxjs/toolkit";

const usersUISlice = createSlice({
    name: "usersUI",
    initialState: {
        errorMsg: null
    },
    reducers: {
        handleErrorMsg: (state, action) => {
            const newError = action.payload
            state.errorMsg = newError
        },

        closeModal: (state) => {
            state.errorMsg = null
        }
    }
})

export default usersUISlice.reducer
export const { handleErrorMsg, closeModal } = usersUISlice.actions
// FALTA CONSUMIR POR COMPONENTES