import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
class Sidebar extends Component {
    render() {
        return (
        <Row>
                <Col>
                    <h1>Hello I am the sidebar component</h1>
                    <img src="http://alt.ausgrads.academy/static/media/loading.3a0e9bb2.svg" width="100%"/>
                </Col>
        </Row>
        );
    }
}

export default Sidebar;