// Componentes 
import CustomNavLink from "../navigation/NavLink"

// Hooks 
import useFormUser from "../../hooks/useFormUser"

function Header() {
   const { createUser } = useFormUser()

   return (
      <header className="userManager__header">
         <div className="userManager__header-container">
            <nav className="userManager__nav">
               <CustomNavLink to={"/gresia-dev/projects/UserManager/home"}>Home</CustomNavLink>
               <CustomNavLink to={"/gresia-dev/projects/UserManager/about"}>About</CustomNavLink>
               <CustomNavLink to={"/gresia-dev/projects/UserManager/login"}>login</CustomNavLink>
               <CustomNavLink to={"/gresia-dev/projects/UserManager/private/viewUsersAll"}>
                  View Users
               </CustomNavLink>

               <button
                  className="userManager__header-button"
                  onClick={() => createUser()}>
                  Create User
               </button>
            </nav>
         </div>
      </header>
   )
}

export default Header