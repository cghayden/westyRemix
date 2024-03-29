type FormFieldParams = {
  label: string
  name: string
  id: string
  inputType: string
  placeholder?: string
  required: boolean
  autoComplete: string
  value: string | undefined
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export default function CheckoutFormField({
  label,
  name,
  id,
  inputType,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}: FormFieldParams) {
  return (
    <div className='label__FormRow grid grid-cols-checkoutForm items-center border-t-2 border-blue-800 first:border-0 focus-visible:border-0'>
      <label
        htmlFor={id}
        className='label__FormRowLabel w-[15%] mr-2 ml-2 text-blue-800 min-w-[70px]'
      >
        {label}
      </label>
      <input
        className='label__FormRowInput w-full py-3 pr-4 ml-2 bg-slate-100 focus-visible:outline-none'
        id={id}
        type={inputType}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  )
}
