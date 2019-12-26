import React, { Component } from "react";
import { AdminConsumer } from "../../../store";
import Child from "./index";
class Container extends Component{

    render(){
        return(
            <AdminConsumer>
                {
                    ({dispatch, selectedMediaUrl, user}) => (
                        <Child
                            dispatch={dispatch}
                            selectedMediaUrl={null}
                            setBackgroundImage={null}
                            setIcon={null}
                            setTags={null}
                            backgroundImage={null}
                            icon={null}
                            tags={null}
                            role={null}
                            user = {null}
                        />
                    )
                }
            </AdminConsumer>
        )
    }

}

export default Container;