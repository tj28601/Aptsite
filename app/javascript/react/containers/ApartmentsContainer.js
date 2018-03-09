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
    console.log(this.props.params)
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
    let apartmentObjects = this.state.apts.map((apt) =>{
      return(
        <ApartmentTile
          key={apt.id}
          id = {apt.id}
          description = {apt.description}
          address = {apt.address}
          title = {apt.title}
          price = {apt.price}
        />

      )
    })

    return(
      <div>
        <h1>Look at our Wonderful Apartments</h1>
        {apartmentObjects}
      </div>
    );
  }
}

export default ApartmentsContainer;
