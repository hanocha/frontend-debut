import React, { Component } from 'react';
import GlobalNavBar from './GlobalNavBar';
import AwesomeComponent from './AwesomeComponent';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalNavBar />
        <AwesomeComponent num='5'/>
      </div>
    );
  }
}

export default App;
