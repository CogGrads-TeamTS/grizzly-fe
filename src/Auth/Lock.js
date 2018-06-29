import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auth0Lock from 'auth0-lock';
import { AUTH_CONFIG } from './auth0-variables';

class Lock extends Component {
    lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
        auth: {
            responseType: 'token id_token',
            sso: false,
        },
        theme: {
            logo: 'https://i.imgur.com/WTynPTe.png',
            primaryColor: '#F1A94E'
        },
        labeledSubmitButton: false,
        allowAutocomplete: true,
        allowedConnections: ['Username-Password-Authentication'],
        container: 'hiw-login-container',
        languageDictionary: {
            emailInputPlaceholder: "something@youremail.com",
            title: "Grizzly Admin Portal",

        },
        allowSignUp:false
    });

    constructor(props) {
        super(props);
        this.state = { loggedIn : false };
        this.onAuthenticated = this.onAuthenticated.bind(this);
        this.onAuthenticated();
    }

    onAuthenticated() {
        this.lock.on('authenticated', (authResult) => {
            let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
            localStorage.setItem('access_token', authResult.accessToken);
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('expires_at', expiresAt);

            this.setState({ loggedIn: true });
        });
    }

    componentDidMount() {
        // Avoid showing Lock when hash is parsed.
        if ( !(/access_token|id_token|error/.test(this.props.location.hash)) ) {
            this.lock.show();
        }
    }


    render() {
        const style = { marginTop: '60px' };

        return(
            !this.state.loggedIn ? (
                <div>
                    <div id="hiw-login-container" style={style}></div>
                </div>
            ) : (
                <Redirect to={{
                    pathname: '/dashboard',
                    state: { from: this.props.location }
                }} />
            )
        );
    }
}

export default Lock;