import React from 'react';


const ApartmentPhotos = props => {

  return(
    <div id='apartmentPhotos'>

        <h5><a id="editYourApartment" href={`/apartments/${props.apartment_id}/photos/${props.id}/edit`}>Edit | Delete</a></h5>
      <li><img src= {`/uploads/photo/image/${props.id}/${props.image}`} alt= "apartment photo" /></li>
      <li>{props.description}</li>

    </div>

  )
}

export default ApartmentPhotos;
