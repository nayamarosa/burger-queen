import React from 'react';
import firebase from '../../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import Button from '../Button';
import Logo from '../Logo';

import './HeaderLogged.scss';

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
      <header className="align-dashboard-header">
        <p className="person-name">{sessionStorage.getItem('name')}</p>
        <Logo className="logo-dashboard-header"/>
        <Button className="sign-out" text="Sair" onClick={this.signOut} />
      </header>
    );
  }
  
}

export default withFirebaseAuth({firebaseAppAuth,})(HeaderLogged);