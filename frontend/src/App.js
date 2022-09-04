import React, {useState, useContext, useEffect} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import UserContext from './userContext';
import useLocalStorage from './useLocalStorage';
import JoblyApi from './api';
import Navigation from './Navigation';
import Homepage from './Homepage';
import Routes from './Routes';
import jwt from 'jsonwebtoken';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage('token');
  const logout = () => {
    setCurrentUser(null)
    setToken(null);
    console.log('YOU ARE LOGGED OUT SUCKA')
  }

  useEffect(() => {
    const getUser = async () => {
    if (token) {
      let {username} = jwt.decode(token);
      console.log(username);
      JoblyApi.token = token;
      let user = await JoblyApi.getCurrentUser(username);
      console.log(user)
      setCurrentUser(user);
        }
      }
      getUser();
  }, [token]
  );  
  console.log('current user', currentUser);
  const registerForToken = async (registerFormData) => {
    try {
      let token = await JoblyApi.register(registerFormData)
      setToken(token);
    } catch (err) {
      console.log(err)
    }
  }

  const login = async (loginFormData) => {
    try{
      let token = await JoblyApi.login(loginFormData);
      setToken(token);
      console.log(token);
    } catch (err) {
      console.error('invalid login', err)
    }
  }
  console.log(token);
  return (
    <BrowserRouter>
      <UserContext.Provider value={currentUser}>
        <Navigation logout={logout}/>
        <Routes register={registerForToken} login={login}/>
        {!currentUser && <div> <Link to="/login">Login</Link><Link to="/register">Sign Up</Link></div> }
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
