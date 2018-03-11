import React from 'react';

const ApartmentInformation = props => {

  return(
    <div>
      <li>{`Rent: ${props.price}/month`}</li>
      <li>{props.title}</li>
      <li>{`Address: ${props.address}`}</li>
      <li>{`Bedrooms: ${props.bedrooms}`}</li>
      <li>{`Bathrooms: ${props.bathrooms}`}</li>
      <li>{`Size: ${props.sq_ft}ft`}<sup>2</sup></li>
      <li>{`Pets: ${props.pets}`}</li>
      <li>{`Available Date:${props.date_available}`}</li>
      <p>{props.description}</p>
    </div>
  )
}

export default ApartmentInformation;
