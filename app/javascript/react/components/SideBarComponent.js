import React, { Component } from 'react';
import FavoriteTile from '../components/FavoriteTile';
import { slide as Menu } from 'react-burger-menu';
import { browserHistory} from 'react-router';


const SideBarComponent = props => {
  // debugger;

    let favoritesArray = props.favorites.map(favorite => {
          let id = favorite.title
          let address = favorite.address
          let title = favorite.title
          let handleDeleteFav = () => props.deleteFromFavs(favorite.id)
      return(
        <FavoriteTile
          key={id}
          id={id}
          title={title}
          address={address}
          deleteFavorite={handleDeleteFav}
        />
      )
    })


    return(

      <Menu id='sideBar'>
         <a id="favorites" className="menu-item" href="/"><i className="fas fa-home"></i> Home</a>
         <a id="contact" className="menu-item" href="/contacts/new"><i className="far fa-envelope"></i> Contact Us</a>
         <a id="about" className="menu-item" href="/aboutdetails"><i className="fas fa-users"></i> About</a>
         <a id="about" className="menu-item" href="/aboutdetails"><i className="far fa-star"></i> My Favorites</a>
         <ul>
  {favoritesArray}
   </ul>

       </Menu>

    )
}

// return (
//         <Menu id='sideBar'>
//             <a id="favorites" className="menu-item" href="/"><i className="fas fa-home"></i> Home</a>
//             <a id="contact" className="menu-item" href="/contacts/new"><i className="far fa-envelope"></i> Contact Us</a>
//             <a id="about" className="menu-item" href="/aboutdetails"><i className="fas fa-users"></i> About</a>
//             <a id="about" className="menu-item" href="/aboutdetails"><i className="far fa-star"></i> My Favorites</a>
//
//          </Menu>
//
// )
// }

export default SideBarComponent;
