
function Contact() {
   return (
      <section id="contact"
         className="portfolio__contact">
         <h2 className="portfolio__contact-title">Contacto</h2>
         <ul className="portfolio__contact-list">
            <li className="portfolio__contact-item">
               <a
                  className="portfolio__contact-link"
                  href="mailto:lucasgresia@hotmail.com"
                  target="_blank"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" portfolio__contact-icon icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
               </a>
            </li>

            <li className="portfolio__contact-item">
               <a
                  className="portfolio__contact-link"
                  href="https://www.linkedin.com/in/lucas-gresia-972337183/"
                  target="_blank"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="portfolio__contact-icon icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
               </a>
            </li>
         </ul>
      </section>
   )
}

export default Contact