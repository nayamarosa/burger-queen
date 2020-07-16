import React from 'react';

import './Toggle.scss';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "saloon"
    }
  }
  
  render (){
    return (
      <div className="align-toggle">
      <input className="radio-toggle" type="radio" name="toggle" id="saloon" value="saloon" checked={this.state.selected === "saloon"} onChange={(e) => this.setState({ selected: e.target.value})}/>
      <input className="radio-toggle" type="radio" name="toggle" id="kitchen" value="kitchen" checked={this.state.selected === "kitchen"} onChange={(e) => this.setState({ selected: e.target.value})}/>
      
      <label className="toggle toggle-order">
      <span></span>
      </label>
      <label htmlFor="saloon" className="saloon-order">Salão</label>
      <label htmlFor="kitchen" className="kitchen-order">Cozinha</label>   
      </div>
    );
  }
}
export default Toggle;