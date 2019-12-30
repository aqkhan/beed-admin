import React, {useState} from "react";
import { mediaUpload } from "../../../config";
import axios from "axios";
function ImageSelector(props) {

    let { thumbnail, setThumbnail } = props;
    const [ image, setImage ] = useState(thumbnail);
    const [loader, setLoader] = useState(true);
     const uploadImage = (event) => {
         setLoader(false);
        const file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            let payload = {
                file : reader.result,
                fileName: file.name,
                directory: "UserThumbnails"
            }
            axios.post(mediaUpload,payload).then(res =>{
                setImage(reader.result);
                setThumbnail(res.data.Location);
                setLoader(true);
            });
        };

    };

    return (
        <div className="webinar-form image_area">
            <div>
                <div className="set_background md-form">
                    <label>Featured Image</label>
                    {
                        loader ?
                            <img
                                src={ image ? image : require("../../../assets/images/image_placeholder.jpg")}
                                alt=""/> :
                            <div className="loader-screen">
                                <img src={require("../../../assets/images/main-loader.gif")} alt=""/>
                            </div>

                    }

                    <div className="file-field position-relative">
                        <div className="btn btn-primary btn-sm btn-blue">
                            <span className="main-file-button">Choose Image</span>
                            <input className="custom-file-input" onChange={event => uploadImage(event)} type="file"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSelector;