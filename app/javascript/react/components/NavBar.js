import React from 'react';
import SideBarComponent from './SideBarComponent';

const NavBar = (props) => {

  return(
    <div id='navBar'>
      <SideBarComponent />
      {props.children}
    </div>
  )
};

export default NavBar;
