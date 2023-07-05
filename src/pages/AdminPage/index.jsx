// eslint-disable-next-line no-unused-vars
import React,{useState, useContext} from 'react'
import { AuthContext } from '../../contexts/auth';
import NavBar from '../../components/NavBar'
import InputWithSelect from '../../components/InputWithSelect'
import TableAdmin from '../../components/TableAdmin'
import DeleteModal from '../../components/DeleteModal'
import AddModal from '../../components/AddModal'
import "./adminpage.scss"

function AdminPage() {

  // hooks para abrir os modais
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  // hook para pegar a id do usuário para deletar
  const [idToDelete, setIdToDelete] = useState("");

  return (
    <>

      {/*modal de deletar card*/}
      {deleteModalOpen && <DeleteModal 
      setOpenDeleteModal = {setDeleteModalOpen}
      setIdToDelete = {idToDelete}
      title = {"Excluir usuário?"}/>
      }

      {/*modal de editar user*/}
      {editModalOpen && <AddModal 
      setOpenModal={setEditModalOpen} 
      editUser={true} />
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
            <TableAdmin 
            setDeleteModalOpen = {setDeleteModalOpen} 
            setOpenEditModal = {setEditModalOpen}
            setIdToDelete = {setIdToDelete}
            />
          </div>
      </div>
    </>
  )
}

export default AdminPage
