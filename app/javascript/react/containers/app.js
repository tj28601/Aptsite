import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import ApartmentsContainer from './ApartmentsContainer';
import NavBar from './NavBar'
import ApartmentTile from './ApartmentTile'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path= '/' component ={NavBar} >
        <IndexRoute component={ApartmentsContainer} />
          <Route path='/apartments' component={ApartmentTile} />
          <Route path='/apartments/:id' component = {ApartmentsContainer} />
        </Route>
        <ApartmentsContainer />
        </Router>
  )
}

export default App;
