// // import React from 'react';
// import React, { Component } from 'react';
// import ApartmentPhotos from './ApartmentPhotos';
//
// class PhotoShowContainer extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       photoInfo: []
//     }
//   }
//   componentDidMount(){
//     let apartmentId = this.props.params.id
//
//     fetch(`/api/v1/photos/${apartmentId}`)
//       .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           let errorMessage = `${response.status}(${response.statusText})`,
//             error = new Error(errorMessage);
//           throw(error);
//         }
//       })
//
//       .then(response => response.json())
//       // .then(json => {
//       //   debugger;
//       // })
//       .then(body => {
//         this.setState({ photoInfo: body.photos });
//       })
//       .catch(error => console.error(`Error in fetch: ${error.message}`));
//   }
//
//   render(){
//     // debugger;
//     // console.log(this.state.photoInfo.photo)
//     let photoObjects = this.state.photoInfo.map((photo) =>{
//       return(
//             // <div>
//         <ApartmentPhotos
//             key={photo.id}
//             id={photo.id}
//             description={photo.photo_description}
//             image={photo.image}
//           />
//       )
//     })
//     return(
//       <div>
//         <h1> Apartment Photos: </h1>
//         {photoObjects}
//       </div>
//     );
//   }
// }
//
//
//
//
// export default PhotoShowContainer;
