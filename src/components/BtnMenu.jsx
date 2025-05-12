function BtnMenu() {
   return (<>
      <label
         className="portfolio__labelNav"
         htmlFor="responseNav">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3"
            className="portfolio__header-menu-icon"
         ><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
      </label>
      <input
         type="checkbox"
         name="responseNav"
         id="responseNav"
         hidden
         className="portfolio__inputNav"
      />
   </>)
}

export default BtnMenu