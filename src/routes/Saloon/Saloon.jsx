import React from 'react';
// import Breakfast from '../components/Breakfast'
import AsideMenu from '../../components/AsideMenu';
// import Order from '../components/Order';
// import '../components/Components.css';

function Saloon() {
  
  return (
    <>
    <AsideMenu 
      firstIcon="fas fa-coffee"
      textFirstButton="Café da manhã"
      
      secondIcon="fas fa-hamburger"
      textSecondButton="Almoço e Jantar"

      thirdIcon="fas fa-utensils"
      textThirdButton="Pedidos prontos"
      
      fourthIcon="fas fa-clipboard-list"
      textFourthButton="Meus pedidos"
    />
    {/* <GetOrder/> */}
    </>
    )
  }
  
  export default Saloon;