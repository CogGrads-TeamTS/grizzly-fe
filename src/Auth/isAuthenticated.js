export default function isAuthenticated() {
    // Check whether the current time is past the access tokens expiry time
    // current date/time in unix format
    let current = Math.round((new Date()).getTime() / 1000);
    // date/time in unix format that the token expires
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return current < expiresAt;
}