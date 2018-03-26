import React, { Component } from 'react';
import TextInputField from './TextInputField'

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
    this.handlePhotoImageChange = this.handlePhotoImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePhotoDescriptionChange(event) {
    let value = event.target.value
    this.setState({ photoDescription: value })
  }
  handlePhotoImageChange(event) {
    let value = event.target.value
    this.setState({ photoImage: value })
  }

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      photo_description: this.state.photoDescription,
      // image: this.state.photoImage
      image: this.state.photoImage,
      // apartment_id: this.state.apartmentId
    }
    this.props.addNewPhoto(formPayload);
    // debugger;
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <TextInputField
          label='Photo Description'
          value={this.state.photoDescription}
          name='photoDescription'
          handleChange={this.handlePhotoDescriptionChange}
        />
        <TextInputField
          label='Photo Image'
          value={this.state.photoImage}
          name='photoImage'
          handleChange={this.handlePhotoImageChange}
        />
        <input type='submit' value='Submit'/>
      </form>

    )
  }
}

export default PhotoFormContainer;
