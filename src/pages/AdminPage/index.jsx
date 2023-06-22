// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from '../../components/NavBar'
import InputWithSelect from '../../components/InputWithSelect'
import TableAdmin from '../../components/TableAdmin'
import "./adminpage.scss"

function AdminPage() {
  return (
    <div className='admin-page-container'>
        <NavBar />
        <div className="admin-title-container">
            <h2 className='admin-title'>Gerenciar Usuários</h2>
        </div>
        <div className="input-admin-container">
          <InputWithSelect />
        </div>
        <div className="table-container">
          <TableAdmin />
        </div>
    </div>
  )
}

export default AdminPage
