import React from "react";
import {Link} from "react-router-dom";
import PageList from "./userList";

function Pages({ dispatch }){
    return (
        <div>
            <div className="rightSection">
                <div className="Header page-header">
                    <div >
                        <h3>Users</h3>
                        <Link to="/user/create">
                            <button className="btn btn-orange created">Register User</button>
                        </Link>
                    </div>
                </div>
            </div>
            <PageList dispatch={dispatch}/>
        </div>
    )
}

export default Pages;