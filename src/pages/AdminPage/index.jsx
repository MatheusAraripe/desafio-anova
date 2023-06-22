// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
import NavBar from '../../components/NavBar'
import InputWithSelect from '../../components/InputWithSelect'
import TableAdmin from '../../components/TableAdmin'
import DeleteModal from '../../components/DeleteModal'
import "./adminpage.scss"

function AdminPage() {

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  return (
    <>
      {/*modal de deletar card*/}
      {deleteModalOpen && <DeleteModal 
      setOpenDeleteModal = {setDeleteModalOpen}
      title = {"Excluir usuário?"}/>
      }
      <div className='admin-page-container'>
          <NavBar />
          <div className="admin-title-container">
              <h2 className='admin-title'>Gerenciar Usuários</h2>
          </div>
          <div className="input-admin-container">
            <InputWithSelect />
          </div>
          <div className="table-container">
            <TableAdmin setDeleteModalOpen = {setDeleteModalOpen}/>
          </div>
      </div>
    </>
  )
}

export default AdminPage
