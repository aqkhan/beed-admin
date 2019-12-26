import React, {useState, useEffect} from 'react';
import {Link, withRouter} from "react-router-dom";
import uuid from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import {apiPath} from "../../../config";
import 'firebase/database';
import firebase from "../../../utils/firebase";
import Loader from "../../commoncomponents/loader";
const PageForm = (props) => {
    let {match, userRole, clinicMainId, history} = props;
    const [name, setName] = useState("");
    const [clinicId, setclinicId] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    // const [phone, setPhone] = useState("");
    const [workPhone, setWorkPhone] = useState("");
    // const [mobilePhone, setMobilePhone] = useState("");
    // const [fax, setFax] = useState("");
    const [joinDate, setJoinDate] = useState(new Date());
    const [loaded, setLoaded] = useState(false);
    const [button, setButton] = useState("Update");
    const [button2, setButton2] = useState("Update");

    useEffect(() => {
        firebase.database().ref('/clinicians/' + match.params.id).once('value').then(function (data) {
            let payload = data.val();
            setName(payload.firstName);
            setclinicId(payload.clinicId);
            setLName(payload.lastName);
            setRole(payload.role);
            setEmail(payload.email);
            setJobTitle(payload.jobTitle);
            setWorkPhone(payload.workPhone);
            setWorkPhone(payload.workPhone);
            setJoinDate(payload.joinDate);
            setLoaded(true);
        });
        if(!clinicMainId){
            history.push("/");
        }
    }, [clinicMainId]);

    const onUpdate = (event) => {
        event.preventDefault();
        setButton("Updating...");
        let payload = {
            name,
            clinicId: clinicId,
            firstName: name,
            lastName: lName,
            email,
            jobTitle,
            // phone,
            workPhone,
            // mobilePhone,
            uid: match.params.id,
            joinDate: joinDate,
            // fax,
            role: (userRole === "practiceAdmin" ? "clinician" : role)
        };
        axios.put(apiPath + "/updateClinician/?id=" + match.params.id, payload).then(res => {
            setButton("Updated");
            setTimeout(() => {
                setButton("Update");
            }, 5000);
        });
    };
    const onUpdatePassword = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            window.confirm("Password do not match")
        }
        setButton2("Updating...");
        let payload = {
            password
        };
        axios.put(apiPath + "/resetClinicianPassword?uid=" + match.params.id, payload).then(res => {
            setButton2("Updated");
            setTimeout(() => {
                setButton2("Update");
            }, 10000);
        }).catch(err => {
            setButton2("Updated");
        })
    };


    const autoGernerate = (event) => {
        event.preventDefault();
        setPasswordType("text");
        let passwor = uuid().substring(0,8);
        setPassword(passwor);
        setConfirmPassword(passwor);
    };

    return loaded ? (
        <div>
            <div className="rightSection">
                <div className="Header page-header">
                    <div>
                        <h3>Update Clinician</h3>
                        <Link to={userRole === "superAdmin" ? ("/clinic/edit/"+clinicId): "/users"}>
                            <button className="btn btn-darkgray created">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid main_container">
                <div className="form_cont">
                    <form className="webinar-form fields_area" onSubmit={event => onUpdate(event)}>
                        <div className="inputs-inline">
                            <label>First Name:</label>
                            <input type="text" name="name" value={name ? name : ""} required
                                   onChange={event => setName(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Last Name:</label>
                            <input type="text" name="name" value={lName ? lName : ""} required
                                   onChange={event => setLName(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Email:</label>
                            <input type="email" name="title" value={email ? email : ""} required
                                   onChange={event => setEmail(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Job Title:</label>
                            <input type="text" value={jobTitle ? jobTitle : ""}
                                   onChange={event => setJobTitle(event.target.value)}/>
                        </div>
                        {/*<div className="inputs-inline">*/}
                        {/*<label>Phone:</label>*/}
                        {/*<input type="text" name="title" required onChange={event => setPhone(event.target.value)}/>*/}
                        {/*</div>*/}
                        <div className="inputs-inline">
                            <label>Work Phone:</label>
                            <input type="text" name="title" value={workPhone ? workPhone : ""}
                                   onChange={event => setWorkPhone(event.target.value)}/>
                        </div>
                        {/*<div className="inputs-inline">*/}
                        {/*<label>Mobile Phone:</label>*/}
                        {/*<input type="text" name="setMobilePhone" onChange={event => setMobilePhone(event.target.value)}/>*/}
                        {/*</div>*/}
                        {/*<div className="inputs-inline">*/}
                        {/*<label>Fax:</label>*/}
                        {/*<input type="text" name="title" onChange={event => setFax(event.target.value)}/>*/}
                        {/*</div>*/}
                        <div className="inputs-inline ">
                            <label>Join Date</label>
                            <DatePicker
                                selected={ new Date(joinDate)}
                                disabledKeyboardNavigation
                                onChange={event => setJoinDate(event) }
                                placeholderText="Select Join Date"
                            />
                        </div>
                        {/*<div>*/}
                        {/*<p className="red">{errorMessage}</p>*/}
                        {/*</div>*/}
                        <div className="webinar-select inputs-inline">
                            <label>Role:</label>
                            <select className="form-control" name="type" id="sel1"
                                    onChange={event => setRole(event.target.value)}
                                    required
                            >
                                <option value=""/>
                                <option value="practiceAdmin">Practice Admin</option>
                                <option value="clinician">Staff</option>
                                <option value="practiceManager">Practice Manager</option>
                                <option value="veterinarian">Veterinarian</option>
                            </select>
                        </div>
                        <div className="submit-btn">
                            <button type="submit" className="btn btn-default btn-blue"
                                    disabled={button === "Updating..."}>{button}</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container-fluid main_container">
                <div className="form_cont">
                    <form className="webinar-form fields_area" onSubmit={event => onUpdatePassword(event)}>
                        <div className="form-heading mt-0">
                            <h3>Update Password</h3>
                        </div>
                        <div className="submit-btn">
                            <button className="btn btn-default btn-green" onClick={(event) => autoGernerate(event)}>Auto
                                Generate
                            </button>
                        </div>
                        <div className="inputs-inline">
                            <label>New Password:</label>
                            <input type={passwordType} value={password ? password : ""} name="name" required
                                   minLength={8}
                                   onChange={event => setPassword(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Confirm Password:</label>
                            <input type={passwordType} value={confirmPassword ? confirmPassword : ""} name="name"
                                   required minLength={8}
                                   onChange={event => setConfirmPassword(event.target.value)}/>
                        </div>
                        <div className="d-flex notice">
                            {button2 === "Updated"&&<p>Password successfully updated</p>}
                        </div>
                        <div className="submit-btn">
                            <button type="submit" className="btn btn-default btn-blue"
                                    disabled={button2 === "Updating..."}>{button2}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ) : <Loader/>
};


export default withRouter(PageForm);
