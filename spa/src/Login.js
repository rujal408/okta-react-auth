import React from "react";
import { Redirect } from "react-router-dom";
import OktaSignInWidget from "./OktaSignInWidget";
import { useOktaAuth } from "@okta/okta-react";
import axios from "axios";
const Login = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();

  const onSuccess = async (tokens) => {
    console.log(tokens);
    const res = await axios.post("http://localhost:8080/api/login", tokens);
    console.log(res);
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (err) => {
    console.log("error logging in", err);
  };

  if (!authState) return null;

  return authState.isAuthenticated ? (
    <Redirect to={{ pathname: "/profile" }} />
  ) : (
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
  );
};
export default Login;
