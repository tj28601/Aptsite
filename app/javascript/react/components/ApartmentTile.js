import React from 'react';
import { Link } from 'react-router';



const ApartmentTile = props => {


  let imgUrl = props.thumbnail_photo_url
if (props.thumbnail_photo_url === '/images/fallback/default.png') {
imgUrl = '/default.png'
}
// let starButton = <button id="starId" onClick={props.addAptToFavs}><h1><i className="far fa-star"></i></h1></button>;
// let favArray = props.favorites.map((fav) => {
//   // let id=cow
//   if (fav.apartment.address === props.address) {
//     starButton = <h1><i className="far fa-star" style={{color: '#FFCA3F'},{background: 'red'}}></i></h1>;
//   }
// })
// <h5><button id='photobutton'><a id="addNewApt" href='/apartments/new'>Add New Apartment</a></button></h5>
let favButton = <h5><button id="favId" onClick={props.addAptToFavs}><i className="fas fa-plus"></i> Add Fav</button></h5>;
let favArray = props.favorites.map((fav) => {
  // let id=cow
  if (fav.apartment.address === props.address) {
    favButton = <h5><button id="alreadyfav"><i className="fas fa-check" style={{color: '#FFCA3F'},{size: '400px'}}></i> Favorite </button></h5>;
  }
})



    return (

      <div id = 'apartmentIndex'>
          {favButton}
          <br/>
          <br/>
        <div id = 'apartmentIndexhover'><h4><Link to={`/apartments/${props.id}`}><div id = 'apartmentIndexText'>{props.price} - {props.title}</div></Link></h4></div>
          <br/>
          <br/>
          <br/>
          <br/>
        <h2><img src= {imgUrl} alt= "thumbnail photo"id="apartmentpic" height='300px' width='500px' /></h2>
        <li>{props.description}</li>
        <li>{props.pets}</li>
        <h8><li>{props.address}</li></h8>
</div>

    )

}

export default ApartmentTile;
