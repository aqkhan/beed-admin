import React, {Component} from "react";
import {AdminConsumer} from "../../store";
import Child from "./login";
class Container extends Component {
    render() {
        return (
                <AdminConsumer>
                    {
                        ({dispatch, loggedIn}) => (
                            <Child dispatch={dispatch} loggedIn={loggedIn}/>
                        )
                    }
                </AdminConsumer>
        )
    }

}

export default Container;