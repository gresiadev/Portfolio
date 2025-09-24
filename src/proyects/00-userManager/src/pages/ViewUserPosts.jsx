// Hooks 
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// Components 
import ListOfPosts from "../components/users/UserPosts"

// Services 
import { searchPosts } from "../services/pagesServices"

function ViewUserPosts() {
   const { userID } = useParams()
   const [userCreated, setUserCreated] = useState(false)
   const [posts, setPosts] = useState(null)

   const getPosts = async (userID) => {
      try {
         if (userID.length > 2) {
            setUserCreated(true)
            return
         }

         const posts = await searchPosts(userID)
         setPosts(posts)

      } catch (error) {
         console.log(error.message)
      }
   }

   useEffect(() => {
      getPosts(userID)
   }, [])

   return (<>
      <section className="userManager__posts-container">
         <h1 className="userManager__posts-h1">Lista de posts</h1>
         {
            userCreated
               ? <h2>Este usuario al ser creado no tiene posts.</h2>
               : <ListOfPosts posts={posts} />
         }

      </section>
   </>)
}

export default ViewUserPosts