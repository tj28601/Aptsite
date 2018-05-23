import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import ApartmentsContainer from './ApartmentsContainer';
import NavBar from '../components/NavBar'
import SideBarComponent from '../components/SideBarComponent';
import ApartmentShowContainer from './ApartmentShowContainer';


const App = props => {
  return(

    <Router history={browserHistory}>
      <Route path='/' component={NavBar}  >
        <IndexRoute component={ApartmentsContainer} />
          <Route path='/' component={ApartmentsContainer} />
            <Route path='/apartments/:id' component={ApartmentShowContainer} />
          </Route>
        <ApartmentsContainer />
        </Router>

  )
}


export default App;
