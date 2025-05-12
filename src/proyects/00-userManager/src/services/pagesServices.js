import URL_ENDPOINT from "../logic/vars"

async function searchAllUsers() {
   try {
      const res = await fetch(`${URL_ENDPOINT.base}`)

      if (!res.ok) throw new Error("Hubo un error en la petición")

      return await res.json()

   } catch (error) {
      throw error
   }
}

async function searchUser(userID) {
   try {
      if (!userID) throw new Error("Ingrese un userID")

      const res = await fetch(`${URL_ENDPOINT.base}${userID}`)

      if (!res.ok) throw new Error("Petición fallida")

      return await res.json()

   } catch (error) {
      throw error
   }
}

async function searchPosts(userID) {
   try {
      if (!userID) throw new Error("Debes ingresar un userID")

      const res = await fetch(`${URL_ENDPOINT.base}${userID}/posts`)

      if (!res.ok) throw new Error("No fue posible conseguir los posts")

      return await res.json()

   } catch (error) {
      throw error
   }
}

export { searchAllUsers, searchUser, searchPosts }