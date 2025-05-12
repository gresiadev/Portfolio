// Components 
import CustomNavlink from "../navigation/CustomNavlinks"

function Header() {
   return (
      <header className="leagueTeam__header">
         <div className="leagueTeam__header-container">
            <nav className="leagueTeam__nav">
               <CustomNavlink to={"/gresia-dev/projects/LeagueTeamBuilder/home"}>
                  Home
               </CustomNavlink>

               <CustomNavlink to={"/gresia-dev/projects/LeagueTeamBuilder/about"}>
                  About
               </CustomNavlink>

               <CustomNavlink to={"/gresia-dev/projects/LeagueTeamBuilder/viewChampionsAll"}>
                  All champions
               </CustomNavlink>
            </nav>
         </div>
      </header>
   )
}

export default Header