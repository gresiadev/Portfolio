import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        token: false
    },
    reducers: {
        handleToken: (state) => {
            state.token = !state.token
        }
    }
})

export default tokenSlice.reducer
export const { handleToken } = tokenSlice.actions 