import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import HomePage from './pages/home';
import SinglePage from './pages/single';

class App extends Component {



  render() {


    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/:id" component={SinglePage} />

        </div>
      </Router>
    );
  }
}

export default App;
