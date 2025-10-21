// COMPONENT 
import { NavLink } from "react-router-dom"

function Projects() {
   return (
      <section id="projects"
         className="portfolio__projects">
         <h2 className="portfolio__projects-title"> Proyectos</h2>

         <ul className="portfolio__projects-list">

            {/* USER MANAGER  */}
            <li className="portfolio__projects-item">
               <article className="portfolio__project-card">
                  <h3 className="portfolio__project-title">User Manager</h3>
                  <img src="/assets/images/proyects/user2udt.png"
                     alt="Project userManager img*"
                     className="portfolio__project-img"
                  />

                  <div className="portfolio__project-description-container">
                     <div className="portfolio__project-description">
                        <p className="portfolio__project-description-text">
                           Aplicación para gestionar usuarios, con autenticación, rutas protegidas y formularios. Simula la creación, edición y eliminación de usuarios, obteniendo los datos desde la API de JSONPlaceholder. Más info en la App.
                        </p>
                     </div>
                     <ul className="portfolio__project-techs-list">
                        <li className="portfolio__project-techs-item">React js</li>
                        <li className="portfolio__project-techs-item">React Router Dom</li>
                        <li className="portfolio__project-techs-item">Redux Toolkit</li>
                        <li className="portfolio__project-techs-item">Fetch API</li>
                        <li className="portfolio__project-techs-item">Form validation</li>
                     </ul>

                  </div>
                  <div className="portfolio__project-btns">
                     <NavLink
                        to={"projects/UserManager/"}
                        className="portfolio__project-btn"
                     >
                        Ver proyecto
                     </NavLink>
                  </div>
               </article>
            </li>

            {/* LEAGUE TEAM  */}
            <li className="portfolio__projects-item">
               <article className="portfolio__project-card">
                  <h3 className="portfolio__project-title">League Team Builder</h3>
                  <img src="/assets/images/proyects/lol2udt.png" alt="Team league buider img*"
                     className="portfolio__project-img"
                  />

                  <div className="portfolio__project-description-container">

                     <div className="portfolio__project-description">
                        <p className="portfolio__project-description-text">
                           Aplicación para armar equipo personalizado de League of Legends. Permite visualizar campeones, filtrarlos por tipo o poder, y agregarlos o quitarlos del equipo. Más info en la App.
                        </p>
                     </div>
                     <ul className="portfolio__project-techs-list">
                        <li className="portfolio__project-techs-item">React js</li>
                        <li className="portfolio__project-techs-item">React Router Dom</li>
                        <li className="portfolio__project-techs-item">Redux Toolkit</li>
                        <li className="portfolio__project-techs-item">Persistencia</li>
                        <li className="portfolio__project-techs-item">Filtros</li>

                     </ul>
                  </div>
                  <div className="portfolio__project-btns">
                     <NavLink
                        to={"projects/LeagueTeamBuilder/"}
                        className="portfolio__project-btn"
                     >
                        Ver proyecto
                     </NavLink>
                  </div>
               </article>
            </li>
         </ul>
      </section>
   )
}

export default Projects