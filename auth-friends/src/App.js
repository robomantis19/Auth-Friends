import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'; 
 
import Login from './components/Login';
import Friends from './components/Friends'; 
import LoginError from './components/LoginError'; 

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friends" component={Friends}/>
          <Route path="/error" component={LoginError}/>
          <Route path="/login" component={Login}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
