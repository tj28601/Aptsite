import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const MapWithAMarker = compose(

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
    defaultCenter={{ lat: props.latitude, lng: props.longitude }}
  >
  <Marker
    position={{ lat: props.latitude, lng: props.longitude }}
  />
  </GoogleMap>
  );

  <MapWithAMarker
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDboS0d_sYpMgl4MQJFw7N1Mghmi6XPU8Y&callback=initMap"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />

export default MapWithAMarker;
