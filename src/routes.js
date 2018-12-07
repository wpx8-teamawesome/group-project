import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChatLobby from './components/ChatLobby/ChatLobby.js';
import LandingParent from './components/LandingParent/LandingParent.js';
import Dashboard from './components/Dashboard/Dashboard'
import Map from './components/Map/Map'

export default (
    <Switch>
        <Route component={ LandingParent } exact path="/"/>
        <Route component={ ChatLobby } path="/chat"/>
        <Route component={ Dashboard } path="/dashboard" />
        <Route component={ Map } path="/map" />
    </Switch>
)