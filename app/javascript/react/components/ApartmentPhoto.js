import React from 'react';
//
const ApartmentPhoto = props => {

  let editButton = ''
  if (props.current_user === 'admin') {
      editButton = <li><button id='standardphotobutton'><a id="editYourApartment" href={`/apartments/${props.apartment_id}/photos/${props.id}/edit`}>Edit | Delete</a></button></li>
    }
let imgUrl = ''
  // let imgUrl = props.image_url
  if (props.current_user === 'admin') {
imgUrl = props.image_url
}

if (props.image_url === '/images/fallback/default.png' && props.current_user === 'admin' ){
  imgUrl = '/default.png'
}
let aptDescription = ''
if (props.current_user === 'admin'){
  aptDescription = props.description
}
let photoDisplayDiv = ''
if (props.current_user === 'admin'){
  photoDisplayDiv = 'apartmentPhotoDisplay'
}
let photoDisplayTextDiv = ''
if (props.current_user === 'admin'){
  photoDisplayTextDiv = 'apartmentPhotoDisplayText'
}

  return(
    <div id={photoDisplayDiv}>
    <div id={photoDisplayTextDiv}>
        <li>{editButton}</li>
        <li>  <img src= {imgUrl} alt= "" id="aptphoto" height='150px' width='300px' /></li>
        <li>{`${aptDescription}`}</li>
      </div>
    </div>
  )
}
// //
export default ApartmentPhoto;



//
// import React from 'react';
// import Gallery from 'react-grid-gallery';
// //
// //
// // let IMAGES = [];
//
// const ApartmentPhoto = props => {
//
//
// // let IMAGES = [];
//
//   let imgUrl = props.image_url
//   if (props.image_url === '/images/fallback/default.png') {
//     imgUrl = '/default.png'
//   }
//
//   let editButton = ''
//     if (props.current_user === 'admin') {
//       editButton = <li><button id='standardbutton'><a id="editYourApartment" href={`/apartments/${props.apartment_id}/photos/${props.id}/edit`}>Edit | Delete</a></button></li>
//     }


  // IMAGES.push(
  //   {src: `${imgUrl}`,
  //   thumbnail: `${imgUrl}`,
  //   caption: `${props.description}`,
  // })
// let DOG = props.CAT
  // let IMAGES=
  //   [{thumbnail: `${imgUrl}`}]

  // let COW=[{
  //       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  //       thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
  //       thumbnailWidth: 320,
  //       thumbnailHeight: 174},
  //       {src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  //       thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  //       thumbnailWidth: 320,
  //       thumbnailHeight: 212}]

//     return(
//
//   <div id='apartmentPhotoDisplay'>
//
//
//
// <h1>{imgUrl}</h1>
//   <h1>{editButton}</h1>
//
//   </div>
//
//     )
// }
//
// export default ApartmentPhoto;
