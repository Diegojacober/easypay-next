import { DetailedHTMLProps, Dispatch, HTMLAttributes, InputHTMLAttributes, SetStateAction } from "react";
import { InputArea } from "./styled";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>
  validationSchema: any;
  name: string
}

export default function Input({ type, placeholder, errors, validationSchema, register, name, ...rest }: InputProps) {
  return (
    <InputArea>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, validationSchema)}
        {...rest}
      />

      {errors && (
        <span className="error">{errors.root?.message}</span>
      )}
    </InputArea>
  );
}
