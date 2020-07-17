import React from 'react';

import AsideMenu from '../../components/AsideMenu';

class Kitchen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
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
    )
  }
}

export default Kitchen;