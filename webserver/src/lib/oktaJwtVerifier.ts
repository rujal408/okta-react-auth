import OktaJwtVerifier from '@okta/jwt-verifier';

const OKTA_DOMAIN = 'dev-25426645.okta.com' as string;
const AUTH_SERVER_ID = 'default' as string;

export const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `https://${OKTA_DOMAIN}/oauth2/${AUTH_SERVER_ID}`, // required
});
