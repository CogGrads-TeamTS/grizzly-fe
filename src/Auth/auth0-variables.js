
import config from '../config'

export const AUTH_CONFIG = {
    domain: 'blakehowe96.au.auth0.com',
    clientId: 'ZR0FRNwaUJZyKobkPxPUKnsW7WmYak0Y',
    redirectUri: config.auth0.callbackUri,
    audience: 'https://blakehowe96.au.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
}