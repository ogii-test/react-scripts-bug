import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import {CookiesProvider} from "react-cookie";
import {BrowserRouter} from "react-router-dom";
import App from "./components/app/App";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <CookiesProvider>
                <App/>
            </CookiesProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
