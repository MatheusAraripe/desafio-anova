import React from 'react';
import {FaPencilAlt, FaTrashAlt} from "react-icons/fa"

const TableAdmin = ({setContactsList, setDeleteModalOpen, setOpenEditModal, setIdToDelete,
  setContactName, 
  setContactRamal, 
  setContactEmail, 
  setContactTel,
  setContactTel2,
  setContactUni,
  setIdToEdit
}) => {

  const handleClick = (id) => {
    setDeleteModalOpen(true);
    setIdToDelete(id)
  }
  
  const handleClickToEdit = (name, email, ramal, tel, tel2, uni, id) => {
    setOpenEditModal(true)
    setContactName(name);
    setContactRamal(ramal);
    setContactEmail(email);
    setContactTel(tel);
    setContactTel2(tel2);
    setContactUni(uni);
    setIdToEdit(id);
  }

  return (
    <table >
      <thead>
        <tr>
          <th className='th-name'>Nome</th>
          <th>Unidade</th>
          <th className='th-ramal'>Ramal</th>
          <th>Telefones</th>
          <th className='th-email'>Email</th>
        </tr>
      </thead>
      <tbody>
        
        {setContactsList.map((contact, index) => (
          <tr key={index} >
            <td className='td-name'>{contact.name}</td>
            <td>{contact.uni}</td>
            <td className='td-ramal'>{contact.ramal}</td>
            {contact.tel2?
            <td>{contact.tel} / {contact.tel2}</td>:
            <td>{contact.tel}</td>
            }
            <td className='td-email'>{contact.email}</td>
            <td><FaPencilAlt className='td-icon td-pencil' onClick={() => handleClickToEdit(contact.name,
              contact.email,
              contact.ramal,
              contact.tel,
              contact.tel2,
              contact.uni,
              contact.id)}/></td>
            <td><FaTrashAlt className='td-icon td-trash' onClick={() => handleClick(contact.id)}/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAdmin;
