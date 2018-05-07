import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const MapWithAMarker = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=API_KEY&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 42, lng: -71 }}
  >
  <Marker
    position={{ lat: 42.1, lng: -71.1 }}
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

<MapWithAMarker
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=API_KEY&callback=initMap"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>

export default MapWithAMarker;
