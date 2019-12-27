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
        // axios.post(userPath+"/login", {
        //     user_name: email,
        //     password: password
        // }).then(res => {
        //     console.log("res", res);
            cookie.save(
                'token',
                "eyJraWQiOiIybVdpaFdjYVBtUnJHVUVab1Y1bFE3MkpOczgwXC94Q1FrOWhzSDdlZmxaQT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4ZGRjYmM4MC04ZjE4LTRjMzctODFmNC1kNmI2NWE2MGU3ZjciLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfVVdSZUc0SlJmIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnVzZXJuYW1lIjoicG1paW50ZWxsZWN0IiwiYXVkIjoiN2N2cW90bWZwMDY1Z3ZoaW51MHR2NG8xNHYiLCJldmVudF9pZCI6IjNiMjI3MTlmLTliYjItNDVhNS1hOWQ3LTQ5ZDMxZDE3MjU1MyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTc3NDM5NTc5LCJwaG9uZV9udW1iZXIiOiIrOTIzNDI5NDYyMjkxIiwiZXhwIjoxNTc3NDQzMTc5LCJpYXQiOjE1Nzc0Mzk1NzksImVtYWlsIjoicG1AaWludGVsbGVjdC5jby51ayJ9.WWch5e9EDMB7bMzDr0CEeMC8V6QQcN86tpSpNTNKUgO1Eie3jHtWAtEcXpncBUQOsuTEgOd1zB_DuWZREaDOTpzbuRJOSJSiQi3GWSwAIHkZhSJOYrEfuR8kzUOIJYnozjwWmFE_JAfkhG4uypHP4ywKt7Wb6Wbchz6kcPrFDA6SVQKkdAnyyojRhnioR0mM8lsaG55hmSCrniO5BDuQvyLto7ax2H-1TeK4D1O8UzW_9CY5XiZJYBQ9OKDlxqvHXu-Exw3HAKL-vS0vfK3HQPNbwucfUd6k8fR61zGRw6AEOki1BYtnWBSV9uSLeBunruxGtOPBJGiQnVRqD7VKjQ",
                {path: "/"}
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
            history.push('/');
        // });
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