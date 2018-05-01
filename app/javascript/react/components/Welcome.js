import React from 'react';
import { Link } from 'react-router';


const Welcome = props => {

    return (

      <div id='photosTitle'>
      <div id='photosTitleText'>
        <h1> Welcome to our website! </h1>
        <h2> Please feel free to contact us with any questions or concerns you may have. </h2>
        <h5><button id='photobutton'><a id="addNewApt" href='/apartments/new'>Add New Apartment</a></button></h5>

      </div>
      </div>

    )

}

export default Welcome;
