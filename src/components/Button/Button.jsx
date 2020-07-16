import React from 'react';

import './Button.scss';

const Button = (props) => {
  return (
    <button className={`btn ${props.classNameBtn}`} 
      onClick={props.onClick} 
      id={props.id}>
      <img src={props.name} alt={props.alt}/>
      {props.text}
    </button>
  )
}

export default Button;