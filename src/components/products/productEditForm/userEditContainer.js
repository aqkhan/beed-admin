import React, { Component } from "react";
import { AdminConsumer } from "../../../store";
import Child from "./index";
class Container extends Component{

    render(){
        return(
            <AdminConsumer>
                {
                    ({dispatch, user, submit, role, clinicId}) => (
                        <Child dispatch={dispatch} user={user} submit={submit} userRole={role} clinicMainId={clinicId}/>
                    )
                }
            </AdminConsumer>
        )
    }

}

export default Container;