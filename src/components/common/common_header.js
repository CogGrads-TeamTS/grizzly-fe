import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
class Header extends Component {
    render() {
        return (
                <Row>
                    <Col xs="4">
                        <img src="http://alt.ausgrads.academy/static/media/logo.b7468bce.png" width="100%" />
                    </Col>
                    <Col xs="8">
                        <p>Search Bar</p>
                    </Col>
                </Row>
            );
    }
}

export default Header;