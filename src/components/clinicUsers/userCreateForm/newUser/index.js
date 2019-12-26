import React, {useState, useEffect} from 'react';
import {Link, withRouter} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { apiPath } from "../../../../config";

const PageForm = (props) => {
    let { history, role, clinicId } = props;
    const [name, setName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [phone, setPhone] = useState("");
    const [workPhone, setWorkPhone] = useState("");
    const [mobilePhone, setMobilePhone] = useState("");
    const [fax, setFax] = useState("");
    const [joinDate, setJoinDate] = useState(new Date());
    const [button, setButton] = useState("Create");
    const [userRole, setUserRole] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        if(!clinicId){
            history.push("/");
        }
    }, [clinicId]);
    const onSubmit = (event) => {
        event.preventDefault();
        let payload = {
            clinicId: clinicId,
            firstName: name,
            lastName: lName,
            email,
            jobTitle,
            phone,
            workPhone,
            mobilePhone,
            fax,
            joinDate,
            role: (role === "practiceAdmin" ? "clinician" : userRole)
        };
        setButton("Creating...");
        setErrorMessage("");
        axios.post(apiPath+"/addClinicianByFBTAdmin", payload).then(res => {
            setButton("Add");
            history.push('/user/edit/'+res.data.data.uid);

        }).catch(err => {
            if(err.response){
                setErrorMessage(err.response.data.message);
            }else {
                setErrorMessage("Unknown Error Occurred. Please contact your admin or try again later");
            }
        })
    };

    return (
        <div>
            <div className="rightSection">
                <div className="Header page-header">
                    <div>
                        <h3>Add User</h3>
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
                            <label>First Name:</label>
                            <input type="text" name="name" required onChange={event => setName(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Last Name:</label>
                            <input type="text" name="name" required onChange={event => setLName(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Email:</label>
                            <input type="email" name="title" required onChange={event => setEmail(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Job Title:</label>
                            <input type="text" onChange={event => setJobTitle(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Phone:</label>
                            <input type="text" name="title" required onChange={event => setPhone(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Work Phone:</label>
                            <input type="text" name="title" onChange={event => setWorkPhone(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Mobile Phone:</label>
                            <input type="text" name="setMobilePhone" onChange={event => setMobilePhone(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Fax:</label>
                            <input type="text" name="title" onChange={event => setFax(event.target.value)}/>
                        </div>
                        <div className="inputs-inline ">
                            <label>Join Date</label>
                            <DatePicker
                                selected={ joinDate }
                                disabledKeyboardNavigation
                                onChange={event => setJoinDate(event) }
                                placeholderText="Select Join Date"
                            />
                        </div>
                        <div className="webinar-select inputs-inline">
                            <label>Role:</label>
                            <select className="form-control" name="type" id="sel1"
                                    onChange={event => setUserRole(event.target.value)}
                                    required
                            >
                                <option value=""/>
                                <option value="practiceAdmin">Practice Admin</option>
                                <option value="clinician">Staff</option>
                                <option value="practiceManager">Practice Manager</option>
                                <option value="veterinarian">Veterinarian</option>
                            </select>
                        </div>
                        <div>
                            <p className="red">{errorMessage}</p>
                        </div>
                        <div className="submit-btn">
                            <button type="submit" className="btn btn-default btn-blue" disabled={button === "Adding..."}>{button}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default withRouter(PageForm);
