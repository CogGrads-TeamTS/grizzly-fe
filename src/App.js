import React, { Component } from 'react';
import Routes from './routes';
import logo from './logo.svg';
import Header from './components/common/common_header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Routes />
        </div>
        
      </div>
    );
  }
}

export default App;
