import React from 'react';

import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Toggle from '../../components/Toggle';

import './Login.scss';

import firebase from '../../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';

const firebaseAppAuth = firebase.auth();
const database = firebase.firestore();

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }
  
  handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value;
    this.setState(newState);
  }
  
  async getUser(id) {
    const doc = await database.collection("users").doc(id).get();
    const user = doc.data();
    return user;
  }
  
  signIn = () => {
    this.props.signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      const id = firebaseAppAuth.currentUser.uid;
      this.getUser(id)
      .then((data) => {
        sessionStorage.setItem('user', id);
        sessionStorage.setItem('name', data.name);
        sessionStorage.setItem('type', data.type);
        window.location = '/';
      })
    })
  }
  
  render() {
    return (
      <section className="login">
        <Logo className="logo"/>
        <form className="login__form">
          <p>Faça seu login</p>
          <Input 
            className="input__login"
            type="email" 
            placeholder="E-mail"
          />
          <Input 
            className="input__login"
            type="password" 
            placeholder="Senha"
          />
          <Button 
            className="btn__login"
            text="Entrar"
          />
        </form>
      </section>
      )
    }
  }
  
  export default withFirebaseAuth({firebaseAppAuth,})(Login);