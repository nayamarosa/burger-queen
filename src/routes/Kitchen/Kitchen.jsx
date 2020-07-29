import React from 'react';

import HeaderLogged from '../../components/HeaderLogged';
import AsideMenu from '../../components/AsideMenu';

const Kitchen = () => {
  
  return (
    <>
    <HeaderLogged />
    <AsideMenu 
      firstIcon="fas fa-concierge-bell"
      textFirstButton="Novos pedidos"
      
      secondIcon="fas fa-clock"
      textSecondButton="Pedidos em andamento"
      
      thirdIcon="fas fa-clipboard-check"
      textThirdButton="Pedidos prontos"
      
      fourthIcon="fas fa-clipboard-list"
      textFourthButton="Todos os pedidos"
    />
    </>
    )
  }
  
  export default Kitchen;