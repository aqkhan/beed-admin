import React, { Component } from "react";
import { AdminConsumer } from "../../store";
import Child from "./index";
class Container extends Component{

    render(){
        return(
            <AdminConsumer>
                {
                    ({dispatch, pages, pagePagination, user, clinic, role}) => (
                        <Child dispatch={dispatch} pages={pages} pagePagination={pagePagination} user={user} clinic={clinic} role={role}/>
                    )
                }
            </AdminConsumer>
        )
    }

}

export default Container;