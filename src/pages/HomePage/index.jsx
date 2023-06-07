import React from 'react'
import NavBar from '../../components/NavBar';
import './homepage.scss'

function HomePage() {
  return (
    <div>
        <NavBar />
        <h1 className='home-page-title'>
            Home page privada!
        </h1>
    </div>
  )
}

export default HomePage