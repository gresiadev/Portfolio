// Hooks 
import UserForm from "./UserForm"
import useFormUser from "../../hooks/useFormUser"

// Components 
import ModalCreated from "../modals/ModalCreated"

function Main({ routerContent }) {
   const { showForm, createdUser } = useFormUser()

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