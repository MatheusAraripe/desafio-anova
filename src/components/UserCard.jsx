import React from 'react'
import {FaPencilAlt, FaTrashAlt, FaUserCircle} from "react-icons/fa"
import "../styles/user_card.scss"

function UserCard() {
  return (
    <div className='user-card-container'>
        <div className="user-card-image">
            <FaUserCircle className='user-image-icon'/>
        </div>
        <div className="user-card-body">
            <div className="card-head">
                <h2 className="user-name">
                    Matheus Araripe
                </h2>
                <div className="interactive-icons">
                    <FaPencilAlt className='interactive-icon'/>
                    <FaTrashAlt className='interactive-icon'/>
                </div>
            </div>
            <div className="card-content">
                <p className="user-unidade">Juiz de Fora</p>
                <h4 className='user-ramal'>Ramal 282</h4>
                <p className='user-tel'>(32)XXXXX-XXXX</p>
                <p className='user-email'>raphaelli.bellini@ntendencia.com.br</p>
            </div>
        </div>
    </div>
  )
}

export default UserCard