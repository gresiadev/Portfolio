import { createSlice } from "@reduxjs/toolkit";

import { initialTeam } from "../../logic/vars";

const teamSlice = createSlice({
    name: "team",
    initialState: {
        team: initialTeam,
        status: "idle"
    },
    reducers: {
        addToTeam: (state, action) => {
            const championIndexInTeam = state.team.findIndex(champion => champion.id === action.payload.id)

            if (0 <= championIndexInTeam) {
                state.team[championIndexInTeam].quantity += 1
                return
            }
            state.team.push({ ...action.payload, quantity: 1 })
        },
        removeFromTeam: (state, action) => {
            const championIndexInTeam = state.team.findIndex(champion => champion.id === action.payload.id)

            if (championIndexInTeam < 0) return
            if (1 < state.team[championIndexInTeam].quantity) {
                state.team[championIndexInTeam].quantity -= 1
                return
            }
            state.team.splice(championIndexInTeam, 1)
        },
        clearTeam: (state) => {
            state.team = []
        },
    }
})

export default teamSlice.reducer
export const { addToTeam, removeFromTeam, clearTeam } = teamSlice.actions
