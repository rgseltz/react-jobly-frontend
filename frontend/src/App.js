import React, {useState, useContext, useEffect} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import UserContext from './userContext';
import JoblyApi from './api';
import Navigation from './Navigation';
import Homepage from './Homepage';
import Routes from './Routes';
import jwt from 'jsonwebtoken';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null)
  const logout = () => {
    setCurrentUser(null)
  }
  // useEffect(async () => {
  //   if (token) {
  //     await JoblyApi.currentUser(token);
  //   }
  // }
  // )

  const registerForToken = async (registerFormData) => {
    try {
      let token = await JoblyApi.register(registerFormData)
      console.log(token)
      return token;
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <BrowserRouter>
      <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <Navigation logout={logout}/>
        <Routes register={registerForToken}/>
        {currentUser ? <Homepage/> : <div><Link to="/login">Login</Link> <Link to="/register">Sign Up</Link></div>}
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
