import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
class Sidebar extends Component {
    render() {
        return (
        <Row>
                <Col>
                    <h1>Hello I am the sidebar component</h1>
                </Col>
        </Row>
        );
    }
}

export default Sidebar;