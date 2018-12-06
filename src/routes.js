import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChatLobby from './components/ChatLobby/ChatLobby.js';
import LandingParent from './components/LandingParent/LandingParent.js';
import Dashboard from './components/Dashboard/Dashboard'

export default (
    <Switch>
        <Route component={ LandingParent } exact path="/"/>
        <Route component={ ChatLobby } path="/chat"/>
        <Route component={ Dashboard } path="/dashboard" />
    </Switch>
)