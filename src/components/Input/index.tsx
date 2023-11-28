import { InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { toast } from "react-toastify";
import { InputArea } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>
  validationSchema: any;
  name: string
}

export default function Input({ type, placeholder, errors, validationSchema, register, name, ...rest }: InputProps) {

  if (errors[name]) {
    toast.error(`Field ${name.toUpperCase()}: ${errors[name]?.message}`)
  }

  return (
    <InputArea>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, validationSchema)}
        {...rest}
        style={errors[name] ? {borderBottom: '1px solid #f00'} : {borderBottom: '1px solid var(--white)'}}
      />
    </InputArea>
  );
}
