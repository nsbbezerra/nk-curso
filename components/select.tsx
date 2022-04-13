import { ReactNode, useEffect, useRef } from "react";
import { useField } from "@unform/core";

interface Props {
  name: string;
  children: ReactNode;
}

type InputProps = JSX.IntrinsicElements["select"] & Props;

export default function Select({ name, children, ...rest }: InputProps) {
  const inputRef = useRef<HTMLSelectElement>(null);
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
    <select
      className="form-select flex-1 block appearance-none w-full px-4 py-2.5 text-base font-normal text-white bg-transparent bg-clip-padding bg-no-repeat border-sky-200 border outline-none focus:ring-sky-100 focus:border-sky-200 focus:ring-2 rounded-md transition ease-in-out
      m-0 focus:text-gray-700 focus:bg-transparent focus:outline-none"
      aria-label="Disabled select example"
      id={fieldName}
      ref={inputRef}
      defaultValue={defaultValue}
    >
      {children}
    </select>
  );
}
