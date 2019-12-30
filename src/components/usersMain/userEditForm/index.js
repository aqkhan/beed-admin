import React, {useState, useEffect} from 'react';
import {Link, withRouter} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import UserList from "../../products/productList";

const PageForm = (props) => {
    const [button, setButton] = useState("Update")
    const [newpassword, setNewpassword] = useState(null)
    const [repeatpassword, setrepeat] = useState(null)
    let Id = props.match.params.id;

    const onUpdate = (event) => {
        event.preventDefault();
        setButton("Updating...");
        if (repeatpassword!==newpassword){

        }
    };


    return (
        <div>
            <div className="rightSection">
                <div className="Header page-header">
                    <div>
                        <h3>Create Clinic</h3>
                        <Link to="/clinic/create">
                            <button className="btn btn-darkgray created">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid main_container">
                <div className="form_cont">
                    <form className="webinar-form fields_area" onSubmit={event => onUpdate(event)}>
                        <div className="inputs-inline">
                            <label>New Password:</label>
                            <input type="text" name="name" required onChange={event => setNewpassword(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Confirm New Password:</label>
                            <input type="text" name="name" required onChange={event => setrepeat(event.target.value)}/>
                        </div>


                        <div className="submit-btn">
                            <button type="submit" className="btn btn-default btn-blue"
                                    disabled={button === "Updating..."}>{button}</button>
                        </div>
                        <UserList farmId={Id}/>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default withRouter(PageForm);
