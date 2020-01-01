import React, {useState, useEffect} from "react";
import Loader from "../../commoncomponents/loader";
import axios from "axios";
import {userPath} from "../../../config";
import cookie from "react-cookies";
import {Modal, Button, Form} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import { redirectToLogin } from "../../functions";

const PagesList = (props ) => {
    const [clinicList, setClinicList] = useState(null);
    const [updatedUser, setupdateduser] = useState(null);
    const [newpassword, setNewpassword] = useState(null);
    const [conformpass, setConfirm] = useState(null);
    const [show, setShow] = useState(false);
    const [passerr, setpasserr] = useState("");
    const {dispatch, history} = props;

    useEffect(() => {
        let token = cookie.load('token');
        let header = {

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        axios.get(userPath + "/users/list", header).then(res => {
            setClinicList(res.data.data);
        }).catch(err => {
            if(err.response.status === 401){
                redirectToLogin(history, dispatch);
            }
        })
    }, []);


    const deletePage = (id) => {
        if (window.confirm('Are you sure you wish to delete this Farm?')) {

        }
    };

    const filterUSer = (value) => {
        let filterData = clinicList && clinicList.find(sin => sin.Username === value);
        setupdateduser(filterData);
        setShow(true)

    }

    const submitHandler = (event) => {

        event.preventDefault();
        console.log("im called")
        if (conformpass !== newpassword) {
            setpasserr("Password didn't matched");

            setTimeout(() => {
                setpasserr("")
            }, 3000)
            return;
        }
        else {
            let token = cookie.load('token');
            let header = {

                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };
            let data =
                {
                    user_name: updatedUser.Username,
                    password: newpassword
                }


            axios.post(userPath + "/user/reset", data, header).then(res => {
                setpasserr(res.data.message);
                setTimeout(() => {
                    setpasserr("")
                }, 3000)
                setShow(false);
            }).catch(err => {
                console.log(err)
                setpasserr("Something Went Wrong.");
                setTimeout(() => {
                    setpasserr("")
                }, 3000)
            })


        }

    }

    return (
        <div className="container-fluid">
            <div className="navList">
                <h5>User List</h5>
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
                        <th>User Name</th>
                        <th className="">Created at</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        clinicList ? clinicList.length !== 0 && clinicList.map((item, i) => {
                                return (
                                    <tr className="tableData" key={i}>
                                        <td>{item.Username}</td>
                                        <td>{item.UserCreateDate && item.UserCreateDate.split('T')[0]}</td>
                                        <td className="action-icons"><img
                                            src={require("../../../assets/images/edit.svg")} alt=""
                                            onClick={() => filterUSer(item.Username)}/>
                                            {/*<img*/}
                                                {/*src={require("../../../assets/images/delete.svg")} alt=""*/}
                                                {/*onClick={() => deletePage(item.id)}/>*/}

                                        </td>
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
                <Modal show={show} className="update-user-modal">
                    <Modal.Header>
                        <Modal.Title>Update User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            updatedUser &&
                            <Form onSubmit={(event) => submitHandler(event)}>
                                <Form.Group>
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" required disabled={true}
                                                  value={updatedUser.Username ? updatedUser.Username : "" }/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="text" required
                                                  onChange={(event) => setNewpassword(event.target.value)}/>

                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="text" required
                                                  onChange={(event) => setConfirm(event.target.value)}/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                <Button variant="danger" style={{marginLeft: "20px"}} onClick={() => setShow(false)}>
                                    Cancel
                                </Button>


                            </Form>
                        }


                    </Modal.Body>
                    <Modal.Footer>
                        <p className="error_mess_working"
                           style={{color: "red", fontWeight: "600", marginBottom: "0px"}}>{passerr}</p>

                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )


}

export default withRouter(PagesList);