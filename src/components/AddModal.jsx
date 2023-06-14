import React from 'react'
import "../styles/modal.scss"
import {BsPersonFillAdd} from "react-icons/bs"

function AddModal({setOpenModal}) {
  return (
    <div className='modal-background'>
        <div className="modal-container">
            <div className="body">
                <div className="add-pic">
                  <BsPersonFillAdd className='add-user-icon'/>
                </div>
                <div className="inputs-container">
                  <div className="input-name">
                    <input type="text" className="user-info name" name='name'/>
                  </div>
                  <div className="input-informations">
                    <input type="text" className="user-info unidade" />
                    <input type="number" className="user-info ramal"/>
                    <input type="email" name='email' className="user-info email"/>
                  </div>
                  <div className="input-tel">
                    <input type="tel" className='user-info tel'/>
                  </div>
                </div>
            </div>
            <div className="footer">
                <button className='modal-btn close' onClick={ ()=> setOpenModal(false)}>CANCELAR</button>
                <button className='modal-btn add-user' >CONTINUAR ADD</button>
                <button className='modal-btn save-user' >SALVAR E FINALIZAR</button>
            </div>
        </div>
    </div>
  )
}

export default AddModal
