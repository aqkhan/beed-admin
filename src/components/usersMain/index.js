import React from "react";
import {Link} from "react-router-dom";
import PageList from "./userList";

function Pages(){
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
            <PageList/>
        </div>
    )
}

export default Pages;