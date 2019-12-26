import React, { Component } from "react";
import reactOutside from "react-click-outside";
import { Link } from "react-router-dom";
class standard extends Component{

    handleClickOutside(){
        let { closeMenu } = this.props;
        closeMenu(); 
    }

    render(){
        return(
            <div className='popup popup_menu_generic'>
                    <div className='popup_inner'>
                    <div className="team-list">
                        <ul>
                            <li><Link to="/standardcategory" onClick = {()=>this.props.closeMenu()}>Standard Categories</Link></li>
                            <li><Link to="/standards" onClick = {()=>this.props.closeMenu()} >Standards</Link></li>
                            
                        </ul>
                    </div>
                    </div>
                </div>
           
        )
    }

}

export default reactOutside(standard);