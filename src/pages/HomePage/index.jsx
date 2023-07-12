// eslint-disable-next-line no-unused-vars
import React ,{useContext, useState} from 'react'
import { AuthContext } from '../../contexts/auth';
import NavBar from '../../components/NavBar';
import {BsEnvelopePaperHeartFill} from "react-icons/bs"
import AddModal from '../../components/AddModal';
import InputWithSelect from '../../components/InputWithSelect';
import NeedEmailModal from '../../components/NeedEmailModal';
import DeleteModal from '../../components/DeleteModal';
import './homepage.scss'
import UserCard from '../../components/UserCard';
import EditModal from '../../components/EditModal';

function HomePage() {

  //lista todos os contatos buscados
  const [contactsList, setContactsList] = useState([]);

  // // pega todos os contatos 
  // const {getContactsFromLs} = useContext(AuthContext);
  // const contacts = getContactsFromLs();

  // hooks para abrir os modais

  const [modalOpen, setModalOpen] = useState(false);
  const [inviteModalOpen, setInviteModalOpen] = useState(false);

  // necessários para o modal de deletar usuário
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");


  // hooks para o modal de editar
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactRamal, setContactRamal] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactTel, setContactTel] = useState("");
  const [contactTel2, setContactTel2] = useState("");
  const [contactUni, setContactUni] = useState("");
  const [idToEdit, setIdToEdit] = useState("");

  return (
    <>
      {/*modal de deletar card*/}
      {deleteModalOpen && <DeleteModal 
      setOpenDeleteModal = {setDeleteModalOpen}
      setIdToDelete = {idToDelete}
      title = {"Excluir card?"}
      />
      }

      {/*modal de adicionar usuário*/}
      {modalOpen && <AddModal setOpenModal={setModalOpen}/>}

      {/*modal de editar usuário*/}
      {editModalOpen && 
      <EditModal 
      setOpenModal={setEditModalOpen}
      nameToEdit={contactName}
      emailToEdit={contactEmail} 
      ramalToEdit={contactRamal} 
      telToEdit={contactTel}
      tel2ToEdit={contactTel2}
      uniToEdit={contactUni}
      idToEdit={idToEdit}
      />
      }

      {/*modal de convidar usuário*/}
      {inviteModalOpen && <NeedEmailModal 
      setOpenInviteModal={setInviteModalOpen}
      icon={<BsEnvelopePaperHeartFill className='invite-icon'/>} 
      title={"Convide um colaborador"}
      text={"Informe o email de um colaborador para que ele receba um convite de cadastro"}
      btnText={"ENVIAR CONVITE"}/>
      }

      <div className='home-body'>
          <NavBar />
          <div className="social-button-container">
            <button className='social-button add' onClick={()=>setModalOpen(true)}>ADD CONTATO</button>
            <button className='social-button invite' onClick={()=>setInviteModalOpen(true)}>ENVIAR CONVITE</button>
          </div>

          <div className="baner-section">
            <div className='baner-container'>
              <InputWithSelect setContactsList = {setContactsList}/>
            </div>
          </div>

          <div className="cards-section">

            {contactsList.map((item, index) => {
        
              return(
                <UserCard 
                key={index}
                index={index}
                id={item.id} 
                name={item.name}
                unidade={item.uni}
                ramal={item.ramal}
                tel={item.tel}
                tel2={item.tel2}
                email={item.email}
                setDeleteModalOpen = {setDeleteModalOpen}
                setOpenModal={setEditModalOpen}
                setIdToDelete = {setIdToDelete}
                setContactName = {setContactName}
                setContactEmail={setContactEmail}
                setContactTel={setContactTel}
                setContactTel2={setContactTel2}
                setContactRamal={setContactRamal}
                setContactUni={setContactUni}
                setIdToEdit={setIdToEdit}
                />
              )
            })}
          </div>
      </div>
    </>
  )
}

export default HomePage
