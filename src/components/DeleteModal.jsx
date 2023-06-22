import React from 'react'
import "../styles/delete_modal.scss"
import {MdDeleteForever} from "react-icons/md"

function DeleteModal({setOpenDeleteModal, title}) {
  return (
    <div className='modal-background'>
      <div className="delete-modal-container">
        <div className='invite-modal-body'>
          <div className="invite-text-container">
            <div className="invite-icon-container">
                <MdDeleteForever className='invite-icon'/>
            </div>
            <h3 className='invite-modal-title'>{title}</h3>
            <p className='invite-modal-text'>Essa ação não poderá ser desfeita</p>
          </div>
          <div className="footer-invite">
            <button className='cancel-op-btn' onClick={ ()=> setOpenDeleteModal(false)}>CANCELAR</button>
            <button className='excluir-btn'>EXCLUIR</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal