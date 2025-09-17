import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice"
import usersUISlice from "./usersUI/usersUISlice"
import tokenSlice from "./token/tokenSlice"

const store = configureStore({
    reducer: {
        users: usersSlice,
        usersUI: usersUISlice,
        token: tokenSlice,
    }
})

export default store