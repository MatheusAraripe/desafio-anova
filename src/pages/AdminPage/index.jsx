// eslint-disable-next-line no-unused-vars
import React,{useState, useContext} from 'react'
import { AuthContext } from '../../contexts/auth';
import NavBar from '../../components/NavBar'
import InputWithSelect from '../../components/InputWithSelect'
import TableAdmin from '../../components/TableAdmin'
import DeleteModal from '../../components/DeleteModal'
import EditModal from '../../components/EditModal';
import "./adminpage.scss"

function AdminPage() {

  // hook para a busca de usuário
  const {getContactsFromLs} = useContext(AuthContext);
  const [contactsList, setContactsList] = useState(getContactsFromLs());

  // hooks para abrir os modais
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  // hook para pegar a id do usuário para deletar e editar
  const [idUser, setIdUser] = useState("");


  // hooks para o modal de editar
  const [contactName, setContactName] = useState("");
  const [contactRamal, setContactRamal] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactTel, setContactTel] = useState("");
  const [contactTel2, setContactTel2] = useState("");
  const [contactUni, setContactUni] = useState("");

  return (
    <>

      {/*modal de deletar card*/}
      {deleteModalOpen && <DeleteModal 
      setOpenDeleteModal = {setDeleteModalOpen}
      setIdToDelete = {idUser}
      title = {"Excluir usuário?"}/>
      }

      {/*modal de editar user*/}
      {editModalOpen && <EditModal 
      setOpenModal={setEditModalOpen}
      nameToEdit={contactName}
      emailToEdit={contactEmail} 
      ramalToEdit={contactRamal} 
      telToEdit={contactTel}
      tel2ToEdit={contactTel2}
      uniToEdit={contactUni}
      idToEdit={idUser}
      />
      }


      <div className='admin-page-container'>
          <NavBar />
          <div className="admin-title-container">
              <h2 className='admin-title'>Gerenciar Usuários</h2>
          </div>
          <div className="input-admin-container">
            <InputWithSelect setContactsList = {setContactsList}/>
          </div>
          <div className="table-container">
            <TableAdmin
            setContactsList={contactsList}
            setDeleteModalOpen = {setDeleteModalOpen} 
            setOpenEditModal = {setEditModalOpen}
            setIdToDelete = {setIdUser}
            setContactName = {setContactName}
            setContactEmail={setContactEmail}
            setContactTel={setContactTel}
            setContactTel2={setContactTel2}
            setContactRamal={setContactRamal}
            setContactUni={setContactUni}
            setIdToEdit={setIdUser}
            />
          </div>
      </div>
    </>
  )
}

export default AdminPage
