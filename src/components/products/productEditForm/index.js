import React, {useState, useEffect} from 'react';
import {Link, withRouter} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import Loader from "../../commoncomponents/loader";
import {getProduct} from "../../../graphql/queries";
import {updateProduct} from "../../../graphql/mutations";
import {useMutation, useQuery} from '@apollo/react-hooks';
import CKEditor from "react-ckeditor-component";
import RightArea from "../../commoncomponents/imageselector";
import gql from "graphql-tag";
import { redirectToLogin } from "../../functions";

const PageForm = (props) => {
    let Id = props.match.params.id;
    let farmId = props.match.params.farmId;
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [thumbnail, setThumbNail] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [button, setButton] = useState("Update");
    const [updateFarmData] = useMutation(gql(updateProduct));
    const {dispatch, history} = props;
    const {data, error} = useQuery(gql(getProduct), {
        variables: {
            id: Id
        },
        fetchPolicy: 'network-only'
    });
    useEffect(() => {
        if(data && data.getProduct){
            setName(data.getProduct.title);
            setSlug(data.getProduct.slug);
            setDescription(data.getProduct.description);
            setPrice(data.getProduct.price);
            setThumbNail(data.getProduct.thumbnail);
            setLoaded(true);
        }
        if(error){
            redirectToLogin(history, dispatch);
        }
    }, [data, error]);

    const onUpdate = (event) => {
        event.preventDefault();
        setButton("Updating...");
        updateFarmData({
            variables: {
                input:{
                    id: Id,
                    title: name,
                    description,
                    slug,
                    price,
                    thumbnail
                }
            }
        }).then(res => {
            setButton("Updated");
            setTimeout(() => {
                setButton("Update");
            }, 5000);
        });
    };

    const updateContent = (value) => {
        const data = value.editor.getData();
        setDescription(data);
    };

    return loaded ? (
        <div>
            <div className="rightSection">
                <div className="Header page-header">
                    <div>
                        <h3>Update Clinician</h3>
                        <Link to={"/farm/edit/"+farmId}>
                            <button className="btn btn-darkgray created">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid main_container">
                <div className="form_cont">
                    <form className="webinar-form fields_area" onSubmit={event => onUpdate(event)}>
                        <div className="inputs-inline">
                            <label>Title:</label>
                            <input type="text" name="name" required value={name} onChange={event => setName(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Slug:</label>
                            <input type="text" name="name" required value={slug} onChange={event => setSlug(event.target.value)}/>
                        </div>
                        <div className="inputs-inline">
                            <label>Description:</label>
                            <CKEditor
                                activeClass="editor"
                                content={description}
                                config={{allowedContent: true}}
                                events={{
                                    "change": updateContent.bind(this)
                                }}/>
                            {/*<input type="email" name="title" value={description} required onChange={event => setDescription(event.target.value)}/>*/}
                        </div>
                        <div className="inputs-inline">
                            <label>Price:</label>
                            <input type="text" value={price} onChange={event => setPrice(event.target.value)}/>
                        </div>
                        <div className="submit-btn">
                            <button type="submit" className="btn btn-default btn-blue"
                                    disabled={button === "Updating..."}>{button}</button>
                        </div>
                    </form>
                    <RightArea thumbnail={thumbnail} setThumbnail={setThumbNail}/>
                </div>
            </div>
        </div>
    ) : <Loader/>
};


export default withRouter(PageForm);
