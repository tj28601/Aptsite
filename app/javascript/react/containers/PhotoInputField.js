import React from 'react';

const PhotoInputField = props => {


      return(


        <label> {props.label}
          <input
            cow={props.cow}
            name={props.name}
            type='file'
            onChange={props.handleChange}
          
          />
        </label>

      )

}
export default PhotoInputField;
