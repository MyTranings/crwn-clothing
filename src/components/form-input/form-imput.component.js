import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div class='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {
        label ?
        <label className={`form-input-label ${otherProps.value.lenght && otherProps.value ? ' shink' : ''}`}>{label}</label> 
        : null
      }
    </div>
  )
}

export default FormInput;