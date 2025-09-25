// Functions 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Services 
import { putFunction, postFunction, deleteFunction } from "../../services/userServices";
import { searchAllUsers } from "../../services/pagesServices";

// UUID 
import { v4 as uuidv4 } from "uuid";

const fetchUsers = createAsyncThunk("fetchUsers", async () => {
    const newUsers = await searchAllUsers()
    return newUsers
})

const fetchPutUser = createAsyncThunk("fetchPutUser", async ({ currentID, userData }) => {
    try {
        if (currentID.length < 3) {
            await putFunction(currentID, userData)
        }
        return userData
    } catch (error) {
        console.log(error.message)
    }
})

const fetchPostUser = createAsyncThunk("fetchPostUser", async (userData) => {
    try {
        await postFunction(userData)
        return userData
    } catch (error) {
        console.log(error.message)
    }
})

const fetchDeleteUser = createAsyncThunk("fetchDeleteUser", async (userID) => {
    try {
        await deleteFunction(userID)
        return userID
    } catch (error) {
        console.log(error.message)
    }
})

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        currentUser: null,
        status: "idle",
        firstTime: true
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        setFirstTime: (state) => {
            state.firstTime = !state.firstTime
        }
    },
    extraReducers: builder => {
        builder
            // DeleteUser 
            .addCase(fetchDeleteUser.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchDeleteUser.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.users = state.users.filter(user => user.id !== action.payload)
            })
            .addCase(fetchDeleteUser.rejected, (state) => {
                state.status = "failed"
            })

            // PutUser 
            .addCase(fetchPutUser.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchPutUser.fulfilled, (state, action) => {
                state.status = "succeeded"

                const editedUserID = action.payload.id
                const indexUser = state.users.findIndex(user => user.id === editedUserID)

                state.users[indexUser] = action.payload
            })
            .addCase(fetchPutUser.rejected, (state) => {
                state.status = "failed"
            })

            // PostUser 
            .addCase(fetchPostUser.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchPostUser.fulfilled, (state, action) => {
                state.status = "succeeded"
                const newID = uuidv4()
                state.users.push({ ...action.payload, id: newID })
            })
            .addCase(fetchPostUser.rejected, (state) => {
                state.status = "failed"
            })

            // FetchUsers 
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = "failed"
            })
    }
})

export default usersSlice.reducer
export const { setUsers, setCurrentUser, setFirstTime } = usersSlice.actions
export { fetchDeleteUser, fetchPutUser, fetchPostUser, fetchUsers }
