import React from 'react'
import NavBar from '../../components/NavBar'

function AdminPage() {
  return (
    <div className='admin-page-container'>
        <NavBar />
        <div className="admin-title-container">
            <h2 className='admin-title'>Gerenciar Usuários</h2>
        </div>
    </div>
  )
}

export default AdminPage