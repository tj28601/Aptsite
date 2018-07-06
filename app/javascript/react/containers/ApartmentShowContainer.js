import React, { Component } from 'react';
import ApartmentInformation from '../components/ApartmentInformation';
import ApartmentPhoto from '../components/ApartmentPhoto';
// import IMAGES from '../components/ApartmentPhoto';
import PhotosTitle from '../components/PhotosTitle';
import Gallery from 'react-grid-gallery';



class ApartmentShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      apartmentInfo: {},
      userInfo: {},
      photoInfo: [],
      images: [],
    }

  }

  componentDidMount(){
    let apartmentId = this.props.params.id
    fetch(`/api/v1/apartments/${apartmentId}`, {
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
      .then(body => {
        this.setState({ apartmentInfo: body.apartment });
        if (body.apartment.current_user !== null){
          this.setState({ userInfo: body.apartment.current_user });
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));

      fetch(`/api/v1/photos/${apartmentId}`, {
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
        .then(body => {
          this.setState({ photoInfo: body.photos });
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let IMAGES =[]
    let photoObjects = this.state.photoInfo.map((photo) =>{

            let imgUrl = photo.image_url
            if (photo.image_url === '/images/fallback/default.png') {
              imgUrl = '/default.png'
            }
            IMAGES.push(
                  {src: `${imgUrl}`,
                  thumbnail: `${imgUrl}`,
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                  caption: `${photo.photo_description}`
                })

      return(
        <div id='photoarray'>
          <ApartmentPhoto
            apartment_id={ photo.apartment_id }
            key={ photo.id }
            id={ photo.id }
            current_user={ this.state.userInfo.role }
            image_url={ photo.image_url }
            description={ photo.photo_description }
          />
        </div>
      )
    })


    return(

    <div id='apartmentInformation'>
    <div id='apartmentInformationText'>

        <ApartmentInformation
          id={ this.state.apartmentInfo.id }
          key={ this.state.apartmentInfo.id }
          title={ this.state.apartmentInfo.title }
          price={ this.state.apartmentInfo.price }
          address={ this.state.apartmentInfo.address }
          bedrooms={ this.state.apartmentInfo.bedrooms }
          bathrooms={ this.state.apartmentInfo.bathrooms }
          sq_ft={ this.state.apartmentInfo.sq_ft }
          pets={ this.state.apartmentInfo.pets }
          date_available={ this.state.apartmentInfo.date_available }
          description={ this.state.apartmentInfo.description }
          photo={ this.state.apartmentInfo.photo }
          datedisplay={ this.state.apartmentInfo.date_display }
          latitude={ this.state.apartmentInfo.latitude }
          longitude={ this.state.apartmentInfo.longitude }
          current_user={ this.state.userInfo.role }
        />

           <br/>
           <br/>
  <Gallery images={IMAGES}/>

  <PhotosTitle
    current_user={ this.state.userInfo.role }
    apt_id={ this.state.apartmentInfo.id }
  />
 {photoObjects}

    </div>
    </div>
    );
  }
}
export default ApartmentShowContainer;
