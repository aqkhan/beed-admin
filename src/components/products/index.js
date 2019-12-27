import React from "react";
import UserList from "./productList";

function Pages(props){
    let { clinic, role, dispatch } = props;
    return (
        <div>
            <div className="rightSection">
                <div className="Header page-header">
                    <div >
                        <h3>Clinic Users</h3>
                    </div>
                </div>
            </div>
            <UserList clinic={clinic} role={role} practiceId={clinic.practiceId} dispatch={dispatch}/>
        </div>
    )
}

export default Pages;