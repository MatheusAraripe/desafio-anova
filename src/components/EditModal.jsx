import React, { useState } from 'react'
import "../styles/modal.scss"
import {FaUserCircle} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";




const schema = yup.object({
    email: yup.string().email("Insira um email válido").required("Campo obrigaório"),
    name: yup.string().required("Campo obrigaório").min(3, 'Nome muito curto'),
    ramal: yup.number().required("Campo obrigaório"),
    tel: yup.string().required("Campo obrigaório"),
    tel2: yup.string().required("Campo obrigaório"),
    uni: yup.string().required("Campo obrigaório"),
    password: yup.string().required("Campo obrigaório"),
    confirmPassword: yup.string().required("Insira a senha novamente")
    // usando o oneOf para achar a correspondência no array
    // usando "ref" para pegar o valor de referência
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
})


function EditModal(setOpenModal) {


  const { register, handleSubmit: onSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
  
  const handleSubmit = (data) =>{
    console.log(data);
  }

  return (
    <div className='modal-background'>
        <div className="modal-container edit">
            <form>
                <div className="body">
                    <div className="add-pic">
                        <FaUserCircle className='add-user-icon'/>
                    </div>
                    <div className="inputs-container">
                    <div className="input-name">
                        <input
                        value={""}
                        type="text"
                        placeholder={errors.name? errors.name.message: 'Nome'}
                        className={errors.name? "user-info name error-input" : "user-info name"} 
                        name='name' 
                        {...register("name")}
                        />
                    </div>
                    <div className="input-informations">
                        <select name="uni" id="select" className="user-info unidade" {...register("uni")}>
                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                            <option value="Juiz de Fora">Juiz de Fora</option>
                            <option value="São Paulo">São Paulo</option>
                        </select>
                        <input 
                        type="number"
                        value={""}
                        placeholder={errors.ramal? errors.ramal.message: 'Ramal'} 
                        className={errors.ramal? "user-info ramal error-input": "user-info ramal"} 
                        name='ramal' 
                        {...register("ramal")}
                        />
                        <input 
                        type="email"
                        value={""}
                        placeholder={errors.email? errors.email.message: "Email"} 
                        name='email' 
                        className={errors.email? "user-info email error-input" :"user-info email"} 
                        {...register("email")}
                        />
                    </div>
                    <div className="input-tel">
                        <input 
                        type="tel"
                        value={""}
                        placeholder={errors.tel? errors.tel.message: 'Telefone'} 
                        className={errors.tel? "user-info tel error-input":'user-info tel'} 
                        name='tel' 
                        {...register("tel")}
                        />
                
                        <input 
                        type="tel" 
                        placeholder={errors.tel? errors.tel.message: 'Telefone'} 
                        className={errors.tel? "user-info edit-tel error-input":'user-info edit-tel'} 
                        name='tel' 
                        {...register("tel2")}/>

                    </div>
                        <div className="input-tel">
                        <input 
                        type="password"
                        placeholder='XXXXXXXXXXXXXXXX' 
                        className={errors.tel? "user-info tel error-input":'user-info tel'} 
                        name='tel' 
                        {...register("password")}/>
                        <input 
                        type="password" 
                        placeholder='Confirmar Senha' 
                        className={errors.tel? "user-info edit-tel error-input":'user-info edit-tel'} 
                        name='tel' 
                        {...register("confirmPassword")}/>
                        </div>
                    </div>
                </div>
                <div className="footer-edit">
                    <button className='modal-btn close' onClick={ ()=> setOpenModal(false)}>CANCELAR</button>
                    <button className='modal-btn save-user-edit' onClick={onSubmit(handleSubmit)}>SALVAR</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditModal