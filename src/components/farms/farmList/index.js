import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Loader from "../../commoncomponents/loader";
import 'firebase/database';
import firebase from "../../../utils/firebase";
import {standardDate} from "../../functions";
import {apiPath} from "../../../config";
import axios from "axios";

const PagesList = () => {
    const [clinicList, setClinicList] = useState(null);

    useEffect(() => {
        firebase.database().ref('/clinics').once('value').then(function (data) {
            let main = [];
            let responce = data.val();
            for (let key in responce) {
                if (responce.hasOwnProperty(key)) {
                    responce[key].id = key;
                    main.push(responce[key]);
                }
            }
            setClinicList(main);
        });
    }, []);


    const deletePage = (id) => {
        if (window.confirm('Are you sure you wish to delete this clinic?')) {
            axios.delete(apiPath + "/deleteClinic?clinicId=" + id)
                .then(res => {
                    setClinicList(clinicList.filter(item => item.id !== id));
                })
                .catch(err => {

                })
        }
    };

    return (
        <div className="container-fluid">
            <div className="navList">
                <h5>Clinics List</h5>
                <div className="search-dropdown">
                    <div className="search-area mr-0">
                        <div>
                            <form >
                                <input type="search" placeholder="Search"/>
                                <i className="fa fa-search"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <table className="table">
                    <thead>
                    <tr className="tableHeading">
                        <th className="">Clinic Name</th>
                        <th>Join Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        clinicList ? clinicList.length !== 0 && clinicList.map(item => {
                                return (
                                    <tr className="tableData" key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{standardDate(item.joinDate).standardDate}</td>
                                        <td className="action-icons"><Link to={"/farm/edit/" + item.id}><img
                                            src={require("../../../assets/images/edit.svg")} alt=""/></Link><img
                                            src={require("../../../assets/images/delete.svg")} alt=""
                                            onClick={() => deletePage(item.id)}/></td>
                                    </tr>
                                )
                            }) : <tr>
                            <td colSpan="3">
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