import React, {useContext} from 'react'
import { AuthContext } from '../contexts/auth';
function NavBar() {

  const {logout} = useContext(AuthContext);
  const handleLogout = () => {
    logout()
  };

  return (
    <div className='nav-bar'>
        <h3 className="nav-logo">
            Telefones uteis
        </h3>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default NavBar;