type FormFieldParams = {
  label: string;
  id: string;
  inputType: string;
  placeholder?: string;
  required: boolean;
  autoComplete: string;
  value: string | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function CheckoutFormField({
  label,
  id,
  inputType,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}: FormFieldParams) {
  return (
    <div className='FormRow'>
      <label htmlFor={id} className='FormRowLabel'>
        {label}
      </label>
      <input
        className='FormRowInput'
        id={id}
        type={inputType}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
