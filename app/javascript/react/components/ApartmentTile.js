import React from 'react';
import { Link } from 'react-router';



const ApartmentTile = props => {
  let imgUrl = props.thumbnail_photo_url
if (props.thumbnail_photo_url === '/images/fallback/default.png') {
imgUrl = 'default.png'
}
    return (

      <div id = 'apartmentIndex'>
          <br/>
          <br/>
        <h2><Link to={`/apartments/${props.id}`}><div id = 'apartmentIndexText'>{props.price} - {props.title}</div></Link></h2>
          <br/>
          <br/>
          <br/>
          <br/>
        <h2><img src= {imgUrl} alt= "thumbnail photo"id="apartmentpic" height='300px' width='500px' /></h2>


        <h3><li>{props.description}</li></h3>
        <h3><li>{props.pets}</li></h3>
        <h3><li>{props.address}</li></h3>
      </div>

    )

}

export default ApartmentTile;
