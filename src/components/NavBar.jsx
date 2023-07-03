// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {IoMdArrowDropdown, IoIosHome} from "react-icons/io";
import{FaUserCircle} from "react-icons/fa";
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
        <Link className='link-home-icon' to={'/'}>
          <IoIosHome className='home-icon'/>
        </Link>
        <Link onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='drop-link'>
          <FaUserCircle className='profile-icon'/>
          <IoMdArrowDropdown className='arrow-icon'/>
          {dropdown && <DropDown />}
        </Link>
        
    </div>
  )
}

export default NavBar;
