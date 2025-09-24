// Hooks 
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../hooks/useStore"

// Reducers 
import { handleEditUser } from "../../store/usersUI/usersUISlice"

function ModalEdit() {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   return (
      <section className="userManager__modal-delete-container">
         <div className="userManager__modal-edit-container">
            <h3 className="userManager__modal-edit-h3">¡Actualización con exito!</h3>
            <button
               className="userManager__modal-edit-button"
               onClick={() => {
                  dispatch(handleEditUser())
                  navigate("/gresia-dev/projects/UserManager/private/viewUsersAll")
               }}>
               Aceptar
            </button>
         </div>
      </section>
   )
}
export default ModalEdit