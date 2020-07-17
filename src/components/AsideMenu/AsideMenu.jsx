import React from 'react';
import Breakfast from '../../containers/BreakfastList';
import Allday from '../../containers/AlldayList';
import Button from '../Button';

import './AsideMenu.scss';

class AsideMenu extends React.Component{
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
      <aside className="aside-menu">
        <Button className="btn__aside" icon={`btn__aside-icon ${this.props.firstIcon}`} text={this.props.textFirstButton} onClick={(e) => this.handleMenuClick(e, "text")} id="breakfast"/>
        <Button className="btn__aside" icon={`btn__aside-icon ${this.props.secondIcon}`} text={this.props.textSecondButton} onClick={(e) => this.handleMenuClick(e, "text")} id="allday"/>
        <Button className="btn__aside" icon={`btn__aside-icon ${this.props.thirdIcon}`} text={this.props.textThirdButton} onClick={(e) => this.handleMenuClick(e, "text")} id="order"/>
        <Button className="btn__aside" icon={`btn__aside-icon ${this.props.fourthIcon}`} text={this.props.textFourthButton} onClick={(e) => this.handleMenuClick(e, "text")} id="order"/>
      </aside>
      )
    }
  }
  
  export default AsideMenu;