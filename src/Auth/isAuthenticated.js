export default function isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let current = Math.round((new Date()).getTime() / 1000);
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return current < expiresAt;
}