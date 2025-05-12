
function Post({ post }) {
   return (
      <li className="userManager__posts-post">
         <h2 className="userManager__post-h2">
            <span className="userManager__post-h2-span">Post ID:</span>
            {post.id}
         </h2>
         <h3 className="userManager__post-h3 ">{post.title}</h3>
         <p className="userManager__post-p">{post.body}</p>
      </li>
   )
}

function ListOfPosts({ posts }) {
   return (
      posts &&
      <ul className="userManager__list-posts">
         {posts.map(post => (
            <Post post={post} key={post.id} />
         ))}
      </ul>
   )
}
export default ListOfPosts