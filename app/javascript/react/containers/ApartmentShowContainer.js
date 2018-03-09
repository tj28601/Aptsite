import React, { Component } from 'react';
import ApartmentInformation from './ApartmentInformation'

class ApartmentShowContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      apartmentInfo: {}

    }
  }
  componentDidMount(){
    let apartmentId = this.props.params.id
    // console.log(this.props.params.id)
    // let apartmentId = document.getElementById('show').getAttribute('data-id');
    fetch(`/api/v1/apartments/${apartmentId}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })

      // .then(response => response.json())
      // .then(json => {
      //   debugger;
      // })

    // fetch('api/v1/apartments/1')
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       let errorMessage = `${response.status}(${response.statusText})`,
    //         error = new Error(errorMessage);
    //       throw(error);
    //     }
    //   })
      .then(response => response.json())
      .then(body => {
        this.setState({ apartmentInfo: body.apartment });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));

  }
    // .then(response => {
//     let parsed = response.json()
//     .then(json => {
//       debugger;
//     })
//     }
//
//   .then(cereal => {
//     this.setState({ apartmentInfo: cereal})
//   })
// }

  render(){

      // console.log(JSON.parse('this.props.params.id'))
      // let apartmentShowObjects = this.state.apartmentInfo.map((apt) =>{
      //   return(
      //     <ApartmentInformation
      //       id={apt.id}
      //       description={apt.description}
      //       price={apt.price}
      //       />
      //   )
    // }

    return(
      // <div>
      //   <h1>Mira esta página increíble</h1>
      //   {apartmentShowObjects}
      //   </div>
      <ApartmentInformation
        id={this.state.apartmentInfo.id}
        title={this.state.apartmentInfo.title}
        price={this.state.apartmentInfo.price}
        description={this.state.apartmentInfo.description}
        />
    )
  }
}
export default ApartmentShowContainer;
