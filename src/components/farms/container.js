import React, { Component } from "react";
import { AdminConsumer } from "../../store";
import Child from "./index";


function Container() {
    return(
        <AdminConsumer>
            {
                ({dispatch, pages, pagePagination, user}) => (
                    <Child dispatch={dispatch} pages={pages} pagePagination={pagePagination} user={user}/>
                )
            }
        </AdminConsumer>
    )
}

export default Container;