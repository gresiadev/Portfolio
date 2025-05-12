import URL_ENDPOINT from "../logic/vars"

async function putFunction(currentID, userData) {
   try {
      const res = await fetch(`${URL_ENDPOINT.base}${currentID}`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(userData)
      })

      if (!res.ok) throw new Error("Hubo un error al editar el user")

      return await res.json()

   } catch (error) {
      throw error
   }
}

async function postFunction(userData) {
   try {
      const res = await fetch(`${URL_ENDPOINT.base}`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(userData)
      })

      if (!res.ok) throw new Error("Hubo un error al crear usuario")

      return await res.json()

   } catch (error) {
      throw error
   }
}

async function deleteFunction(userID) {
   try {
      const res = await fetch(`${URL_ENDPOINT.base}${userID}`, {
         method: "DELETE"
      })

      if (!res.ok) throw new Error("Hubo un error al borrar el usuario")

      return await res.json()

   } catch (error) {
      throw error
   }
}
export { putFunction, postFunction, deleteFunction }