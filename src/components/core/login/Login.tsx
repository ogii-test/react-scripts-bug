import React, {useState} from 'react';
import {LoginUserService} from "../../../services/LoginUserService";
import {useCookies} from "react-cookie";
import "./Login.css";
import {Credentials} from "./Credentials";
import {useHistory} from "react-router-dom";

export default function Login() {
    const [loginStatus, setLoginStatus] = useState<Boolean>();
    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [cookies, setCookie] = useCookies(["token"]);
    const history = useHistory();

    //Login user and save token
    const loginUser = (e: any) => {
        e.preventDefault();
        LoginUserService.loginUser(new Credentials(username, password)).then(token => {
            //Set cookies
            setCookie("token", token?.token, {path: "/"});

            // Navigate to home page
            history.push("/");
        }).catch(function (e) {
            setLoginStatus(false);
            console.log("Failed to login");
        });
    };

    return (
        <div className="login-wrapper">
            <form onSubmit={loginUser}>
                <label>
                    <p>Username</p>
                    <input
                        type="text"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setUserName(event.target.value)
                        }}
                    />

                    <p>Password</p>
                    <input
                        type="password"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setPassword(event.target.value);
                        }}
                    />
                </label>
                <br/>
                <br/>
                <div>
                    <button type="submit">Submit</button>
                </div>
                <div>
                    {loginStatus === false ?
                        <div>
                            <h6>Failed to Login</h6>
                        </div> : <></>}
                </div>
            </form>
        </div>
    );
}
