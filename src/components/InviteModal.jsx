// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BsEnvelopePaperHeartFill} from "react-icons/bs"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


import * as yup from "yup";

const schema = yup.object({
    email: yup.string().required("Campo obrigaório")
})

// eslint-disable-next-line react/prop-types
function InviteModal({setOpenInviteModal}) {

    const { register, handleSubmit: onSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
    const handleSubmit = (data) => {
      console.log(data);
    };


  return (
    <div className='modal-background'>
        <div className='invite-modal-container'>
            <form onSubmit={onSubmit(handleSubmit)}>
                <div className="invite-modal-body">
                    <div className="invite-text-container">
                        <button onClick={ ()=> setOpenInviteModal(false)}>X</button>
                        <div className="invite-icon-container">
                            <BsEnvelopePaperHeartFill className='invite-icon'/>
                        </div>
                        <h3 className='invite-modal-title'>Convide um colaborador</h3>
                        <p className='invite-modal-text'>Informe o email de um colaborador para que ele receba um convite de cadastro</p>
                    </div>
                    <div className="invite-email-container">
                        <input type="email" name='email' placeholder='Email' className={errors.email? "invite-email error-input" :"invite-email"} {...register("email")}/>
                    </div>
                    <span className="error invite-erro">
                        {errors.email?.message}
                    </span>
                </div>
                <div className="footer-invite">
                    <button className='invite-user-btn'>ENVIAR CONVITE</button>
                </div>
            </form>
        </div>
    </div>

  )
}

export default InviteModal;
