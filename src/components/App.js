import React from "react";
import Routes from "./Routes";
import { withRouter } from "react-router-dom";

function App({location, loggedIn}) {
    return <Routes pathname={location.pathname} loggedIn={loggedIn} />
}

export default withRouter(App);