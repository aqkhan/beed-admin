import React, { Component } from "react";
import Routes from "./Routes";
import { withRouter } from "react-router-dom";
import Loader from "../components/commoncomponents/loader";
import firebase from "../utils/firebase";
import "firebase/database";
import cookie from "react-cookies";

class App extends Component{

    state = {
        show: false
    };

    componentDidMount(){
        let {loggedIn, dispatch, role, clinic} = this.props;
        this.checkCurrentStatus(loggedIn);
        let uid = cookie.load('token');
        if(role === "practiceAdmin" && !clinic){
            firebase.database().ref('/clinicians/'+uid).once('value').then((data) => {
                let main = data.val();
                firebase.database().ref('/farms/'+main.clinicId).once('value').then((data) =>  {
                    let final = {...data.val()};
                    final.id = main.clinicId;
                    dispatch({
                        type: "SET_CLINIC",
                        payload: final
                    });
                    this.setState({show: true});
                });
            });
        }else {
            this.setState({show: true});
        }

    }
    componentWillReceiveProps(nextProps){
        let {loggedIn} = nextProps;
        this.checkCurrentStatus(loggedIn);

    }

    checkCurrentStatus(loggedIn){
        if(!loggedIn){
            localStorage.setItem("route", this.props.location.pathname);
            this.props.history.push('/login');
        }
    }

    render(){
        let {dispatch, user, loggedIn, role} = this.props;
        let { show } = this.state;
        return show ? (
            <Routes pathname={this.props.location.pathname} role={role} dispatch={dispatch} user={user} loggedIn={loggedIn} />
        ): <Loader/>
    }
}

export default withRouter(App);