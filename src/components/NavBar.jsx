// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {IoMdArrowDropdown} from "react-icons/io";
import{CgProfile} from "react-icons/cg";
import { Link } from 'react-router-dom';
import DropDown from './DropDown';

import "../styles/navbar.scss";


function NavBar() {

  const [dropdown, setDropdown] = useState(false)

  const onMouseEnter = () => {
    setDropdown(true)
  }

  const onMouseLeave = () => {
      setDropdown(false)
  }



  return (
    <div className='nav-bar'>
        <h3 className="nav-logo">
            Telefones uteis
        </h3>
        <Link onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='drop-link'>
          <CgProfile className='profile-icon'/>
          <IoMdArrowDropdown className='arrow-icon'/>
          {dropdown && <DropDown />}
        </Link>
        
    </div>
  )
}

export default NavBar;
