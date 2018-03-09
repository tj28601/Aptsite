import React from 'react';

const ApartmentInformation = props => {

  return(
    <div>
      <h1>{props.price}</h1>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h1>testing</h1>
    </div>

  )
}

export default ApartmentInformation;
