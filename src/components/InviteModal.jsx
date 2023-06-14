import React from 'react'
import {BsEnvelopePaperHeartFill} from "react-icons/bs"

function InviteModal({setOpenInviteModal}) {
  return (
    <div className='modal-background'>
        <div className='invite-modal-container'>
            <div className="invite-modal-body">
                <div className="invite-text-container">
                    <button onClick={ ()=> setOpenInviteModal(false)}>X</button>
                    <div className="invite-icon-container">
                        <BsEnvelopePaperHeartFill className='invite-icon'/>
                    </div>
                    <h3 className='invite-modal-title'>Convide um colaborador</h3>
                    <p className='invite-modal-text'>Informe o email de um colaborador para que ele receba um convite de cadastro</p>
                </div>
                <div className="invite-email-container">
                    <input type="email" className='invite-email'/>
                </div>
            </div>
            <div className="footer-invite">
                <button className='invite-user-btn'>ENVIAR CONVITE</button>
            </div>
        </div>
    </div>

  )
}

export default InviteModal;