import React, {useState} from "react";

function ImageSelector(props) {

    let { thumbnail } = props;
    const [ image, setImage ] = useState(thumbnail);

     const uploadImage = (event) => {
        const file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        // this.setState({ file: file });
        reader.onloadend = function (e) {
            setImage(reader.result);
            console.log("reader.result", reader.result);
            // const formData = new FormData();
            // formData.append('image', reader.result);
            // axios.post(apiPath+"/upload/image",formData).then(res =>{
            //     this.setState({uploadingImage: false});
            //     this.props.dispatch({
            //         type: "SET_URL",
            //         payLoad: res.data
            //     })
            //
            // });
        };
        // .bind(this);

    };

    return (
        <div className="webinar-form image_area">
            <div>
                <div className="set_background md-form">
                    <label>Featured Image</label>
                    <img
                        src={ image ? image : require("../../../assets/images/image_placeholder.jpg")}
                        alt=""/>
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