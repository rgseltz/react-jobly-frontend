import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "./userContext";
const PrivateRoute = ({exact, path, children}) => {
    const currentUser = useContext(UserContext);
    console.log('currentUser in PrivateRoute', currentUser)
    if (!currentUser) {
        return (
            <Redirect to='/'/>
        )
    }
    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    )
}
export default PrivateRoute;