// import React from 'react';
import React, { Component } from 'react';
import { Link } from 'react-router';
// import ApartmentPhotos from './ApartmentPhotos'


const ApartmentTile = props => {

    return (


      <div id = 'apartmentIndex'>
      <br/>
      <br/>
      <h2><Link to={`/apartments/${props.id}`}><div id = 'apartmentIndexText'>{props.price} - {props.title}</div></Link></h2>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2><img src= {`/uploads/apartment/thumbnail_photo/${props.id}/${props.thumbpic}`} alt= "thumbnail photo"id="apartmentpic" height='300px' width='300px' /></h2>

      <li>{props.price}</li>
      <li>{props.address}</li>
      <li>{props.description}</li>
      </div>

    )

}

export default ApartmentTile;
