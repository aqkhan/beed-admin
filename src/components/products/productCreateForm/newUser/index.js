import React, {useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import CKEditor from "react-ckeditor-component";
import { useMutation } from '@apollo/react-hooks';
import { createProduct } from "../../../../graphql/mutations";
import RightText from "../../../commoncomponents/imageselector";

const PageForm = (props) => {
    let { history } = props;
    let farmId = props.match.params.farmId;
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [thumbnail, setThumbNail] = useState("");
    const [button, setButton] = useState("Create");
    const [errorMessage, setErrorMessage] = useState("");
    const [addEvent] = useMutation(createProduct);
    const onSubmit = (event) => {
        event.preventDefault();
        setButton("Creating...");
        setErrorMessage("");

        let payload = {
            variables: {
                input: {
                    title: name,
                    slug,
                    description,
                    price,
                    productFarmId: farmId,
                    thumbnail
                }
            }
        };

        addEvent(payload).then(({data}) => {
            history.push("/product/edit/" + data.createProduct.id + "/"+ farmId);
            window.location.reload()
        }).catch(err => {
            setErrorMessage("Unknown Error Occurred. Please contact your admin or try again later");
            setButton("Create");
        });
    };

    const updateContent = (value) => {
        const data = value.editor.getData();
        setDescription(data);
    };

    const genSlug = () => {
        let slug = name.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
        setSlug(slug);
    }

    return (
        <div>
            <div className="rightSection">
                <div className="Header page-header">
                    <div>
                        <h3>Add Product</h3>
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
                            <label>Title:</label>
                            <input type="text" name="name" required value={name} onBlur={() => genSlug()} onChange={event => setName(event.target.value)}/>
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
                        <div>
                            <p className="red">{errorMessage}</p>
                        </div>
                        <div className="submit-btn">
                            <button type="submit" className="btn btn-default btn-blue" disabled={button === "Adding..."}>{button}</button>
                        </div>
                    </form>
                    <RightText thumbnail={thumbnail} setThumbnail={setThumbNail}/>
                </div>
            </div>
        </div>
    );
}


export default withRouter(PageForm);
