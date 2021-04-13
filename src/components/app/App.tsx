import './App.css';
import Login from '../core/login/Login';
import {useCookies} from 'react-cookie';
import {CookieUtils} from '../../util/CookieUtils';
import React from 'react';
import {CssBaseline, ThemeProvider} from "@material-ui/core";
import theme from "../../theme";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import Routes from "../../routes/Routes";

declare module 'react-router-dom';

export default function App() {
    const [cookies] = useCookies(["token"]);

    //If user not logged in and token is `NULL` or `undefined`, redirect to Login page
    if (!CookieUtils.isTokenPresent(cookies)) {
        return <Login/>;
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <main>
                <Routes/>
            </main>
            <Footer/>
        </ThemeProvider>)
}
