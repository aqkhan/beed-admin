import React, {Component, useState, useEffect} from 'react';
import cookie from 'react-cookies';
import { withRouter } from "react-router-dom";
import { userPath } from "../../config";
import axios from "axios";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let { loggedIn, history, dispatch } = props;

    useEffect(() => {
        if(loggedIn){
            history.push('/');
        }
    });

    const login = (event) => {
        event.preventDefault();
        setError("");
        setLoading(true);
        axios.post(userPath+"/login", {
            user_name: email,
            password: password
        }).then(res => {
            if(res.data.idToken){
                cookie.save(
                    'token', res.data.idToken,{path: "/"}
                );
                setLoading(false);
                dispatch({
                    type: "LOGGED_IN",
                    payload: true
                });
                dispatch({
                    type: "SET_ROLE",
                    payload: 'superAdmin'
                });
                window.location.href = "/";
            }else {
                setError("Invalid username or password");
                setLoading(false);
            }
        }).catch(err => {
            console.log('err', err);
            setError("Invalid username or password");
            setLoading(false);
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center"> Admin
                            <small> Login</small>
                        </h1>
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="row" style={{padding: "35px"}}>
                        <div className="col-md-4"/>
                        <div className="col-md-4 col-md-offset-4">
                            <form id="login" onSubmit={login.bind(this)} className="well">
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input type="text" className="form-control"
                                           onChange={event => setEmail(event.target.value)}
                                           placeholder="Enter Email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control"
                                           onChange={event => setPassword(event.target.value)}
                                           placeholder="Password" />
                                </div>
                                <label className="red">{error}</label>
                                <button type="submit" className="btn btn-default btn-primary btn-block" disabled={loading}>{loading?"Loading ...":"Login"}</button>
                            </form>
                        </div>
                        <div className="col-md-col4"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default withRouter(Login);