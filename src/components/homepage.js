import React, { Component } from 'react'

import Header from '../components/common/common_header';
import Sidebar from '../components/common/common_sidebar';
import {Row, Col } from 'reactstrap';
import isAuthenticated from '../Auth/isAuthenticated';
import { Redirect,withRouter } from 'react-router-dom';

import axios from 'axios';

class Homepage extends Component {

    constructor(props){
        super(props);
        axios.interceptors.response.use(response => {
            console.log(response);
            return response;
         }, error => {
            // 403 forbidden, 401 unauthorized
           if (error.response.status === 403) {
            // token is valid however forbidden to access the resource
            // log the user out
            this.props.history.replace('/logout')
           } else if (error.response.status === 401) {
            // token is not valid however may need to be refreshed...
            // TODO: refresh the token and make request again?
            this.props.history.replace('/logout')
           }
           return error;
        });
    }
    render() {
        return (
            isAuthenticated() ? (
                <div>
                    <div className="header">
                        <Row className="nav-row">
                            <Col xs="12">
                                <Header/>
                            </Col>
                        </Row>
                    </div>
                    <Row className="main" style={{marginLeft: '0px',marginRight: '0px'}}>
                        <Col xs="12" sm="3">
                            <Sidebar/>
                        </Col>
                        <Col xs="12" sm="9">
                            {this.props.children}
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

export default withRouter(Homepage);