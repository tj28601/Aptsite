import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton';

// import AboutUs from './AboutUs';
// import ContactUs from './ContactUs';
const NavBar = (props) => {

  return(
<div id='navBar'>
  <BackButton />
  
  { props.children }
 </div>
  )
};

export default NavBar;
