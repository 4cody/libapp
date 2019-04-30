import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header'
import AddBook from './containers/AddBook'
import Display from './containers/Display'
import test from './components/Test'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="Page_Wrapper">
          <div className="App">
            <Header />
            <div className="App_Content">
              <AddBook />
              <Route exact path="/" component={Display} />
              <Route path="/test" component={test} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;