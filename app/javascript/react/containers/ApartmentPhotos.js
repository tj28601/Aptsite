import React from 'react';


const ApartmentPhotos = props => {

  return(
    <div>
        <h5><a id="editYourApartment" href={`/apartments/${props.apartment_id}/photos/${props.id}/edit`}>Edit</a> | <a id="deleteYourApartment" href={`/apartments/${props.id}`}>Delete</a></h5>
      <li><img src= {`/uploads/photo/image/${props.id}/${props.image}`} alt= "apartment photo" /></li>
      <li>{props.description}</li>

    </div>

  )
}

export default ApartmentPhotos;
