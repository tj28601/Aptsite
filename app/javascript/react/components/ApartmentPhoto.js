import React from 'react';

const ApartmentPhoto = props => {

  let editButton = ''
  if (props.current_user === 'admin') {
    editButton = <li><button id='standardphotobutton'><a id="editYourApartment" href={`/apartments/${props.apartment_id}/photos/${props.id}/edit`}>Edit | Delete</a></button></li>
  }

  let imgUrl = ''
    if (props.current_user === 'admin') {
      imgUrl = props.image_url
    }

    if (props.image_url === '/images/fallback/default.png' && props.current_user === 'admin' ){
      imgUrl = '/default.png'
    }

  let aptDescription = ''
    if (props.current_user === 'admin') {
      aptDescription = props.description
    }

  let photoDisplayDiv = ''
    if (props.current_user === 'admin') {
      photoDisplayDiv = 'apartmentPhotoDisplay'
    }

  let photoDisplayTextDiv = ''
    if (props.current_user === 'admin') {
      photoDisplayTextDiv = 'apartmentPhotoDisplayText'
    }
  let photoLayout = ''
    if (props.current_user === 'admin') {
      photoLayout =
      <div>
        <li>{editButton}</li>
        <li>  <img src= {imgUrl} alt= "" id="aptphoto" height='150px' width='300px' /></li>
        <li>{`${aptDescription}`}</li>
      </div>
    }

  return(
    <div id={photoDisplayDiv}>
      <div id={photoDisplayTextDiv}>
        {photoLayout}
      </div>
    </div>
  )
}

export default ApartmentPhoto;
