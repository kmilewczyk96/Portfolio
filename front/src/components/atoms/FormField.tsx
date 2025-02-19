import styles from "./FormField.module.css";

import {ReactElement} from "react";

import {Field, useField} from "formik";


type inputType = "text" | "email";
type componentType = "input" | "textarea";

interface IProps {
  label: string,
  name: string,
  type?: inputType,
  placeholder?: string | undefined,
  component?: componentType,
  className?: string | undefined,
  disabled?: boolean,
}

export default function FormField(
  {
    label,
    name,
    type = "text",
    placeholder = undefined,
    component = "input",
    className = undefined,
    disabled=false
  }: IProps
): ReactElement {
  const [_, meta] = useField(name);

  return (
    <div className={
      [styles.wrapper, className, meta.error && meta.touched ? styles.error : undefined].join(" ")
    }>
      <label htmlFor={name}>{label}</label>
      <Field name={name} type={type} placeholder={placeholder} component={component} rows={"8"} disabled={disabled}/>
      {meta.error && meta.touched ? (
        <span>{meta.error}</span>
      ) : null}
    </div>
  );
}
