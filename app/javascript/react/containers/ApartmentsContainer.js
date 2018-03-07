import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ApartmentTile from './ApartmentTile';
// import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';

// const App = props => {
//
//   return(
//     <h1>Hewwoooooooo</h1>
//   )
// }
//
// export default App

class ApartmentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apts: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/apartments')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })

      .then(response => response.json())

      .then(body => {
        this.setState({ apts: body.apartments });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  render() {
    let apartmentObject = this.state.apts.map((apt) =>{
      return(
        <div>
        <ApartmentTile
        key={apt.id}
        id = {apt.id}
        description = {apt.description}
        address = {apt.address}
        title = {apt.title}
        price = {apt.price}
        />
        </div>
      )
    })

    return(
      <div>
        <ul>{apartmentObject}</ul>
      </div>
    );
  }
}

export default ApartmentsContainer;
