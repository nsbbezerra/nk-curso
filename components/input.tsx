import { useEffect, useRef, useState } from "react";
import { useField } from "@unform/core";

interface Props {
  name: string;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

export default function Input({ name, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <input
      id={fieldName}
      ref={inputRef}
      defaultValue={defaultValue}
      className="flex-1 block w-full rounded-md sm:text-sm px-4 py-3 bg-transparent border-sky-200 border outline-none focus:ring-sky-100 focus:border-sky-200 focus:ring-2"
    />
  );
}
