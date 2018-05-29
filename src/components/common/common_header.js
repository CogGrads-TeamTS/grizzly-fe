import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
class Header extends Component {
    render() {
        return (
                <Row>
                    <Col>
                        <h1>Hello I am the header</h1>
                    </Col>
                </Row>
            );
    }
}

export default Header;