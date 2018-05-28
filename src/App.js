import React, { Component } from 'react';
import Routes from './routes';
import Header from './components/common/common_header';
import Sidebar from './components/common/common_sidebar';
import Category from '../src/components/Category/Category';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* TODO: CSS Styles */}
        <Header />
        <div>
          <Routes />
        </div>
        <Sidebar />
        {/*for testing should be removed*/}
        <Category />
      </div>
    );
  }
}

export default App;
