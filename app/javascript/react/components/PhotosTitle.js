import React from 'react';
import { Link } from 'react-router';


const PhotosTile = props => {

    return (

      <div id='photosTitle'>
      <div id='photosTitleText'>
        <h1>Apartment Photos: </h1>
        <h5><button id='photobutton'><a id="addNewPhoto" href={`/apartments/${props.apt_id}/photos/new`}>Add New Photo</a></button></h5>
      </div>
      </div>

    )

}

export default PhotosTile;
