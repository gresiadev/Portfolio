// Functions 
import { createSlice } from "@reduxjs/toolkit";

// Vars
import { initialChampions, initialChampionToShow } from "../../logic/vars";

const championsSlice = createSlice({
    name: "champions",
    initialState: {
        champions: initialChampions,
        championsFiltereds: [],
        championToShow: initialChampionToShow,
        status: "idle"
    },
    reducers: {
        handleChampionToShow: (state, action) => {
            state.championToShow = action.payload
        },
        handleChampionsFiltereds: (state, action) => {
            state.championsFiltereds = action.payload
        }
    }
})

export default championsSlice.reducer
export const { handleChampionToShow, handleChampionsFiltereds } = championsSlice.actions