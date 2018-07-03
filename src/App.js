import React, { Component } from 'react';
import Routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid no-padding">
          <Routes />
      </div>
    );
  }
}

export default App;
