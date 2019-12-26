import React, {useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { apiPath } from "../../../../config";
import {useMutation, useQuery} from '@apollo/react-hooks';
import { CREATE_PAGE, GET_POST_CATEGORIES } from "../../../../utils/mutations";


const PageForm = (props) => {
    let { history } = props;
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [button, setButton] = useState("Create");
    const [error, setError] = useState(null);
    const onSubmit = (event) => {
        event.preventDefault();
        let payload = {
            clinic: {
                name,
                address,
                email
            }
        };
        setError(null);
        setButton("Creating...");
        axios.post(apiPath+"/addClinic", payload).then(res => {
            setButton("Create");
            history.push('/clinic/edit/'+res.data.id);
            setError(null);
        }).catch(err => {
            setButton("Create");
            if(err.response){
                setError(err.response.data.message);
            }
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
