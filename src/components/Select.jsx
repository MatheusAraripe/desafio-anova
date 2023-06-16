import React, { useState } from 'react'
import {IoMdArrowDropdown} from "react-icons/io";
import '../styles/select.scss'

function Select() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className='select'>
        <div className="select-btn" onClick={()=>setIsActive(!isActive)}>
            Select...
            <IoMdArrowDropdown />
        </div>
        {isActive && (
            <div className='select-options'>
                <div className="select-option">Rio de Janeiro</div>
                <div className="select-option">Juiz de Fora</div>
                <div className="select-option">São Paulo</div>
            </div>
        )}
    </div>
  )
}

export default Select