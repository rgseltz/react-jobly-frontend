import React, {useState, useContext} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import UserContext from './userContext';
import Navigation from './Navigation';
import Homepage from './Homepage';
import Routes from './Routes';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const logout = () => {
    setCurrentUser(null)
  }
  return (
    <BrowserRouter>
      <UserContext.Provider>
        <Navigation logout={logout}/>
        <Routes/>
        {currentUser ? <Homepage/> : <div><Link to="/login">Login</Link> <Link to="/register">Sign Up</Link></div>}
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
