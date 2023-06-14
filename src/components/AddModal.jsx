import React from 'react'
import "../styles/modal.scss"

function AddModal({setOpenModal}) {
  return (
    <div className='modal-background'>
        <div className="modal-container">
            <div className="body">
                <div className="input-name">
                  <input type="text" className="user-info name" name='name'/>
                </div>
                <div className="input-informations">
                  <input type="text" className="user-info unidade"/>
                  <input type="number" className="user-info ramal"/>
                  <input type="email" name='email' className="user-info email"/>
                </div>
                <div className="input-tel">
                  <input type="tel" className='user-info tel'/>
                </div>
            </div>
            <div className="footer">
                <button className='close-modal-btn' onClick={ ()=> setOpenModal(false)}>Cancelar</button>
            </div>
        </div>
    </div>
  )
}

export default AddModal