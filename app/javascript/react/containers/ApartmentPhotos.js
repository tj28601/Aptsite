import React from 'react';


const ApartmentPhotos = props => {

  return(
    <div>
      <li>hello from ApartmentPhotos</li>
      <li><img src= {`/uploads/photo/image/${props.id}/${props.image}`} alt= "apartment photo" /></li>
      <li>{props.description}</li>

    </div>

  )
}

export default ApartmentPhotos;
