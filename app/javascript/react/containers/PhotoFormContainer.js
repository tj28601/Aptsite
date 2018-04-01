// import React, { Component } from 'react';
// import TextInputField from './TextInputField';
// import PhotoInputField from './PhotoInputField';
// // import Dropzone from 'react-dropzone';
// // import ReactDom from 'react-dom'
//
// class PhotoFormContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       photoDescription: '',
//       photoImage: '',
//       // apartmentId: 6
//       // photoArray: '',
//       // newPhotoArray: ''
//
//
//     }
//
//     this.handlePhotoDescriptionChange = this.handlePhotoDescriptionChange.bind(this);
//     this.handlePhotoFileChange = this.handlePhotoFileChange.bind(this);
//
//
//     // this.giraffe = this.giraffe.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handlePhotoDescriptionChange(event) {
//     let value = event.target.value
//     this.setState({ photoDescription: value })
//
//   }
//
//   handlePhotoFileChange(event) {
//
//     let giraffe = event.target.files[0].name
//     this.setState({ photoImage: giraffe })
//
//   }
//
//   handleSubmit(event) {
//     event.preventDefault();
//     let formPayload = {
//       photo_description: this.state.photoDescription,
//       image: this.state.photoImage,
//
//       apartment_id: +1
//     };
//     this.props.addNewPhoto(formPayload);
//
//   }
//
//   render() {
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <TextInputField
//           label='Photo Description'
//           value={this.state.photoDescription}
//           name='photoDescription'
//           handleChange={this.handlePhotoDescriptionChange}
//         />
//
//             <PhotoInputField
//           label='Photo Image'
//           cow={this.state.photoImage}
//           name='photoImage'
//           handleChange={this.handlePhotoFileChange}
//
//
//         />
//
//         <input type='submit' value='Submit'/>
//       </form>
//
//     )
//   }
// }
//
//
// export default PhotoFormContainer;
