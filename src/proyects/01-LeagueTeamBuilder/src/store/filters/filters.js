import { createSlice } from "@reduxjs/toolkit";

// initialFilters 
import { initialFilters } from "../../logic/vars";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        filters: initialFilters,
        status: "idle",
    },
    reducers: {
        handleType: (state, action) => {
            state.filters.type = action.payload
        },
        handleMinAp: (state, action) => {
            state.filters.minAp = action.payload
        },
        handleMinAd: (state, action) => {
            state.filters.minAd = action.payload
        },
    }
})

export default filtersSlice.reducer
export const { handleType, handleMinAd, handleMinAp } = filtersSlice.actions