import React from 'react';

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

  const { register, handleSubmit: onSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
  const handleSubmit = (data) => console.log(data);

  return (
      <div className="login-form">
        <h2>Entrar</h2>
        <form onSubmit={onSubmit(handleSubmit)}>
          <div className="form-group">
            <label htmlFor='email'>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            <span className="error">
              {errors.email?.message}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            <span className="error">
              {errors.email?.message}
            </span>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
  );
};

export default LoginForm;
