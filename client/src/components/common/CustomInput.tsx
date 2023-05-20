interface CustomInputProps {
  error: string
  label: string
  name: string
  placeholder: string
  type?: string
}
const CustomInput = ({ error, label, name, placeholder, type = 'text' }: CustomInputProps) => {
  return (
    <div className='relative mb-6 flex h-20 flex-col text-left'>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} className='focus:border-b-6 border-b-4 border-blue-300 bg-transparent py-2  outline-0 focus:border-blue-500' />
      {error != null && <p className='text-sm text-red-500'>{error}</p>}
    </div>
  )
}
export default CustomInput
