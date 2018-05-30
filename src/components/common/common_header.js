import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import Search from './search';
class Header extends Component {
    render() {
        return (
                <Row>
                    <Col xs="4">
                        <img src="http://alt.ausgrads.academy/static/media/logo.b7468bce.png" width="100%" />
                    </Col>
                    <Col xs="8">
                        <Search placeholder="Search"/>
                        <Search placeholder="Search by Category"/>
                    </Col>
                </Row>
            );
    }
}

export default Header;
