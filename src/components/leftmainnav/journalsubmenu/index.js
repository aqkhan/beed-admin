import React, { Component } from "react";
import reactOutside from "react-click-outside";
import { Link } from "react-router-dom";

class Journals extends Component{

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
                            <li><Link to="/journalcategory" onClick = {()=>this.props.closeMenu()}>Journals Categories</Link></li>
                            <li><Link to="/journals" onClick = {()=>this.props.closeMenu()} >Journals</Link></li>
                            
                        </ul>
                    </div>
                    </div>
                </div>
           
        )
    }

}

export default reactOutside(Journals);