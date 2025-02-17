import styles from "./ContactForm.module.css";

import {ReactElement} from "react";

import {Form, Formik} from "formik";

import * as Yup from 'yup';

import Button from "../atoms/Button.tsx";
import FormField from "../atoms/FormField.tsx";
import {useRequest} from "../../hooks/useRequest.ts";
import {httpRequestMethods} from "../../utils/enums.ts";
import {IMessage} from "../../utils/interfaces.ts";


interface IProps {
  className?: string | undefined,
}

const MessageSchema: Yup.ObjectSchema<object> = Yup.object().shape({
  name: Yup.string()
    .required("This field is required!"),
  email: Yup.string()
    .email("This value must be an email!")
    .required("This field is required!"),
  message: Yup.string()
    .required("This field is required!")
});

const config = {
  headers: {
    "Content-Type": "application/json",
  }
};
export default function ContactForm({className = undefined}: IProps): ReactElement {
  // TODO: style form when it's being sent.

  // @ts-ignore
  const [isFetching, error, fetchedData, sendRequest] = useRequest({
    url: (import.meta.env.VITE_API_URL || "/api") + "/messages",
    method: httpRequestMethods.post,
    config: config,
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        company: "",
        message: ""
      }}
      validationSchema={MessageSchema}
      onSubmit={(values: IMessage): void => {
        const formData: string = JSON.stringify(values);
        sendRequest(formData);
      }}
    >
      <Form className={[styles.wrapper, className].join(" ")}>
        <div className={styles.fieldsWrapper}>
          <FormField label={"Name"} name={"name"} placeholder={"John Doe"}/>
          <FormField label={"Email"} name={"email"} type={"email"} placeholder={"doe@example.com"}/>
          <FormField label={"Company"} name={"company"} placeholder={"MegaCorp Inc."}/>
          <FormField label={"Message"} name={"message"} component={"textarea"} placeholder={"Your message..."}/>
        </div>
        <div className={"center"}>
          <Button type={"submit"} className={styles.submitBtn}>Submit</Button>
        </div>
      </Form>
    </Formik>
  );
}
