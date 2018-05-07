import React from 'react';
import { Link } from 'react-router';
import MapWithAMarker from './MyMapComponent';

const ApartmentInformation = (props) => {

  return(

    <div id='apartmentInformation'>
  <div id='apartmentInformationText'>
      <h1> Apartment Description: </h1>
      <h5><button id='standardbutton'><a id="editYourApartment" href={`/apartments/${props.id}/edit`}>Edit | Delete</a> </button></h5>

      <li>{`Rent: ${props.price}/month`}</li>
      <li>{props.title}</li>
      <li>{`Address: ${props.address}`}</li>
      <li>{`Bedrooms: ${props.bedrooms}`}</li>
      <li>{`Bathrooms: ${props.bathrooms}`}</li>
      <li>{`Size: ${props.sq_ft}ft`}<sup>2</sup></li>
      <li>{`Pets: ${props.pets}`}</li>
      <li>{`Available Date: ${props.datedisplay}`}</li>
      <li>{`Description: ${props.description}`}</li>
      <MapWithAMarker />
      </div>
    </div>

  )
}


export default ApartmentInformation;
