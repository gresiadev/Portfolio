import { useTeam } from "../../hooks/useTeam"

function ModalShowCharactersSent() {
    const { showModalCharactersSent, handleCloseModalCharactersSent } = useTeam()

    return (
        showModalCharactersSent &&
        <section className="leagueTeam__team-modalCharactersSent-Container">
            <article className="leagueTeam__team-modalCharactersSent">
                <span className="leagueTeam__team-modalCharactersSent-teamBtnClose" onClick={handleCloseModalCharactersSent}>❌</span>
                <h2 className="leagueTeam__team-modalCharactersSent-title">¡Characters sent to war!</h2>
            </article>
        </section>
    )
}

export default ModalShowCharactersSent