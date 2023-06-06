import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

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
    .min(8, "A senha deve ter ao menos 8 caracteres")
})


const LoginForm = () => {

  const {authenticated, login} = useContext(AuthContext);

  const { register, handleSubmit: onSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
  const handleSubmit = (data) => {
    console.log(data);
    login(data.email, data.password)
  };

  return (
    <>
      <div className="login-form">
        <h2>Entrar</h2>
        <form onSubmit={onSubmit(handleSubmit)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="usuario@ntendencia.com.br"
              {...register("email")}
            />
            <span className="error">
              {errors.email?.message}
            </span>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <span className="error">
              {errors.email?.message}
            </span>
          </div>
          <button type="submit">Entrar</button>
        </form>
        <Link to="/signup" className="link-login">Cadastrar</Link>
      </div>
      <p>logado: {String(authenticated)}</p>
    </>
  );
};

export default LoginForm;
