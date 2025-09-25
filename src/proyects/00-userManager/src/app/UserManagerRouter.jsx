// Components 
import { Route, Navigate } from "react-router-dom"

// Private Guard 
import PrivateGuard from "../components/router/PrivateGuard"

// Public Routes
import PublicRoutes from "../components/router/PublicRoutes"
import RoutesWhitNotFound from "../../../../app/RoutesWhitNotFound"

// Pages 
import ViewUsersAll from "../pages/ViewUsersAll"
import ViewUser from "../pages/ViewUser"
import ViewUserPosts from "../pages/ViewUserPosts"

function UserManagerRouter() {
   return (
      <RoutesWhitNotFound>
         <Route path="/*" element={<PublicRoutes />} />

         <Route element={<PrivateGuard />}>
            <Route path="private/viewUsersAll" element={<ViewUsersAll />} />
            <Route path="private/viewUser/:userID" element={<ViewUser />} />
            <Route path="private/viewUser/:userID/posts" element={<ViewUserPosts />} />

         </Route>

         <Route path="private/*" element={<Navigate to={"/Error-Portfolio404"} />} />
      </RoutesWhitNotFound>
   )
}

export default UserManagerRouter