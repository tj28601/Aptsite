import React from 'react';
import { Link } from 'react-router';


const Welcome = props => {
  let addAptButton = ''
    if (props.current_user === 'admin') {
      addAptButton = <h5><button id='photobutton'><a id="addNewApt" href='/apartments/new'>Add New Apartment</a></button></h5>
    }
  return (

    <div id='welcomeTitle'>
    <div id='welcomeTitleText'>
    <br/>
      <h1>{addAptButton}</h1>
    </div>
    </div>

  )
}

export default Welcome;
