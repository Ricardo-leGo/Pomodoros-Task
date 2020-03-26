import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './components/404/NotFound.js';
import Navbar from './components/navbar/Navbar';
import signup from './pages/signup';
import Home from './components/home/Home.js';
import profile from './pages/profile.js';

const loggedUser = () =>{return( <h1>loggedUser</h1>)}
const taskdetails = () =>{return( <h1>taskdetails</h1>)}

const Routes = () => (
  <>
<Navbar/>
    <Switch>
      <Route exact path="/signup" component={signup} />
      <Route exact path="/login" component={signup} />
      <Route exact path="/profile" component={profile} />
      <Route exact path="/taskdetails" component={taskdetails} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </>
);
export default Routes