// import React, { Component } from 'react';
// import ThumbnailPhoto from '../components/ThumbnailPhoto'
//
// class ThumbnailPhotoContainer extends Component {
//   constructor(props) {
//     super(props);
//     // debugger;
//     this.state = {
//       allPhotos: [],
//     }
//   }
//
//
//   componentDidMount(){
//     // let apartmentId = this.props.params.id
//   fetch('/api/v1/photos')
//   // fetch(`/api/v1/apartments/${apartmentId}`)
//         .then(response => {
//           if (response.ok) {
//             return response;
//           } else {
//             let errorMessage = `${response.status}(${response.statusText})`,
//               error = new Error(errorMessage);
//             throw(error);
//           }
//         })
//         .then(response => response.json())
//         .then(json => {
//           debugger;
//         })
//         .then(body => {
//           this.setState({ allPhotos: body.allPhotos });
//         })
//         .catch(error => console.error(`Error in fetch: ${error.message}`));
//   }
//   render(){
//     let thumbnailObjects = this.state.allPhotos.map((photo) =>{
//     return(
//       <div>
//       <ThumbnailPhoto
//           apartment_id={photo.apartment_id}
//           key={photo.id}
//           id={photo.id}
//           description={photo.photo_description}
//           image={photo.image}
//         />
//
//
//         {thumbnailObjects}
//         </div>
//     )
//     })
//     return (
//       <div>
//         // <ThumbnailPhoto
//         //   apartment_id = this.state.allPhotos.apartment_id
//         //   image = this.state.allPhotos.image
//         //   description = this.state.allPhotos.description
//         //   key = this.state.allPhotos.id
//         //   id = this.state.allPhotos.id
//         // />
//         <ThumbnailPhoto/>
//       </div>
//
//
//     )
//   }
// }
//
// export default ThumbnailPhotoContainer;
