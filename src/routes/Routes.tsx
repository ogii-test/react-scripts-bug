import {Route, Switch} from "react-router-dom";
import Home from "../components/core/home/Home";
import Dashboard from "../components/dashboard/Dashboard";
import Preferences from "../components/preferences/Preferences";
import OhifViewer from "../components/ohif-viewer/OhifViewer";

export default function Routes() {
    return (
        <div>
            {/* Define all routes here */}
            <Switch>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/preferences">
                    <Preferences/>
                </Route>
                <Route path="/ohif_viewer">
                    <OhifViewer/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    );
}
