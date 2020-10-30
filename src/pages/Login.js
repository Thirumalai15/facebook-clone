import React from "react";
import { Button } from "@material-ui/core";
import "../styles/login.css";
import { auth, provider } from "../auth/firebase";
import { useStateValue } from "../api/StateProvider";
import { actionTypes } from "../api/reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button onClick={signIn} type="submit">
        Sign In
      </Button>
    </div>
  );
}

export default Login;
