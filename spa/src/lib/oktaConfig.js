const REACT_APP_CLIENT_ID = "0oa24gjud9tyarWih5d7";
const REACT_APP_OKTA_DOMAIN = "dev-25426645.okta.com";
const REACT_APP_PORT = 3030;

export const oktaConfig = {
  clientId: `${REACT_APP_CLIENT_ID}`,
  issuer: `https://${REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  redirectUri: `http://localhost:${REACT_APP_PORT}/login/callback`, // this makes it so redirects to login if not logged in for secure routes
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};

export const oktaSignInConfig = {
  baseUrl: "https://dev-25426645.okta.com",
  clientId: REACT_APP_CLIENT_ID,
  redirectUri: window.location.origin + "/login/callback",
  authParams: {
    // If your app is configured to use the Implicit flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to uncomment the below line
    // pkce: false
  },
  idps: [
    { type: "GOOGLE", id: "0oa24ymw6iNJpk0CS5d7" },
    { type: "MICROSOFT", id: "0oa24zviutXomDrUF5d7" },
  ],
};
