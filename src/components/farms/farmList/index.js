import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Loader from "../../commoncomponents/loader";
import {useMutation, useQuery} from '@apollo/react-hooks';
import {listFarms} from "../../../graphql/queries";
import {deleteFarm} from "../../../graphql/mutations";
import gql from "graphql-tag";

const PagesList = () => {
    const [clinicList, setClinicList] = useState(null);
    const {data, error} = useQuery(gql(listFarms), {
        variables: {
            limit: 1000
        },
        fetchPolicy: 'network-only'
    });
    const [deleteSingleFarm] = useMutation(gql(deleteFarm));
    useEffect(() => {
        if(error){
            console.log('error', error);
            setClinicList([]);
        }
        if(data && data.listFarms.items){
            setClinicList(data.listFarms.items);
        }
    }, [data, error]);


    const deletePage = (id) => {
        if (window.confirm('Are you sure you wish to delete this Farm?')) {
            deleteSingleFarm({
                variables: {
                    input: {
                        id: id
                    }
                }
            }).then(res => {
                setClinicList(clinicList.filter(item => item.id !== id));
            });
        }
    };

    return (
        <div className="container-fluid">
            <div className="navList">
                <h5>Farm List</h5>
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
                        <th className="">Farm Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        clinicList ? clinicList.length !== 0 && clinicList.map(item => {
                                return (
                                    <tr className="tableData" key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
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