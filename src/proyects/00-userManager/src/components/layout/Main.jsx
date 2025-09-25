// Hooks 
import UserForm from "./UserForm"
import { useAppSelector } from "../../hooks/useStore"

// Components 
import ModalCreated from "../modals/ModalCreated"

function Main({ routerContent }) {
   const { showForm, createdUser } = useAppSelector(store => store.usersUI)
   const form = showForm && <UserForm />

   return (
      <main className="userManager__main">
         <section className="userManager__main-container">
            {form}
            {createdUser && <ModalCreated />}
            {routerContent}
         </section>
      </main>
   )
}

export default Main