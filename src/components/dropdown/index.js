import React from 'react';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
     
         <div className=" dropdown">
                <div className="profile-image"  onClick={this.showDropdownMenu}  >
                    <img src={require("../../assets/images/profile.jpg")} alt=""/>
                    <i className="fa fa-angle-down"/>
                    
                </div>
            <div className="dropdown-list">
                    
          { this.state.displayMenu ? (
              <ul>
                <li>Create Page</li>
                <li>Manage Pages</li>
                <li>Setting</li>
                <li>Log Out</li>
              </ul>
            ):
        (null)
        }
        </div>
      

       </div>

    );
  }
}

export default Dropdown;