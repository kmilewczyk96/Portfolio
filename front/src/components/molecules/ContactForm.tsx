import styles from "./ContactForm.module.css";

import {ReactElement} from "react";

import {
  Form,
  Formik
} from "formik";

import Button from "../atoms/Button.tsx";
import BaseWrapper from "../atoms/BaseWrapper.tsx";
import FormField from "../atoms/FormField.tsx";


export default function ContactForm(): ReactElement {
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
      <Form className={styles.wrapper}>
        <div className={styles.fieldsWrapper}>
          <FormField label={"Name"} name={"name"} placeholder={"John Doe"}/>
          <FormField label={"Email"} name={"email"} type={"email"} placeholder={"johny@example.com"}/>
          <FormField label={"Company"} name={"company"} placeholder={"MegaCorp Inc."}/>
          <FormField label={"Message"} name={"message"} component={"textArea"} placeholder={"Your message..."}/>
        </div>
        <BaseWrapper contentAlignment={"center"} className={styles.actions}>
          <Button type={"submit"} onClick={() => {}}>Submit</Button>
        </BaseWrapper>
      </Form>
    </Formik>
  );
}
