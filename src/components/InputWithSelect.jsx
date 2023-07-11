import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import {BiSearchAlt} from "react-icons/bi"
import '../styles/input_with_select.scss'
import '../styles/select.scss'

function InputWithSelect({setContactsList}) {

  const {searchUser} = useContext(AuthContext);

  const [searchTerm, setSearchTerm] = useState("");

  const handleNameInputChange = event => {
    setSearchTerm(event.target.value);
    setContactsList(searchUser(event.target.value))
  };

  const handleUniInputChange = event => {
    console.log(event.target.value);
  };


  return (
    <>  
        <div className="select">
          <select name="select" id="" className='select-btn' onChange={handleUniInputChange}>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Juiz de Fora">Juiz de Fora</option>
            <option value="São Paulo">São Paulo</option>
          </select>
        </div>
        <input type="text" value = {searchTerm} onChange={handleNameInputChange} className='nome-input' placeholder='Digite o nome do colaborador'/>
        <div className="search-icon-container">
        <BiSearchAlt className='search-icon'/>
        </div>
    </>
  )
}

export default InputWithSelect