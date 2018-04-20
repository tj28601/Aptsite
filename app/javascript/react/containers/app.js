import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import ApartmentsContainer from './ApartmentsContainer';
import NavBar from '../components/NavBar';
import ApartmentShowContainer from './ApartmentShowContainer';


const App = props => {
  return(
    <div>
    <Router history={browserHistory}>
      <Route path= '/' component ={NavBar} >

        <IndexRoute component={ApartmentsContainer} />
          <Route path='/apartments' component={ApartmentsContainer} />
            <Route path='/apartments/:id' component={ApartmentShowContainer}  />
        </Route>
        <ApartmentsContainer />
        </Router>
        </div>
  )
}

//asdfasdfasdf
export default App;
