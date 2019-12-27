import React, { Component } from "react";
import Routes from "./Routes";
import { withRouter } from "react-router-dom";

function App(props) {
    return <Routes pathname={props.location.pathname} />
}

export default withRouter(App);