import React, { Component } from "react";
import { AdminConsumer } from "../../../store";
import Child from "./index";
class Container extends Component{

    render(){
        return(
            <AdminConsumer>
                {
                    ({dispatch, user, submit, role}) => (
                        <Child dispatch={dispatch} user={user} submit={submit} role={role}/>
                    )
                }
            </AdminConsumer>
        )
    }

}

export default Container;