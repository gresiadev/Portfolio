// Hooks 
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useErrors from "../hooks/useErrors"

// Components 
import Toast from "../components/layout/Toast"
import ListOfPosts from "../components/users/UserPosts"

// Services 
import { searchPosts } from "../services/pagesServices"

function ViewUserPosts() {
   const { userID } = useParams()
   const { errorMsg, handleErrorMsg } = useErrors()
   const [posts, setPosts] = useState(null)

   const getPosts = async (userID) => {
      try {
         const posts = await searchPosts(userID)
         setPosts(posts)

      } catch (error) {
         handleErrorMsg(error.message)
      }
   }

   useEffect(() => {
      getPosts(userID)
   }, [])

   return (<>
      <section className="userManager__posts-container">
         <h1 className="userManager__posts-h1">Lista de posts</h1>
         <ListOfPosts posts={posts} />
         {
            errorMsg &&
            < Toast />
         }
      </section>
   </>)
}

export default ViewUserPosts