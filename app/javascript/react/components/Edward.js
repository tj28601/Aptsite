// import React, { Component } from 'react';
// import MapWithAMarker from './MyMapComponent';
// import React from 'react';

//   class Edward extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         coords: [],
//       }
//     }
//     componentDidMount() {
//     fetch('/api/v1/favorites', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         credentials: 'same-origin'
//       })
//     .then(response => {
//       if (response.ok) {
//         return response;
//       } else {
//           let errorMessage = `${response.status}(${response.statusText})`,
//             error = new Error(errorMessage);
//             throw(error);
//         }
//     })
//     .then(response => response.json())
//     // .then(json => {
//     //   debugger;
//     // })
//     .then(body => {
//       let allFavorites = body.favorites
//         this.setState({ coords: allFavorites });
//     })
//     .catch(error => console.error(`Error in fetch: ${error.message}`));
//   }
//
//     render(){
//   let coordsArray = this.state.favorites.map((fav) =>{
//     return(
// <div>
//       <FavTile
//         long={ fav.apartment.longitude }
//         lat={ fav.apartment.lat }
//
//       />
//       </div>
//     )
//     })
//
//
// // debugger;
//     return (
// <div>
//   <div>
//     <h1>Greetings from Cabbage!'</h1>
//   </div>
//   <div>
//     {favsArray}
//     <Edward
//     />
//   </div>
// </div>
//
//
//     )
//
// }
// }
//this works..v
// const Edward = props => {
//   return(
//     <h1>hello from Edward</h1>
//   )
// }
//this works..^
import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// console.log(props.favs)
const Edward = compose(

  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDboS0d_sYpMgl4MQJFw7N1Mghmi6XPU8Y&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 42.361145, lng: -71.057083 }}
  >
  <Marker
    position={{ lat: 42.361145, lng: -71.057083 }}
  />
  </GoogleMap>
);

// class MyFancyComponent extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }
//
//   componentDidMount() {
//     this.delayedShowMarker()
//   }
//
//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }
//
//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }
//
//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }
// const { compose } = require("recompose");
// const {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } = require("react-google-maps");

// const MapWithAMarker = compose(
//   withScriptjs,
//   withGoogleMap
// )(props =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     <Marker
//       position={{ lat: -34.397, lng: 150.644 }}
//     />
//   </GoogleMap>
// );

<Edward
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDboS0d_sYpMgl4MQJFw7N1Mghmi6XPU8Y&callback=initMap"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>



export default Edward
