import React  from "react";
import { AdminConsumer } from "../../../../store";
import Child from "./index";
function Container (props){
    return(
        <AdminConsumer>
            {
                ({dispatch, role, clinicId}) => (
                    <Child dispatch={dispatch} role={role} clinicId={clinicId}/>
                )
            }
        </AdminConsumer>
    )
}

export default Container;