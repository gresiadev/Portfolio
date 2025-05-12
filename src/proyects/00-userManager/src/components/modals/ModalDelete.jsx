// Hooks 
import useFormUser from "../../hooks/useFormUser"
import { useNavigate } from "react-router-dom"

function ConfirmDelete({ user }) {
   const { handleConfirmUser, deleteUser } = useFormUser()

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
                  onClick={handleConfirmUser}>
                  Cancelar
               </button>
            </div>
         </div>
      </section>
   )
}

function CompletDelete() {
   const { handleCompletUser } = useFormUser()

   const navigate = useNavigate()
   return (
      <section className="userManager__modal-delete-container">
         <div className="userManager__modal-complet-delete">
            <h3 className="userManager__modal-complet-delete-h3">¡Usuario borrado con exito!</h3>
            <button
            className="userManager__modal-complet-delete-button"
               onClick={() => {
                  handleCompletUser()
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
   const { confirmDelete, completDelete } = useFormUser()

   return (<>
      {confirmDelete && <ConfirmDelete user={user} />}
      {completDelete && <CompletDelete />}
   </>)
}
export default ModalDelete