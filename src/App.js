import React, { Component } from 'react';
import Routes from './routes';
import Header from './components/common/common_header';
import Sidebar from './components/common/common_sidebar';
import Tabs from './components/common/common_tabs';
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
          <Tabs/>
      </div>
    );
  }
}

export default App;
