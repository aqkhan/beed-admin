import React, { Component } from "react";
import { AdminConsumer } from "../../../store";
import Child from "./index";
class Container extends Component{

    render(){
        return(
            <AdminConsumer>
                {
                    ({dispatch, selectedMediaUrl, user}) => (
                        <Child dispatch={dispatch}  user={user} history={this.props.history} selectedMediaUrl={selectedMediaUrl}/>
                    )
                }
            </AdminConsumer>
        )
    }

}

export default Container;