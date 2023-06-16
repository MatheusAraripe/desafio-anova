import React, { useState } from 'react'
import {IoMdArrowDropdown} from "react-icons/io";
import '../styles/select.scss'

function Select({selected, setSelected}) {
  const options = ["Rio de Janeiro", "Juiz de Fora", "São Paulo"]
  const [isActive, setIsActive] = useState(false)
  return (
    <div className='select'>
        <div className="select-btn" onClick={()=>setIsActive(!isActive)}>
            {selected}
            <IoMdArrowDropdown />
        </div>
        {isActive && (
            <div className='select-options'>
                {options.map( (option) => (
                    <div
                    className="select-option"

                    onClick={ () => {
                        setSelected(option)
                        setIsActive(false)
                    }}
                    >
                        {option}
                    </div>
                ) )}
            </div>
        )}
    </div>
  )
}

export default Select