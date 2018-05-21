import React from 'react';
import { Link } from 'react-router';



const ApartmentTile = props => {

console.log(props.address)
  let imgUrl = props.thumbnail_photo_url
if (props.thumbnail_photo_url === '/images/fallback/default.png') {
imgUrl = 'default.png'
}
let starButton = <button id="starId" onClick={props.addAptToFavs}><h1><i className="far fa-star"></i></h1></button>;
let favArray = props.favorites.map((fav) => {
  console.log(fav.address)
  if (fav.address === props.address) {
    starButton = <h1><i className="fas fa-star" style={{color: '#FFCA3F'}}></i></h1>
  }
  // else {
  //   starButton = <i className="far fa-star"></i>
  // }
})
// return(
//   {starButton}
// )

// for (let i = 0; i <= favArray.length; i++) {
//   console.log(favArray[i])
// }
// if (favArray[i].includes(props.address)) {
//   starButton = <i className="fas fa-star"></i>
// }
// else {
//   starButton = <i className="far fa-star"></i>
// }

// const newFavs = this.state.favorites.filter(favorite => favorite.id !== current_favorite)
//   this.setState({favorites: newFavs})
    return (

      <div id = 'apartmentIndex'>
          {starButton}
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
