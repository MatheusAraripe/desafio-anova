import React, { useState } from 'react'
import {BiSearchAlt} from "react-icons/bi"
import '../styles/input_with_select.scss'

function InputWithSelect() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <>  
        <div className="select">
          <select name="select" id="" className='select-btn'>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Juiz de Fora">Juiz de Fora</option>
            <option value="São Paulo">São Paulo</option>
          </select>
        </div>
        <input type="text" value = {searchTerm} onChange={handleInputChange} className='nome-input' placeholder='Digite o nome do colaborador'/>
        <div className="search-icon-container">
        <BiSearchAlt className='search-icon'/>
        </div>
    </>
  )
}

export default InputWithSelect