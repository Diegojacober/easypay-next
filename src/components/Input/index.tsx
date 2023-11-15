import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";
import { InputArea } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    value: string | number;
    set: Dispatch<SetStateAction<string>>;
    placeholder: string;
}

export default function Input({ set, type, value, placeholder, ...rest }: InputProps) {
  return (
    <InputArea>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => set(e.target.value)}
        {...rest}
      />
    </InputArea>
  );
}
