// import React from 'react'

// // React hook form
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';

// // Yup
// import * as yup from "yup";


// // Schema para validação
// const schema = yup.object({
//     email: yup.string().required("Campo obrigaório"),
//     password: yup.string().required("Campo obrigaório")
//     .min(8, "A senha deve ter ao menos 8 caracteres")
//     .matches(/[0-9]/, getCharacterValidationError("Deve ter um digito"))
//     .matches(/[a-z]/, getCharacterValidationError("Deve ter letras menúsculas"))
//     .matches(/[A-Z]/, getCharacterValidationError("Deve ter ao menos uma letra maiúscula")),
//     confirmPassword: yup.string()
//     .required("Insira a senha novamente")

//     // usando o oneOf para achar a correspondência no array
//     // usando "ref" para pegar o valor de referência
//     .oneOf([ref("password")], "As senhas devem ser iguais"),
// })

const SignUpForm = () => {
  return (
    <div>SignUpForm</div>
  )
}

export default SignUpForm;