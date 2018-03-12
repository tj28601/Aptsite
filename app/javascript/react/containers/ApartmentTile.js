import React from 'react';
import { Link } from 'react-router';
// Router, browserHistory, Route, IndexRoute,
const ApartmentTile = props => {
  return (
    <div>
    <h1><Link to={`/apartments/${props.id}`}><h1>{props.title}{props.price}</h1></Link></h1>

    </div>

  )
}

export default ApartmentTile;
