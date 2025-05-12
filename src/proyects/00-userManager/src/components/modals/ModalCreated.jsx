import useFormUser from "../../hooks/useFormUser"

function ModalCreated() {
   const { handleCreatedUser } = useFormUser()

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