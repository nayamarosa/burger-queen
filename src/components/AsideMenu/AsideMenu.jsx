import React from 'react';
import Breakfast from './Breakfast';
import Allday from './Allday';
import Button from './Button';
import breakfastImg from '../images/breakfast.png';
import alldayImg from '../images/allday.png';
import orderImg from '../images/order.png';

import './AsideMenu.scss';

class SaloonAside extends React.Component{
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      text: <h1 className="Menu-state">ESCOLHA UMA OPÇÃO AO LADO</h1>
    };
  }
  
  handleMenuClick = (e, el) => {
    const newState = this.state;
    const id = e.target.id;
    newState[el] = this.getMenuCondition(id);    
    
    this.setState(newState);
    
  }
  
  getMenuCondition = (id) => {
    if (id === "breakfast") {
      // console.log("é café")            
      return <Breakfast/>
    } else if (id === "allday") {
      return <Allday/>
    } else {
      console.log("é pedido")
    }
  }
  
  render (){
    
    return (
      
      <>
      <section className="align-menu-options">
      <aside className="align-aside">
      <Button className="aside-button" name={breakfastImg} text ="CAFÉ DA MANHÃ" onClick={(e) => this.handleMenuClick(e, "text")} id="breakfast"/>
      <Button className="aside-button" name={alldayImg} text ="ALMOÇO E JANTAR" onClick={(e) => this.handleMenuClick(e, "text")} id="allday"/>
      <Button className="aside-button" name={orderImg} text ="MEUS PEDIDOS" onClick={(e) => this.handleMenuClick(e, "text")} id="order"/>
      </aside>
      <section className="menu-position">{this.state.text}</section>
      </section>
      </>
      )
      
    }
  }
  
  export default SaloonAside;