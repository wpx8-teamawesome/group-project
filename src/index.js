import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Redux
import { Provider } from 'react-redux';
import store from './ducks/store';

//Routing
import { BrowserRouter as Router } from 'react-router-dom'; 

ReactDOM.render(
        <Router>
    <Provider store={store}>
            <App />
    </Provider>
    </Router>, document.getElementById('root'));
        

serviceWorker.unregister();
