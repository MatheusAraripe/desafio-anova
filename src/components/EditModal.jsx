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


function EditModal({setOpenModal, nameToEdit, ramalToEdit, emailToEdit, telToEdit}) {

  const [text, setText] = useState(nameToEdit);
  const [email, setEmail] = useState(emailToEdit);
  const [ramal, setRamal] = useState(ramalToEdit);
  const [tel, setTel] = useState(telToEdit);



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
                        value={text}
                        type="text"
                        placeholder={errors.name? errors.name.message: 'Nome'}
                        className={errors.name? "user-info name error-input" : "user-info name"} 
                        name='name' 
                        {...register("name", {
                            onChange: (e) => {setText(e.target.value)}
                        })}
                        />
                    </div>
                    <div className="input-informations">
                        <select name="uni" id="select" className="user-info unidade" {...register("uni")}>
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                            <option value="Juiz de Fora">Juiz de Fora</option>
                            <option value="São Paulo">São Paulo</option>
                        </select>
                        <input 
                        type="number"
                        value={ramal}
                        placeholder={errors.ramal? errors.ramal.message: 'Ramal'} 
                        className={errors.ramal? "user-info ramal error-input": "user-info ramal"} 
                        name='ramal' 
                        {...register("ramal", {
                            onChange: (e) => {setRamal(e.target.value)}
                        })}
                        />
                        <input 
                        type="email"
                        value={email}
                        placeholder={errors.email? errors.email.message: "Email"} 
                        name='email' 
                        className={errors.email? "user-info email error-input" :"user-info email"} 
                        {...register("email", {
                            onChange: (e) => {setEmail(e.target.value)}
                        })}
                        />
                    </div>
                    <div className="input-tel">
                        <input 
                        type="tel"
                        value={tel}
                        placeholder={errors.tel? errors.tel.message: 'Telefone'} 
                        className={errors.tel? "user-info tel error-input":'user-info tel'} 
                        name='tel' 
                        {...register("tel", {
                            onChange: (e) => {setTel(e.target.value)}
                        })}
                        />
                
                        <input 
                        type="tel"
                        placeholder={errors.tel2? errors.tel2.message: 'Telefone'} 
                        className={errors.tel2? "user-info edit-tel error-input":'user-info edit-tel'} 
                        name='tel' 
                        {...register("tel2")}/>

                    </div>
                        <div className="input-tel">
                        <input 
                        type="password"
                        placeholder={errors.password? errors.password.message: 'XXXXXXXXXXXXXXXX'}
                        className={errors.password? "user-info tel error-input":'user-info tel'} 
                        name='password' 
                        {...register("password")}/>
                        <input 
                        type="password" 
                        placeholder={errors.confirmPassword? errors.confirmPassword.message: 'Confirmar Senha'} 
                        className={errors.confirmPassword? "user-info edit-tel error-input":'user-info edit-tel'} 
                        name='confirm-password' 
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