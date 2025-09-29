// Hooks 
import { useNavigate } from "react-router-dom"
import useUsersUI from "../../hooks/useUsersUI"
import useFormUser from "../../hooks/useFormUser"

function ConfirmDelete({ user }) {

   const { deleteUser } = useFormUser()
   const { handleConfirmUser } = useUsersUI()

   return (
      <section className="userManager__modal-delete-container">
         <div className="userManager__modal-confirm-delete">
            <h3 className="userManager__modal-confirm-delete-h3">¿ Desea eliminar el usuario ?</h3>
            <div className="userManager__modal-confirm-delete-btns-container">
               <button
                  className="userManager__modal-confirm-delete-btns-container-button "
                  onClick={() => { deleteUser(user.id) }}
               >
                  Eliminar
               </button>
               <button
                  className="userManager__modal-confirm-delete-btns-container-button "
                  onClick={() => handleConfirmUser()}>
                  Cancelar
               </button>
            </div>
         </div>
      </section>
   )
}

function CompletDelete() {
   const { handleCompleteUser } = useUsersUI()
   const navigate = useNavigate()

   return (
      <section className="userManager__modal-delete-container">
         <div className="userManager__modal-complet-delete">
            <h3 className="userManager__modal-complet-delete-h3">¡Usuario borrado con exito!</h3>
            <button
               className="userManager__modal-complet-delete-button"
               onClick={() => {
                  handleCompleteUser()
                  navigate("/gresia-dev/projects/UserManager/private/viewUsersAll")
               }}
            >
               Aceptar
            </button>
         </div>
      </section>
   )
}

function ModalDelete({ user }) {
   const { confirmUser, completeUser } = useUsersUI()

   return (<>
      {confirmUser && <ConfirmDelete user={user} />}
      {completeUser && <CompletDelete />}
   </>)
}
export default ModalDelete