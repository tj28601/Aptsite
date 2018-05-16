import React, { Component } from 'react';
import ApartmentTile from '../components/ApartmentTile';
import Welcome from '../components/Welcome';
import { slide as Menu } from 'react-burger-menu';
import SideBarComponent from '../components/SideBarComponent';

class ApartmentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apts: [],
      favorites: [],
    }
        this.addToFavorites = this.addToFavorites.bind(this);
  }

  componentDidMount() {

    fetch('/api/v1/apartments')
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
      .then(body => {
      this.setState({ apts: body.apartments });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));

      fetch('/api/v1/favorites')
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
      .then(body => {
        let allFavorites = body.favorites
          this.setState({ favorites: allFavorites });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

//     componentDidMount(){
// fetch('/api/v1/favorites')
// .then(response => {
//   if (response.ok) {
//     return response;
//   } else {
//       let errorMessage = `${response.status}(${response.statusText})`,
//         error = new Error(errorMessage);
//         throw(error);
//     }
// })
// .then(response => response.json())
// .then(body => {
//   let allFavorites = body.favorites
//     this.setState({ favorites: allFavorites });
// })
// .catch(error => console.error(`Error in fetch: ${error.message}`));
// }

addToFavorites(apartment){
  fetch('/api/v1/favorites', {
    credentials: 'same-origin',
    method: 'post',
    body: JSON.stringify(apartment),
    headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json())
      // .then(json => {
      //   debugger;
      // })
      .then(body => {
        let favoritesArray = this.state.favorites.concat(body)
        this.setState({ favorites: favoritesArray })
        })
  }
  render() {
    let sideBar = (
  <SideBarComponent
    favorites={this.state.favorites}
  />
)

    let apartmentObjects = this.state.apts.map((apt) =>{
      let id = apt.id
      let description = apt.description
      let title = apt.title
      let address= apt.address
      let price= apt.price
      let thumbnail_photo_url=apt.thumbnail_photo_url
      let pets=apt.pets
      let bedrooms= apt.bedrooms
      let bathrooms= apt.bathrooms
      let sq_ft= apt.sq_ft
      let date_available= apt.date_available
      let latitude= apt.latitude
      let longitude= apt.longitude
      let addAptToFavs = () => this.addToFavorites(apt)

      return(
        <ApartmentTile
          addAptToFavs={ addAptToFavs }
          key={ id }
          id={ id }
          description={ description }
          address={ address }
          title={ title }
          price={ price }
          thumbnail_photo_url={ thumbnail_photo_url }
          pets={ pets }
          bedrooms={ bedrooms }
          bathrooms={ bathrooms }
          sq_ft={ sq_ft }
          date_available={ date_available }
          latitude={ latitude }
          longitude={ longitude }
        />

      )
    })

    return(
      <div>
      <div>
            {sideBar}
            </div>
      <div>
      <Welcome
      />
        {apartmentObjects}
      </div>
      </div>


    );
  }
}

export default ApartmentsContainer;
