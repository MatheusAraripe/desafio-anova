// eslint-disable-next-line no-unused-vars
import React ,{useContext} from 'react'
import { AuthContext } from '../../contexts/auth';
import NavBar from '../../components/NavBar';
import './homepage.scss'

function HomePage() {

  const {logout} = useContext(AuthContext);
  const handleLogout = () => {
    logout()
  };

  return (
    <div>
        <NavBar />
        <h1 className='home-page-title'>
            Home page privada!
        </h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default HomePage
