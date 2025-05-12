// COMPONENT 
import { NavLink } from "react-router-dom";

function CustomNavLink({ children, to, target, props }) {
   return (
      <NavLink
         to={to}
         {...props}
      >
         {children}
      </NavLink>
   )
}

export default CustomNavLink