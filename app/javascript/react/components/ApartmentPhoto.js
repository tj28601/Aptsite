// import React from 'react';
//
// const ApartmentPhoto = props => {
// // debugger;
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
//         <img src= {imgUrl} alt= "apartment photo" id="aptphoto" height='20px' width='600px' />
//         <li>{`*** ${props.description} ***`}</li>
//       </div>
//     </div>
//   )
// }
// // //
// export default ApartmentPhoto;




import React from 'react';
// // import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';



// // //
// let IMAGE = []
// //
// // console.log(IMAGE)
// //
// const ApartmentPhoto = props => {
//   console.log(props)
// // // let IMAGESARRAY = []
// // // IMAGESARRAY.push(
// // //   {src: `${props.image_url}`,
// // //   thumbnail: `${props.image_url}`,
// // //   caption: `${props.description}`
// // // })
// // // let IMAGE = []
// //
// //
// IMAGE.push({src: `${props.image_url}`,
// thumbnail: `${props.image_url}`
// })
// //
// console.log({IMAGE})
// // // IMAGE.push(
// // //   {src: `${props.image_url}`,
// // //   thumbnail: `${props.image_url}`,
// // // })
// //
// // // IMAGE.push(
// // //   {src: `${props.image_url}`,
// // //   thumbnail: `${props.image_url}`,
// // // })
// // // let OTHER = []
// //
// // // let IMAGE += {src: `${props.image_url}`,
// // //   thumbnail: `${props.image_url}`,
// // // }
// // // let IMAGE = []
// // // IMAGE.concat(`${props.image_url}`)
// // // console.log(props.image_url)
// //
// //
//   return(
//
//  {IMAGE}
//
//   )
// //
// }
// //
// //

// let IMAGE = []
// let IMAGE === props.id
// console.log(IMAGE)
// let `IMAGE${props.id}` = []

const ApartmentPhoto = props => {

let IMAGE = []

  let imgUrl = props.image_url
  if (props.image_url === '/images/fallback/default.png') {
    imgUrl = '/default.png'
  }
  IMAGE.push(
    {src: `${imgUrl}`,
    thumbnail: `${imgUrl}`,
    caption: `${props.description}`,
    }
  )

  return(
<div id='apartmentPhotoDisplay'>
<Gallery images={IMAGE} />
</div>
// {src: `${props.image_url}`,
// thumbnail: `${props.image_url}`,
// }

  )

}
// //
export default ApartmentPhoto;
