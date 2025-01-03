import styles from "./FormField.module.css";

import {ReactElement} from "react";

import {Field, useField} from "formik";


type inputType = "text" | "email"
type componentType = "input" | "textArea"

interface IProps {
  label: string,
  name: string,
  type?: inputType,
  placeholder?: string | undefined,
  component?: componentType,
  className?: string | undefined
}

export default function FormField(
  {label, name, type = "text", placeholder = undefined, component = "input", className = undefined}: IProps
): ReactElement {
  const [_, meta] = useField(name);

  return (
    <div className={[styles.wrapper, className].join(" ")}>
      <label htmlFor={name}>{label}</label>
      <Field name={name} type={type} placeholder={placeholder} component={component} rows={"8"}/>
      {meta.error && meta.touched ? (
        <p>{meta.error}</p>
      ) : null}
    </div>
  )
}
