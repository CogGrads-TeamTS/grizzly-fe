import React, { Component } from 'react'
import Tabs from '../components/common/common_tabs';
import Header from '../components/common/common_header';
import Sidebar from '../components/common/common_sidebar';
import {Row, Col } from 'reactstrap';
import isAuthenticated from '../Auth/isAuthenticated';
import { Redirect } from 'react-router-dom';

class Homepage extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            isAuthenticated() ? (
                <div>
                    <div className="header">
                        <Row className="nav-row">
                            <Col xs="12">
                                <Header from={this.props}/>
                            </Col>
                        </Row>
                    </div>
                    <Row className="main">
                        <Col xs="12" sm="3">
                            <Sidebar/>
                        </Col>
                        <Col xs="12" sm="9">
                            <Tabs/>
                        </Col>
                    </Row>
                </div>
            ) : (
                <Redirect to={{
                    pathname: '/',
                    state: {from: this.props.location}
                }}/>
            )
        );
    }
}

export default Homepage;