import React from 'react';
import { Link } from 'react-router';


const ApartmentTile = props => {

  let imgUrl = props.thumbnail_photo_url
    if (props.thumbnail_photo_url === '/images/fallback/default.png') {
      imgUrl = '/default.png'
    }

  let signInMessage = ''

  let favButton = <h5><button id="favId" onClick={props.onTileClick}><div id = 'favIdhover'><i className="fas fa-plus"></i> Add Fav</div></button></h5>;

  let favArray = props.favorites.map((fav) => {

    if (fav.apartment.address === props.address) {
      favButton = <h5><button id="alreadyfav"><i className="fas fa-check" >
      </i> Favorite </button></h5>;
    }

  })

  let selectedArray = props.selectedTileId.map((number) => {
    if (number === props.id && props.current_user !== undefined) {
      favButton = <h5><button id="selectedfav"><i className="fas fa-check" ></i> Added </button></h5>;
    }
    else if (number === props.id && props.current_user === undefined)   {
      signInMessage = <p>Click <a href="users/sign_in">HERE</a> to Sign In.</p>
    }
  })


  return (

    <div id = 'apartmentIndex'>
        {favButton}
        {signInMessage}
        <br/>
      <div id = 'apartmentIndexhover'>
        <h4><Link to={`/apartments/${props.id}`}><div id = 'apartmentIndexText'>{props.price} - {props.title}</div></Link></h4>
      </div>
        <br/>
      <h2><img src= {imgUrl} alt= "thumbnail photo"id="apartmentpic" height='300px' width='500px' /></h2>
      <li>{props.description}</li>
      <li>{props.pets}</li>
      <h8><li>{props.address}</li></h8>
    </div>

  )
}

export default ApartmentTile;
