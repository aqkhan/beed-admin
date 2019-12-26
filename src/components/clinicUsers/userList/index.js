import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Loader from "../../commoncomponents/loader";
import 'firebase/database';
import axios from "axios";
import { apiPath } from "../../../config";
import { standardDate } from "../../functions";
const PagesList = (props) => {
    const [userList, setUserList] = useState(null);
    const { clinic, clinicId, role, practiceId, dispatch } = props;
    useEffect(() => {
        axios.post(apiPath+"/getAllClinicUsers", {
            clinicId: clinicId ? clinicId : clinic.id
        }).then(res => {
            setUserList(res.data.data);
        })
    }, []);


    const deletePage = (id) => {
        if (window.confirm('Are you sure you wish to delete this clinic?')) {
            axios.delete(apiPath+"/deleteClinician?uid="+id).then(res => {
                setUserList(userList.filter(item => item.uid !== id));
            });
        }
    };

    const setClinic = (id) => {
        dispatch({
            type: "SET_CLINIC_ID",
            payload: id,
            practiceId: practiceId
        })
    };
    return   (
    <div className="container-fluid">
        <div className="navList">
            <h5>Users List</h5>
            <div className="search-dropdown">
                <Link to={practiceId ? "/user/add" : "/user/add/new"}>
                    <img className="fa fa-plus-circle" onClick={() => setClinic((clinicId ? clinicId : clinic.id))}  src={require("../../../assets/images/add.svg")} alt=""/>
                </Link>
            </div>
        </div>
        <div>
            <table className="table">
                <thead>
                <tr className="tableHeading">
                    <th className="">User Name</th>
                    <th>Email</th>
                    <th>Join Date</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    userList ? userList.length !== 0 && userList.map((item) => {
                            return (
                                <tr className="tableData" key={item.uid}>
                                    <td>{item.firstName + " " + item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{standardDate(item.joinDate).standardDate}</td>
                                    <td>{item.role}</td>
                                    <td className="action-icons">
                                        <Link to={"/user/edit/"+item.uid} onClick={() => setClinic((clinicId ? clinicId : clinic.id))} ><img
                                        src={require("../../../assets/images/edit.svg")} alt=""/></Link>
                                        {
                                            (role !== "practiceAdmin" || item.role === "clinician") &&
                                            <img
                                                src={require("../../../assets/images/delete.svg")} alt=""
                                                onClick={() => deletePage(item.uid)}/>
                                        }
                                    </td>
                                </tr>
                            )
                        }): <tr>
                        <td colSpan="5">
                            <Loader/>
                        </td>
                    </tr>
                }
                </tbody>
            </table>
        </div>
    </div>
    )


}

export default PagesList;