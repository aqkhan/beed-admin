import React from "react";
import {Link} from "react-router-dom";
import PageList from "./farmList";

function Pages({ dispatch }){
    return (
        <div>
            <div className="rightSection">
                <div className="Header page-header">
                    <div >
                        <h3>Farms</h3>
                        <Link to="create/farm/new">
                            <button className="btn btn-orange created">Register Farm</button>
                        </Link>
                    </div>
                </div>
            </div>
            <PageList dispatch={dispatch} />
        </div>
    )
}

export default Pages;