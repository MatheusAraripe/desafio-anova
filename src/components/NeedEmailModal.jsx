// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


import * as yup from "yup";

const schema = yup.object({
    email: yup.string().required("Campo obrigaório")
})

// eslint-disable-next-line react/prop-types
function NeedEmailModal({setOpenInviteModal, title, text, btnText, icon}) {

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
                            {icon}
                        </div>
                        <h3 className='invite-modal-title'>{title}</h3>
                        <p className='invite-modal-text'>{text}</p>
                    </div>
                    <div className="invite-email-container">
                        <input type="email" name='email' placeholder='Email' className={errors.email? "invite-email error-input" :"invite-email"} {...register("email")}/>
                    </div>
                    <span className="error invite-erro">
                        {errors.email?.message}
                    </span>
                </div>
                <div className="footer-invite">
                    <button className='invite-user-btn'>{btnText}</button>
                </div>
            </form>
        </div>
    </div>

  )
}

export default NeedEmailModal;
