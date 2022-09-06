import React, {useContext} from "react";
import UserContext from "./hooks/userContext";
const Homepage = () => {
    const {currentUser} = useContext(UserContext);
    return (
        <div className="Homepage container">
        <h1 className="Homepage heading center">Welcome To Jobly!</h1>
        </div>
    )
}
export default Homepage;