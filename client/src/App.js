import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login.js';
import Home from './components/Home/Home.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={ Login }/>
          <Route path="/" component={ Home }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
