import React, { Component } from 'react';
// import FavoriteTile from '../components/FavoriteTile';
import { slide as Menu } from 'react-burger-menu';
import { browserHistory} from 'react-router';


const SideBarComponent = props => {
  // debugger;

    // let favoritesArray = props.favorites.map(favorite => {
    //       let id = favorite.title
    //       let address = favorite.apartment.address
    //       let title = favorite.apartment.title
    //       let handleDeleteFav = () => props.deleteFromFavs(favorite.id)
    //   return(
    //     <FavoriteTile
    //       key={id}
    //       id={id}
    //       title={title}
    //       address={address}
    //       deleteFavorite={handleDeleteFav}
    //     />
    //   )
    // })


  //   let sessionDisplay = props.current_user
  // if (props.current_user === undefined) {
  // sessionDisplay =   <a id="sessionDisplay" className="menu-item" href="/users/sign_in"><i className="fas fa-sign-in-alt"></i> Log In</a>
  // // <a id="sessionDisplay" className="menu-item" href="/users/sign_in"><i className="fas fa-sign-in-alt"></i> {sessionDisplay}</a>
  // }
  // else{
  //   sessionDisplay = <a id="sessionDisplay" className="menu-item" href="/users/sign_in"><i className="fas fa-sign-in-alt"></i> Sign Out</a>
  // }

      // debugger;
    return(

      <Menu id='sideBar'>

        <a id="home" className="menu-item" href="/"><i className="fas fa-home"></i> Home</a>
        <a id="about" className="menu-item" href="/about_details"><i className="fas fa-users"></i> About</a>
        <a id="favs" className="menu-item" href="/favorites"><i className="far fa-star"></i> Favorites</a>
        <a id="contact" className="menu-item" href="/contacts/new"><i className="far fa-envelope"></i> Contact Us</a>


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
