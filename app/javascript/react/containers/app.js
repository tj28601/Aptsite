import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import ApartmentsContainer from './ApartmentsContainer';
import NavBar from '../components/NavBar';
import ApartmentShowContainer from './ApartmentShowContainer';
// import PhotoShowContainer from './PhotoShowContainer';
import ReactDom from 'react-dom';
import { Link } from 'react-router';
import AboutUs from '../components/AboutUs';
import ApartmentTile from '../components/ApartmentTile';
const About = () => {
  return(<h1>boa noite</h1>)
}

const App = props => {
  return(
    <div>
    <Router history={browserHistory}>
      <Route path= '/' component ={NavBar} >

        <IndexRoute component={ApartmentsContainer} />
          <Route path='/apartments' component={ApartmentsContainer} />
            <Route path='/apartments/:id' component={ApartmentShowContainer}  />
            <Route path= '/aboutdetails' component ={AboutUs} />
        </Route>
        <ApartmentsContainer />
        </Router>
        </div>
  )
}


export default App;
