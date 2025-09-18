// Hooks 
import { useAppSelector, useAppDispatch } from "../hooks/useStore"

// Token 
import { handleToken } from "../store/token/tokenSlice"

function Login() {
   const { token } = useAppSelector(state => state.token)
   const dispatch = useAppDispatch()

   const logText = token ? "Logged in" : "Log in to access"
   const btnText = token ? "Log Out" : "Log In"

   return (<>
      <section className="userManager__login-container">
         <article className="userManager__login">
            <h2 className="userManager__login-title">{logText}</h2>
            <button
               className="userManager__login-button"
               onClick={() => dispatch(handleToken())}
            >
               {btnText}
            </button>
         </article>
      </section>
   </>)
}

export default Login