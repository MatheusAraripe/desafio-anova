// eslint-disable-next-line no-unused-vars
import React, {useContext, useState} from 'react'
import {IoMdArrowDropdown} from "react-icons/io";
import { AuthContext } from '../contexts/auth';
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

  const {logout} = useContext(AuthContext);
  const handleLogout = () => {
    logout()
  };

  return (
    <div className='nav-bar'>
        <h3 className="nav-logo">
            Telefones uteis
        </h3>
        <Link onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <IoMdArrowDropdown />
          {dropdown && <DropDown />}
        </Link>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default NavBar;
