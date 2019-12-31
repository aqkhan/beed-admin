import React, {useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from '@apollo/react-hooks';
import { createFarm } from "../../../graphql/mutations";
import gql from "graphql-tag";

const PageForm = (props) => {
    let { history } = props;
    const [addEvent] = useMutation(gql(createFarm));
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
                input: {
                    name,
                    location: address,
                    email
                }
            }
        }).then(({data}) => {
            console.log('data', data);
            history.push("/farm/edit/" + data.createFarm.id);
            window.location.reload()
        }).catch(err => {
            console.log(err);
            setError("Something went wrong. Please try again later.");
            setButton("Create");
        })

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
                            <input type="text" name="name" value={name} required onChange={event => setName(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Location:</label>
                            <input type="text" name="title" value={address} required onChange={event => setAddress(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Email:</label>
                            <input type="text" name="title" value={email} required onChange={event => setEmail(event.target.value)}/>
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
