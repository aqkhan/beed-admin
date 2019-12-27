import React from "react";
import { Link } from "react-router-dom";
function createOption(props) {
    return <div>
        <div className="rightSection">
            <div className="Header page-header">
                <div>
                    <h3>Add User</h3>
                    <Link to="/users">
                        <button className="btn btn-darkgray created">Back</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="container-fluid main_container">
            <div className="form_cont mainLinks">
                <Link to="/user/add/new">
                    <div className="webinar-form">
                        <p>Add New</p>
                    </div>
                </Link>
                <Link to="/user/add/ezy-vet">
                    <div className="webinar-form">
                        <p>Add From EzyVet</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
}

export default createOption;