import { NavLink } from "react-router-dom";

function CustomNavlink({ children, to, props}) {
   return (
      <NavLink
         {...props}
         to={to}
         className={({ isActive }) => isActive
            ? "leagueTeam__nav-link leagueTeam__nav-link--active"
            : "leagueTeam__nav-link"
         }
      >
         {children}
      </NavLink>
   )
}

export default CustomNavlink