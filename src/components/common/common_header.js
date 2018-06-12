import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import GlobalSearch from './global_search';
import grizzlogo from '../../Asset/griz-logo.png';

class Header extends Component {
    render() {
        return (
                <Row>
                    <Col xs="5">
                        <img src={grizzlogo} width="60%" />
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
