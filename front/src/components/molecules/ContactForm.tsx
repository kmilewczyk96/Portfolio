import styles from "./ContactForm.module.css";

import {ReactElement} from "react";

import {
  Form,
  Formik
} from "formik";

import BaseWrapper from "../atoms/BaseWrapper.tsx";
import Button from "../atoms/Button.tsx";
import FormField from "../atoms/FormField.tsx";


interface IProps {
  className?: string | undefined,
}

export default function ContactForm({className = undefined}: IProps): ReactElement {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        company: "",
        message: ""
      }}
      onSubmit={() => {}}
    >
      <Form className={[styles.wrapper, className].join(" ")}>
        <div className={styles.fieldsWrapper}>
          <FormField label={"Name"} name={"name"} placeholder={"John Doe"}/>
          <FormField label={"Email"} name={"email"} type={"email"} placeholder={"doe@example.com"}/>
          <FormField label={"Company"} name={"company"} placeholder={"MegaCorp Inc."}/>
          <FormField label={"Message"} name={"message"} component={"textarea"} placeholder={"Your message..."}/>
        </div>
        <BaseWrapper contentAlignment={"center"} className={styles.actions}>
          <Button type={"submit"} onClick={() => {}}>Submit</Button>
        </BaseWrapper>
      </Form>
    </Formik>
  );
}
