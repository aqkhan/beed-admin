import React, {Component} from "react";
import axios from "axios";
import {apiPath} from "../../../config";
import SmallLoader from "../../commoncomponents/smallloader";

class ImageSelector extends Component {

    render() {
        return (
            <div className="webinar-form image_area">
                <div>
                    <h5>Header Settings</h5>
                    <div className="set_background">
                        <label>Header Background Image</label>
                        <img
                            src={require("../../../assets/images/image_placeholder.jpg")}
                            alt=""/>
                        <button className="btn btn-medium btn-blue" >Select
                            Background</button>
                    </div>
                    <div className="set_icon">
                        <label>Header Icon</label>
                        <img src={require("../../../assets/images/image_placeholder.jpg")} alt=""/>
                        <button className="btn btn-medium btn-blue">Select
                            Icon</button>
                    </div>
                    <div className="set_tags">
                        <label>Select Tags</label>
                        <select>
                            <option value=""/>
                            <option >tags</option>
                        </select>
                    </div>
                        <div className="selected_tags">
                            <label>Selected Tags</label>
                            <div className="selected_tag_render">
                                        <div className="tag_wrapper">
                                            <span>tag1</span>
                                            <i className="fa fa-times"/>
                                        </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }

}

export default ImageSelector;