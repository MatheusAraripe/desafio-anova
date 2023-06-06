import React, {useContext} from 'react'


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
                {errors.password?.message}
                </span>
            </div>
            <div className="form-group">
                <input
                type="password"
                placeholder="Confirmar senha"
                {...register("confirmPassword")}
                />
                <span className="error">
                {errors.confirmPassword?.message}
                </span>
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    </div>
  )
}

export default SignUpForm;