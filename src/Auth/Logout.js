import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import config from '../config'
class Logout extends Component {

    constructor(props) {
        super(props);
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

    render() { console.log(config.logout.pathname);
        return (
            <Redirect to={{
                pathname: config.logout.pathname,
                state: { from: this.props.location }
            }} />
        );
    }
}

export default Logout;