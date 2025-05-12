import { useNavigate } from "react-router-dom"

function ErrorPage() {
   const navigate = useNavigate()

   return (
      <section className="leagueTeam__page-error-container">
         <h1 className="leagueTeam__page-error-title">404 - Página no encontrada</h1>
         <p>
            Parece que te fuiste por la jungla sin visión... Esta ruta no existe.
         </p>
         <p>
            Revisá la dirección o volvé a la <button className="leagueTeam__page-error-button " onClick={() => { navigate("/home") }}>página principal</button> para seguir armando tu equipo.
         </p>
      </section>
   )
}
export default ErrorPage