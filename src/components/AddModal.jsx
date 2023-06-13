import React from 'react'
import "../styles/modal.scss"

function AddModal({setOpenModal}) {
  return (
    <div className='modal-background'>
        <div className="modal-container">
            <div className="body">
                <p>Modal body</p>
            </div>
            <div className="footer">
                <button className='close-modal-btn' onClick={ ()=> setOpenModal(false)}>Cancelar</button>
            </div>
        </div>
    </div>
  )
}

export default AddModal