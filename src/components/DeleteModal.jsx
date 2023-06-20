import React from 'react'
import {MdDeleteForever} from "react-icons/md"

function DeleteModal(setOpenDeleteModal) {
  return (
    <div className='modal-background'>
      <div className="invite-modal-container">
        <div className='invite-modal-body'>
          <div className="invite-text-container">
            <div className="invite-icon-container">
                <MdDeleteForever className='invite-icon'/>
            </div>
            <h3 className='invite-modal-title'>Excluir card?</h3>
            <p className='invite-modal-text'>Essa ação não poderá ser desfeita</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal