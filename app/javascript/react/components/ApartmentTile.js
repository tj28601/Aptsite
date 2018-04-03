import React from 'react';
import { Link } from 'react-router';
// Router, browserHistory, Route, IndexRoute,
const ApartmentTile = props => {
  return (

    <div id = 'apartmentIndex'>

    <h1><Link to={`/apartments/${props.id}`}><div id = 'apartmentIndexText'>{props.title}{props.price}</div></Link></h1>

    </div>


  )
}

export default ApartmentTile;
