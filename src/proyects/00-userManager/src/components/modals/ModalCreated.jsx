// Hooks 
import { useAppDispatch } from "../../hooks/useStore"

// Reducers 
import { handleCreatedUser } from "../../store/usersUI/usersUISlice"

function ModalCreated() {

   const dispatch = useAppDispatch()

   return (
      <section className="userManager__modal-created-container">
         <div className="userManager__modal-created">
            <h3 className="userManager__modal-created-h3">¡Usuario creado con exito!</h3>
            <button
               className="userManager__modal-created-button "
               onClick={() => dispatch(handleCreatedUser())}>
               Aceptar
            </button>
         </div>
      </section>
   )
}
export default ModalCreated