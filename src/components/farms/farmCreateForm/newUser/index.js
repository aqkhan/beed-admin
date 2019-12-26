import React, {useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { apiPath } from "../../../../config";

const PageForm = (props) => {
    let { newClinic, history } = props;
    const [name, setName] = useState("");
    const [practiceId, setPracticeId] = useState("");
    const [ezyVetGrantType, setEzyVetGrantType] = useState("");
    const [ezyVetScope, setEzyVetScope] = useState("");
    const [ezyVetClinicId, setEzyVetClinicId] = useState("");
    const [ezyVetClientSecret, setEzyVetClientSecret] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [affiliation, setAffiliation] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [mapLink, setMapLink] = useState("");
    const [phone, setPhone] = useState("");
    const [alternatePhone, setAlternatePhone] = useState("");
    const [website, setWebsite] = useState("");
    const [hours, setHours] = useState("");
    const [speciality, setSpeciality] = useState("");
    const [joinDate, setJoinDate] = useState(new Date());
    const [customerMessage, setCustomerMessage] = useState("");
    const [practiceMessage, setPracticeMessage] = useState("");
    const [adminName, setAdminName] = useState("");
    const [adminLName, setAdminLName] = useState("");
    const [adminEmail, setAdminEmail] = useState("");
    const [adminNumber, setAdminNumber] = useState("");
    const [button, setButton] = useState("Create");
    const [error, setError] = useState(null);
    const onSubmit = (event) => {
        event.preventDefault();
        let payload = {
            clinic: {
                name,
                practiceId,
                ezyVetClinicId,
                ezyVetClientSecret,
                ezyVetGrantType,
                ezyVetScope,
                address,
                email,
                affiliation,
                streetAddress,
                mapLink,
                phone,
                alternatePhone,
                website,
                hours,
                speciality,
                joinDate,
                customerMessage,
                practiceMessage
            },
            admin: {
                firstName: adminName,
                lastName: adminLName,
                email: adminEmail,
                workPhone: adminNumber
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
                        <h3>Create Clinic</h3>
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
                        {
                            newClinic &&
                            <div className="inputs-inline">
                                <label>ezyVet Practice Id:</label>
                                <input type="text" name="title" required onChange={event => setPracticeId(event.target.value)}/>
                            </div>
                        }
                        {
                            newClinic &&
                            <div className="inputs-inline">
                                <label>ezyVet Clinic Id:</label>
                                <input type="text" name="title" required onChange={event => setEzyVetClinicId(event.target.value)}/>
                            </div>
                        }
                        {
                            newClinic &&
                            <div className="inputs-inline">
                                <label>ezyVet Clinic Secret:</label>
                                <input type="text" name="title" required onChange={event => setEzyVetClientSecret(event.target.value)}/>
                            </div>
                        }
                        {
                            newClinic &&
                            <div className="inputs-inline">
                                <label>ezyVet Grant Type:</label>
                                <input type="text" name="title" required onChange={event => setEzyVetGrantType(event.target.value)}/>
                            </div>
                        }
                        {
                            newClinic &&
                            <div className="inputs-inline">
                                <label>ezyVet Scope:</label>
                                <textarea type="text" name="title" required onChange={event => setEzyVetScope(event.target.value)}/>
                            </div>
                        }
                        <div className="inputs-inline">
                            <label>Address:</label>
                            <input type="text" name="title" required onChange={event => setAddress(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Email:</label>
                            <input type="text" name="title" required onChange={event => setEmail(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Affiliation:</label>
                            <input type="text" name="title" onChange={event => setAffiliation(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Street Address:</label>
                            <input type="text" name="title" required onChange={event => setStreetAddress(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Map Link:</label>
                            <input type="text" name="title" onChange={event => setMapLink(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Primary Phone:</label>
                            <input type="text" name="title" required onChange={event => setPhone(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Alternate Phone:</label>
                            <input type="text" name="title" onChange={event => setAlternatePhone(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Website Link:</label>
                            <input type="text" name="title" onChange={event => setWebsite(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Hours:</label>
                            <input type="text" name="title" onChange={event => setHours(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Speciality:</label>
                            <input type="text" name="title" onChange={event => setSpeciality(event.target.value)}/>
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
                        <div className="ckeditor">
                            <label>Important Message For Customers:</label><br/>
                            <textarea onChange={event => setCustomerMessage(event.target.value)}/>
                        </div>
                        <div className="ckeditor">
                            <label>Important Message For Practices:</label><br/>
                            <textarea onChange={event => setPracticeMessage(event.target.value)}/>
                        </div>
                        {/*<div className="form-heading">*/}
                        {/*<h3>Billing Details</h3>*/}
                        {/*</div>*/}
                        {/*<div className="inputs-inline">*/}
                        {/*<label>Billing Plan:</label>*/}
                        {/*<input type="text" name="title" onChange={event => setName(event.target.value)}/>*/}
                        {/*</div>*/}
                        {/*<div className="inputs-inline">*/}
                        {/*<label>Billing Increases:</label>*/}
                        {/*<input type="text" name="title" onChange={event => setName(event.target.value)}/>*/}
                        {/*</div>*/}
                        {/*<div className="inputs-inline">*/}
                        {/*<label>Billing Record:</label>*/}
                        {/*<input type="text" name="title" onChange={event => setName(event.target.value)}/>*/}
                        {/*</div>*/}
                        {/*<div className="inputs-inline ">*/}
                        {/*<label>Next Billing Date</label>*/}
                        {/*<DatePicker*/}
                        {/*selected={ date }*/}
                        {/*disabledKeyboardNavigation*/}
                        {/*onChange={event => setDate(event) }*/}
                        {/*placeholderText="Select Billing Date"*/}
                        {/*/>*/}
                        {/*</div>*/}
                        <div className="form-heading">
                            <h3>Admin Credentials</h3>
                        </div>
                        <div className="inputs-inline">
                            <label>First Name:</label>
                            <input type="text" required name="f_name" onChange={event => setAdminName(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Last Name:</label>
                            <input type="text" required name="l_name" onChange={event => setAdminLName(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Email:</label>
                            <input type="email" required name="email" onChange={event => setAdminEmail(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Work Phone:</label>
                            <input type="text" required name="title" onChange={event => setAdminNumber(event.target.value)}/>
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
