import React from 'react';

// Router, browserHistory, Route, IndexRoute,
const FavoriteTile = props => {

  return (
    <div>
  <li>{`${props.address} ${props.title}`}<button id="deleteFromFavorites" onClick={props.deleteFavorite}>Delete From Favorites</button></li>
    </div>

  )
}

export default FavoriteTile;
