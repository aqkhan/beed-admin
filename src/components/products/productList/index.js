import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Loader from "../../commoncomponents/loader";
import 'firebase/database';
import axios from "axios";
import { apiPath } from "../../../config";
import { standardDate } from "../../functions";
import {useMutation, useQuery} from '@apollo/react-hooks';
import {listProducts} from "../../../graphql/queries";

// import {deleteProduct} from "../../../graphql/mutations";

const PagesList = (props) => {
    const [userList, setUserList] = useState(null);
    const { farmId } = props;
    const {loading, data, error} = useQuery(listProducts, {
        variables: {
            limit: 1000
        }
    });

    useEffect(() => {
        if(error){
            console.log('error', error);
            setUserList([]);
        }
        if(data && data.listProducts.items){
            setUserList(data.listProducts.items);
        }
    }, [data, error]);


    const deletePage = (id) => {
        if (window.confirm('Are you sure you wish to delete this clinic?')) {
            axios.delete(apiPath+"/deleteClinician?uid="+id).then(res => {
                setUserList(userList.filter(item => item.uid !== id));
            });
        }
    };

    const setClinic = (id) => {
        // dispatch({
        //     type: "SET_CLINIC_ID",
        //     payload: id,
        //     farmId: farmId
        // })
    };
    return   (
    <div className="container-fluid">
        <div className="navList">
            <h5>Product List</h5>
            <div className="search-dropdown">
                <Link to={"/product/add/new/" + farmId}>
                    <img className="fa fa-plus-circle" onClick={() => setClinic()}  src={require("../../../assets/images/add.svg")} alt=""/>
                </Link>
            </div>
        </div>
        <div>
            <table className="table">
                <thead>
                <tr className="tableHeading">
                    <th className="">Product Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    userList ? userList.length !== 0 && userList.map((item) => {
                            return (
                                <tr className="tableData" key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td className="action-icons">
                                        <Link to={"/product/edit/"+item.id+"/"+farmId} onClick={() => setClinic()} ><img
                                        src={require("../../../assets/images/edit.svg")} alt=""/></Link>
                                        <img src={require("../../../assets/images/delete.svg")} alt=""
                                                onClick={() => deletePage(item.id)}/>
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