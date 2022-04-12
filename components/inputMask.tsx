import React, { useRef, useEffect } from "react";
import ReactInputMask, { Props as InputProps } from "react-input-mask";
import { useField } from "@unform/core";
interface Props extends InputProps {
  name: string;
}
export default function InputMask({ name, ...rest }: Props) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue("");
      },
    });
  }, [fieldName, registerField]);
  return (
    <ReactInputMask
      ref={inputRef}
      defaultValue={defaultValue}
      {...rest}
      className="flex-1 block w-full rounded-md sm:text-sm px-4 py-3 bg-transparent border-sky-200 border outline-none focus:ring-sky-100 focus:border-sky-200 focus:ring-2"
    />
  );
}
