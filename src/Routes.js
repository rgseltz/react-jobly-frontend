import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Homepage from "./Homepage";
import CompaniesList from "./companies/CompaniesList";
import CompanyDetail from './companies/CompanyDetail';
import LoginForm from "./forms/LoginForm";
import Jobs from "./jobs/Jobs";
import RegisterForm from "./forms/RegisterForm";
import ProfileForm from './forms/ProfileForm';
import PrivateRoute from "./PrivateRoute";
// import CompanyConext from "./companyContext";


const Routes = ({register, login, update}) => {
return (
    // <CompanyConext.Provider value={{companies, setCompanies, description, name, handle, employees}}>
        <Switch>
            <PrivateRoute path={'/companies/:handle'}><CompanyDetail/></PrivateRoute>
            <PrivateRoute path={'/companies'}><CompaniesList/></PrivateRoute>
            <PrivateRoute path={'/jobs'}><Jobs/></PrivateRoute>
            <PrivateRoute path={'/profile-form'}><ProfileForm update={update}/></PrivateRoute>
            <Route path={'/login'}><LoginForm login={login}/></Route>
            <Route path={'/register'}><RegisterForm register={register}/></Route>
            <Route path={'/'}><Homepage/></Route>
            <Redirect to='/'/>
        </Switch>
    // </CompanyConext.Provider>
)
}

export default Routes;