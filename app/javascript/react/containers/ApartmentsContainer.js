import React, { Component } from 'react';
import ApartmentTile from '../components/ApartmentTile';

class ApartmentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apts: [],
    }
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
    }
  render() {
    let apartmentObjects = this.state.apts.map((apt) =>{

      return(
        <ApartmentTile
          key={apt.id}
          id = {apt.id}
          description = {apt.description}
          address = {apt.address}
          title = {apt.title}
          price = {apt.price}
          thumbpic = {apt.thumbnail_photo}
        />

      )
    })

    return(
      <div>
        {apartmentObjects}
        </div>


    );
  }
}

export default ApartmentsContainer;
