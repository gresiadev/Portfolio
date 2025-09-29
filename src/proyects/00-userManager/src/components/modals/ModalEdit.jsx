// Hooks 
import { useNavigate } from "react-router-dom"
import useUsersUI from "../../hooks/useUsersUI"

function ModalEdit() {

   const { handleEditUser } = useUsersUI()
   const navigate = useNavigate()

   return (
      <section className="userManager__modal-delete-container">
         <div className="userManager__modal-edit-container">
            <h3 className="userManager__modal-edit-h3">¡Actualización con exito!</h3>
            <button
               className="userManager__modal-edit-button"
               onClick={() => {
                  handleEditUser()
                  navigate("/gresia-dev/projects/UserManager/private/viewUsersAll")
               }}>
               Aceptar
            </button>
         </div>
      </section>
   )
}
export default ModalEdit