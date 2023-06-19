// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import {BiSearchAlt} from "react-icons/bi"
import Select from './Select'
import "../styles/baner.scss"

function Baner() {

  const [selected, setSelected] = useState("Selecione...")
  return (
    <div className='baner-container'>
      <Select selected={selected} setSelected={setSelected}/>
      <input type="text" name="" id="" className='nome-input' placeholder='Digite o nome do colaborador'/>
      {/* <button type='submit' className="search-icon-container">
       <BiSearchAlt className='search-icon'/>
      </button> */}
      <div className="search-icon-container">
        <BiSearchAlt className='search-icon'/>
      </div>
    </div>
  )
}

export default Baner
