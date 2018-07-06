import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { browserHistory} from 'react-router';


const SideBarComponent = props => {

  return(

      <Menu id='sideBar'>

        <a id="home" className="menu-item" href="/"><i className="fas fa-home"></i> Home</a>
        <a id="about" className="menu-item" href="/about_details"><i className="fas fa-users"></i> About</a>
        <a id="favs" className="menu-item" href="/favorites"><i className="far fa-star"></i> Favorites</a>
        <a id="contact" className="menu-item" href="/contacts/new"><i className="far fa-envelope"></i> Contact Us</a>

      </Menu>
  )
}

export default SideBarComponent;
