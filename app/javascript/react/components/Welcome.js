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
        <h1> Welcome to our website! </h1>
        <h2> Please feel free to contact us with any questions or concerns you may have. </h2>
        <h1>{addAptButton}</h1>
      </div>
      </div>

    )

}

export default Welcome;
