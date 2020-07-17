import React from 'react';

import './Button.scss';

const Button = (props) => {
  return (
    <button className={`btn ${props.className}`} 
      onClick={props.onClick} 
      id={props.id}>
      <i className={props.icon}></i>
      {props.text}
    </button>
  )
}

export default Button;