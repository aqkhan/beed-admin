import React, { Component } from "react";
import reactOutside from "react-click-outside";
import { Link } from "react-router-dom";
class Team extends Component{

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
                            <li><Link to="/team/create" onClick = {()=>this.props.closeMenu()}>Add Team</Link></li>
                            <li><Link to="/teams" onClick = {()=>this.props.closeMenu()}>All Teams</Link></li>
                            <li><Link to="/member/create" onClick = {()=>this.props.closeMenu()}>Add Member</Link></li>
                            <li><Link to="/members" onClick = {()=>this.props.closeMenu()}>All Members</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
           
        )
    }

}

export default reactOutside(Team);