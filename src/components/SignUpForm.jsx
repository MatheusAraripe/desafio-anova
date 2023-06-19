// eslint-disable-next-line no-unused-vars
import React, {useContext} from 'react'

import Button from './Button';
import Input from './Input';

import { AuthContext } from '../contexts/auth';

// React hook form
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

// Yup
import * as yup from "yup";


const getCharacterValidationError = (str) => {
    return `Sua senha deve conter ao menos 1 ${str}`;
};


// Schema para validação
const schema = yup.object({
    email: yup.string().required("Campo obrigaório"),
    password: yup.string().required("Campo obrigaório")
    .min(8, "A senha deve ter ao menos 8 caracteres")
    .matches(/[0-9]/, getCharacterValidationError("digito"))
    .matches(/[a-z]/, getCharacterValidationError("letra menúscula"))
    .matches(/[A-Z]/, getCharacterValidationError("letra maiúscula")),
    confirmPassword: yup.string()
    .required("Insira a senha novamente")

    // usando o oneOf para achar a correspondência no array
    // usando "ref" para pegar o valor de referência
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
})

const SignUpForm = () => {

  const {signUp} = useContext(AuthContext);


  const { register, handleSubmit: onSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
  const handleSubmit = (data) => {
    signUp(data.email, data.password)
  };

  return (
    <div className="login-form">
        <h2 className='form-title'>Cadastrar</h2>
        <form onSubmit={onSubmit(handleSubmit)}>

            <Input
            type="email"
            name="email"
            placeholder="usuario@ntendencia.com.br"
            register={register}
            error={errors.email?.message}
            />

            <Input
            type="password"
            name="password"
            placeholder="Senha"
            register={register}
            error={errors.password?.message}
            />

            <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar senha"
            register={register}
            error = {errors.confirmPassword?.message}
            />

            <Button button = "CADASTRAR" />
        </form>
    </div>
  )
}

export default SignUpForm;
