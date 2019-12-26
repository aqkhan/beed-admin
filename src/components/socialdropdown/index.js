import React from 'react';


class SocialDropdown extends React.Component {
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
     <span>
            <span className="dropdown">
                <span className="icons-share "  onClick={this.showDropdownMenu}><img src={require("../../assets/images/publish.svg")}alt=""/><img className="arrow-svg" src={require("../../assets/images/arrow.svg")}alt=""/></span>   
            </span>
          
        <div className="dropdown-list social-dropdown">  
          { this.state.displayMenu ? (
              <ul>
                <li>Facebok</li>
                <li>Twitter</li>
                <li>Instagram</li>
                
              </ul>
            ):
        (null)
        }
        </div>
        </span>

    );
  }
}

export default SocialDropdown;