// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Select from './Select'
import "../styles/baner.scss"

function Baner() {

  const [selected, setSelected] = useState("Selecione...")
  return (
    <div className='baner-container'>
      <Select selected={selected} setSelected={setSelected}/>
      <input type="text" name="" id="" className='nome-input' placeholder='Digite o nome do colaborador'/>
    </div>
  )
}

export default Baner
