// eslint-disable-next-line no-unused-vars
import React, {useContext, useState}from 'react'
import { AuthContext } from '../contexts/auth';
import "../styles/modal.scss"
import {FaUserCircle} from "react-icons/fa"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email().required("Campo obrigaório"),
    name: yup.string().required("Campo obrigaório").min(3, 'Nome muito curto'),
    ramal: yup.number().required("Campo obrigaório"),
    tel: yup.string().required("Campo obrigaório")
})

// eslint-disable-next-line react/prop-types
function AddModal({setOpenModal, editUser}) {

  const {addUser} = useContext(AuthContext);

  const [newInput, setNewInput] = useState(false);


  const { register, handleSubmit: onSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});


  // guarda o user no localStorage
  const handleSubmit = (data) => {
    addUser(data.name, data.email, data.uni, data.ramal, data.tel)
  };

  return (
    <div className='modal-background'>
        <div className={editUser? "modal-container edit": "modal-container"}>
          <form onSubmit={onSubmit(handleSubmit)}>
            <div className="body">
                <div className="add-pic">
                  <FaUserCircle className='add-user-icon'/>
                </div>
                <div className="inputs-container">
                  <div className="input-name">
                    <span className="error invite-erro">
                      {errors.name?.message}
                    </span>
                    <input type="text" placeholder='Nome' className={errors.name? "user-info name error-input" : "user-info name"} name='name' {...register("name")}/>
                  </div>
                  <div className="input-informations">
                    <select name="uni" id="select" className="user-info unidade">
                      <option value="Rio de Janeiro">Rio de Janeiro</option>
                      <option value="Juiz de Fora">Juiz de Fora</option>
                      <option value="São Paulo">São Paulo</option>
                    </select>
                    <input type="number" placeholder='Ramal' className={errors.ramal? "user-info ramal error-input": "user-info ramal"} name='ramal' {...register("ramal")}/>
                    <input type="email" placeholder='Email' name='email' className={errors.email? "user-info email error-input" :"user-info email"} {...register("email")}/>
                  </div>
                  <div className="input-tel">
                    <input type="tel" placeholder='Telefone' className={errors.tel? "user-info tel error-input":'user-info tel'} name='tel' {...register("tel")}/>
                    
                    {newInput?
                    <input type="tel" placeholder='Telefone' className={errors.tel? "user-info edit-tel error-input":'user-info edit-tel'} name='tel' {...register("tel")}/>:
                    !editUser && <button className="plus-btn" onClick={ ()=> setNewInput(true)}>+</button>
                    }
                    
                    {editUser && <input type="tel" placeholder='Telefone' className={errors.tel? "user-info edit-tel error-input":'user-info edit-tel'} name='tel' {...register("tel")}/>}
                  </div>
                  {editUser &&
                    <div className="input-tel">
                      <input type="password" placeholder='XXXXXXXXXXXXXXXX' className={errors.tel? "user-info tel error-input":'user-info tel'} name='tel' {...register("tel")}/>
                      <input type="password" placeholder='Confirmar Senha' className={errors.tel? "user-info edit-tel error-input":'user-info edit-tel'} name='tel' {...register("tel")}/>
                    </div>
                  }
                </div>
            </div>
            {editUser?
              <div className="footer-edit">
                <button className='modal-btn close' onClick={ ()=> setOpenModal(false)}>CANCELAR</button>
                <button className='modal-btn save-user-edit' >SALVAR</button>
            </div>
            :
            <div className="footer">
              <button className='modal-btn close' onClick={ ()=> setOpenModal(false)}>CANCELAR</button>
              <button className='modal-btn add-user' >CONTINUAR ADD</button>
              <button className='modal-btn save-user' onClick={handleSubmit}>SALVAR E FINALIZAR</button>
            </div>
            }
          </form>
        </div>
    </div>
  )
}

export default AddModal
