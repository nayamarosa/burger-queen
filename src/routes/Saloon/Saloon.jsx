import React, { useContext, useState, useEffect } from 'react';

import { MenuContext } from '../../containers/Context';
import HeaderLogged from '../../components/HeaderLogged';
import AsideMenu from '../../components/AsideMenu';
import OrderList from '../../containers/OrderList';
// import AlldayList from '../../containers/AlldayList';

const Saloon = () => {
  const menu = useContext(MenuContext);
  const [active, setActive] = useState(null);
  const [menuBreakfastList, setMenuBreakfastList] = useState([]);
  const [menuAlldayList, setMenuAlldayList] = useState([]);

  useEffect(() => {
    let breakfastList = menu[0];
    setMenuBreakfastList(breakfastList);

    let alldayList = menu[1];
    setMenuAlldayList(alldayList);
  }, [menu]);
  
  const handleMenuFilter = (e) => {
    e.preventDefault();
    let activeFilter = e.target;
    activeFilter.classList.add("classe");
    setActive(e.target);
    if (active !== e.target) {
      setActive(e.target);
    }
    if (active) {
      active.classList.remove("classe");
    }
  }

  const renderSwitch = (param) => {
    switch(param !== null) {
      case param.textContent === "Café da manhã":
        return menuBreakfastList.breakfast !== undefined ? <OrderList menu={menuBreakfastList.breakfast}/> : false;
      case param.textContent === "Almoço e Jantar":
        return menuBreakfastList.breakfast !== undefined ? <OrderList menu={menuAlldayList.allday}/> : false;
      case param.textContent === "Pedidos prontos":
        return param.textContent;
      case param.textContent === "Meus pedidos":
        return param.textContent;
      default:
        return <p>Selecione uma opção</p>;
    }
  }

  return (
    <>
    <HeaderLogged />
    <AsideMenu 
      firstIcon="fas fa-coffee"
      textFirstButton="Café da manhã"
      firstClick={(e) => handleMenuFilter(e)}
      
      secondIcon="fas fa-hamburger"
      textSecondButton="Almoço e Jantar"
      secondClick={(e) => handleMenuFilter(e)}
      
      thirdIcon="fas fa-utensils"
      textThirdButton="Pedidos prontos"
      thirdClick={(e) => handleMenuFilter(e)}
      
      fourthIcon="fas fa-clipboard-list"
      textFourthButton="Meus pedidos"
      fourthClick={(e) => handleMenuFilter(e)}
    />
    { 
    active !== null
      ? renderSwitch(active)
      : <p>Selecione uma opção</p>
    }
    </>
  )
}

export default Saloon;