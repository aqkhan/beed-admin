import React from "react";
import {Link} from "react-router-dom";
import PageList from "./farmList";

function Pages(){
    return (
        <div>
            <div className="rightSection">
                <div className="Header page-header">
                    <div >
                        <h3>Pages</h3>
                        <Link to="/farm/create">
                            <button className="btn btn-orange created">Register Clinic</button>
                        </Link>
                    </div>
                </div>
            </div>
            <PageList />
        </div>
    )
}

export default Pages;