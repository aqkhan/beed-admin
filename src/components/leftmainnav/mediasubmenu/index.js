import React, { Component } from "react";
import reactOutside from "react-click-outside";
import { Link } from "react-router-dom";
class Media extends Component{

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
                            <li><Link to="/media-tags" onClick = {()=>this.props.closeMenu()}>Media Tags</Link></li>
                            <li><Link to="/Media" onClick = {()=>this.props.closeMenu()} >Media</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default reactOutside(Media);