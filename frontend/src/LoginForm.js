import React, {useState} from "react";
import { useHistory } from "react-router-dom";
const LoginForm = ({login}) => {
    const INITIAL_STATE = {
        username : 'ryboy',
        password : 'ryboy'
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(data => ({...data, [name] : value}));
        console.log(formData);
    }
    const history = useHistory()
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await login(formData);
        history.push('/companies');
    }
    return (
        <div className="container">
            <h1>Login Form HERE!</h1>
            <form className="RegisterForm form row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" onChange={handleChange} value={formData.username} name="username"/>
                 </div>
                 <div className="col-12">
                   <label className="form-label" htmlFor="password">Password</label>
                   <input type="password" className="form-control" id="password"  onChange={handleChange} value={formData.password} name="password"/>
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}
export default LoginForm;