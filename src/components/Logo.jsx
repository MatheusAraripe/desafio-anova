import React from 'react'
import logo from "../assets/logo-nova.png";

function Logo() {
  return (
    <div className="logo-container">
        <div className="image-container">
            <img src={logo} alt="logo" />
        </div>
        <div className="logo-line"></div>
        <h3 className='logo-title'>Telefones Úteis</h3>
    </div>
  )
}

export default Logo