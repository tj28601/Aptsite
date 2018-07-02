// import React from 'react';
// //
// const ApartmentPhoto = props => {
//
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
//       <li>  <img src= {imgUrl} alt= "apartment photo" id="aptphoto" height='20px' width='600px' /></li>
//             <li>  <img src= '/apt1photo1.jpeg' alt= "apartment photo" id="aptphoto" height='20px' width='600px' /></li>
//         <li>{`*** ${props.description} ***`}</li>
//       </div>
//     </div>
//   )
// }
// // //
// export default ApartmentPhoto;



//
import React from 'react';
import Gallery from 'react-grid-gallery';
//
//
// let IMAGES = [];

const ApartmentPhoto = props => {


// let IMAGES = [];

  let imgUrl = props.image_url
  if (props.image_url === 'thumbnail: /images/fallback/default.png') {
    imgUrl = '/default.png'
  }

  let editButton = ''
    if (props.current_user === 'admin') {
      editButton = <li><button id='standardbutton'><a id="editYourApartment" href={`/apartments/${props.apartment_id}/photos/${props.id}/edit`}>Edit | Delete</a></button></li>
    }


  // IMAGES.push(
  //   {src: `${imgUrl}`,
  //   thumbnail: `${imgUrl}`,
  //   caption: `${props.description}`,
  // })

  // let IMAGES=
  //   [{thumbnail: `${imgUrl}`}]
  console.log({imgUrl})
    return(

  <div id='apartmentPhotoDisplay'>
  {imgUrl}
  <h1>{editButton}</h1>
  </div>

    )
}

export default ApartmentPhoto;
