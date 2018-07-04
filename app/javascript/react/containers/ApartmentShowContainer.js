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
      // .then(json => {
      //   debugger;
      // })
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
        // .then(json => {
        //   debugger;
        // })
        .then(body => {
          this.setState({ photoInfo: body.photos });
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
// componentWillMount(){
//   let apartmentId = this.props.params.id
//   fetch(`/api/v1/photos/${apartmentId}`)
//     .then(response => {
//       if (response.ok) {
//         return response;
//       } else {
//         let errorMessage = `${response.status}(${response.statusText})`,
//           error = new Error(errorMessage);
//         throw(error);
//       }
//     })
//     .then(response => response.json())
//     .then(body => {
//       this.setState({ photoInfo: body.photos });
//     })
//     .catch(error => console.error(`Error in fetch: ${error.message}`));
// }

  render(){

    let photoObjects = this.state.photoInfo.map((photo) =>{
            let thumbnail = `thumbnail: ${photo.image_url}`
            let thumbnailWidth = `thumbnailWidth: 320`
            let thumbnailHeight = `thumbnailHeight: 174`
            let sRc = `src: ${photo.image_url}`
      return(
        <div id = "photoarray">
          <ApartmentPhoto
              apartment_id={ photo.apartment_id }
              key={ photo.id }
              id={ photo.id }
              description={ photo.photo_description }
              image_url={ thumbnail }
              thumbnailWidth={ thumbnailWidth }
              thumbnailHeight={ thumbnailHeight }
              sRc ={ sRc }



              current_user={ this.state.userInfo.role }
              />
        </div>
      )})
      console.log({photoObjects})
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
