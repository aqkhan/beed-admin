import React, { Component } from "react";
import Child from "./App";
import { AdminConsumer } from '../store';

class App extends Component{
    render(){
        return(
            <AdminConsumer>{
                ({dispatch, loggedIn, role, clinic}) => (
                    <Child dispatch={dispatch} loggedIn={loggedIn} role={role} clinic={clinic}/>
                )
            }
            </AdminConsumer>
        )
    }

}

export default App;