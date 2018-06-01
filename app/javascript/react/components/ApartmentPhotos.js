import React from 'react';

// import Gallery from 'react-grid-gallery';
// //
const ApartmentPhotos = props => {
//   return(
// <h1>hewoooo</h1>
//   )
// }

  // class ApartmentPhotos extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       images: []
  //     }
  //   }
  let imgUrl = props.image_url
if (props.image_url === '/images/fallback/default.png') {
imgUrl = 'default.png'
}

// debugger;
// console.log(props)
  return(
    <div id='apartmentPhotoDisplay'>
    <div id="apartmentPhotoDisplayText">
        <li><button id='standardbutton'><a id="editYourApartment" href={`/apartments/${props.apartment_id}/photos/${props.id}/edit`}>Edit | Delete</a></button></li>
        <img src= {imgUrl} alt= "apartment photo" id="aptphoto" height='20px' width='600px' />
        <li>{`*** ${props.description} ***`}</li>
      </div>
    </div>
  )
}


// const IMAGE =
//
// [{
//   src: `${props.image_url}`,
//   thumbnail: `${props.image_url}`,
// }]
//     return(
//   <Gallery images={IMAGE} />
//   )
// }
//
//
export default ApartmentPhotos;
