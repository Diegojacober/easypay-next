import { DetailedHTMLProps, Dispatch, HTMLAttributes, InputHTMLAttributes, SetStateAction } from "react";
import { InputArea } from "./styled";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { toast } from "react-toastify";
import { useState } from 'react';

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
