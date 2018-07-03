const dev = {
    auth0: {
        callbackUri: "http://localhost:3000/admin/callback"
    },
    logout: {
        pathname: "/"
    }
};

const prod = {
    auth0: {
        callbackUri: "http://ts.ausgrads.academy/admin/callback"
    },
    logout: {
        pathname: "http://ts.ausgrads.academy/admin/"
    }
};

const config = process.env.REACT_APP_STAGE === 'production'
    ? prod
    : dev;

export default {
    ...config
}