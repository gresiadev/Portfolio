// Functions 
import { configureStore } from "@reduxjs/toolkit";

// Slices 
import championsSlice from "./champions/championsSlice"
import filtersSlice from "./filters/filters"
import teamSlice from "./team/teamSlice"

const store = configureStore({
    reducer: {
        champions: championsSlice,
        filters: filtersSlice,
        team: teamSlice,
    }
})

export default store