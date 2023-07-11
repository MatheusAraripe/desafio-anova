import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import {BiSearchAlt} from "react-icons/bi"
import '../styles/input_with_select.scss'
import '../styles/select.scss'

function InputWithSelect({setContactsList}) {

  const {searchUser} = useContext(AuthContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectValue, setSelectValue] = useState("all");

  
  const handleChange = (event, isName) => {
    if(isName) {
      setSearchTerm(event.target.value);
      setContactsList(searchUser(event.target.value, selectValue, isName));
    } else {
      setSelectValue(event.target.value);
      setContactsList(searchUser(searchTerm, event.target.value, isName));
    }
  }




  return (
    <div className = "search-div">  
        <div className="select">
          <select name="select" value={selectValue} className='select-btn' onChange={ (e) => handleChange(e,false)}>
            <option value="all">Todas as unidades</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Juiz de Fora">Juiz de Fora</option>
            <option value="São Paulo">São Paulo</option>
          </select>
        </div>
        <input type="text" value = {searchTerm} onChange={ (e) => handleChange(e,true)} className='nome-input' placeholder='Digite o nome do colaborador'/>
        <div className="search-icon-container">
        <BiSearchAlt className='search-icon'/>
        </div>
    </div>
  )
}

export default InputWithSelect