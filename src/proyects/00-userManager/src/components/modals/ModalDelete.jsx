// Hooks 
import useFormUser from "../../hooks/useFormUser"
import { useNavigate } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../hooks/useStore"

// Reducers UI 
import { handleConfirmUser, handleCompleteUser } from "../../store/usersUI/usersUISlice"

// Reducer 
import { fetchDeleteUser } from "../../store/users/usersSlice"
import { useEffect } from "react"

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
                  console.log("Antes de ponerlo false")
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

   useEffect(()=>{console.log(completeUser)},[completeUser])
   return (<>
      {confirmUser && <ConfirmDelete user={user} />}
      {completeUser && <CompletDelete />}
   </>)
}
export default ModalDelete