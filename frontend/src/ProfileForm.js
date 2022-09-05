import React, {useContext} from "react";
import useFormData from "./useFormData";
import { useHistory } from "react-router-dom";
import UserContext from "./userContext";
const ProfileForm = ({update}) => {
    const currentUser = useContext(UserContext)
    const INITIAL_STATE = {
        firstName : currentUser.firstName,
        lastName : currentUser.lastName,
        username : currentUser.username,
        email : currentUser.email,
        password : ""
    }
    const [formData, handleChange, resetFormData] = useFormData(INITIAL_STATE);
    const history = useHistory();
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(formData);
        let profileData = {
            firstName : formData.firstName,
            lastName : formData.lastName,
            email : formData.email,
            password : formData.password
        }
        console.log(profileData)
        await update(profileData);
        history.push('/');
    }
    return (
        <div className="container">
        <h1>Update your profile!</h1>
            <form className="ProfileForm form row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label className="form-label" htmlFor="username">Profile:</label>
                    <p>{formData.username}</p>
                 </div>
                <div className="col-md-12">
                    <label className="form-label" htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" onChange={handleChange} value={formData.firstName} name="firstName"
                    />
                </div>
                <div className="col-md-12">
                    <label className="form-label" htmlFor="last">Last Name</label>
                    <input type="text" className="form-control" id="last" onChange={handleChange} value={formData.lastName} name="lastName"/>      
                </div>
                 <div className="col-md-12">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email"  onChange={handleChange} value={formData.email} name="email"/>
                </div>
                <div className="col-md-12">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password"  onChange={handleChange} value={formData.password} name="password"/>
                </div>
            <button>Edit Profile</button>
        </form>
        </div>
    )
}
export default ProfileForm;