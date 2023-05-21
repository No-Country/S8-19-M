import { UseFormRegister, DeepMap, FieldError } from 'react-hook-form'

interface CustomInputProps {
  name: keyof FormData
  label: string
  error?: DeepMap<FormData, FieldError>
  register: UseFormRegister<FormData>
  required?: boolean
  placeholder?: string | null
  type?: string | null
}

const CustomInput: React.FC<CustomInputProps> = ({ name, label, error, register, required, placeholder, type = 'text' }) => {
  return (
    <div className='relative mb-6 flex h-20 flex-col text-left'>
      <label htmlFor={name as string}>{label}</label>
      <input id={name as string} {...register(name)} placeholder={placeholder} type={type} className='focus:border-b-6 border-b-4 border-blue-300 bg-transparent py-2  outline-0 focus:border-blue-500' />
      {error != null && <p className='text-sm text-red-500'>{error.message}</p>}
    </div>
  )
}

export default CustomInput
