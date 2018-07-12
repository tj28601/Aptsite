import React from 'react';
import { Link } from 'react-router';
import MapWithAMarker from './MyMapComponent';

const ApartmentInformation = (props) => {

    let sqFeet = props.sq_ft
  if (props.sq_ft === "") {
  sqFeet = '(unspecified)'
  } else{
    sqFeet == '{props.sq_ft}'
  }

  let editButton = ''
  if (props.current_user === 'admin') {
      editButton = <h5><button id='standardbutton'><a id="editYourApartment" href={`/apartments/${props.id}/edit`}>Edit | Delete</a> </button></h5>
  }

  return(

  <div>
      <h1>{props.title}</h1>
      <li><b>Rent:</b> {`${props.price}/month`}</li>
      <li><b>Address:</b> {`${props.address}`}</li>
      <li><b>Bedrooms:</b> {`${props.bedrooms}`}</li>
      <li><b>Bathrooms:</b> {`${props.bathrooms}`}</li>
      <li><b>Size:</b> {`${sqFeet}`} ft<sup>2</sup></li>
      <li><b>Pets:</b> {`${props.pets}`}</li>
      <li><b>Date Available:</b> {`${props.datedisplay}`}</li>
      <li><b>Description:</b> {`${props.description}`}</li>
      <br/>
      <h1>{editButton}</h1>
      <br/>
      <MapWithAMarker
        latitude={ props.latitude }
        longitude={ props.longitude }
        address={ props.address }
      />
      </div>

  )
}


export default ApartmentInformation;
