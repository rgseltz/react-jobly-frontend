import React from "react";
import {Switch, Route} from 'react-router-dom';
import Homepage from "./Homepage";
import CompaniesList from "./CompaniesList";
import CompanyDetail from "./CompanyDetail";
import LoginForm from "./LoginForm";
import Jobs from "./Jobs";
import RegisterForm from "./RegisterForm";
import ProfileForm from './ProfileForm';
// import CompanyConext from "./companyContext";


const Routes = ({register, login}) => {
return (
    // <CompanyConext.Provider value={{companies, setCompanies, description, name, handle, employees}}>
        <Switch>
            <Route path={'/companies/:handle'}><CompanyDetail/></Route>
            <Route path={'/companies'}><CompaniesList/></Route>
            <Route path={'/jobs'}><Jobs/></Route>
            <Route path={'/profile-form'}><ProfileForm/></Route>
            <Route path={'/login'}><LoginForm login={login}/></Route>
            <Route path={'/register'}><RegisterForm register={register}/></Route>
            <Route path={'/'}><Homepage/></Route>
        </Switch>
    // </CompanyConext.Provider>
)
}

export default Routes;