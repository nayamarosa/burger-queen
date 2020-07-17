import React from 'react';

import './Logo.scss';

const Logo = (props) => {
  return (
    <img src="./logo.png" alt="Logo Burger Queen" className={props.className} />
  )
}
  
export default Logo;