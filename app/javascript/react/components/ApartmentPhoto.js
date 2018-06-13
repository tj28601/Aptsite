// import React from 'react';
// //
// const ApartmentPhoto = props => {
// // // debugger;
// //
//   let editButton = ''
//   if (props.current_user === 'admin') {
//       editButton = <li><button id='standardbutton'><a id="editYourApartment" href={`/apartments/${props.apartment_id}/photos/${props.id}/edit`}>Edit | Delete</a></button></li>
//     }
//
//   let imgUrl = props.image_url
//   if (props.image_url === '/images/fallback/default.png') {
// imgUrl = '/default.png'
// }
//   return(
//     <div id='apartmentPhotoDisplay'>
//     <div id="apartmentPhotoDisplayText">
//         <li>{editButton}</li>
//         <img src= {imgUrl} alt= "apartment photo" id="aptphoto" height='20px' width='600px' />
//         <li>{`*** ${props.description} ***`}</li>
//       </div>
//     </div>
//   )
// }
// // //
// export default ApartmentPhoto;




import React from 'react';
import Gallery from 'react-grid-gallery';
//
//
let IMAGES = [];

const ApartmentPhoto = props => {


  let imgUrl = props.image_url
  if (props.image_url === '/images/fallback/default.png') {
    imgUrl = '/default.png'
  }
    let editButton = ''
    if (props.current_user === 'admin') {
        editButton = <li><button id='standardbutton'><a id="editYourApartment" href={`/apartments/${props.apartment_id}/photos/${props.id}/edit`}>Edit | Delete</a></button></li>
      }
  IMAGES.push(
    {src: `${imgUrl}`,
    thumbnail: `${imgUrl}`,
    caption: `${props.description}`,
  })

// let IMAGE =
//     {src: `${imgUrl}`,
//     thumbnail: `${imgUrl}`,
//     caption: `${props.description}`,
//   }


    return(


  <div id='apartmentPhotoDisplay'>
    <Gallery images={IMAGES}/>

  </div>

    )
}
//
//
export default ApartmentPhoto;
