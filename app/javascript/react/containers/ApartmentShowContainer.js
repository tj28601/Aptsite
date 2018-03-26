import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ApartmentInformation from './ApartmentInformation';
import ApartmentPhotos from './ApartmentPhotos';
import PhotoFormContainer from './PhotoFormContainer';


class ApartmentShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      apartmentInfo: {},
      photoInfo: []

    }
    this.addNewPhoto = this.addNewPhoto.bind(this);
  }
  componentDidMount(){
    let apartmentId = this.props.params.id
    // console.log(this.props.params.id)
    // console.log(`/api/v1/apartments/${apartmentId}`)
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
//   componentWillMount(){
//   let apartmentId = this.props.params.id
//
//
// }

  addNewPhoto(type, formPayload) {
    // debugger;
    //post fetch
    // console.log(formPayload)
    let apartmentId = this.props.params.id
    // fetch('/api/v1/photos/6')

    fetch(`/api/v1/photos/${apartmentId}`, {
     credentials: 'same-origin',
     method: 'POST',
     // body: body,
     body: JSON.stringify(formPayload),
     headers: { 'Accept': 'application/json' }
     // headers: {
     //   'Content-Type': 'application/json',
       // 'X-Requested-With': 'XMLHttpRequest',
       // 'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
     // }
   })

    // , {
    // ^^COME BACK TO

    //   credentials: 'same-origin',
    //   method: 'POST',
    //   body: JSON.stringify(formPayload),
    //   headers: new Headers({ 'Content-Type': 'application/json'
    // })


    // credentials: 'same-origin',
    // method: 'POST',
    //  headers: {
    //    'Accept': 'application/json, text/plain, */*',
    //     'Content-type':'application/json'
    //  },
    //  body: JSON.stringify(formPayload),
    // ^^COME BACK TO




      // headers: { 'Content-Type': 'application/json' }
      // headers: {
      //   'Content-Type': 'application/json',
      //   'X-Requested-With': 'XMLHttpRequest',
      //   'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
      // }

    // })


    .then((res) => res.json())
    .then((data) => console.log(data))
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
      // .then(response => {
      //   debugger;
      // })
    .then(response => response.json())
    .then(json => {
      debugger;
    })
    // .then(body => {
    //   let newPhotoArray = this.state.photoInfo.concat(body)
    //   this.setState({ photoInfo: newPhotoArray })
    // })
  }

  render(){
    let handleAddNewPhoto = (formPayload) =>
      this.addNewPhoto(formPayload)

    let photoObjects = this.state.photoInfo.map((photo) =>{
    return(
      <ApartmentPhotos
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


        <h1> Apartment Photos: </h1>
        <PhotoFormContainer
            addNewPhoto={handleAddNewPhoto}/>
       {photoObjects}
       </div>
      );
  }
}
export default ApartmentShowContainer;
