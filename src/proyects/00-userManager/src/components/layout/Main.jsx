// Hooks 
import useUsersUI from "../../hooks/useUsersUI"

// Components 
import UserForm from "./UserForm"
import ModalCreated from "../modals/ModalCreated"

function Main({ routerContent }) {
   const { showForm, createdUser } = useUsersUI()
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