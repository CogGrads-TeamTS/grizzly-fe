import React, { Component } from 'react';
import Routes from './routes';
import Header from './components/common/common_header';
import Sidebar from './components/common/common_sidebar';
import './App.css';

import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="container-fluid no-padding">
        <div className="header">
        <Row className="nav-row">
          <Col xs="12">
            <Header />
          </Col>
        </Row>
        </div>
        <Row className="main">
          <Col xs="12" sm="3">
            <Sidebar />
          </Col>
          <Col xs="12" sm="9">
            <Routes />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
