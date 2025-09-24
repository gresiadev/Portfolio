// Hooks 
import { useNavigate } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../hooks/useStore"

// Reducers UI 
import { handleConfirmUser, handleCompleteUser } from "../../store/usersUI/usersUISlice"

// Reducer 
import { fetchDeleteUser } from "../../store/users/usersSlice"

function ConfirmDelete({ user }) {
   const dispatch = useAppDispatch()

   return (
      <section className="userManager__modal-delete-container">
         <div className="userManager__modal-confirm-delete">
            <h3 className="userManager__modal-confirm-delete-h3">¿ Desea eliminar el usuario ?</h3>
            <div className="userManager__modal-confirm-delete-btns-container">
               <button
                  className="userManager__modal-confirm-delete-btns-container-button "
                  onClick={() => {
                     dispatch(handleConfirmUser())
                     dispatch(handleCompleteUser())
                     dispatch(fetchDeleteUser(user.id))
                  }}
               >
                  Eliminar
               </button>
               <button
                  className="userManager__modal-confirm-delete-btns-container-button "
                  onClick={() => dispatch(handleConfirmUser())}>
                  Cancelar
               </button>
            </div>
         </div>
      </section>
   )
}

function CompletDelete() {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   return (
      <section className="userManager__modal-delete-container">
         <div className="userManager__modal-complet-delete">
            <h3 className="userManager__modal-complet-delete-h3">¡Usuario borrado con exito!</h3>
            <button
               className="userManager__modal-complet-delete-button"
               onClick={() => {
                  dispatch(handleCompleteUser())
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
   const { confirmUser, completeUser } = useAppSelector(state => state.usersUI)

   return (<>
      {confirmUser && <ConfirmDelete user={user} />}
      {completeUser && <CompletDelete />}
   </>)
}
export default ModalDelete