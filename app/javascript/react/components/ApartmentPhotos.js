import React from 'react';


const ApartmentPhotos = props => {

  return(
    <div id='apartmentPhotoDisplay'>
      <ul class="photolist">
        <li><a id="editYourApartment" href={`/apartments/${props.apartment_id}/photos/${props.id}/edit`}>Edit | Delete</a></li>
        <img src= {`/uploads/photo/image/${props.id}/${props.image}`} alt= "apartment photo" id="aptphoto" height='600px' width='600px' />
        <li>{props.description}</li>
      </ul>
    </div>

  )
}

export default ApartmentPhotos;
