import React, { Component } from 'react';
import Routes from './routes';
import Header from './components/common/common_header';
import Sidebar from './components/common/common_sidebar';
import './App.css';

import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col xs="12">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="3">
            <Sidebar />
          </Col>
          <Col xs="12" sm="9">
            <Routes />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
