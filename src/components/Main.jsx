// COMPONENTS
import AboutMe from "./sections/AboutMe";
import Techs from "./sections/Techs";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function Main() {
   return (
      <main className="portfolio__main" >
         <section className="portfolio__main-container">
            <AboutMe />
            <Techs />
            <Projects />
            <Contact />
         </section>
      </main>
   )
}

export default Main