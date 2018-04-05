import React from 'react';
import { Link } from 'react-router';

const ApartmentInformation = (props) => {

  return(

    <div id='apartmentInformation'>
  <div id='apartmentInformationText'>
      <h1> Apartment Description: </h1>
      <h5><a id="editYourApartment" href={`/apartments/${props.id}/edit`}>Edit | Delete</a> </h5>

      <li>{`Rent: ${props.price}/month`}</li>
      <li>{props.title}</li>
      <li>{`Address: ${props.address}`}</li>
      <li>{`Bedrooms: ${props.bedrooms}`}</li>
      <li>{`Bathrooms: ${props.bathrooms}`}</li>
      <li>{`Size: ${props.sq_ft}ft`}<sup>2</sup></li>
      <li>{`Pets: ${props.pets}`}</li>
      <li>{`Available Date:${props.date_available}`}</li>
      <li>{`Description: ${props.description}`}</li>



      </div>
    </div>
  )
}

export default ApartmentInformation;
