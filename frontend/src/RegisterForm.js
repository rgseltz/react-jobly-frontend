import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import JoblyApi from "./api";
const RegisterForm = ({register}) => {
    const INITIAL_STATE = {
        firstName : 'ryboy',
        lastName : 'ryboy',
        username : 'ryboy',
        email : 'ryboy@gmail.com',
        password:'ryboy'
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(data => ({...data, [name] : value}))
        console.log(formData);
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const {firstName, lastName, email, password, username} = formData;
        register(formData);
        setFormData(INITIAL_STATE);
        history.push('/companies');
    }
    const history = useHistory();

    // const registerUser = async (firstName, lastName, email, password, username) => {
    //     let newUser = await JoblyApi(firstName, lastName, email, password, username);
    //     console.log(newUser)
    //     return newUser;
    // }
    
    return (
        <div>
            <h1>Signup to Jobly NOW!!!!</h1>
            <div className="container">
            <form className="RegisterForm form row g-3" onSubmit={handleSubmit}>
                <div className="col-md-12">
                    <label className="form-label" htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" onChange={handleChange} value={formData.firstName} name="firstName"
                    />
                </div>
                <div className="col-md-12">
                    <label className="form-label" htmlFor="last">Last Name</label>
                    <input type="text" className="form-control" id="last" onChange={handleChange} value={formData.lastName} name="lastName"/>      
                </div>
                <div className="col-12">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" onChange={handleChange} value={formData.username} name="username"/>
                 </div>
                 <div className="col-md-12">
                    <label className="form-label" htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email"  onChange={handleChange} value={formData.email} name="email"/>
                </div>
                 <div className="col-12">
                   <label className="form-label" htmlFor="password">Password</label>
                   <input type="password" className="form-control" id="password"  onChange={handleChange} value={formData.password} name="password"/>
                </div>
            <button>Sign Up</button>
        </form>
        </div>
    </div>
        
    )
}
export default RegisterForm;