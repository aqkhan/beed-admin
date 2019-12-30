import React, {useState, useEffect} from 'react';
import {Link, withRouter} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import Loader from "../../commoncomponents/loader";
import {updateFarm} from "../../../graphql/mutations";
import {getFarm} from "../../../graphql/queries";
import {useMutation, useQuery} from '@apollo/react-hooks';
import UserList from "../../products/productList";

const PageForm = (props) => {

    let Id = props.match.params.id;
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [button, setButton] = useState("Update");
    const [updateFarmData] = useMutation(updateFarm);
    const {data} = useQuery(getFarm, {
        variables: {
            id: Id
        },
        fetchPolicy: 'network-only'
    });

    useEffect(() => {
        if(data && data.getFarm){
            setName(data.getFarm.name);
            setLocation(data.getFarm.location);
            setEmail(data.getFarm.email);
            setLoaded(true);
        }
    }, [data]);

    const onUpdate = (event) => {
        event.preventDefault();
        setButton("Updating...");
        updateFarmData({
            variables: {
                input:{
                    id: Id,
                    name,
                    location,
                    email
                }
            }
        }).then(res => {
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
                        <div className="inputs-inline">
                            <label>Location:</label>
                            <input type="text" name="title"  defaultValue={location} required onChange={event => setLocation(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Email:</label>
                            <input type="text" name="title"  defaultValue={email} required onChange={event => setEmail(event.target.value)}/>
                        </div>
                        <div className="submit-btn">
                            <button type="submit" className="btn btn-default btn-blue" disabled={button === "Updating..."}>{button}</button>
                        </div>
                        <UserList farmId={Id}/>
                    </form>
                </div>
            </div>
        </div>
    ): <Loader/>
}


export default withRouter(PageForm);
