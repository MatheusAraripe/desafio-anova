import React, {useContext} from 'react'
import { AuthContext } from '../../contexts/auth';

function HomePage() {
  const {logout} = useContext(AuthContext);
  const handleLogout = () => {
    logout()
  };
  return (
    <div>
        <h1>
            Home page privada!
            <button onClick={handleLogout}>Logout</button>
        </h1>
    </div>
  )
}

export default HomePage