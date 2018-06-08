import React from 'react';
import Gallery from 'react-grid-gallery';
//
let IMAGESARRAY = []
// IMAGESARRAY.push(IMAGE)
// let IMAGE = []
let OTHER = []

const ApartmentPhotos = props => {
// let IMAGESARRAY = []
//
// IMAGESARRAY.push(
//   {src: `${props.image_url}`,
//   thumbnail: `${props.image_url}`,
//   caption: `${props.description}`
// })
// let IMAGE = []


// IMAGE.push(
//   {src: `${props.image_url}`,
//   thumbnail: `${props.image_url}`,
// })

// IMAGE.push(
//   {src: `${props.image_url}`,
//   thumbnail: `${props.image_url}`,
// })
// let OTHER = []

let IMAGE =
  {src: `${props.image_url}`,
  thumbnail: `${props.image_url}`,
}

OTHER.push(IMAGE)
// IMAGESARRAY.push(IMAGE)
console.log(OTHER.join())
// IMAGESARRAY.join()
// console.log(IMAGESARRAY.join(''))
// console.log(IMAGE)
// console.log(cow)
// console.log(jQuery.unique(IMAGE))
// console.log(IMAGESARRAY.concat(IMAGE))
// console.log(IMAGESARRAY[0])
// console.log(FIRSTARRAY)

//
//
  return(
  // <Gallery images={IMAGESARRAY} />
<Gallery images={OTHER} />
  )

}
export default ApartmentPhotos;
