import React, { Component } from 'react';
import ApartmentInformation from './ApartmentInformation'

class ApartmentShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      apartmentInfo: {}
    }
  }
  componentDidMount(){
    let apartmentId = this.props.params.id

    fetch(`/api/v1/apartments/${apartmentId}`)
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
        this.setState({ apartmentInfo: body.apartment });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    return(

      <ApartmentInformation
        id={this.state.apartmentInfo.id}
        title={this.state.apartmentInfo.title}
        price={this.state.apartmentInfo.price}
        address={this.state.apartmentInfo.address}
        bedrooms={this.state.apartmentInfo.bedrooms}
        bathrooms={this.state.apartmentInfo.bathrooms}
        sq_ft={this.state.apartmentInfo.sq_ft}
        pets={this.state.apartmentInfo.pets}
        date_available={this.state.apartmentInfo.date_available}
        description={this.state.apartmentInfo.description}
        />
    )
  }
}
export default ApartmentShowContainer;
