import React from 'react'
import LoginForm from '../../components/LoginForm'
import logo from "../../assets/logo-nova.png";
import './loginPage.scss';

function LoginPage() {
  return (
    <div className='login-page-body'>
        <div className="logo-container">
          <div className="image-container">
            <img src={logo} alt="logo" />
          </div>
          <div className="logo-line"></div>
          <h3 className='logo-title'>Telefones Úteis</h3>
        </div>
        <LoginForm />
    </div>
  )
}

export default LoginPage