import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import ApartmentInformation from '../components/ApartmentInformation';
import ApartmentPhotos from '../components/ApartmentPhotos';
import PhotosTitle from '../components/PhotosTitle';

class ApartmentShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      apartmentInfo: {},
      photoInfo: []
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
      fetch(`/api/v1/photos/${apartmentId}`)
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
          this.setState({ photoInfo: body.photos });
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render(){

    let photoObjects = this.state.photoInfo.map((photo) =>{
    return(

      <ApartmentPhotos
          apartment_id={photo.apartment_id}
          key={photo.id}
          id={photo.id}
          description={photo.photo_description}
          image={photo.image}
        />

    )
    })

    return(
      <div>
      <ApartmentInformation
        id={this.state.apartmentInfo.id}
        key={this.state.apartmentInfo.id}
        title={this.state.apartmentInfo.title}
        price={this.state.apartmentInfo.price}
        address={this.state.apartmentInfo.address}
        bedrooms={this.state.apartmentInfo.bedrooms}
        bathrooms={this.state.apartmentInfo.bathrooms}
        sq_ft={this.state.apartmentInfo.sq_ft}
        pets={this.state.apartmentInfo.pets}
        date_available={this.state.apartmentInfo.date_available}
        description={this.state.apartmentInfo.description}
        photo={this.state.apartmentInfo.photo}
        />
        <br/>
        <br/>
        <PhotosTitle
          apt_id={this.state.apartmentInfo.id}
          apt_key={this.state.apartmentInfo.id}
        />

        <br/>
        <br/>
        <br/>

       {photoObjects}
       </div>
      );
  }
}
export default ApartmentShowContainer;
