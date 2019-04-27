import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import AddBook from './containers/AddBook'
import Display from './containers/Display'


class App extends Component {
  render() {
    return (
      <div className="Page_Wrapper">
        <div className="App">
          <Header />
          <div className="App_Content">
            <AddBook />
            <Display />
          </div>
        </div>
      </div>
    );
  }
}

export default App;