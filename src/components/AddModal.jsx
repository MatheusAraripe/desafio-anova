import React from 'react'
import "../styles/modal.scss"
import {BsPersonFillAdd} from "react-icons/bs"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


import * as yup from "yup";

const schema = yup.object({
    email: yup.string().required("Campo obrigaório"),
    name: yup.string().required("Campo obrigaório").min(3, 'Nome muito curto'),
    ramal: yup.number().required("Campo obrigaório"),
    tel: yup.string().required("Campo obrigaório")
})

function AddModal({setOpenModal}) {

  const { register, handleSubmit: onSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='modal-background'>
        <div className="modal-container">
          <form onSubmit={onSubmit(handleSubmit)}>
            <div className="body">
                <div className="add-pic">
                  <BsPersonFillAdd className='add-user-icon'/>
                </div>
                <div className="inputs-container">
                  <div className="input-name">
                    <input type="text" className="user-info name" name='name' {...register("name")}/>
                    <span className="error invite-erro">
                      {errors.name?.message}
                    </span>
                  </div>
                  <div className="input-informations">
                    <input type="text" className="user-info unidade" name='unidade'/>
                    <input type="number" className="user-info ramal" name='ramal' {...register("ramal")}/>
                    <input type="email" name='email' className="user-info email" {...register("email")}/>
                  </div>
                  <div className="input-tel">
                    <input type="tel" className='user-info tel' name='tel' {...register("tel")}/>
                  </div>
                </div>
            </div>
            <div className="footer">
                <button className='modal-btn close' onClick={ ()=> setOpenModal(false)}>CANCELAR</button>
                <button className='modal-btn add-user' >CONTINUAR ADD</button>
                <button className='modal-btn save-user' >SALVAR E FINALIZAR</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default AddModal
