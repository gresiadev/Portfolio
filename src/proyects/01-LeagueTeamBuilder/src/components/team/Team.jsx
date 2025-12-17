// Hooks 
import { useTeam } from "../../hooks/useTeam"
import { useId } from "react"

// Components 
import ModalShowCharactersSent from "../modals/ModalShowCharactersSent"

function Team() {
   const InputCheckTeamId = useId()
   const { team, handleClearTeam, handleOpenModalCharactersSent } = useTeam()

   function TeamCard({ champion }) {
      const { handleAddToTeam, handleRemoveFromTeam } = useTeam()
      return (
         <li className="leagueTeam__team-card">
            <h3 className="leagueTeam__team-card-h3">{champion.name}</h3>
            <img src={champion.image} alt={`img de ${champion.name}`} className="leagueTeam__team-card-img " />
            <p>Quantity: <span className="leagueTeam__team-card-number-quantity">{champion.quantity}</span></p>
            <div className="leagueTeam__team-card-action-btns-container ">
               <button
                  className="leagueTeam__team-card-button"
                  onClick={() => { handleRemoveFromTeam(champion) }}
               >➖</button>
               <button
                  className="leagueTeam__team-card-button"
                  onClick={() => { handleAddToTeam(champion) }}
               >➕</button>
            </div>
         </li>
      )
   }

   function NoResults() { return <h2>No champions in team...</h2> }

   function ListOfTeam() {
      const { team } = useTeam()
      const hasTeam = team?.length > 0
      return (
         hasTeam
            ? <ul className="leagueTeam__list-of-team">
               {team.map(champion => (<TeamCard key={champion.id} champion={champion} />))}
            </ul>
            : <NoResults />
      )
   }

   function BtnsFunctions() {
      const hasTeam = team?.length > 0

      return (
         hasTeam &&
         <div className="leagueTeam__btnsTeam-container">
            <button onClick={handleClearTeam} className="leagueTeam__btn-clear-team">Clear team</button>
            <button className="leagueTeam__btn-clear-team"
               onClick={() => { handleOpenModalCharactersSent(), handleClearTeam() }}
            >Send to war</button>
         </div>
      )
   }

   return (<>
      <label
         htmlFor={InputCheckTeamId}
         className="leagueTeam__team-button "
      >
         Team
      </label>
      <input
         type="checkbox"
         name={InputCheckTeamId}
         id={InputCheckTeamId}
         hidden
      />
      <section className="leagueTeam__team-container">
         <section className="leagueTeam__team-content ">
            <ListOfTeam />
            <hr className="leagueTeam__team-hr " />
            <BtnsFunctions />
            < ModalShowCharactersSent />
         </section>

      </section>
   </>)

}

export default Team