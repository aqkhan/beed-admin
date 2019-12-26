import React from "react";
import { Link } from "react-router-dom";
function createOption(props) {
    return <div>
        <div className="rightSection">
            <div className="Header page-header">
                <div>
                    <h3>Create Clinic</h3>
                    <Link to="/clinics">
                        <button className="btn btn-darkgray created">Back</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="container-fluid main_container">
            <div className="form_cont mainLinks">
                <Link to="/create/clinic/new">
                    <div className="webinar-form">
                        <p>Create New</p>
                    </div>
                </Link>
                <Link to="/create/clinic/ezy-vet">
                    <div className="webinar-form">
                        <p>Import From EzyVet</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
}

export default createOption;