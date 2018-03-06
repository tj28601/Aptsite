import React from 'react';
import ReactDOM from 'react-dom'

// const App = props => {
//
//   return(
//     <h1>Hewwoooooooo</h1>
//   )
// }
//
// export default App

class App extends Component {
constructor(props) {
  super(props);
  this.state={
    apartments: []
  }
}}

componentDidMount() {
  fetch('/api/v1/apartments')
  .then(response => response.json())
  .then(json => {
    debugger;
  })
}

render() {
  return(
    
  )
}
