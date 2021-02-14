import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Home, Pokemon} from './Pages'

import './App.css'
// import { Container } from './styles';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/pokemon/*" component={Pokemon} />
    </Router>
  );
}

export default App;