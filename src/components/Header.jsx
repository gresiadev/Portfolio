// COMPONENTS 
import Nav from "./Nav"
import BtnMenu from "./BtnMenu"

function Header() {
   return (
      <header className="portfolio__header">
         <div className="portfolio__header-container">
            <BtnMenu />
            <Nav className="portfolio__nav" />
         </div>
      </header>
   )
}

export default Header