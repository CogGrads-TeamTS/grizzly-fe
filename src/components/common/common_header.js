import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import GlobalSearch from './global_search';

class Header extends Component {
    render() {
        return (
                <Row>
                    <Col xs="5">
                        <img src="http://alt.ausgrads.academy/static/media/logo.b7468bce.png" width="100%" />
                    </Col>
                    <Col xs="4">
                        <GlobalSearch placeholder="Search"/>
                    </Col>
                    <Col xs="3"></Col>
                </Row>
            );
    }
}

export default Header;
