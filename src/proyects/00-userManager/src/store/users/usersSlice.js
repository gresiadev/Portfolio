import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Services 
import { putFunction, postFunction, deleteFunction } from "../../services/userServices";


//    const putUser = async (currentID, userData) => {
//       try {
//          const res = await putFunction(currentID, userData)

//          const data = await res

//          handleShowForm()
//          handleEditUser()
//       } catch (error) {
//          console.log(error.message)
//       }
//    }

//    const postUser = async (userData) => {
//       try {
//          const res = await postFunction(userData)

//          const data = await res

//          handleShowForm()
//          handleCreatedUser()
//       } catch (error) {
//          console.log(error.message)
//       }
//    }

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
        status: "idle"
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    },
    extraReducers: builder => {
        builder
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
    }
})

export default usersSlice.reducer
export const { setUsers, setCurrentUser } = usersSlice.actions
export { fetchDeleteUser }