
const reducerTeam = (state, action) => {
   const { type, newChampion } = action

   if (type === "ADD_TO_TEAM") {
      const championInTeam = state.findIndex(champion => champion.id === newChampion.id)

      if (0 <= championInTeam) {

         const newTeam = structuredClone(state)
         newTeam[championInTeam].quantity += 1
         window.localStorage.setItem("team", JSON.stringify(newTeam))
         return newTeam

      } else {
         const newTeam = [...state, { ...newChampion, quantity: 1 }]
         window.localStorage.setItem("team", JSON.stringify(newTeam))
         return newTeam
      }
   }

   if (type === "REMOVE_FROM_TEAM") {
      const championInTeam = state.findIndex(champion => champion.id === newChampion.id)

      if (championInTeam < 0) return

      const newTeam = structuredClone(state)

      if (1 < newTeam[championInTeam].quantity) {
         newTeam[championInTeam].quantity -= 1
      } else {
         newTeam.splice(championInTeam, 1)
      }

      window.localStorage.setItem("team", JSON.stringify(newTeam))
      return newTeam
   }

   if (type === "CLEAR_TEAM") {
      const newTeam = []
      window.localStorage.setItem("team", JSON.stringify(newTeam))
      return newTeam
   }
}

export default reducerTeam