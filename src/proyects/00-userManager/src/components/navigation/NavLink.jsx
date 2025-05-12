import { NavLink as NavLinkRR } from "react-router-dom"

function CustomNavLink({ children, to, props }) {

   return (
      <NavLinkRR
         to={to}
         {...props}
         className={({ isActive }) => isActive
            ? "userManager__header-link userManager__header-link--active"
            : "userManager__header-link"
         }
      >
         {children}
      </NavLinkRR>
   )
}

export default CustomNavLink