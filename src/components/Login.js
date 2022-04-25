import { Button } from "@material-ui/core";
import React from "react";
import "../Login.css";
import { auth, provider } from "../config/firebase";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/Reducer";

const Login = () => {
  const [, dispatch] = useStateValue();

  const signIn = async () => {
    try {
      const res = await auth.signInWithPopup(provider);
      dispatch({
        type: actionTypes.SET_USER,
        user: res.user,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={require("../assets/images/logo.png")} alt="" />
      </div>
      <div>
        <h1
          style={{
            backgroundColor: "rgb(150, 150, 214)",
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          SlamBook
        </h1>
        <hr />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
