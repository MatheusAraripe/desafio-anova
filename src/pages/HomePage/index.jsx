// eslint-disable-next-line no-unused-vars
import React ,{useContext, useState} from 'react'
import { AuthContext } from '../../contexts/auth';
import NavBar from '../../components/NavBar';
import {BsEnvelopePaperHeartFill} from "react-icons/bs"
import AddModal from '../../components/AddModal';
import Baner from "../../components/Baner"
import NeedEmailModal from '../../components/NeedEmailModal';
import DeleteModal from '../../components/DeleteModal';
import './homepage.scss'
import UserCard from '../../components/UserCard';

function HomePage() {

  const {getContactsFromLs} = useContext(AuthContext);
  const contacts = getContactsFromLs();

  // hooks para abrir os modais

  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  // const {logout} = useContext(AuthContext);
  // const handleLogout = () => {
  //   logout()
  // };

  return (
    <>
      {/*modal de deletar card*/}
      {deleteModalOpen && <DeleteModal 
      setOpenDeleteModal = {setDeleteModalOpen}
      title = {"Excluir card?"}/>
      }

      {/*modal de adicionar usuário*/}
      {modalOpen && <AddModal setOpenModal={setModalOpen} editUser={false} />}

      {/*modal de editar usuário*/}
      {editModalOpen && <AddModal setOpenModal={setEditModalOpen} editUser={true} />}

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
            <Baner />
          </div>

          {/* <h1 className='home-page-title'>
              Home page privada!
          </h1>
          <button onClick={handleLogout}>Logout</button> */}
          <div className="cards-section">
            {contacts.map((item, index) => {
              
              return(
                <UserCard 
                key={index}
                index={index} 
                name={item.name}
                unidade={item.uni}
                ramal={item.ramal}
                tel={item.tel}
                email={item.email}
                setDeleteModalOpen = {setDeleteModalOpen}
                setOpenModal={setEditModalOpen}
                />
              )
            })}
          </div>
      </div>
    </>
  )
}

export default HomePage
