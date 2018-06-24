import React, { Component } from 'react';
import { Link } from 'react-router';
import FavTile from '../components/FavTile';
import Edward from '../components/Edward';
//
//
//
// const Cabbage = props => {
  class FavsContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        favorites: [],
      }
    }
    componentDidMount() {
    fetch('/api/v1/favorites', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
          let errorMessage = `${response.status}(${response.statusText})`,
            error = new Error(errorMessage);
            throw(error);
        }
    })
    .then(response => response.json())
    // .then(json => {
    //   debugger;
    // })
    .then(body => {
      let allFavorites = body.favorites
        this.setState({ favorites: allFavorites });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

    render(){
  let favsArray = this.state.favorites.map((fav) =>{
    return(
<div>
      <FavTile
        address={ fav.apartment.address }

      />
      </div>
    )
    })



    return (
<div>
  <div>
    <h1>Greetings from Cabbage!'</h1>
  </div>
  <div>
    {favsArray}
    <Edward
      favs={ this.state.favorites }
    />
  </div>
</div>


    )

}
}
export default FavsContainer;
