// Hooks 
import useUsersUI from "../../hooks/useUsersUI"

function ModalCreated() {
   const { handleCreatedUser } = useUsersUI()

   return (
      <section className="userManager__modal-created-container">
         <div className="userManager__modal-created">
            <h3 className="userManager__modal-created-h3">¡Usuario creado con exito!</h3>
            <button
               className="userManager__modal-created-button "
               onClick={handleCreatedUser}>
               Aceptar
            </button>
         </div>
      </section>
   )
}
export default ModalCreated