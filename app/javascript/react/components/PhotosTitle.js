import React from 'react';
import { Link } from 'react-router';


const PhotosTile = props => {
  let photoButton = ''
  if (props.current_user === 'admin') {
      photoButton = <h5><button id='photobutton'><a id="addNewPhoto" href={`/apartments/${props.apt_id}/photos/new`}>Add New Photo</a></button></h5>
    }

    return (

      // <div id='photosTitle'>
      // <div id='photosTitleText'>
      // // <h1>Apartment Photos: </h1>

<div id='adminbutton'>


        <h5>{photoButton}</h5>
</div>
       // </div>
       // </div>

    )

}

export default PhotosTile;
