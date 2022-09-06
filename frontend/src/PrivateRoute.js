import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "./hooks/userContext";
const PrivateRoute = ({exact, path, children, update}) => {
    const {currentUser} = useContext(UserContext);
    console.log('currentUser in PrivateRoute', currentUser)
    if (!currentUser) {
        return (
            <Redirect to='/'/>
        )
    }
    return (
        <Route exact={exact} path={path} update={update}>
            {children}
        </Route>
    )
}
export default PrivateRoute;