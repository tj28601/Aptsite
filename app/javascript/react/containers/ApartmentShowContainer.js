import React, { Component } from 'react';
import ApartmentInformation from '../components/ApartmentInformation';
// import ApartmentPhotos from '../components/ApartmentPhotos';
import PhotosTitle from '../components/PhotosTitle';
import Gallery from 'react-grid-gallery';


class ApartmentShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      apartmentInfo: {},
      userInfo: {},
      photoInfo: [],
      images: []
    }
    // this.onSelectImage = this.onSelectImage.bind(this);
  }
//   onSelectImage (index, image) {
//     var images = this.state.images.slice();
//     var img = images[index];
//     if(img.hasOwnProperty("isSelected"))
//         img.isSelected = !img.isSelected;
//     else
//         img.isSelected = true;
//
//     this.setState({
//         images: images
//     });
// }


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
      // .then(json => {
      //   debugger;
      // })
      .then(body => {
        this.setState({ apartmentInfo: body.apartment });
        this.setState({ userInfo: body.current_user });
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
      // let image_url=photo.image_url
      return(
        <div id = "photoarray">
        <div id='apartmentPhotoDisplay'>
       <div id="apartmentPhotoDisplayText">

         {photo.image_url}
</div>
</div>
        </div>
      )
    })
// console.log(photoObjects[0].apartment_id)
    return(
      <div>
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
          <PhotosTitle
            apt_id={ this.state.apartmentInfo.id }
            apt_key={ this.state.apartmentInfo.id }
            current_user={ this.state.userInfo.role }
          />
    <div>
      {photoObjects}
    </div>
          <br/>
          <br/>
          <br/>

       </div>
    );
  }
}
export default ApartmentShowContainer;
