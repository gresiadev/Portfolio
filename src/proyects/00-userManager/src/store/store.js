// Functions 
import { configureStore } from "@reduxjs/toolkit";

// Slices 
import tokenSlice from "./token/tokenSlice"
import usersSlice from "./users/usersSlice"
import usersUISlice from "./usersUI/usersUISlice"

const store = configureStore({
    reducer: {
        users: usersSlice,
        usersUI: usersUISlice,
        token: tokenSlice,
    }
})

export default store