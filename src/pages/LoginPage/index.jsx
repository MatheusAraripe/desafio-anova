import React from 'react'
import LoginForm from '../../components/LoginForm'
import logo from "../../assets/logo-nova.png";
import './loginPage.scss';

function LoginPage() {
  return (
    <div>
        <img src={logo} alt="" />
        <LoginForm />
    </div>
  )
}

export default LoginPage