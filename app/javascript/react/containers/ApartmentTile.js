import React from 'react';
import { Link } from 'react-router';
// Router, browserHistory, Route, IndexRoute,
const ApartmentTile = props => {
  return (
    <div>
    <li><Link to={'/apartments/${props.id}'}> {props.title}</Link></li>
    <li>{`${props.title} ${props.price}`}</li>
    </div>

  )
}

export default ApartmentTile;
