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
        changeType: (state, action) => {
            state.filters.type = action.payload
        },
        changeMinAp: (state, action) => {
            state.filters.minAp = action.payload
        },
        changeMinAd: (state, action) => {
            state.filters.minAd = action.payload
        },
    }
})

export default filtersSlice.reducer
export const { changeType, changeMinAd, changeMinAp } = filtersSlice.actions