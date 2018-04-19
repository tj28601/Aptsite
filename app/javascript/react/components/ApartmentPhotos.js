import React from 'react';


const ApartmentPhotos = props => {

  return(
    <div id='apartmentPhotoDisplay'>
    <div id="apartmentPhotoDisplayText">

        <li><button id='standardbutton'><a id="editYourApartment" href={`/apartments/${props.apartment_id}/photos/${props.id}/edit`}>Edit | Delete</a></button></li>
        <img src= {`/uploads/photo/image/${props.id}/${props.image}`} alt= "apartment photo" id="aptphoto" height='20px' width='600px' />
        <li>{`*** ${props.description} ***`}</li>

      </div>
    </div>

  )
}

export default ApartmentPhotos;
