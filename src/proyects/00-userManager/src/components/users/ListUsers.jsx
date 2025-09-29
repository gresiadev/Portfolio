// Components 
import CustomNavLink from "../navigation/NavLink"
import ModalDelete from "../modals/ModalDelete"
import ModalEdit from "../modals/ModalEdit"

// Hooks 
import useUsersUI from "../../hooks/useUsersUI"
import useFormUser from "../../hooks/useFormUser"

function User({ user }) {
   const textUserID = user?.id.length > 2 ? user?.id.slice(0, 4) : user?.id

   return (
      <li className="userManager__view-users-all-user">
         <h3 className="userManager__view-users-all-user-h3 "><span className="userManager__view-users-all-user-h3-span">userID:</span> {textUserID}</h3>
         <p className="userManager__view-users-all-user-p"><span className="userManager__view-users-all-user-p-span">Name:</span> {user.name}</p>
         <CustomNavLink to={`/gresia-dev/projects/UserManager/private/viewUser/${user.id}`}
         >
            Ver más
         </CustomNavLink>
      </li>
   )
}

function CompletUser({ user }) {
   const { createUser } = useFormUser()
   const { editUser, handleConfirmUser } = useUsersUI()

   return (<>
      {
         user &&
         <li className="userManager__view-user-user-complete">
            <h2
               className="userManager__view-user-user-complete-h2"
            ><span
               className="userManager__view-user-user-complete-h2-span"
            >userID</span>: {user.id}</h2>
            <p
               className="userManager__view-user-user-complete-p"
            ><span
               className="userManager__view-user-user-complete-p-span"
            >Name:</span> {user.name}</p>
            <p
               className="userManager__view-user-user-complete-p"
            ><span
               className="userManager__view-user-user-complete-p-span"
            >Username:</span> {user.username}</p>
            <p
               className="userManager__view-user-user-complete-p"
            ><span
               className="userManager__view-user-user-complete-p-span"
            >Email:</span> {user.email}</p>
            <p
               className="userManager__view-user-user-complete-p"
            ><span
               className="userManager__view-user-user-complete-p-span"
            >Phone:</span> {user.phone}</p>
            <p
               className="userManager__view-user-user-complete-p"
            ><span
               className="userManager__view-user-user-complete-p-span"
            >Website:</span> {user.website}</p>
            <p
               className="userManager__view-user-user-complete-p"
            ><span
               className="userManager__view-user-user-complete-p-span"
            >City:</span> {user.address.city}</p>
            <p
               className="userManager__view-user-user-complete-p"
            ><span
               className="userManager__view-user-user-complete-p-span"
            >Street:</span> {user.address.street}</p>
            <p
               className="userManager__view-user-user-complete-p"
            ><span
               className="userManager__view-user-user-complete-p-span"
            >Suite:</span> {user.address.suite}</p>

            <div className="userManager__view-user-user-complete-btn-actions ">
               <CustomNavLink
                  to={`/gresia-dev/projects/UserManager/private/viewUser/${user.id}/posts`}
               >
                  Ver posts
               </CustomNavLink>
               <button
                  className="userManager__view-user-user-complete-btn-actions-button"
                  onClick={() => {
                     createUser(user)
                  }}
               >
                  Editar
               </button>
               <button
                  className="userManager__view-user-user-complete-btn-actions-button"
                  onClick={handleConfirmUser}
               >
                  Eliminar
               </button>
            </div>
         </li>
      }
      {<ModalDelete user={user} />}
      {editUser && <ModalEdit />}
   </>)
}

function NoResults() {
   return <h2 className="userManager__view-users-all-h2">Al no haber usuarios se buscarán nuevos...</h2>
}

function ListOfUsers() {
   const { users } = useFormUser()
   const hasUsers = users?.length > 0

   return (
      hasUsers
         ? <ul className="userManager__view-users-all-list-users">
            {users.map(user => (
               <User user={user} key={user.id} />
            ))}
         </ul>
         : < NoResults />
   )
}
export { ListOfUsers, CompletUser }