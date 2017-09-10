import React from 'react';
import {Route} from 'react-router';

import Main from './components/main';
import Formation from './components/formation';

import './App.css';

export default function App(props) {
    return (
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route exact path="/formation" component={Formation} />
      </div>
    );
}
