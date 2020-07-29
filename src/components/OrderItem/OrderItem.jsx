import React from 'react';

// import Input from '../Input';

const OrderItem = ({product}) => {
  // const hamburger = product.hamburger;
  // const hamburgerType = product.hamburgerType;
  // const extra = product.extra;
  // const sideDishes = product.sideDishes;
  // const drinks = product.drinks;

  // const mapItem = (prod) => {
  //   if(prod !== undefined) {
  //     return prod.map(product => {
  //       const { item, price } = product
  //       return (
  //         <li>
  //           <a href="/">
  //             {item}
  //             {price}
  //           </a>
  //         </li>
  //       )
  //     })
  //   }
  // }

  return (
    <li>
      <a href="/">
        {product.item}
        {product.price}
      </a>
    </li> 
  )
}

export default OrderItem;