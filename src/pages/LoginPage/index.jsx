import React from 'react'
import LoginForm from '../../components/LoginForm'
import Logo from '../../components/Logo';
import './loginPage.scss';

function LoginPage() {
  return (
    <div className='login-page-body'>
        <Logo />
        <LoginForm />
    </div>
  )
}

export default LoginPage