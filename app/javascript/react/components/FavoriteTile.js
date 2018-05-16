import React from 'react';

// Router, browserHistory, Route, IndexRoute,
const FavoriteTile = props => {

  return (
    <div>
  <li>{`${props.address} ${props.title}`}</li>
    </div>

  )
}

export default FavoriteTile;
