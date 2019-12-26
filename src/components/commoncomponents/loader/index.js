import React, { Component } from "react";
import Style from "./style";
class Loader extends Component {

    render(){
        return(
            <div className="main-loader">
                <img src={require("../../../assets/images/main-loader.gif")} alt=""/>
                <Style/>
            </div>
        )
    }

}

export default Loader;