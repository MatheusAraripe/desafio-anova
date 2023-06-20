// eslint-disable-next-line no-unused-vars
import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import Input from './Input';
import NeedEmailModal from './NeedEmailModal';

import { AuthContext } from '../contexts/auth';

// React hook form
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

// Yup
import * as yup from "yup";


// Schema para validação
const schema = yup.object({
    email: yup.string().required("Campo obrigaório"),
    password: yup.string().required("Campo obrigaório")
})


const LoginForm = () => {

  const {authenticated, login} = useContext(AuthContext);

  const { register, handleSubmit: onSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
  const handleSubmit = (data) => {
    login(data.email, data.password)
  };

  const [recoverModalOpen, setRecoverModalOpen] = useState(false);

  return (

    <>
      {recoverModalOpen && <NeedEmailModal 
      setOpenInviteModal={setRecoverModalOpen} 
      title={"Esqueceu sua senha?"}
      text={"Informe o email associado com a sua conta"}
      btnText={"RECUPERAR SENHA"}/>
      }
      <div className="login-form">
        <h2 className='form-title'>Entrar</h2>
        <form onSubmit={onSubmit(handleSubmit)}>
          
          <Input
            type = "email"
            name="email"
            placeholder="usuario@ntendencia.com.br"
            register={register}
            error={errors.email?.message}
          />

          <Input
            type="password"
            name="password"
            placeholder="Senha"
            register = {register}
            error={errors.password?.message}
          />

          <Button button = "ENTRAR" />
        </form>
        <Link className="link-login" onClick={() => setRecoverModalOpen(true)}>Esqueceu sua senha?</Link>
      </div>
      <p>logado: {String(authenticated)}</p>
    </>
  );
};

export default LoginForm;
