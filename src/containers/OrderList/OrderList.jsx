import React from 'react';

import OrderItem from '../../components/OrderItem';

const OrderList = ({menu}) => {
  // const hamburger = menu[0].hamburger;
  // const hamburgerType = menu[1].hamburgerType
  // const extra = menu[2].extra;
  // const sideDishes = menu[3].sideDish;
  // const drinks = menu[4].drinks;

  const mapItem = (prod) => {
    return prod.map(product => {
      return 'oi'
    })
  }

  console.log(menu.length)

  return (
    <>
    { menu.length === 4
    ? <ul>
        {menu.map((product, i) => <OrderItem product={product} key={i}/>)}
      </ul>
    : <ul>
        'oi'
      </ul>
    }
    </>
    )
  }
export default OrderList;