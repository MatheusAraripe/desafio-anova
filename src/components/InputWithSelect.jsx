import React, { useState } from 'react'
import {BiSearchAlt} from "react-icons/bi"
import Select from './Select'
import '../styles/input_with_select.scss'

function InputWithSelect() {
  
  const [selected, setSelected] = useState("Selecione...")

  return (
    <>
        <Select selected={selected} setSelected={setSelected}/>
        <input type="text" name="" id="" className='nome-input' placeholder='Digite o nome do colaborador'/>
        <div className="search-icon-container">
        <BiSearchAlt className='search-icon'/>
        </div>
    </>
  )
}

export default InputWithSelect