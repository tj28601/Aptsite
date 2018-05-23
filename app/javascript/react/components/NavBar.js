import React from 'react';
// import { Link } from 'react-router';
import BackButton from './BackButton';
import { slide as Menu } from 'react-burger-menu';

// import SideBarComponent from './SideBarComponent';


const NavBar = (props) => {

  return(
    <div id='navBar'>
        <BackButton />
        { props.children }
      </div>
  )
};

export default NavBar;
