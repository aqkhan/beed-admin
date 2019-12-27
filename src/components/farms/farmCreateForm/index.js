import React, {useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from '@apollo/react-hooks';
import { CREATE_FARM } from "../../../utils/mutations";


const PageForm = (props) => {
    let { history } = props;
    const [addEvent] = useMutation(CREATE_FARM);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [button, setButton] = useState("Create");
    const [error, setError] = useState(null);
    const onSubmit = (event) => {
        event.preventDefault();
        setError(null);
        setButton("Creating...");
        addEvent({
            variables: {
                name,
                address,
                email
            }
        }).then(({data}) => {
            history.push("/blog/edit/" + data.createPost.id);
            window.location.reload()
        }).catch(err => console.log(err))

    };


    return (
        <div>
            <div className="rightSection">
                <div className="Header page-header">
                    <div>
                        <h3>Create Farm</h3>
                        <Link to="/clinic/create">
                            <button className="btn btn-darkgray created">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid main_container">
                <div className="form_cont">
                    <form className="webinar-form fields_area" onSubmit={event => onSubmit(event)}>
                        <div className="inputs-inline">
                            <label>Name:</label>
                            <input type="text" name="name" required onChange={event => setName(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Address:</label>
                            <input type="text" name="title" required onChange={event => setAddress(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Email:</label>
                            <input type="text" name="title" required onChange={event => setEmail(event.target.value)}/>
                        </div>
                        <div className="error_mess_working">
                            {
                                error &&
                                    <p>{error}</p>
                            }
                        </div>
                        <div className="submit-btn">
                            <button disabled={button === "Creating..."} type="submit" className="btn btn-default btn-blue">{button}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default withRouter(PageForm);
