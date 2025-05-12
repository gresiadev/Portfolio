function AboutMe() {
   return (
      <section id="aboutme"
         className="portfolio__aboutme">
         <div className="portfolio__aboutme-img-container">
            <img
               className="portfolio__aboutme-img"
               src="public/assets/images/avatar.avif"
               alt="aboutme-mi-foto" />
         </div>
         <article
            className="portfolio__aboutme-description"
         >
            <h1
               className="portfolio__aboutme-title">Frontend Developer <span className="portfolio__aboutme-detail">Junior</span>
            </h1>
            <h2 className="portfolio__aboutme-subtitle">Especializado en <span className="portfolio__aboutme-detail">React</span> para construir interfaces interactivas, funcionales y escalables.</h2>
            <p className="portfolio__aboutme-text">Soy <span className="portfolio__aboutme-detail2">Lucas Gresia</span>. Tengo experiencia desarrollando proyectos personales y actualmente estoy en búsqueda de mi primera experiencia laboral en el mundo <span className="portfolio__aboutme-detail2">IT</span>.</p>
            <div className="portfolio__aboutme-btn-container">
               <a
                  className="portfolio__aboutme-btn"
                  href="public/assets/lucasgresia.pdf"
                  download={"Cv_Lucas_Gresia.pdf"}
               > Descargar Cv!</a>
            </div>
         </article>
      </section>
   )
}

export default AboutMe