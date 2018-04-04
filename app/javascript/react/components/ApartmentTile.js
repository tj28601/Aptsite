// import React from 'react';
import React, { Component } from 'react';
import { Link } from 'react-router';
// import ApartmentPhotos from './ApartmentPhotos'


const ApartmentTile = props => {

    return (


      <div id = 'apartmentIndex'>

      <h1><Link to={`/apartments/${props.id}`}><div id = 'apartmentIndexText'>{props.price} - {props.title}</div></Link></h1>


      </div>

    )

}

export default ApartmentTile;
