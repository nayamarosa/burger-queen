import React from 'react';

import Saloon from '../Saloon';
import Kitchen from '../Kitchen';

class Dashboard extends React.Component{
  constructor(props) {
    super();
    this.props = props;
    
    if(sessionStorage.getItem('user')){
      sessionStorage.getItem('id');
      sessionStorage.getItem('name');
      sessionStorage.getItem('type');        
    } else{
      this.props.history.push('/login');
    }
    
    
  }
  
  render() {
    
    const pageType = (sessionStorage.getItem('type') === 'saloon') ? <Saloon/> : <Kitchen/>;
    
    return (
      <>
      {/* <DashboardHeader /> */}
      
      {pageType}
      </>
      )
    }
  }
  
  export default Dashboard;