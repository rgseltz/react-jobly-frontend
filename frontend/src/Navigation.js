import React, {useContext} from "react";
import {NavItem, NavLink, Link, Nav} from "react-router-dom";
import userContext from "./userContext";
const Navigation = () => {
    const currentUser = useContext(userContext);
    const loggedOut = () => {
        return (
            <div className="navbar-right" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="register">Signup</NavLink>
                    </li>
                </ul>
            </div>
        )
    };

    const loggedIn = () => {
        return (
            <div className="navbar-right" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/companies">Companies</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/user-form">User</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Signout</NavLink>
                    </li>
                </ul>
            </div>
        )
    };
    
    return(
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Jobly</Link>
    {currentUser ? loggedIn() : loggedOut()}
  </div>
</nav>
    )
}
export default Navigation;