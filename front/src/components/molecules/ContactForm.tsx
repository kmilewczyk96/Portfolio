import styles from "./ContactForm.module.css";

import {ReactElement} from "react";

import {
  Form,
  Formik
} from "formik";

import * as Yup from 'yup';

import Button from "../atoms/Button.tsx";
import FormField from "../atoms/FormField.tsx";
import {ObjectSchema} from "yup";


interface IProps {
  className?: string | undefined,
}

const MessageSchema: ObjectSchema<object> = Yup.object().shape({
  name: Yup.string()
    .required("This field is required!"),
  email: Yup.string()
    .email("This value must be an email!")
    .required("This field is required!"),
  message: Yup.string()
    .required("This field is required!")
});

export default function ContactForm({className = undefined}: IProps): ReactElement {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        company: "",
        message: ""
      }}
      validationSchema={MessageSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className={[styles.wrapper, className].join(" ")}>
        <div className={styles.fieldsWrapper}>
          <FormField label={"Name"} name={"name"} placeholder={"John Doe"}/>
          <FormField label={"Email"} name={"email"} type={"email"} placeholder={"doe@example.com"}/>
          <FormField label={"Company"} name={"company"} placeholder={"MegaCorp Inc."}/>
          <FormField label={"Message"} name={"message"} component={"textarea"} placeholder={"Your message..."}/>
        </div>
        <div className={styles.actions}>
          <Button type={"submit"}>Submit</Button>
        </div>
      </Form>
    </Formik>
  );
}
