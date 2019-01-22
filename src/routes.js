import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChatLobby from './components/ChatLobby/ChatLobby.js';
import LandingParent from './components/LandingParent/LandingParent.js';
import Profile from './components/User/Profile/Profile';
import EventDisplay from './components/Event/EventDisplay/EventDisplay.js'; 
import AddEvent from './components/Dashboard/AddEvent/AddEvent';
import Dashboard from './components/Dashboard/Dashboard'; 
import LoginRegister from './components/LoginRegister/LoginRegister'; 
import EventSearch from './components/EventSearch/EventSearch'; 
import Cloudinary from './components/Cloudinary/Cloudinary'; 

export default (
    <Switch>
        <Route component={ LandingParent } exact path="/"/>
        <Route component={ ChatLobby } path="/chat/:room"/>
        <Route component={ Profile } path="/user/:id" />
        <Route component={ AddEvent } path='/dashboard/add-event'/>
        <Route component={ Dashboard } path="/dashboard" />
        <Route component={ EventDisplay } path="/event/:id" />
        <Route component={ LoginRegister } path="/login" /> 
        <Route component={ EventSearch } path='/event-search' /> 
        <Route component={ Cloudinary } path='/img' />     
    </Switch>
)