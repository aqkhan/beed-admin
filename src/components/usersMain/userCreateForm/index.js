import React, {useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import {userPath} from "../../../config";
import cookie from "react-cookies";
import RightText from "../../commoncomponents/imageselector"

const PageForm = (props) => {

    let {history} = props;
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [button, setButton] = useState("Create");
    const [error, setError] = useState(null);
    const [thumbnail, setThumbNail] = useState("");


    const onSubmit = (event) => {
        let token = cookie.load('token');

        event.preventDefault();
        setError(null);
        setButton("Creating...");
        let header = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        let submitData =
            {
                email: email,
                user_name: username,
                password: password,
                phone: phone,
                role: "Store",
                thumbnail: thumbnail
            }
        axios.post(userPath + "/auth/register", submitData, header).then(res => {
            setButton("Create");
        }).catch(err => {
            setButton("Create");
            setError("Could not create user")
        })

    };

    console.log(thumbnail,"thumbnal check")
    return (
        <div>
            <div className="rightSection">
                <div className="Header page-header">
                    <div>
                        <h3>Create USer</h3>
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
                            <label>Email:</label>
                            <input type="text" name="email" value={email} required
                                   onChange={event => setEmail(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>User Name:</label>
                            <input type="text" name="username" value={username} required
                                   onChange={event => setUsername(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Password:</label>
                            <input type="text" name="password" value={password} required
                                   onChange={event => setPassword(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Phone:</label>
                            <input type="text" name="phone" value={phone} required
                                   onChange={event => setPhone(event.target.value)}/>
                        </div>
                        <div className="error_mess_working">
                            {
                                error &&
                                <p>{error}</p>
                            }
                        </div>
                        <div className="submit-btn">
                            <button disabled={button === "Creating..."} type="submit"
                                    className="btn btn-default btn-blue">{button}</button>
                        </div>
                    </form>
                    <RightText thumbnail={thumbnail} setThumbnail={setThumbNail}/>
                </div>
            </div>
        </div>
    );
}


export default withRouter(PageForm);
