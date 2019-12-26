import React  from "react";
import { AdminConsumer } from "../../../store/index";
import Child from "./index";
function Container (props){
    let { newClinic } = props;
    return(
        <AdminConsumer>
            {
                ({dispatch, selectedMediaUrl, user}) => (
                    <Child dispatch={dispatch} newClinic={newClinic} user={user} history={props.history} selectedMediaUrl={selectedMediaUrl}/>
                )
            }
        </AdminConsumer>
    )
}

export default Container;