import React, { Component } from 'react';
import FavoriteTile from '../components/FavoriteTile';
import { slide as Menu } from 'react-burger-menu';



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
//

    return(
      <Menu id='sideBar'>
         <h3 id='favorites'> My Favorites </h3>
         <ul>
        {favoritesArray}
         </ul>
       </Menu>
    )
}
// return (
//   <h1>hello</h1>
//
// )
// }

export default SideBarComponent;
