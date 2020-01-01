import React from "react";
import Routes from "./Routes";
import { withRouter } from "react-router-dom";

function App({location, loggedIn, dispatch}) {
    return <Routes dispatch={dispatch} pathname={location.pathname} loggedIn={loggedIn} />
}

export default withRouter(App);