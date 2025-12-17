import { createSlice } from "@reduxjs/toolkit";
const teamUISlice = createSlice({
    name: "teamUI",
    initialState: {
        showModalCharactersSent: false
    },
    reducers: {
        openModal: (state) => {
            state.showModalCharactersSent = true
        },
        closeModal: (state) => {
            state.showModalCharactersSent = false
        },
    }
})

export default teamUISlice.reducer
export const { openModal, closeModal } = teamUISlice.actions