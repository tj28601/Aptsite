import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import ApartmentsContainer from './ApartmentsContainer';
import NavBar from '../components/NavBar';
// import SideBarComponent from '../components/SideBarComponent';
import ApartmentShowContainer from './ApartmentShowContainer';
import FavsContainer from '../components/FavsContainer';


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={ApartmentsContainer} />
      <Route path='/apartments/:id' component={ApartmentShowContainer} />
      <Route path='/favorites' component={FavsContainer} />
    </Router>
  )
}


export default App;
