import "../login/Login.css";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import React from "react";

export default function Logout() {
  const [cookies, removeCookie] = useCookies(["token"]);
  const history = useHistory();

  //Remove token from cookies
  function logoutUser() {
    console.log("Logged out user");
    // @ts-ignore
    removeCookie("token");

    // Programmatically navigate
    history.push("/login");
  }

  return (
    <div className="login-wrapper">
      <div onClick={logoutUser}>
        <Button color="inherit">Logout</Button>
      </div>
    </div>
  );
}
