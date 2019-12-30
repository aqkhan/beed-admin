import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Loader from "../../commoncomponents/smallloader";
import {useMutation, useQuery} from '@apollo/react-hooks';
import {listProducts} from "../../../graphql/queries";
import {deleteProduct} from "../../../graphql/mutations";

const PagesList = (props) => {
    const [userList, setUserList] = useState(null);
    const { farmId } = props;
    const {data, error} = useQuery(listProducts, {
        variables: {
            limit: 1000
        },
        fetchPolicy: 'network-only'
    });
    const [deleteSingleProduct] = useMutation(deleteProduct);
    useEffect(() => {
        if(error){
            setUserList([]);
        }
        if(data && data.listProducts.items){
            setUserList(data.listProducts.items.filter(item => item.farm.id === farmId));
        }
    }, [data, error, farmId]);


    const deletePage = (id) => {
        if (window.confirm('Are you sure you wish to delete this clinic?')) {
            deleteSingleProduct({
                variables: {
                    input: {
                        id: id
                    }
                }
            }).then(res => {
                setUserList(userList.filter(item => item.id !== id));
            });
        }
    };

    return   (
    <div className="container-fluid">
        <div className="navList">
            <h5>Product List</h5>
            <div className="search-dropdown">
                <Link to={"/product/add/new/" + farmId}>
                    <img className="fa fa-plus-circle"  src={require("../../../assets/images/add.svg")} alt=""/>
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
                                        <Link to={"/product/edit/"+item.id+"/"+farmId} ><img
                                        src={require("../../../assets/images/edit.svg")} alt=""/></Link>
                                        <img src={require("../../../assets/images/delete.svg")} alt=""
                                                onClick={() => deletePage(item.id)}/>
                                    </td>
                                </tr>
                            )
                        }): <tr>
                        <td className="position-relative" colSpan="5">
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