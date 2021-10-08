import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useHistory } from "react-router";

const Home = () => {
  const { authState } = useOktaAuth();
  const history = useHistory();
  const login = async () => history.push("/login");

  if (!authState) {
    return <div>Loading authentication...</div>;
  } else if (!authState.isAuthenticated) {
    return (
      <div>
        <button onClick={login}>Login with okta</button>
      </div>
    );
  } else {
    return "You authenticated bitch!";
  }
};
export default Home;
