const dev = {
    auth0: {
        callbackUri: "http://localhost:3000/admin/callback"
    }
}

const prod = {
    auth0: {
        callbackUri: "http://ts.ausgrads.academy/admin/callback"
    }
}

const config = process.env.REACT_APP_STAGE === 'production'
    ? prod
    : dev;

export default {
    ...config
}