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

    <div id='apartmentInformation'>
  <div id='apartmentInformationText'>
      <h1>{props.title}</h1>
      <li>{`Rent: ${props.price}/month`}</li>
      <li>{`Address: ${props.address}`}</li>
      <li>{`Bedrooms: ${props.bedrooms}`}</li>
      <li>{`Bathrooms: ${props.bathrooms}`}</li>
      <li>{`Size: ${sqFeet}`} ft<sup>2</sup></li>
      <li>{`Pets: ${props.pets}`}</li>
      <li>{`Available date: ${props.datedisplay}`}</li>
      <li>{`Description: ${props.description}`}</li>
      <br/>
      <h1>{editButton}</h1>
      <br/>
      <MapWithAMarker
        latitude={ props.latitude }
        longitude={ props.longitude }
      />
      </div>
    </div>
//maybe add "book appointment" or "add to favorites" here ...
  )
}


export default ApartmentInformation;
