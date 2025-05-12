// Hooks 
import useToken from "../hooks/useToken"

function Login() {
   const { token, handleToken } = useToken()

   const logText = token ? "Logged in" : "Log in to access"
   const btnText = token ? "Log Out" : "Log In"

   return (<>
      <section className="userManager__login-container">
         <article className="userManager__login">
           <h2 className="userManager__login-title">{logText}</h2>
            <button
               className="userManager__login-button"
               onClick={handleToken}
            >
               {btnText}
            </button>
         </article>
      </section>
   </>)
}

export default Login