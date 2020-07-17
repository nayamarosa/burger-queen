import React from 'react';
import firebase from '../../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';

import Button from '../Button';
import Logo from '../Logo';

import '../Header/Header.scss';

const firebaseAppAuth = firebase.auth();

class HeaderLogged extends React.Component{
  
  signOut = () => {
    firebaseAppAuth.signOut()
    .then(() => {
      sessionStorage.clear();
      window.location = '/';
    })
  };
  
  render (){
    return (
      <header className="header header__logged">
        <div className="container">
          {/* <p className="person-name">{sessionStorage.getItem('name')}</p> */}
          <p className="header__logged-name">Nayama</p>
          <Logo className="logo__logged"/>
          <Button 
            className="btn__sign-out" 
            // icon="fas fa-sign-out-alt" 
            text="Sair" 
            onClick={this.signOut} 
          />
        </div>
      </header>
    );
  }
  
}

export default withFirebaseAuth({firebaseAppAuth,})(HeaderLogged);