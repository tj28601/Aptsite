import React from 'react';
import { Link } from 'react-router';



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

        <h3>&bull; {props.price}</h3>
        <h3>&bull; {props.address}</h3>
        <h3>&bull; {props.description}</h3>
        <h3>&bull; {props.description}</h3>
        <h3>&bull; {props.pets}</h3>
      </div>

    )

}

export default ApartmentTile;
