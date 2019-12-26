import React, {useState, useEffect} from 'react';
import {Link, withRouter} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'firebase/database';
import firebase from "../../../utils/firebase";
import Loader from "../../commoncomponents/loader";
import UserList from "../../clinicUsers/userList";
const PageForm = (props) => {

    let { match, role, dispatch } = props;
    const [name, setName] = useState("");
    const [practiceId, setPracticeId] = useState("");
    const [ezyVetClinicId, setEzyVetClinicId] = useState("");
    const [ezyVetClientSecret, setEzyVetClientSecret] = useState("");
    const [ezyVetGrantType, setEzyVetGrantType] = useState("");
    const [ezyVetScope, setEzyVetScope] = useState("");
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
    const [loaded, setLoaded] = useState(false);
    const [button, setButton] = useState("Update");
    const [paid, setPaid] = useState(false);

    useEffect(() => {
        firebase.database().ref('/clinics/'+match.params.id).once('value').then(function (data) {
            let payload = data.val();
            setName(payload.name);
            setPracticeId(payload.practiceId);
            setEzyVetClinicId(payload.ezyVetClinicId);
            setEzyVetClientSecret(payload.ezyVetClientSecret);
            setEzyVetGrantType(payload.ezyVetGrantType);
            setEzyVetScope(payload.ezyVetScope);
            setAddress(payload.address);
            setEmail(payload.email);
            setAffiliation(payload.affiliation);
            setStreetAddress(payload.streetAddress);
            setMapLink(payload.mapLink);
            setPhone(payload.phone);
            setAlternatePhone(payload.alternatePhone);
            setWebsite(payload.website);
            setHours(payload.hours);
            setSpeciality(payload.speciality);
            setJoinDate(payload.joinDate);
            setCustomerMessage(payload.customerMessage);
            setPracticeMessage(payload.practiceMessage);
            setPaid(payload.paidCustomer);
            setLoaded(true);
        });
    }, []);

    const onUpdate = (event) => {
        event.preventDefault();
        setButton("Updating...");
        let payload = {
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
            practiceMessage,
            paidCustomer: paid
        };
        firebase.database().ref('/clinics').child(match.params.id).set(payload).then(res => {
            setButton("Updated");
            setTimeout(() => {
                setButton("Update");
            }, 5000);
        });
    };


    return loaded ? (
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
                            <label>Name:</label>
                            <input type="text" name="name" defaultValue={name} required onChange={event => setName(event.target.value)}/>
                        </div>
                        {
                            practiceId &&
                            <div className="inputs-inline">
                                <label>ezyVet Practice Id:</label>
                                <input type="text" name="title" defaultValue={practiceId} disabled onChange={event => setPracticeId(event.target.value)}/>
                            </div>
                        }
                        {
                            ezyVetClinicId &&
                            <div className="inputs-inline">
                                <label>ezyVet Clinic Id:</label>
                                <input type="text" name="title" defaultValue={ezyVetClinicId} disabled onChange={event => setEzyVetClinicId(event.target.value)}/>
                            </div>
                        }
                        {
                            ezyVetClientSecret &&
                            <div className="inputs-inline">
                                <label>ezyVet Clinic Secret:</label>
                                <input type="text" name="title" defaultValue={ezyVetClientSecret} disabled onChange={event => setEzyVetClientSecret(event.target.value)}/>
                            </div>
                        }
                        {
                            ezyVetGrantType &&
                            <div className="inputs-inline">
                                <label>ezyVet Grant Type:</label>
                                <input type="text" name="title" defaultValue={ezyVetGrantType} disabled onChange={event => setEzyVetGrantType(event.target.value)}/>
                            </div>
                        }
                        {
                            ezyVetScope &&
                            <div className="inputs-inline">
                                <label>ezyVet Scope:</label>
                                <textarea type="text" name="title" defaultValue={ezyVetScope} disabled onChange={event => setEzyVetScope(event.target.value)}/>
                            </div>
                        }
                        <div className="inputs-inline">
                            <label>Address:</label>
                            <input type="text" name="title"  defaultValue={address} required onChange={event => setAddress(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Email:</label>
                            <input type="text" name="title"  defaultValue={email} required onChange={event => setEmail(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Affiliation:</label>
                            <input type="text" name="title"  defaultValue={affiliation} onChange={event => setAffiliation(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Street Address:</label>
                            <input type="text" name="title"  defaultValue={streetAddress} required onChange={event => setStreetAddress(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Map Link:</label>
                            <input type="text" name="title"  defaultValue={mapLink} onChange={event => setMapLink(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Primary Phone:</label>
                            <input type="text" name="title"  defaultValue={phone} required onChange={event => setPhone(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Alternate Phone:</label>
                            <input type="text" name="title"  defaultValue={alternatePhone} onChange={event => setAlternatePhone(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Website Link:</label>
                            <input type="text" name="title"  defaultValue={website} onChange={event => setWebsite(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Hours:</label>
                            <input type="text" name="title"  defaultValue={hours} onChange={event => setHours(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Speciality:</label>
                            <input type="text" name="title" defaultValue={speciality} onChange={event => setSpeciality(event.target.value)}/>
                        </div>
                        <div className="inputs-inline ">
                            <label>Join Date</label>
                            <DatePicker
                                selected={ new Date(joinDate) }
                                disabledKeyboardNavigation
                                onChange={event => setJoinDate(event) }
                                placeholderText="Select Join Date"
                            />
                        </div>
                        <div className="ckeditor">
                            <label>Important Message For Customers:</label><br/>
                            <textarea defaultValue={customerMessage} onChange={event => setCustomerMessage(event.target.value)}/>
                        </div>
                        <div className="ckeditor">
                            <label>Important Message For Practices:</label><br/>
                            <textarea  defaultValue={practiceMessage} onChange={event => setPracticeMessage(event.target.value)}/>
                        </div>
                        <div>
                            <div className="inputs-inline">
                                <label>Paid customer</label>
                            </div>
                            <div className="primary-container">
                                <label className="containerr">
                                    <input type="checkbox" checked={paid}
                                           onChange={event => setPaid(event.target.checked)}/>
                                    <span className="checkmark"/>
                                </label>
                            </div>
                        </div>
                        <div className="submit-btn">
                            <button type="submit" className="btn btn-default btn-blue" disabled={button === "Updating..."}>{button}</button>
                        </div>
                        <UserList clinicId={match.params.id} role={role} practiceId={practiceId} dispatch={dispatch}/>
                    </form>
                </div>
            </div>
        </div>
    ): <Loader/>
}


export default withRouter(PageForm);
