import React from 'react'
import {FaPencilAlt, FaTrashAlt, FaUserCircle} from "react-icons/fa"
import "../styles/user_card.scss"

function UserCard({name, unidade, ramal, tel, email, setDeleteModalOpen}) {
  return (
    <div className='user-card-container'>
        <div className="user-card-image">
            <FaUserCircle className='user-image-icon'/>
        </div>
        <div className="user-card-body">
            <div className="card-head">
                <h2 className="user-name">
                    {name}
                </h2>
                <div className="interactive-icons">
                    <FaPencilAlt className='interactive-icon'/>
                    <FaTrashAlt className='interactive-icon' onClick={() => setDeleteModalOpen(true)}/>
                </div>
            </div>
            <div className="card-content">
                <p className="user-unidade">{unidade}</p>
                <h4 className='user-ramal'>{ramal}</h4>
                <p className='user-tel'>{tel}</p>

                <p className='user-email'>{email}</p>
            </div>
        </div>
    </div>
  )
}

export default UserCard