import styles from "./ContactForm.module.css";

import {ReactElement} from "react";

import {
  Form,
  Formik
} from "formik";
import Button from "../atoms/Button.tsx";
import BaseWrapper from "../atoms/BaseWrapper.tsx";


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
          <div className={styles.inputsWrapper}>
            <input/>
            <input/>
            <input/>
          </div>
          <div className={styles.textAreaWrapper}>
            <textarea/>
          </div>
        </div>
        <BaseWrapper contentAlignment={"center"} className={styles.actions}>
          <Button onClick={() => {}}>Submit</Button>
        </BaseWrapper>
      </Form>
    </Formik>
  );
}
