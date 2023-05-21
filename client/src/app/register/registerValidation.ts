/*
 Ver el repositorio para mas valdaciones
https://github.com/vikas62081/YT/tree/advanceFormValidation 
https://www.youtube.com/watch?v=wfogZfIS03U
*/

import * as Yup from 'yup'

export const regExp = {
  user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, // 4 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
  VesIdent: /^[V|E|J|P][0-9]{3,9}$/i, // Identificacion Venezolana CI
  VesBankAccount: /^(\d{5})(\d{15})$/ // Codigo de cuenta venezolano
}

export const formatPhoneNumber = (phone) => {
  const phone1 = phone.replace(/[^\d]/g, '')

  return phone1.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3').substr(0, 14) || ''
}

export const formStep1 = Yup.object().shape({
  userName: Yup.string().email('Email invalido').typeError('Email invalido').required('Requerido'),
  password: Yup.string().min(3, 'Debe tener más de 3 letras').required('Requerido'),
  pwdConfirm: Yup.string()
    .required('Requerido')
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
})
export const formStep2 = Yup.object().shape({
  firstName: Yup.string().required('Requerido'),
  lastName: Yup.string().required('Requerido'),
  dni: Yup.string().min(3, 'Debe tener más de 3 letras').required('Requerido')
})
export const formStep3 = Yup.object().shape({
  phone: Yup.string().required('Requerido'),
  address: Yup.string().required('Requerido'),
  other: Yup.string().min(3, 'Debe tener más de 3 letras').required('Required')
})
