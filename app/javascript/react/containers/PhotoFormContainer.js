import React, { Component } from 'react';
import TextInputField from './TextInputField';
import PhotoInputField from './PhotoInputField';
// import Dropzone from 'react-dropzone';
// import ReactDom from 'react-dom'

class PhotoFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoDescription: '',
      photoImage: '',
      // apartmentId: 6
      // photoArray: '',
      // newPhotoArray: ''


    }

    this.handlePhotoDescriptionChange = this.handlePhotoDescriptionChange.bind(this);
    this.handlePhotoFileChange = this.handlePhotoFileChange.bind(this);



    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePhotoDescriptionChange(event) {
    let value = event.target.value
    this.setState({ photoDescription: value })
  }

  handlePhotoFileChange(event) {
    // debugger;
    let giraffe = event.target.files[0].name
    this.setState({ photoImage: giraffe })
    // debugger;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      photo_description: this.state.photoDescription,
      // image: this.state.photoImage
      image: this.fileInput.files[0].name,
      apartment_id: +3
    };
    alert(
     `Selected file - ${this.fileInput.files[0].name}`
   );
    this.props.addNewPhoto(formPayload);
    debugger;
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <TextInputField
          label='Photo Description'
          value={this.state.photoDescription}
          name='photoDescription'
          handleChange={this.handlePhotoFileChange}
        />

            <PhotoInputField
          label='Photo Image'
          cow={this.state.photoImage}
          value={null}
          name='photoImage'
          handleChange={this.handlePhotoFileChange}


        />

        <img id="root" src="" />
        <input type='submit' value='Submit'/>
      </form>

    )
  }
}
// ReactDOM.render(
//   <FileInput />,
//   document.getElementById('root')
// );

export default PhotoFormContainer;
